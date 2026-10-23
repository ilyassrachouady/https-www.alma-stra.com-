import type { MetadataRoute } from 'next';
import { projects, services } from '@/lib/data';
import { legalPages } from '@/lib/legal';
import { localePath, type Locale } from '@/lib/i18n';
export default function sitemap(): MetadataRoute.Sitemap {
 const base = 'https://alma-stra.com';
 const paths = ['/', '/about', '/societe', '/expertise', '/projects', '/contact', ...Object.keys(legalPages).map(slug => `/${slug}`), ...services.map(s => `/expertise/${s.slug}`), ...projects.map(p => `/projects/${p.slug}`)];
 return (['fr', 'ar'] as Locale[]).flatMap(locale => paths.map(path => ({ url: base + localePath(path, locale), alternates: { languages: { 'fr-MA': base + localePath(path, 'fr'), 'ar-MA': base + localePath(path, 'ar') } } })));
}
