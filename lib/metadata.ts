import type { Metadata } from 'next';
import { localePath, translate, type Locale } from './i18n';
export function pageMetadata(locale: Locale, path: string, title: string, description: string, image = '/images/social-share.jpg'): Metadata {
  const name = translate(title, locale);
  const summary = translate(description, locale);
  return {
    title: name, description: summary,
    alternates: { canonical: localePath(path, locale), languages: { 'fr-MA': localePath(path, 'fr'), 'ar-MA': localePath(path, 'ar'), 'x-default': localePath(path, 'fr') } },
    openGraph: { title: name, description: summary, url: localePath(path, locale), siteName: 'ALMA-STRA', locale: locale === 'ar' ? 'ar_MA' : 'fr_MA', alternateLocale: locale === 'ar' ? 'fr_MA' : 'ar_MA', type: 'website', images: [{ url: image, alt: name }] },
    twitter: { card: 'summary_large_image', title: name, description: summary, images: [image] },
  };
}
