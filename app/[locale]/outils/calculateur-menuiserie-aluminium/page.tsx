import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import JoineryCalculator from "@/components/JoineryCalculator";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/calculateur-menuiserie-aluminium", "Calculateur de menuiserie aluminium", "Estimez les surfaces et le périmètre des cadres de vos fenêtres, baies et portes.");
}

export default async function JoineryCalculatorPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}>
    <div className="page-shell">
      <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
      <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "قدّر مقاسات فتحاتك." : "Dimensionnez vos menuiseries."}</h1><p>{ar ? "احسب مساحة النوافذ والأبواب والواجهات الزجاجية ومحيط إطاراتها، مع ميزانية اختيارية بناءً على سعرك." : "Estimez la surface de vos fenêtres, baies et portes ainsi que le périmètre de leurs cadres. Ajoutez votre prix de référence pour un budget indicatif."}</p></div>
      <JoineryCalculator locale={locale}/>
      <div className="surface-page-cta"><p>{ar ? "هل لديك مشروع بناء أو تهيئة؟ لنتحدث عن احتياجاتك." : "Un projet de construction ou d’aménagement ? Échangeons sur vos besoins."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
