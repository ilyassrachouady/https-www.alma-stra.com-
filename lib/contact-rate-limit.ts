import { createHash } from 'node:crypto';
/** Per-instance burst protection. Hosting firewall rules are documented for global protection. */
const buckets = new Map<string, { count: number; expires: number }>();
export function contactRateLimited(request: Request, now = Date.now()) {
 const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
 const key = createHash('sha256').update(ip).digest('hex');
 for (const [id, bucket] of buckets) if (bucket.expires <= now) buckets.delete(id);
 const bucket = buckets.get(key);
 if (bucket && bucket.expires > now) { bucket.count++; return bucket.count > 6; }
 if (buckets.size >= 4096) return true;
 buckets.set(key, { count: 1, expires: now + 600000 });
 return false;
}
