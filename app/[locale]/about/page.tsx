import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
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
      <div className="about-hero-copy"><span className="eyebrow">À propos · ALMA-STRA</span><h1>Construire avec<br /><em>exigence.</em></h1><p>Une société marocaine spécialisée dans les solutions de construction et d’aménagement pour les secteurs résidentiel, commercial et industriel.</p><Link className="about-hero-link" href="/projects">Découvrir nos réalisations <ArrowUpRight size={18} /></Link></div>
      <figure className="about-hero-media"><Image src="/images/portfolio/retouched/college-terrain-multisport.webp" alt="Terrain multisport réalisé au Collège Ibn Khaldoune" fill priority sizes="(max-width: 800px) 100vw, 46vw" /><figcaption><span>ALMA-STRA</span><span>Construction · Aménagement · Viabilisation</span></figcaption></figure>
    </div></section>
    <section className="about-story page-shell"><Reveal><div className="section-label"><span>01</span><span>Notre approche</span></div></Reveal><div className="about-story-grid"><Reveal><h2 className="display-title medium">Un partenaire unique,<br />de l’étude à la livraison.</h2></Reveal><Reveal delay={100}><div className="about-story-copy"><p>ALMA-STRA propose une offre globale et intégrée dans le domaine du BTP afin de répondre aux besoins de construction, d’aménagement et de préparation de terrain.</p><p>L’entreprise accompagne ses clients depuis l’étude initiale jusqu’à la réception des travaux, avec une attention portée à la qualité, la sécurité, la coordination et le reporting.</p></div></Reveal></div><div className="about-approach-grid"><figure className="about-approach-photo"><Image src="/images/portfolio/retouched/atlas-station-de-nuit.webp" alt="Station de Service Gunidlef à Laâyoune" fill sizes="(max-width: 800px) 100vw, 48vw" /><figcaption>Station de Service Gunidlef</figcaption></figure><CompanyApproach locale={locale} /></div></section>
    <section className="about-values"><div className="page-shell"><Reveal><div className="section-label"><span>02</span><span>Principes</span></div><h2 className="display-title medium">Une façon de travailler<br />claire et engagée.</h2></Reveal><div className="about-values-grid">{principles.map(([number, title, description]) => <Reveal key={number}><article className="about-value"><span>{number}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div></section>
    <section className="inline-cta dark-section"><div className="page-shell"><h2>Un projet à étudier ?</h2><Link className="button accent" href="/contact">Parler de votre projet <ArrowUpRight size={16}/></Link></div></section>
  </main>, locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/about", "À propos", "Découvrez l’approche ALMA-STRA : accompagnement global, qualité, sécurité et vision durable."); }
