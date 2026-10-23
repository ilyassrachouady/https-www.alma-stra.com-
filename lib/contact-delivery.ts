/** Server-side contact delivery; injected fetch makes failure modes testable without sending mail. */
export type MailConfig = { apiKey?: string; from?: string; siteUrl?: string };
const recipients = ['almastra.sarl@gmail.com', 'contact@alma-stra.com'];
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const reply = (status: number, code: string) => Response.json({ ok: status === 200, code }, { status, headers: { 'Cache-Control': 'no-store' } });
export async function deliverContact(request: Request, config: MailConfig, send: typeof fetch = fetch) {
  const origin = request.headers.get('origin');
  const allowed = new Set([new URL(request.url).origin]);
  if (config.siteUrl) { try { allowed.add(new URL(config.siteUrl).origin); } catch { return reply(503, 'unavailable'); } }
  if (!origin || !allowed.has(origin)) return reply(403, 'invalid_origin');
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'invalid_content');
  if (Number(request.headers.get('content-length')) > 20000) return reply(413, 'too_large');
  let body: Record<string, unknown>;
  try {
    // Bound streamed input too: Content-Length may be absent or dishonest.
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'invalid_request');
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 20000) { await reader.cancel(); return reply(413, 'too_large'); } chunks.push(value); }
    const bytes = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    const parsed: unknown = JSON.parse(new TextDecoder().decode(bytes));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return reply(400, 'invalid_request');
    body = parsed as Record<string, unknown>;
  } catch { return reply(400, 'invalid_request'); }
  if (typeof body.website === 'string' && body.website.trim()) return reply(400, 'invalid_request');
  const limits: Record<string, number> = { name: 120, company: 160, email: 254, phone: 40, type: 120, message: 5000, source: 300 };
  const fields: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    if (body[key] !== undefined && typeof body[key] !== 'string') return reply(400, 'invalid_fields');
    fields[key] = String(body[key] ?? '').trim();
    if (fields[key].length > max || (key !== 'message' && /[\r\n]/.test(fields[key]))) return reply(400, 'invalid_fields');
  }
  if (!fields.name || !emailPattern.test(fields.email) || fields.message.length < 10 || body.consent !== true) return reply(400, 'invalid_fields');
  if (typeof body.requestId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.requestId)) return reply(400, 'invalid_request');
  if (!config.apiKey || !config.from) return reply(503, 'unavailable');
  const text = [`Nouvelle demande — site ALMA-STRA`, `Nom : ${fields.name}`, `Entreprise : ${fields.company || '—'}`, `E-mail : ${fields.email}`, `Téléphone : ${fields.phone || '—'}`, `Type de projet : ${fields.type || '—'}`, `Origine : ${fields.source || 'Page contact'}`, `Langue : ${body.locale === 'ar' ? 'Arabe' : 'Français'}`, '', fields.message].join('\n');
  try {
    const response = await send('https://api.resend.com/emails', {
      method: 'POST', signal: AbortSignal.timeout(12000),
      headers: { Authorization: `Bearer ${config.apiKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `contact/${body.requestId}` },
      body: JSON.stringify({ from: config.from, to: recipients, reply_to: fields.email, subject: `Demande de projet — ${fields.company || fields.name}`, text }),
    });
    if (!response.ok) return reply(502, 'delivery_failed');
    const result = await response.json();
    if (!result?.id) return reply(502, 'delivery_failed');
    return reply(200, 'sent');
  } catch { return reply(502, 'delivery_failed'); }
}
