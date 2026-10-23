import Link from 'next/link';
export default function NotFound() {
 return <main className="legal-page page-shell"><span className="eyebrow">404 · ALMA-STRA</span><h1>Page introuvable</h1><p lang="ar" dir="rtl">الصفحة غير موجودة</p><nav className="legal-nav"><Link href="/">Retour à l’accueil</Link><Link href="/ar" lang="ar" dir="rtl">العودة إلى الرئيسية</Link></nav></main>;
}
