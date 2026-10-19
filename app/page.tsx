import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, imagery, partners, process, projects, services } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image src={imagery.field} alt="Chantier et équipes ALMA-STRA" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grid page-shell">
          <div className="hero-copy">
            <span className="eyebrow light">Entreprise générale · BTP · Maroc</span>
            <h1><span>Construire durablement.</span><span>Réaliser avec précision.</span></h1>
            <p>ALMA-STRA accompagne les acteurs publics et privés dans la réalisation de projets de construction, d’aménagement et de viabilisation au Maroc.</p>
            <div className="hero-actions"><Link className="button light" href="/projects">Découvrir nos réalisations <ArrowUpRight size={17}/></Link><Link className="text-link light-link" href="/contact">Parler de votre projet <ArrowUpRight size={15}/></Link></div>
          </div>
          <div className="hero-index"><span>ALMA—STRA</span><span>LAÂYOUNE / MAROC</span></div>
          <div className="hero-strip"><span>Viabilisation</span><span>Aménagement BTP</span><span>Tous corps d’état</span><a href="#intro" aria-label="Faire défiler"><ArrowDown size={18}/></a></div>
        </div>
      </section>

      <section id="intro" className="intro-section section page-shell">
        <Reveal><div className="section-label"><span>01</span><span>Positionnement</span></div></Reveal>
        <div className="intro-grid">
          <Reveal><h2 className="display-title">Des projets conçus<br/>pour durer.</h2></Reveal>
          <Reveal delay={120}><div className="intro-copy"><p>ALMA-STRA est une société marocaine spécialisée dans les solutions de construction et d’aménagement, avec une approche globale allant de l’étude et la conception à la réalisation et la livraison.</p><Link className="text-link" href="/about">Découvrir ALMA-STRA <ArrowUpRight size={15}/></Link></div></Reveal>
        </div>
        <div className="principles-row">
          {[['01','Accompagnement global','De l’étude à la livraison clé en main.'],['02','Qualité & sécurité','Des matériaux sélectionnés et un suivi de chantier rigoureux.'],['03','Vision durable','Des projets pensés pour durer et s’intégrer à leur environnement.']].map(([n,t,d]) => <Reveal key={n}><article className="principle"><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}
        </div>
      </section>

      <section className="expertise-section section">
        <div className="page-shell"><Reveal><div className="section-label"><span>02</span><span>Notre expertise</span></div><h2 className="display-title medium">Une maîtrise complète<br/>du chantier.</h2></Reveal></div>
        <div className="expertise-list page-shell">
          {services.map((service, i) => <Reveal key={service.slug}><article className={`expertise-item ${i % 2 ? 'reverse' : ''}`}><div className="expertise-media"><Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 55vw" /></div><div className="expertise-content"><span className="item-number">{service.number}</span><h3>{service.title}</h3><p>{service.intro}</p><Link className="text-link" href={`/expertise/${service.slug}`}>Découvrir l’expertise <ArrowUpRight size={15}/></Link></div></article></Reveal>)}
        </div>
      </section>

      <section className="projects-section section dark-section">
        <div className="page-shell"><Reveal><div className="section-label light"><span>03</span><span>Réalisations</span></div><div className="section-head-row"><h2 className="display-title medium light-title">Des réalisations qui<br/>parlent pour nous.</h2><Link className="text-link light-link" href="/projects">Toutes les réalisations <ArrowUpRight size={15}/></Link></div></Reveal>
          <div className="project-editorial-grid">
            {projects.slice(0,4).map((project, i) => <Reveal key={project.slug}><Link className={`project-card project-card-${i+1}`} href={`/projects/${project.slug}`}><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 60vw" /></div><div className="project-meta"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.category}</p></div><ArrowUpRight size={22}/></div></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="process-section section page-shell">
        <Reveal><div className="section-label"><span>04</span><span>Méthode</span></div><h2 className="display-title medium">Un projet maîtrisé<br/>de bout en bout.</h2></Reveal>
        <div className="process-line">{process.map(step => <Reveal key={step.number}><article className="process-step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div>
      </section>

      <section className="quality-section dark-section">
        <div className="quality-media"><Image src={imagery.field} alt="Suivi de chantier ALMA-STRA" fill sizes="100vw" /></div>
        <div className="quality-overlay" />
        <div className="quality-content page-shell"><Reveal><span className="eyebrow light">Exigence · contrôle · fiabilité</span><h2>La qualité ne se contrôle pas uniquement à la livraison.<br/><em>Elle se construit à chaque étape.</em></h2><div className="quality-points"><span>Suivi de chantier</span><span>Contrôle qualité</span><span>Respect des normes</span><span>Maîtrise des délais</span><span>Reporting régulier</span></div></Reveal></div>
      </section>

      <section className="partners-section section page-shell">
        <Reveal><div className="section-label"><span>05</span><span>Références</span></div><div className="section-head-row"><h2 className="display-title medium">Ils nous font<br/>confiance.</h2><p className="narrow-copy">Une présence auprès d’acteurs publics, institutionnels et privés identifiés sur le site actuel d’ALMA-STRA.</p></div></Reveal>
        <div className="partner-grid">{partners.map(p => <Reveal key={p.name}><div className="partner-logo"><Image src={p.src} alt={p.name} width={210} height={120}/></div></Reveal>)}</div>
      </section>

      <section className="final-cta dark-section">
        <div className="page-shell final-cta-inner"><Reveal><span className="section-label light"><span>06</span><span>Votre projet</span></span><h2>Vous avez un projet ?<br/><em>Construisons-le ensemble.</em></h2><Link className="button accent" href="/contact">Parler de votre projet <ArrowUpRight size={17}/></Link></Reveal><div className="cta-contact"><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>{contact.address}</p></div></div>
      </section>
    </main>
  );
}
