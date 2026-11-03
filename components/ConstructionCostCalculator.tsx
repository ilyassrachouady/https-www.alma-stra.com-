"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function ConstructionCostCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [rate, setRate] = useState("");
  const [contingency, setContingency] = useState("10");
  const positive = (value: string) => {
    const number = Number(value);
    return value.trim() && Number.isFinite(number) && number > 0 ? number : 0;
  };
  const floorCount = Number.isInteger(Number(floors)) ? Math.max(0, Number(floors)) : 0;
  const totalArea = positive(area) * floorCount;
  const base = totalArea * positive(rate);
  const reserve = Math.min(100, Math.max(0, Number(contingency) || 0));
  const total = base * (1 + reserve / 100);
  const ready = totalArea > 0 && positive(rate) > 0;
  const format = (number: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 0 }).format(number);

  return <div className="tile-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="tile-tool-form construction-tool-form">
      <section><h2>{ar ? "أبعاد المشروع" : "Dimensions du projet"}</h2><div className="tile-tool-fields">
        <label>{ar ? "المساحة المبنية لكل طابق (م²)" : "Surface construite par niveau (m²)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={area} onChange={event => setArea(event.target.value)} placeholder="120" /></label>
        <label>{ar ? "عدد الطوابق" : "Nombre de niveaux"}<input type="number" min="1" step="1" inputMode="numeric" value={floors} onChange={event => setFloors(event.target.value)} /></label>
      </div><p>{ar ? "أدخل المساحة المبنية، بما فيها كل الطوابق المراد تقديرها." : "Indiquez la surface construite de chaque niveau à estimer. Pour des niveaux de tailles différentes, utilisez leur surface moyenne."}</p></section>
      <section><h2>{ar ? "فرضيات الميزانية" : "Hypothèses de budget"}</h2><div className="tile-tool-fields">
        <label>{ar ? "التكلفة المرجعية لكل م² (درهم)" : "Coût de référence par m² (DH)"}<input type="number" min="0" step="1" inputMode="decimal" value={rate} onChange={event => setRate(event.target.value)} placeholder={ar ? "أدخل سعرك" : "Votre prix"} /></label>
        <label>{ar ? "احتياطي للمصاريف غير المتوقعة (%)" : "Marge pour imprévus (%)"}<input type="number" min="0" max="100" step="1" inputMode="decimal" value={contingency} onChange={event => setContingency(event.target.value)} /></label>
      </div><p>{ar ? "استخدم سعراً مرجعياً من عرض أسعار أو من مهني يعرف مشروعك. يمكنك تعديل هامش الاحتياط." : "Utilisez un coût au m² provenant d’un devis ou d’un professionnel qui connaît votre projet. La marge reste modifiable."}</p></section>
    </div>
    <aside className="tile-tool-result" aria-live="polite"><span>{ar ? "تقدير أولي" : "Première estimation"}</span><strong>{ready ? format(total) : "—"} <small>DH</small></strong><dl>
      <div><dt>{ar ? "المساحة المبنية الإجمالية" : "Surface construite totale"}</dt><dd>{format(totalArea)} m²</dd></div>
      <div><dt>{ar ? "التكلفة قبل الاحتياط" : "Coût avant imprévus"}</dt><dd>{ready ? `${format(base)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "احتياطي المصاريف غير المتوقعة" : "Marge pour imprévus"}</dt><dd>{ready ? `${format(total - base)} DH` : "—"}</dd></div>
    </dl><p>{ar ? "هذا حساب تقريبي يعتمد على السعر الذي أدخلته، وليس عرض أسعار. لا يشمل الأرض أو الدراسات أو الرسوم أو التوصيلات الخارجية إلا إذا كانت ضمن سعرك المرجعي." : "Ce calcul dépend du prix que vous saisissez et ne constitue pas un devis. Terrain, études, taxes et raccordements extérieurs ne sont inclus que si votre prix de référence les comprend."}</p></aside>
  </div>;
}
