"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type Room = { id: number; name: string; length: string; width: string };
const initialRooms: Room[] = [{ id: 1, name: "", length: "", width: "" }];

export default function SurfaceCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [rooms, setRooms] = useState<Room[]>(initialRooms);
  const [nextId, setNextId] = useState(2);
  const area = (room: Room) => Math.max(0, Number(room.length) || 0) * Math.max(0, Number(room.width) || 0);
  const total = rooms.reduce((sum, room) => sum + area(room), 0);
  const format = (value: number) => new Intl.NumberFormat(ar ? "ar-MA" : "fr-MA", { maximumFractionDigits: 2 }).format(value);
  const update = (id: number, key: "name" | "length" | "width", value: string) => setRooms(current => current.map(room => room.id === id ? { ...room, [key]: value } : room));

  return <div className="surface-tool" dir={ar ? "rtl" : "ltr"}>
    <div className="surface-tool-list">
      {rooms.map((room, index) => <div className="surface-tool-row" key={room.id}>
        <div className="surface-tool-row-head"><strong>{ar ? `الفضاء ${index + 1}` : `Espace ${String(index + 1).padStart(2, "0")}`}</strong>{rooms.length > 1 && <button type="button" onClick={() => setRooms(current => current.filter(item => item.id !== room.id))}>{ar ? "حذف" : "Supprimer"}</button>}</div>
        <div className="surface-tool-fields">
          <label>{ar ? "اسم الفضاء (اختياري)" : "Nom de l’espace (facultatif)"}<input value={room.name} onChange={event => update(room.id, "name", event.target.value)} placeholder={ar ? "مثال: غرفة المعيشة" : "Ex. Séjour"}/></label>
          <label>{ar ? "الطول (م)" : "Longueur (m)"}<input type="number" min="0" step="0.01" inputMode="decimal" value={room.length} onChange={event => update(room.id, "length", event.target.value)} placeholder="0,00"/></label>
          <label>{ar ? "العرض (م)" : "Largeur (m)"}<input type="number" min="0" step="0.01" inputMode="decimal" value={room.width} onChange={event => update(room.id, "width", event.target.value)} placeholder="0,00"/></label>
        </div>
        <div className="surface-tool-subtotal"><span>{ar ? "مساحة الفضاء" : "Surface de l’espace"}</span><strong>{format(area(room))} m²</strong></div>
      </div>)}
      <button className="surface-tool-add" type="button" onClick={() => { setRooms(current => [...current, { id: nextId, name: "", length: "", width: "" }]); setNextId(nextId + 1); }}>{ar ? "+ إضافة فضاء" : "+ Ajouter un espace"}</button>
    </div>
    <aside className="surface-tool-result" aria-live="polite"><span>{ar ? "المساحة الإجمالية المقدّرة" : "Surface totale estimée"}</span><strong>{format(total)} <small>m²</small></strong><p>{ar ? "مجموع مساحات الفضاءات المدخلة (الطول × العرض). هذه نتيجة تقديرية، وليست قياساً تنظيمياً أو مخططاً معتمداً." : "Somme des espaces saisis (longueur × largeur). Résultat indicatif, sans déduction des murs ni valeur réglementaire."}</p><button type="button" onClick={() => { setRooms(initialRooms); setNextId(2); }}>{ar ? "إعادة الحساب" : "Recommencer"}</button></aside>
  </div>;
}
