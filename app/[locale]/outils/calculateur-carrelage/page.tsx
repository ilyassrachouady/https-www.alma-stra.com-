import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import TileCalculator from "@/components/TileCalculator";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/calculateur-carrelage", "Calculateur de carrelage", "Estimez le nombre de carreaux, de boîtes et la quantité de colle pour une surface rectangulaire.");
}

export default async function TileCalculatorPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}>
    <div className="page-shell">
      <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
      <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "خطط لأعمال التبليط." : "Préparez votre carrelage."}</h1><p>{ar ? "أدخل أبعاد المساحة والبلاطة لتقدير عدد البلاطات، مع هامش للقص والهدر." : "Indiquez les dimensions de votre surface et de vos carreaux pour estimer la quantité nécessaire, avec une marge de coupe et de perte."}</p></div>
      <TileCalculator locale={locale}/>
      <div className="surface-page-cta"><p>{ar ? "هل لديك مشروع بناء أو تهيئة؟ لنتحدث عن احتياجاتك." : "Un projet de construction ou d’aménagement ? Échangeons sur vos besoins."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
