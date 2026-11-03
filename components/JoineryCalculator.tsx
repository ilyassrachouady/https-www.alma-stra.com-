"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type Opening = { id: number; name: string; width: string; height: string; quantity: string };
const initial: Opening[] = [{ id: 1, name: "", width: "", height: "", quantity: "1" }];

export default function JoineryCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [openings, setOpenings] = useState<Opening[]>(initial);
  const [nextId, setNextId] = useState(2);
  const [price, setPrice] = useState("");
  const positive = (text: string) => { const n = Number(text); return text.trim() && Number.isFinite(n) && n > 0 ? n : 0; };
  const count = (opening: Opening) => Math.floor(positive(opening.quantity));
  const area = (opening: Opening) => positive(opening.width) * positive(opening.height) / 10000 * count(opening);
  const perimeter = (opening: Opening) => 2 * (positive(opening.width) + positive(opening.height)) / 100 * count(opening);
  const totalArea = openings.reduce((sum, opening) => sum + area(opening), 0);
  const totalPerimeter = openings.reduce((sum, opening) => sum + perimeter(opening), 0);
  const totalCount = openings.reduce((sum, opening) => sum + count(opening), 0);
  const budget = positive(price) ? totalArea * positive(price) : null;
  const format = (n: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 2 }).format(n);
  const update = (id: number, key: keyof Omit<Opening, "id">, value: string) => setOpenings(current => current.map(opening => opening.id === id ? { ...opening, [key]: value } : opening));

  return <div className="tile-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="joinery-tool-list">
      {openings.map((opening, index) => <div className="tile-tool-form joinery-tool-row" key={opening.id}>
        <div className="surface-tool-row-head"><h2>{ar ? `الفتحة ${index + 1}` : `Ouverture ${String(index + 1).padStart(2, "0")}`}</h2>{openings.length > 1 && <button type="button" onClick={() => setOpenings(current => current.filter(item => item.id !== opening.id))}>{ar ? "حذف" : "Supprimer"}</button>}</div>
        <div className="tile-tool-fields">
          <label>{ar ? "الاسم (اختياري)" : "Nom (facultatif)"}<input value={opening.name} onChange={event => update(opening.id, "name", event.target.value)} placeholder={ar ? "مثال: نافذة" : "Ex. Fenêtre"}/></label>
          <label>{ar ? "العدد" : "Quantité"}<input type="number" min="1" step="1" inputMode="numeric" value={opening.quantity} onChange={event => update(opening.id, "quantity", event.target.value)}/></label>
          <label>{ar ? "العرض (سم)" : "Largeur (cm)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={opening.width} onChange={event => update(opening.id, "width", event.target.value)} placeholder="0"/></label>
          <label>{ar ? "الارتفاع (سم)" : "Hauteur (cm)"}<input type="number" min="0" step="0.1" inputMode="decimal" value={opening.height} onChange={event => update(opening.id, "height", event.target.value)} placeholder="0"/></label>
        </div><div className="surface-tool-subtotal"><span>{ar ? "المساحة / محيط الإطار" : "Surface / périmètre du cadre"}</span><strong>{format(area(opening))} m² · {format(perimeter(opening))} m</strong></div>
      </div>)}
      <button className="surface-tool-add" type="button" onClick={() => { setOpenings(current => [...current, { id: nextId, name: "", width: "", height: "", quantity: "1" }]); setNextId(current => current + 1); }}>{ar ? "+ إضافة فتحة" : "+ Ajouter une ouverture"}</button>
      <div className="tile-tool-form joinery-tool-price"><h2>{ar ? "ميزانية تقديرية (اختياري)" : "Budget indicatif (facultatif)"}</h2><div className="tile-tool-fields"><label>{ar ? "السعر لكل م² (درهم)" : "Prix par m² (DH)"}<input type="number" min="0" step="0.01" inputMode="decimal" value={price} onChange={event => setPrice(event.target.value)} placeholder="—"/></label></div><p>{ar ? "أدخل سعرك المعتمد. تختلف التكلفة الفعلية حسب نوع الزجاج والملحقات والتركيب." : "Saisissez votre propre prix de référence. Le coût réel dépend du vitrage, des accessoires et de la pose."}</p></div>
    </div>
    <aside className="tile-tool-result" aria-live="polite"><span>{ar ? "ملخص الفتحات" : "Récapitulatif des ouvertures"}</span><strong>{format(totalArea)} <small>m²</small></strong><dl>
      <div><dt>{ar ? "عدد الفتحات" : "Ouvertures"}</dt><dd>{format(totalCount)}</dd></div>
      <div><dt>{ar ? "محيط الإطارات" : "Périmètre des cadres"}</dt><dd>{format(totalPerimeter)} m</dd></div>
      {budget !== null && <div><dt>{ar ? "الميزانية التقديرية" : "Budget indicatif"}</dt><dd>{format(budget)} DH</dd></div>}
    </dl><p>{ar ? "طول الإطار هو مجموع المحيطات الخارجية فقط، ولا يشمل القواطع أو الدرف أو الفاقد. تتطلب الكميات النهائية مخططاً تقنياً." : "Le linéaire correspond uniquement au périmètre extérieur des cadres. Traverses, ouvrants et pertes ne sont pas inclus ; un plan technique reste nécessaire."}</p></aside>
  </div>;
}
