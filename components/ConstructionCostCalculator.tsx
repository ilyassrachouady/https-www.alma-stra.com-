"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function ConstructionCostCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [area, setArea] = useState("150");
  const [finish, setFinish] = useState("standard");
  const [zone, setZone] = useState("marrakech");
  const [contingency, setContingency] = useState("10");
  const positive = (value: string) => {
    const number = Number(value);
    return value.trim() && Number.isFinite(number) && number > 0 ? number : 0;
  };
  const totalArea = positive(area);
  const rates: Record<string, number> = { economy: 2500, standard: 3500, premium: 5000 };
  const zones: Record<string, number> = { casa: 1.05, marrakech: 1, agadir: .97, other: .93 };
  const rate = rates[finish] * zones[zone];
  const base = totalArea * rate;
  const reserve = Math.min(100, Math.max(0, Number(contingency) || 0));
  const total = base * (1 + reserve / 100);
  const ready = totalArea > 0;
  const format = (number: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 0 }).format(number);

  return <div className="tile-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="tile-tool-form construction-tool-form">
      <section><h2>{ar ? "أبعاد المشروع" : "Dimensions du projet"}</h2><div className="tile-tool-fields">
        <label>{ar ? "المساحة المبنية الإجمالية (م²)" : "Surface de plancher totale (m²)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={area} onChange={event => setArea(event.target.value)} placeholder="150" /></label>
      </div><p>{ar ? "أدخل مجموع المساحات المبنية في جميع الطوابق." : "Indiquez la surface construite cumulée de tous les niveaux."}</p></section>
      <section><h2>{ar ? "فرضيات الميزانية" : "Hypothèses de budget"}</h2><div className="tile-tool-fields">
        <label>{ar ? "مستوى التشطيب" : "Niveau de finition"}<select value={finish} onChange={event => setFinish(event.target.value)}><option value="economy">{ar ? "اقتصادي" : "Économique"}</option><option value="standard">{ar ? "متوسط" : "Standard"}</option><option value="premium">{ar ? "ممتاز" : "Haut standing"}</option></select></label>
        <label>{ar ? "المدينة / المنطقة" : "Zone / ville"}<select value={zone} onChange={event => setZone(event.target.value)}><option value="casa">{ar ? "الدار البيضاء / الرباط" : "Casablanca / Rabat"}</option><option value="marrakech">{ar ? "مراكش / المدن الكبرى" : "Marrakech / grandes villes"}</option><option value="agadir">{ar ? "طنجة / أكادير" : "Tanger / Agadir"}</option><option value="other">{ar ? "مدن أخرى / مناطق قروية" : "Autres villes / rural"}</option></select></label>
        <label>{ar ? "احتياطي للمصاريف غير المتوقعة (%)" : "Marge pour imprévus (%)"}<input type="number" min="0" max="100" step="1" inputMode="decimal" value={contingency} onChange={event => setContingency(event.target.value)} /></label>
      </div><p>{ar ? "نسب تقريبية لبناء منزل فردي في المغرب. تحتاج المشاريع الأخرى إلى تقدير خاص." : "Ratios indicatifs pour une villa ou maison individuelle au Maroc. Les autres types de bâtiment demandent un chiffrage spécifique."}</p></section>
    </div>
    <aside className="tile-tool-result" aria-live="polite"><span>{ar ? "تقدير أولي" : "Première estimation"}</span><strong>{ready ? format(total) : "—"} <small>DH</small></strong><dl>
      <div><dt>{ar ? "المساحة المبنية الإجمالية" : "Surface construite totale"}</dt><dd>{format(totalArea)} m²</dd></div>
      <div><dt>{ar ? "التكلفة المرجعية للمتر" : "Ratio retenu"}</dt><dd>{format(rate)} DH/m²</dd></div>
      <div><dt>{ar ? "التكلفة قبل الاحتياط" : "Coût avant imprévus"}</dt><dd>{ready ? `${format(base)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "الهيكل والبناء (45٪)" : "Gros œuvre (45 %)"}</dt><dd>{ready ? `${format(base * .45)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "التشطيبات (35٪)" : "Second œuvre (35 %)"}</dt><dd>{ready ? `${format(base * .35)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "الأشغال التقنية (12٪)" : "Lots techniques (12 %)"}</dt><dd>{ready ? `${format(base * .12)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "متفرقات (8٪)" : "Divers (8 %)"}</dt><dd>{ready ? `${format(base * .08)} DH` : "—"}</dd></div>
      <div><dt>{ar ? "احتياطي المصاريف غير المتوقعة" : "Marge pour imprévus"}</dt><dd>{ready ? `${format(total - base)} DH` : "—"}</dd></div>
    </dl><p>{ar ? "تقدير أولي وليس عرض أسعار. لا يشمل الأرض أو الضرائب أو التوصيلات الخارجية. اطلب عرض أسعار مفصلاً." : "Ordre de grandeur, pas un devis. Terrain, taxes et raccordements extérieurs non compris. Demandez un devis détaillé."}</p></aside>
  </div>;
}
