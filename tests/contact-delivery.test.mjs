import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
// Compile the pure handler in memory: tests never call the real email service.
const source = fs.readFileSync(new URL('../lib/contact-delivery.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText;
const { deliverContact } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const valid = { name: 'Test visitor', company: 'Company', email: 'visitor@example.com', message: 'A sufficiently detailed project enquiry.', consent: true, website: '', requestId: 'bc4a66d2-47ee-41cf-9edb-577b47f308fd', source: 'Projet : Atlas Sahara', locale: 'fr' };
const config = { apiKey: 'test-key', from: 'ALMA-STRA <site@alma-stra.com>' };
const request = (payload = valid, origin = 'https://alma-stra.com') => new Request('https://alma-stra.com/api/contact', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(payload) });
test('valid enquiry is addressed to both client inboxes and confirmation follows provider acceptance', async () => {
 let calls = 0;
 const response = await deliverContact(request(), config, async (url, options) => {
  calls++;
  assert.equal(url, 'https://api.resend.com/emails');
  const body = JSON.parse(options.body);
  assert.deepEqual(body.to, ['almastra.sarl@gmail.com', 'contact@alma-stra.com']);
  assert.equal(body.reply_to, valid.email);
  assert.match(body.text, /Projet : Atlas Sahara/);
  assert.match(options.headers['Idempotency-Key'], /contact\/bc4a66d2/);
  return Response.json({ id: 'mock-message-id' });
 });
 assert.equal(calls, 1); assert.equal(response.status, 200); assert.equal((await response.json()).code, 'sent');
});
test('missing configuration returns unavailable without sending', async () => {
 const res = await deliverContact(request(), {}, async () => { throw Error('must not send'); });
 assert.equal(res.status, 503); assert.equal((await res.json()).ok, false);
});
test('invalid fields, missing consent, honeypot and oversized input never send', async () => {
 for (const changed of [{ email: 'bad' }, { consent: false }, { message: 'short' }, { name: 'X\r\nBcc: attacker@example.com' }, { website: 'spam' }, { message: 'X'.repeat(21000) }, { requestId: 'bad' }]) {
  const res = await deliverContact(request({ ...valid, ...changed }), config, async () => { throw Error('must not send'); });
  assert.ok([400, 413].includes(res.status));
 }
});
test('cross-origin requests are rejected', async () => { const res = await deliverContact(request(valid, 'https://other.example'), config); assert.equal(res.status, 403); });
test('provider rejection, timeout and malformed acceptance do not produce success', async () => {
 for (const sender of [async () => Response.json({ error: 'failed' }, { status: 429 }), async () => { throw Error('network'); }, async () => Response.json({})]) {
  const res = await deliverContact(request(), config, sender); assert.equal(res.status, 502); assert.equal((await res.json()).ok, false);
 }
});
const rateSource = fs.readFileSync(new URL('../lib/contact-rate-limit.ts', import.meta.url), 'utf8');
const rateCompiled = ts.transpileModule(rateSource, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText;
const { contactRateLimited } = await import(`data:text/javascript;base64,${Buffer.from(rateCompiled).toString('base64')}`);
test('burst protection rejects a seventh attempt and expires independently per address', () => {
 const first = new Request('https://alma-stra.com/api/contact', { headers: { 'x-real-ip': '192.0.2.10' } });
 const other = new Request('https://alma-stra.com/api/contact', { headers: { 'x-real-ip': '192.0.2.11' } });
 for (let i = 0; i < 6; i++) assert.equal(contactRateLimited(first, 1000), false);
 assert.equal(contactRateLimited(first, 1001), true);
 assert.equal(contactRateLimited(other, 1001), false);
 assert.equal(contactRateLimited(first, 601001), false);
});
