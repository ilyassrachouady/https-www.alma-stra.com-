import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";
export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
 const { locale } = await params; return localize(<main><section className="contact-page page-shell"><div className="contact-intro"><span className="eyebrow">Contact</span><h1>Parlons de<br /><em>votre projet.</em></h1><p>Présentez-nous votre besoin. Nous préparons ensemble les prochaines étapes du projet.</p><div className="contact-details"><div><span>Téléphone</span><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></div><div><span>E-mail</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span>Adresse</span><p>{contact.address}</p></div><div><span>Horaires</span><p>{contact.hours}</p></div></div></div><div className="contact-form-wrap"><ContactForm locale={locale} /></div></section></main>, locale); }

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/contact", "Contact", "Contactez ALMA-STRA pour votre projet de construction, d’aménagement ou de viabilisation."); }
