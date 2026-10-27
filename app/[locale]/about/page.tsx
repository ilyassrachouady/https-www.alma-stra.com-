import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CompanyApproach from "@/components/CompanyApproach";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/data";
export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
 const { locale } = await params;
    return localize(<main>
    <section className="inner-hero page-shell"><span className="eyebrow">À propos · ALMA-STRA</span><h1>Construire avec<br /><em>exigence.</em></h1><p>Une société marocaine spécialisée dans les solutions de construction et d’aménagement pour les secteurs résidentiel, commercial et industriel.</p></section>
    <section className="about-story section page-shell"><Reveal><div className="section-label"><span>01</span><span>Notre approche</span></div></Reveal><div className="split-editorial"><Reveal><h2 className="display-title medium">Un partenaire unique,<br />de l’étude à la livraison.</h2></Reveal><Reveal delay={100}><div className="stack-copy"><p>ALMA-STRA propose une offre globale et intégrée dans le domaine du BTP afin de répondre aux besoins de construction, d’aménagement et de préparation de terrain.</p><p>L’entreprise accompagne ses clients depuis l’étude initiale jusqu’à la réception des travaux, avec une attention portée à la qualité, la sécurité, la coordination et le reporting.</p></div></Reveal></div></section>
    <section className="page-shell about-approach-band"><CompanyApproach locale={locale}/></section>
    <section className="values-section section page-shell"><Reveal><div className="section-label"><span>02</span><span>Principes</span></div><h2 className="display-title medium">Une façon de travailler<br />claire et engagée.</h2></Reveal><div className="values-list">{[['01', 'Accompagnement global', 'De l’étude et la conception à la réalisation et à la livraison clé en main.'], ['02', 'Qualité & sécurité', 'Sélection rigoureuse des matériaux, respect des normes et suivi de chantier de bout en bout.'], ['03', 'Vision durable', 'Des projets pensés pour durer et s’intégrer harmonieusement à leur environnement.']].map(v => <Reveal key={v[0]}><div className="value-row"><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></div></Reveal>)}</div></section>
    <section className="process-section section page-shell"><Reveal><div className="section-label"><span>03</span><span>Processus</span></div><h2 className="display-title medium">Un projet maîtrisé<br />de bout en bout.</h2></Reveal><div className="process-line">{process.map(s => <Reveal key={s.number}><article className="process-step"><span>{s.number}</span><h3>{s.title}</h3><p>{s.text}</p></article></Reveal>)}</div></section>
    <section className="inline-cta dark-section"><div className="page-shell"><h2>Un projet à étudier ?</h2><Link className="button accent" href="/contact">Parler de votre projet <ArrowUpRight size={16}/></Link></div></section>
  </main>, locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/about", "À propos", "Découvrez l’approche ALMA-STRA : accompagnement global, qualité, sécurité et vision durable."); }
