"use client";
import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { contact, services } from '@/lib/data';
import { localize } from '@/lib/localize';
import { localePath, translate, type Locale } from '@/lib/i18n';

export default function ContactForm({ locale = 'fr' }: { locale?: Locale }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const busy = useRef(false);
  const pending = useRef<{ fingerprint: string; id: string } | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  function getSource() {
    const query = new URLSearchParams(window.location.search);
    const project = query.get('project');
    const service = services.find(item => item.slug === query.get('service'));
    return project ? `Projet : ${project.slice(0, 160)}` : service ? `Service : ${service.title}` : query.get('service') === 'dossier-entreprise' ? 'Dossier de consultation — Société' : 'Page contact';
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const payload = { ...values, source: getSource(), locale, consent: values.consent === 'on' };
    const fingerprint = JSON.stringify(payload);
    if (!pending.current || pending.current.fingerprint !== fingerprint) pending.current = { fingerprint, id: crypto.randomUUID() };
    setStatus('sending'); setError('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, requestId: pending.current.id }), signal: AbortSignal.timeout(18000) });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setError(response.status === 429 ? 'Trop de tentatives. Réessayez dans dix minutes ou contactez-nous directement.' : response.status === 400 ? 'Vérifiez les champs et votre accord avant de réessayer.' : 'L’envoi est indisponible pour le moment. Vos informations sont conservées dans le formulaire. Contactez-nous par e-mail ou WhatsApp.');
        setStatus('error');
      } else { form.reset(); pending.current = null; setStatus('sent'); }
    } catch {
      setError('La connexion a été interrompue. Réessayez avec les mêmes informations ou contactez-nous directement.'); setStatus('error');
    } finally { busy.current = false; requestAnimationFrame(() => statusRef.current?.focus()); }
  }
  return localize(<form className="contact-form" onSubmit={submit} aria-busy={status === 'sending'}>
    <div className="field-row"><label>Nom<input name="name" required maxLength={120} autoComplete="name" /></label><label>Entreprise<input name="company" maxLength={160} autoComplete="organization" /></label></div>
    <div className="field-row"><label>E-mail<input name="email" type="email" required maxLength={254} autoComplete="email" dir="ltr" /></label><label>Téléphone<input name="phone" type="tel" maxLength={40} autoComplete="tel" dir="ltr" /></label></div>
    <label>Type de projet<select name="type" defaultValue=""><option value="" disabled>Sélectionner</option>{services.map(service => <option key={service.slug} value={service.title}>{translate(service.title, locale)}</option>)}<option value="Autre projet">Autre projet</option></select></label>
    <label>Message<textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Parlez-nous de votre projet, de son contexte et de vos besoins." /></label>
    <div className="contact-honeypot" aria-hidden="true"><label>Site web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="contact-consent"><input type="checkbox" name="consent" required /><span>J’accepte que mes informations soient utilisées pour répondre à ma demande. <Link href={localePath('/politique-de-confidentialite', locale)}>Politique de confidentialité</Link></span></label>
    <button className="alma-btn alma-btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'} <ArrowUpRight size={17} /></button>
    <div className={`form-status form-status-${status}`} ref={statusRef} tabIndex={-1} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">{status === 'sent' ? <><CheckCircle2 size={20} /><p>Votre demande a bien été envoyée à ALMA-STRA. Notre équipe vous répondra à l’adresse indiquée.</p></> : status === 'error' ? <p>{error}</p> : <p className="form-note">Votre demande est transmise aux deux adresses de notre équipe.</p>}</div>
    <p className="contact-alternatives"><a href={`mailto:${contact.email}`}>Nous écrire directement</a><span> · </span><a href="https://wa.me/212661347602" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
  </form>, locale);
}
