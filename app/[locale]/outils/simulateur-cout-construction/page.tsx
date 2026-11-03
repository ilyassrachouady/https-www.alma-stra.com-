import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ConstructionCostCalculator from "@/components/ConstructionCostCalculator";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/simulateur-cout-construction", "Simulateur de coût de construction", "Estimez un budget indicatif pour une maison à partir de sa surface, de la finition et de la ville.");
}

export default async function ConstructionCostPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}><div className="page-shell">
    <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
    <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "قدّر ميزانية البناء." : "Estimez votre budget de construction."}</h1><p>{ar ? "احصل على تقدير أولي لبناء منزل حسب المساحة الإجمالية ومستوى التشطيب والمدينة." : "Obtenez un premier ordre de grandeur pour une maison selon sa surface totale, sa finition et sa ville."}</p></div>
    <ConstructionCostCalculator locale={locale}/>
    <div className="surface-page-cta"><p>{ar ? "للحصول على تقدير يناسب مشروعك، تحدث إلينا عن تفاصيله." : "Pour un chiffrage adapté à votre projet, échangeons sur ses détails."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
  </div></main>;
}
