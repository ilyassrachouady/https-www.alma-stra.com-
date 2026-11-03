import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CompanyApproach from "@/components/CompanyApproach";
import Reveal from "@/components/Reveal";

const principles = [
  ["01", "Accompagnement global", "De l’étude et la conception à la réalisation et à la livraison clé en main."],
  ["02", "Qualité & sécurité", "Sélection rigoureuse des matériaux, respect des normes et suivi de chantier de bout en bout."],
  ["03", "Vision durable", "Des projets pensés pour durer et s’intégrer harmonieusement à leur environnement."],
];

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return localize(<main className="alma-about">
    <section className="about-hero"><div className="page-shell about-hero-grid">
      <div className="about-hero-copy"><span className="eyebrow">À propos · ALMA-STRA</span><h1>Construire avec<br /><em>exigence.</em></h1><p>Construction, aménagement et viabilisation : ALMA-STRA coordonne les travaux de la préparation du terrain jusqu’à la livraison.</p><Link className="about-hero-link" href="/projects">Découvrir nos réalisations <ArrowUpRight size={18} /></Link></div>
      <div className="about-hero-graphic" aria-label="Construction, aménagement et viabilisation"><span className="about-graphic-kicker">Nos domaines d’intervention</span><div className="about-graphic-list"><span><b>01</b>Construction</span><span><b>02</b>Aménagement</span><span><b>03</b>Viabilisation</span></div><span className="about-graphic-footer">ALMA-STRA <i aria-hidden="true" /> De l’étude à la livraison</span></div>
    </div></section>
    <section className="about-story page-shell"><Reveal><div className="section-label"><span>01</span><span>Notre approche</span></div></Reveal><div className="about-story-grid"><Reveal><h2 className="display-title medium">Un seul interlocuteur.<br />Chaque étape maîtrisée.</h2></Reveal><Reveal delay={100}><div className="about-story-copy"><p>ALMA-STRA accompagne ses clients de l’étude initiale à la réception des travaux.</p><p>La coordination des métiers, le suivi du chantier et le contrôle des finitions donnent un cadre clair à chaque projet.</p></div></Reveal></div><div className="about-approach-grid"><div className="about-approach-statement"><span>Notre engagement</span><p>Comprendre le besoin.<br />Organiser les travaux.<br /><strong>Livrer avec soin.</strong></p><div>Construction <span>·</span> Aménagement <span>·</span> Viabilisation</div></div><CompanyApproach locale={locale} /></div></section>
    <section className="about-values"><div className="page-shell"><Reveal><div className="section-label"><span>02</span><span>Principes</span></div><h2 className="display-title medium">Une façon de travailler<br />claire et engagée.</h2></Reveal><div className="about-values-grid">{principles.map(([number, title, description]) => <Reveal key={number}><article className="about-value"><span>{number}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div></section>
    <section className="inline-cta dark-section"><div className="page-shell"><h2>Un projet à étudier ?</h2><Link className="button accent" href="/contact">Parler de votre projet <ArrowUpRight size={16}/></Link></div></section>
  </main>, locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/about", "À propos", "Découvrez l’approche ALMA-STRA : accompagnement global, qualité, sécurité et vision durable."); }
