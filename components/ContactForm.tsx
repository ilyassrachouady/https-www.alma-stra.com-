"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = `Demande de projet — ${form.get("company") || form.get("name") || "Site ALMA-STRA"}`;
    const body = [
      `Nom: ${form.get("name") || ""}`,
      `Entreprise: ${form.get("company") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Téléphone: ${form.get("phone") || ""}`,
      `Type de projet: ${form.get("type") || ""}`,
      "",
      String(form.get("message") || "")
    ].join("\n");
    setStatus("ready");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label>Nom<input name="name" required autoComplete="name" /></label><label>Entreprise<input name="company" autoComplete="organization" /></label></div>
      <div className="field-row"><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label></div>
      <label>Type de projet<select name="type" defaultValue=""><option value="" disabled>Sélectionner</option><option>Viabilisation</option><option>Aménagement BTP</option><option>Travaux tous corps d’état</option><option>Autre projet</option></select></label>
      <label>Message<textarea name="message" required rows={6} placeholder="Parlez-nous de votre projet, de son contexte et de vos besoins." /></label>
      <button className="alma-btn alma-btn-primary" type="submit">Envoyer la demande <ArrowUpRight size={17} /></button>
      <p className="form-note" aria-live="polite">{status === "ready" ? "Votre application e-mail va s’ouvrir avec la demande préremplie." : "Le formulaire prépare votre demande dans votre application e-mail."}</p>
    </form>
  );
}
