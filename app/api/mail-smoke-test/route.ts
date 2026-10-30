import { createHash, timingSafeEqual } from 'node:crypto';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return Response.json({ ok: false }, { status: 503 });

  const expected = createHash('sha256').update(`${apiKey}:alma-stra-mail-smoke-test`).digest();
  const supplied = request.headers.get('x-smoke-token') ?? '';
  if (!/^[a-f0-9]{64}$/.test(supplied) || !timingSafeEqual(Buffer.from(supplied, 'hex'), expected)) {
    return Response.json({ ok: false }, { status: 404 });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      signal: AbortSignal.timeout(12000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'alma-stra-production-smoke-2026-10-30',
      },
      body: JSON.stringify({
        from,
        to: ['ilyassrachouady24@gmail.com'],
        subject: 'Test de livraison ALMA-STRA',
        text: 'Ceci est un test de livraison du formulaire du site ALMA-STRA.',
      }),
    });
    const result = await response.json();
    return Response.json({ ok: response.ok, id: response.ok ? result.id : undefined, code: response.ok ? 'sent' : result.name ?? 'delivery_failed' }, { status: response.ok ? 200 : 502 });
  } catch {
    return Response.json({ ok: false, code: 'delivery_failed' }, { status: 502 });
  }
}
