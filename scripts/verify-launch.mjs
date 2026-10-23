import assert from 'node:assert/strict';
import fs from 'node:fs';
const base = process.env.PREVIEW_URL || 'http://localhost:3020';
const routes = Object.keys(JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8')).routes).filter(path => /^\/(fr|ar)(\/|$)/.test(path));
const descriptions = new Set();
for (const internal of routes) {
 const path = internal.replace(/^\/fr(?=\/|$)/, '') || '/';
 const response = await fetch(base + path);
 assert.equal(response.status, 200, path);
 const html = await response.text();
 const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
 assert.equal(new URL(canonical).href, new URL(path, 'https://alma-stra.com').href, `canonical ${path}`);
 const locale = internal.startsWith('/ar') ? 'ar' : 'fr';
 assert.match(html, new RegExp(`<html lang="${locale}" dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`));
 assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `one heading ${path}`);
 const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
 assert.ok(description.length > 25, `description ${path}`);
 assert.ok(!descriptions.has(description), `unique description ${path}`); descriptions.add(description);
 assert.ok(html.includes('hrefLang="fr-MA"') || html.includes('hreflang="fr-MA"'), `French alternate ${path}`);
 assert.ok(html.includes('hrefLang="ar-MA"') || html.includes('hreflang="ar-MA"'), `Arabic alternate ${path}`);
 assert.match(html, /property="og:image"/);
 assert.match(html, /https:\/\/wa.me\/212661347602/);
 assert.ok(!html.includes('href="https://alma-stra.com/conditions-generales/"'), `local legal links ${path}`);
}
for (const [source, target] of [['/fr/contact','/contact'],['/services','/expertise'],['/services/travaux-tous-corps-detat','/expertise/travaux-tous-corps-detat'],['/politique-de-cookies/','/politique-de-cookies']]) {
 const response = await fetch(base + source, { redirect: 'manual' });
 assert.equal(response.status, 308, source);
 assert.equal(new URL(response.headers.get('location'), base).pathname, target, source);
}
const notFound = await fetch(base + '/missing-page'); assert.equal(notFound.status, 404);
const sitemap = await (await fetch(base + '/sitemap.xml')).text(); assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
const sharedImage = await fetch(base + '/images/social-share.jpg'); assert.equal(sharedImage.status, 200);
const oversizedImage = await fetch(base + '/_next/image?url=%2Fimages%2Fportfolio%2Fprovince%2Ffacade.webp&w=3840&q=75'); assert.equal(oversizedImage.status, 400);
if (process.env.VERIFY_UNCONFIGURED_CONTACT === '1') {
const contactResponse = await fetch(base + '/api/contact', { method: 'POST', headers: { origin: base, 'content-type':'application/json' }, body: JSON.stringify({name:'Local verification', email:'test@example.com', message:'Local verification without any email credentials.', consent:true, website:'', requestId:crypto.randomUUID()}) });
assert.equal(contactResponse.status, 503, 'unconfigured contact is unavailable'); assert.equal((await contactResponse.json()).ok, false);
}
console.log(`PASS: ${routes.length} bilingual pages, unique canonicals/descriptions, language alternates, social images, WhatsApp, legacy redirects, 404, sitemap, image size cap.`);
