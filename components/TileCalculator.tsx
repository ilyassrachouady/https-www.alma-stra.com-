"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function TileCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [tileLength, setTileLength] = useState("60");
  const [tileWidth, setTileWidth] = useState("60");
  const [waste, setWaste] = useState("10");
  const [perBox, setPerBox] = useState("");
  const [adhesiveRate, setAdhesiveRate] = useState("4.5");
  const positive = (text: string) => { const n = Number(text); return text.trim() && Number.isFinite(n) && n > 0 ? n : 0; };
  const roomArea = positive(length) * positive(width);
  const tileArea = positive(tileLength) * positive(tileWidth) / 10000;
  const wastePercent = Math.min(100, Math.max(0, Number(waste) || 0));
  const requiredArea = roomArea * (1 + wastePercent / 100);
  const count = roomArea > 0 && tileArea > 0 ? Math.ceil(requiredArea / tileArea) : 0;
  const tilesPerBox = Math.floor(positive(perBox));
  const boxes = tilesPerBox > 0 ? Math.ceil(count / tilesPerBox) : null;
  const adhesive = positive(adhesiveRate) ? roomArea * positive(adhesiveRate) : null;
  const format = (n: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 2 }).format(n);

  return <div className="tile-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="tile-tool-form">
      <section><h2>{ar ? "المساحة المراد تبليطها" : "Surface à carreler"}</h2><div className="tile-tool-fields">
        <label>{ar ? "الطول (م)" : "Longueur (m)"}<input type="number" min="0" step="0.01" inputMode="decimal" value={length} onChange={event => setLength(event.target.value)} placeholder="0"/></label>
        <label>{ar ? "العرض (م)" : "Largeur (m)"}<input type="number" min="0" step="0.01" inputMode="decimal" value={width} onChange={event => setWidth(event.target.value)} placeholder="0"/></label>
      </div></section>
      <section><h2>{ar ? "مقاس البلاطة" : "Format du carreau"}</h2><div className="tile-tool-fields">
        <label>{ar ? "الطول (سم)" : "Longueur (cm)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={tileLength} onChange={event => setTileLength(event.target.value)}/></label>
        <label>{ar ? "العرض (سم)" : "Largeur (cm)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={tileWidth} onChange={event => setTileWidth(event.target.value)}/></label>
      </div></section>
      <section><h2>{ar ? "التوريد" : "Approvisionnement"}</h2><div className="tile-tool-fields">
        <label>{ar ? "هامش القص والهدر (%)" : "Marge de coupe et perte (%)"}<input type="number" min="0" max="100" step="1" inputMode="numeric" value={waste} onChange={event => setWaste(event.target.value)}/></label>
        <label>{ar ? "بلاطات في العلبة (اختياري)" : "Carreaux par boîte (facultatif)"}<input type="number" min="1" step="1" inputMode="numeric" value={perBox} onChange={event => setPerBox(event.target.value)} placeholder="—"/></label>
        <label>{ar ? "استهلاك اللاصق (كغ/م²، اختياري)" : "Consommation de colle (kg/m², facultatif)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={adhesiveRate} onChange={event => setAdhesiveRate(event.target.value)} placeholder="—"/></label>
      </div><p>{ar ? "القيمة الافتراضية 4.5 كغ/م² مأخوذة من مثال لدى Sika. تحقق من العبوة، لأن الاستهلاك يتغير حسب المنتج والسطح وطريقة التركيب." : "Le repère initial de 4,5 kg/m² correspond à un exemple Sika. Vérifiez l’emballage : la consommation varie selon le produit, le support et la pose."} <a href="https://mar.sika.com/fr/portail-prescripteurs/batiments-residentiels/pose-des-revetements-ceramiques/sikaceram-105-m.html" target="_blank" rel="noopener noreferrer">{ar ? "المصدر" : "Source"}</a>.</p></section>
    </div>
    <aside className="tile-tool-result" aria-live="polite"><span>{ar ? "تقدير المواد" : "Estimation des matériaux"}</span><strong>{format(count)} <small>{ar ? "بلاطة" : "carreaux"}</small></strong><dl>
      <div><dt>{ar ? "المساحة" : "Surface"}</dt><dd>{format(roomArea)} m²</dd></div>
      <div><dt>{ar ? "المساحة مع الهدر" : "Avec marge"}</dt><dd>{format(requiredArea)} m²</dd></div>
      {boxes !== null && <div><dt>{ar ? "العلب" : "Boîtes"}</dt><dd>{format(boxes)}</dd></div>}
      {adhesive !== null && <div><dt>{ar ? "اللاصق" : "Colle"}</dt><dd>{format(adhesive)} kg</dd></div>}
    </dl><p>{ar ? "تقدير أولي لمساحة مستطيلة. لا يشمل الفواصل أو تفاصيل القص؛ راجع القياسات الفعلية قبل الشراء." : "Estimation pour une surface rectangulaire. Joints et découpes détaillées non pris en compte ; vérifiez les dimensions avant achat."}</p></aside>
  </div>;
}
