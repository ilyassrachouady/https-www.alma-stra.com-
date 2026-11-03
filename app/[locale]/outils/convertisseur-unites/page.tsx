import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import UnitConverter from "@/components/UnitConverter";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/convertisseur-unites", "Convertisseur d’unités BTP", "Convertissez les unités de longueur, surface, volume, masse et pression utiles à votre projet.");
}

export default async function UnitConverterPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}>
    <div className="page-shell">
      <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
      <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "حوّل وحدات مشروعك." : "Convertissez vos unités en un instant."}</h1><p>{ar ? "الطول، المساحة، الحجم، الكتلة والضغط: اختر الوحدات وأدخل القيمة للحصول على النتيجة فوراً." : "Longueur, surface, volume, masse et pression : choisissez vos unités et obtenez immédiatement le résultat."}</p></div>
      <UnitConverter locale={locale}/>
      <div className="surface-page-cta"><p>{ar ? "هل لديك مشروع بناء أو تهيئة؟ لنتحدث عن احتياجاتك." : "Un projet de construction ou d’aménagement ? Échangeons sur vos besoins."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
