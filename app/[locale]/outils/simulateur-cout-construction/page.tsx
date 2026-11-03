import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ConstructionCostCalculator from "@/components/ConstructionCostCalculator";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/simulateur-cout-construction", "Simulateur de coût de construction", "Estimez un budget de construction à partir de votre surface et de votre prix de référence au mètre carré.");
}

export default async function ConstructionCostPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}><div className="page-shell">
    <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
    <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "قدّر ميزانية البناء." : "Estimez votre budget de construction."}</h1><p>{ar ? "احسب تقديراً أولياً حسب المساحة المبنية وعدد الطوابق والتكلفة المرجعية التي تحددها." : "Obtenez un premier ordre de grandeur selon la surface construite, le nombre de niveaux et votre propre coût de référence."}</p></div>
    <ConstructionCostCalculator locale={locale}/>
    <div className="surface-page-cta"><p>{ar ? "للحصول على تقدير يناسب مشروعك، تحدث إلينا عن تفاصيله." : "Pour un chiffrage adapté à votre projet, échangeons sur ses détails."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
  </div></main>;
}
