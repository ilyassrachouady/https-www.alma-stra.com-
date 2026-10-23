import { notFound } from 'next/navigation';
import Link from 'next/link';
import { legalPages } from '@/lib/legal';
import { localize } from '@/lib/localize';
import { type Locale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
export function generateStaticParams() { return Object.keys(legalPages).map(legal => ({ legal })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; legal: string }> }) { const { locale, legal } = await params; const page = legalPages[legal]; return page ? pageMetadata(locale, `/${legal}`, page.title, page.description) : {}; }
export default async function LegalPage({ params }: { params: Promise<{ locale: Locale; legal: string }> }) {
 const { locale, legal } = await params; const page = legalPages[legal]; if (!page) notFound();
 return localize(<main className="legal-page page-shell"><header><span className="eyebrow">ALMA-STRA SARL</span><h1>{page.title}</h1><p>{page.description}</p></header><div className="legal-content">{page.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div><nav className="legal-nav" aria-label="Informations légales">{Object.entries(legalPages).map(([slug, item]) => <Link key={slug} href={`/${slug}`} aria-current={legal === slug ? 'page' : undefined}>{item.title}</Link>)}</nav></main>, locale);
}
