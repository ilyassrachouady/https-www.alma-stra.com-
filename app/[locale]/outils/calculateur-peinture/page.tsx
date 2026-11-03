import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PaintCalculator from "@/components/PaintCalculator";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  return pageMetadata((await params).locale, "/outils/calculateur-peinture", "Calculateur de peinture", "Estimez la quantité de peinture nécessaire pour les murs et le plafond d’une pièce.");
}

export default async function PaintCalculatorPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return <main className="surface-page" dir={ar ? "rtl" : "ltr"}>
    <div className="page-shell">
      <Link className="surface-page-back" href={localePath("/", locale)}><ArrowLeft size={16}/>{ar ? "العودة إلى الرئيسية" : "Retour à l’accueil"}</Link>
      <div className="surface-page-intro"><span className="alma-kicker"><span/>{ar ? "أدوات عملية" : "Outils pratiques"}</span><h1>{ar ? "قدّر كمية الطلاء." : "Estimez votre peinture."}</h1><p>{ar ? "أدخل أبعاد الغرفة وعدد الطبقات ومردودية المنتج لمعرفة الكمية التقريبية باللتر." : "Renseignez les dimensions de la pièce, le nombre de couches et le rendement du produit pour obtenir une estimation en litres."}</p></div>
      <PaintCalculator locale={locale}/>
      <div className="surface-page-cta"><p>{ar ? "هل لديك مشروع بناء أو تهيئة؟ لنتحدث عن احتياجاتك." : "Un projet de construction ou d’aménagement ? Échangeons sur vos besoins."}</p><Link className="alma-btn alma-btn-primary" href={localePath("/contact", locale)}>{ar ? "تحدث عن مشروعك" : "Parler de votre projet"}<ArrowUpRight size={17}/></Link></div>
    </div>
  </main>;
}
