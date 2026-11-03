"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function PaintCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [openings, setOpenings] = useState("0");
  const [ceiling, setCeiling] = useState(false);
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("10");
  const [reserve, setReserve] = useState("10");
  const nonnegative = (text: string) => { const n = Number(text); return text.trim() && Number.isFinite(n) && n > 0 ? n : 0; };
  const wallArea = 2 * (nonnegative(length) + nonnegative(width)) * nonnegative(height);
  const openingsArea = Math.min(wallArea, nonnegative(openings));
  const netArea = wallArea - openingsArea + (ceiling ? nonnegative(length) * nonnegative(width) : 0);
  const coatCount = Math.max(1, Math.floor(nonnegative(coats) || 1));
  const reservePercent = Math.min(100, nonnegative(reserve));
  const liters = nonnegative(coverage) > 0 ? netArea * coatCount / nonnegative(coverage) * (1 + reservePercent / 100) : 0;
  const format = (n: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 2 }).format(n);
  const input = (label: string, value: string, set: (value: string) => void, step = "0.01") => <label>{label}<input type="number" min="0" step={step} inputMode="decimal" value={value} onChange={event => set(event.target.value)} placeholder="0"/></label>;

  return <div className="tile-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="tile-tool-form">
      <section><h2>{ar ? "أبعاد الغرفة" : "Dimensions de la pièce"}</h2><div className="tile-tool-fields">
        {input(ar ? "الطول (م)" : "Longueur (m)", length, setLength)}
        {input(ar ? "العرض (م)" : "Largeur (m)", width, setWidth)}
        {input(ar ? "الارتفاع (م)" : "Hauteur (m)", height, setHeight)}
        {input(ar ? "مساحة الأبواب والنوافذ (م²)" : "Portes et fenêtres à déduire (m²)", openings, setOpenings)}
      </div><label className="paint-tool-check"><input type="checkbox" checked={ceiling} onChange={event => setCeiling(event.target.checked)}/>{ar ? "إضافة السقف" : "Inclure le plafond"}</label></section>
      <section><h2>{ar ? "الطلاء" : "Application"}</h2><div className="tile-tool-fields">
        {input(ar ? "عدد الطبقات" : "Nombre de couches", coats, setCoats, "1")}
        {input(ar ? "مردودية الطلاء (م²/لتر/طبقة)" : "Rendement (m²/L/couche)", coverage, setCoverage, "0.1")}
        {input(ar ? "هامش احتياطي (%)" : "Marge de réserve (%)", reserve, setReserve, "1")}
      </div><p>{ar ? "القيمة الأولية 10 م²/لتر لكل طبقة مثال لطلاء Astral SATILAC. تحقق من مردودية منتجك؛ تختلف حسب السطح وطريقة التطبيق." : "Le repère initial de 10 m²/L par couche vient de la fiche Astral SATILAC. Vérifiez le rendement de votre produit : il varie selon le support et l’application."} <a href="https://www.astral.ma/fr/produits/satilac/cccId_1339531" target="_blank" rel="noopener noreferrer">{ar ? "المصدر" : "Source"}</a>.</p></section>
    </div>
    <aside className="tile-tool-result" aria-live="polite"><span>{ar ? "الكمية المقدّرة" : "Quantité estimée"}</span><strong>{format(liters)} <small>{ar ? "لتر" : "litres"}</small></strong><dl>
      <div><dt>{ar ? "مساحة الجدران" : "Surface des murs"}</dt><dd>{format(wallArea)} m²</dd></div>
      <div><dt>{ar ? "المساحة بعد الخصم" : "Surface à peindre"}</dt><dd>{format(netArea)} m²</dd></div>
      <div><dt>{ar ? "عدد الطبقات" : "Couches"}</dt><dd>{format(coatCount)}</dd></div>
    </dl><p>{ar ? "تقدير أولي لغرفة مستطيلة. راجع القياسات وحالة السطح قبل شراء الطلاء." : "Estimation pour une pièce rectangulaire. Vérifiez les mesures et l’état du support avant l’achat."}</p></aside>
  </div>;
}
