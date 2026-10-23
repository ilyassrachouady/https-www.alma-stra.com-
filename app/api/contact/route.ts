import { deliverContact } from '@/lib/contact-delivery';
import { contactRateLimited } from '@/lib/contact-rate-limit';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  if (contactRateLimited(request)) return Response.json({ ok: false, code: 'rate_limited' }, { status: 429, headers: { 'Retry-After': '600', 'Cache-Control': 'no-store' } });
  return deliverContact(request, { apiKey: process.env.RESEND_API_KEY, from: process.env.CONTACT_FROM_EMAIL, siteUrl: process.env.SITE_URL });
}
