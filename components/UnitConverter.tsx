"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const categories = {
  length: { fr: "Longueur", ar: "الطول", units: [{ id: "mm", factor: .001 }, { id: "cm", factor: .01 }, { id: "m", factor: 1 }, { id: "km", factor: 1000 }] },
  area: { fr: "Surface", ar: "المساحة", units: [{ id: "cm²", factor: .0001 }, { id: "m²", factor: 1 }, { id: "ha", factor: 10000 }, { id: "km²", factor: 1000000 }] },
  volume: { fr: "Volume", ar: "الحجم", units: [{ id: "cm³", factor: .000001 }, { id: "L", factor: .001 }, { id: "m³", factor: 1 }] },
  mass: { fr: "Masse", ar: "الكتلة", units: [{ id: "g", factor: .001 }, { id: "kg", factor: 1 }, { id: "t", factor: 1000 }] },
  pressure: { fr: "Pression", ar: "الضغط", units: [{ id: "Pa", factor: 1 }, { id: "kPa", factor: 1000 }, { id: "bar", factor: 100000 }, { id: "psi", factor: 6894.757293168 }] },
} as const;

type Category = keyof typeof categories;

export default function UnitConverter({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [category, setCategory] = useState<Category>("length");
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState<string>("m");
  const [to, setTo] = useState<string>("cm");
  const units = categories[category].units;
  const fromFactor = units.find(unit => unit.id === from)?.factor ?? 1;
  const toFactor = units.find(unit => unit.id === to)?.factor ?? 1;
  const numericValue = Number(value);
  const result = value.trim() !== "" && Number.isFinite(numericValue) ? numericValue * fromFactor / toFactor : null;
  const formatted = result === null ? "—" : new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 8 }).format(result);

  const selectCategory = (next: Category) => {
    setCategory(next);
    const nextUnits = categories[next].units;
    setFrom(nextUnits[0].id);
    setTo(nextUnits[1].id);
  };

  return <div className="unit-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="unit-tool-tabs" role="group" aria-label={ar ? "نوع التحويل" : "Type de conversion"}>
      {(Object.keys(categories) as Category[]).map(key => <button key={key} type="button" aria-pressed={category === key} onClick={() => selectCategory(key)}>{ar ? categories[key].ar : categories[key].fr}</button>)}
    </div>
    <div className="unit-tool-panel">
      <div className="unit-tool-inputs">
        <label>{ar ? "القيمة" : "Valeur"}<input type="number" inputMode="decimal" step="any" value={value} onChange={event => setValue(event.target.value)}/></label>
        <label>{ar ? "من" : "De"}<select value={from} onChange={event => setFrom(event.target.value)}>{units.map(unit => <option key={unit.id} value={unit.id}>{unit.id}</option>)}</select></label>
        <button className="unit-tool-swap" type="button" onClick={() => { setFrom(to); setTo(from); }} aria-label={ar ? "تبديل الوحدات" : "Inverser les unités"}>⇄</button>
        <label>{ar ? "إلى" : "Vers"}<select value={to} onChange={event => setTo(event.target.value)}>{units.map(unit => <option key={unit.id} value={unit.id}>{unit.id}</option>)}</select></label>
      </div>
      <div className="unit-tool-answer" aria-live="polite"><span>{ar ? "النتيجة" : "Résultat"}</span><strong>{formatted} <small>{to}</small></strong><p>{ar ? "تحويل رياضي تقريبي. تحقق من متطلبات المشروع قبل اعتماد القياسات." : "Conversion mathématique indicative. Vérifiez les mesures requises pour votre projet."}</p></div>
    </div>
  </div>;
}
