import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SurfaceCalculator from "@/components/SurfaceCalculator";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/calculateur-surface", "Calculateur de surface", "Calculez la surface estimée des espaces de votre projet à partir de leurs dimensions.");
}

export default async function SurfaceCalculatorPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}>
    <div className="page-shell">
      <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
      <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "احسب مساحة مشروعك." : "Calculez la surface de votre projet."}</h1><p>{ar ? "أدخل طول وعرض كل فضاء للحصول على مجموع فوري للمساحات بالمتر المربع." : "Saisissez la longueur et la largeur de chaque espace pour obtenir immédiatement leur surface cumulée en mètres carrés."}</p></div>
      <SurfaceCalculator locale={locale}/>
      <div className="surface-page-cta"><p>{ar ? "هل لديك مشروع بناء أو تهيئة؟ لنتحدث عن احتياجاتك." : "Un projet de construction ou d’aménagement ? Échangeons sur vos besoins."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
