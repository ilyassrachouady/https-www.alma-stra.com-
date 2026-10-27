import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Leaf, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroSlideshow from "@/components/HeroSlideshow";
import CompanyApproach from "@/components/CompanyApproach";
import ServicePreview from "@/components/ServicePreview";
import { contact, projects, services } from "@/lib/data";
const reasons = [
    {
        icon: Building2,
        title: "Une expertise reconnue",
        text: "Grâce à nos années d’expérience dans le BTP et l’aménagement, nous garantissons des solutions parfaitement adaptées à vos besoins.",
    },
    {
        icon: ShieldCheck,
        title: "La qualité avant tout",
        text: "Nous utilisons des matériaux rigoureusement sélectionnés et appliquons des procédés conformes aux normes les plus strictes pour assurer la durabilité et la sécurité de vos ouvrages.",
    },
    {
        icon: Leaf,
        title: "Un accompagnement complet",
        text: "De l’étude initiale à la réception des travaux, nous vous guidons à chaque étape avec des conseils clairs et un reporting régulier.",
    },
];
const projectReveal = ["mask-up", "mask-left", "rise", "mask-right", "rise"] as const;
export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
 const { locale } = await params;
    return localize((<main className="alma-home">
      <section className="alma-hero alma-hero--slideshow">
        <HeroSlideshow locale={locale}/>
        <div className="page-shell alma-hero-grid">
          <div className="alma-hero-copy">
            <span className="alma-kicker alma-hero-kicker"><span /> Construction · Aménagement · Viabilisation</span>
            <h1 aria-label="Construire avec rigueur. Aménager avec vision.">
              <span className="alma-hero-line"><span>Construire avec rigueur.</span></span>
              <span className="alma-hero-line"><span><em>Aménager avec vision.</em></span></span>
            </h1>
            <p className="alma-hero-intro">ALMA‑STRA propose une offre complète de services dans le secteur du BTP, allant de la conception à la réalisation, avec un accompagnement clé en main.</p>
            <div className="alma-hero-actions alma-hero-actions-enter">
              <Link className="alma-btn alma-btn-primary" href="/projects">Voir nos projets <ArrowUpRight size={17}/></Link>
              <Link className="alma-btn alma-btn-ghost" href="/expertise">Découvrir nos services <ArrowRight size={17}/></Link>
            </div>
          </div>

        </div>
      </section>

      <section className="alma-section alma-projects">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="alma-projects-head">
              <div><span className="alma-kicker"><span /> Nos réalisations</span><h2>Des projets concrets.<br /><em>Des résultats durables.</em></h2></div>
              <div className="alma-projects-copy"><p>Équipements publics, espaces sportifs et aménagements : découvrez notre travail en images.</p><Link href="/projects">Tous les projets <ArrowRight size={16}/></Link></div>
            </div>
          </Reveal>
          <div className="alma-project-grid">
            {projects.slice(0, 5).map((project, index) => (<Reveal key={project.slug} delay={index * 70} variant={projectReveal[index]}>
                <Link className={`alma-project-card alma-project-${index + 1}`} href={`/projects/${project.slug}`}>
                  <div className="alma-project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 55vw"/><span className="portfolio-image-label">{project.imageKind === "render" ? "Vue d’étude" : "Photographie retouchée"}</span></div>
                  <div className="alma-project-info"><div><span>{project.category}</span><h3>{project.title}</h3></div><ArrowUpRight size={22}/></div>
                </Link>
              </Reveal>))}
          </div>
          <div className="alma-project-cta"><span>Explorez nos projets</span><Link className="alma-btn alma-btn-primary" href="/projects">Voir tous les projets <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="alma-section alma-services alma-services-stories">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="alma-section-intro alma-services-intro">
              <div><span className="alma-kicker"><span /> Nos expertises</span><h2>Trois responsabilités.<br />Trois résultats différents.</h2></div>
              <p>Préparer un terrain, transformer un espace ou piloter l’ensemble d’un chantier : ALMA-STRA réunit les compétences nécessaires à chaque étape de votre projet.</p>
            </div>
          </Reveal>
          <div className="alma-service-stories">
            {services.map((service, index) => <ServicePreview locale={locale} service={service} index={index} key={service.slug}/>)}
          </div>
          <div className="alma-centered-action"><Link className="alma-btn alma-btn-primary" href="/expertise">Explorer toutes les expertises <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="alma-section alma-about">
        <div className="page-shell alma-about-grid">
          <Reveal variant="mask-left">
            <CompanyApproach locale={locale}/>
          </Reveal>
          <Reveal delay={100} variant="rise">
            <div className="alma-about-copy">
              <span className="alma-kicker"><span /> À propos de nous</span>
              <h2>Un partenaire fiable,<br /><em>du premier plan à la livraison.</em></h2>
              <p className="alma-lead">ALMA‑STRA est une société marocaine spécialisée dans les solutions de construction et d’aménagement, offrant des prestations de haute qualité pour les secteurs résidentiel, commercial et industriel.</p>
              <div className="alma-pillars">
                <article><CheckCircle2 size={19}/><div><h3>Accompagnement global</h3><p>De l’étude et la conception à la réalisation et la livraison clé en main.</p></div></article>
                <article><Leaf size={19}/><div><h3>Vision durable</h3><p>Des projets pensés pour durer et s’intégrer harmonieusement à leur environnement.</p></div></article>
                <article><ShieldCheck size={19}/><div><h3>Qualité & sécurité</h3><p>Sélection rigoureuse des matériaux, respect strict des normes, suivi de chantier de bout en bout.</p></div></article>
              </div>
              <Link className="alma-text-link" href="/about">Découvrir ALMA-STRA <ArrowRight size={16}/></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-offer">
        <div className="alma-offer-grid" aria-hidden="true"/>
        <div className="page-shell">
          <div className="alma-offer-tabs"><span>Nous offrons</span><span>Nous garantissons</span><span>Nous fournissons</span></div>
          <Reveal variant="rise">
            <div className="alma-offer-main">
              <span className="alma-kicker alma-kicker-light"><span /> Notre offre</span>
              <h2 className="alma-offer-title"><span>Une offre</span><span>globale et</span><span>intégrée.</span></h2>
              <p>Nous mettons à votre disposition une offre globale et intégrée dans le domaine du BTP, afin de répondre à tous vos besoins en matière de construction, d’aménagement et de préparation de terrain.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-section alma-why">
        <div className="page-shell">
          <Reveal variant="rise"><div className="alma-why-heading"><span className="alma-kicker"><span /> Pourquoi nous choisir</span><h2>Pourquoi choisir ALMA‑STRA ?</h2><p>Choisir ALMA‑STRA, c’est opter pour un partenaire de confiance qui place votre projet au centre de ses priorités.</p></div></Reveal>
          <div className="alma-reasons-grid">
            {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return <Reveal key={reason.title} delay={index * 85} variant="fade"><article className="alma-reason"><div className="alma-reason-icon"><Icon size={24}/></div><span>0{index + 1}</span><h3>{reason.title}</h3><p>{reason.text}</p></article></Reveal>;
        })}
          </div>
        </div>
      </section>

      <section className="alma-final-cta">
        <div className="page-shell alma-final-cta-inner">
          <Reveal variant="rise">
            <span className="alma-kicker alma-kicker-light"><span /> Votre projet</span>
            <h2>Vous avez un projet ?<br /><em>Construisons-le ensemble.</em></h2>
          </Reveal>
          <Reveal delay={100} variant="fade">
            <div className="alma-final-cta-action">
              <p>Échangeons sur vos objectifs, vos contraintes et la meilleure manière de concrétiser votre projet.</p>
              <Link className="alma-btn alma-btn-light" href="/contact">Parler de votre projet <ArrowUpRight size={17}/></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-contact-band">
        <div className="page-shell alma-contact-grid">
          <a href={`tel:${contact.phoneHref}`}><span><Phone size={20}/></span><div><small>Téléphone</small><strong>{contact.phone}</strong></div></a>
          <div><span><MapPin size={20}/></span><div><small>Adresse</small><strong>{contact.address}</strong></div></div>
          <a href={`mailto:${contact.email}`}><span><Mail size={20}/></span><div><small>E-mail</small><strong>{contact.email}</strong></div></a>
        </div>
      </section>
    </main>), locale);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/", "Construction, aménagement & viabilisation au Maroc", "ALMA-STRA accompagne les projets de construction, d’aménagement BTP et de viabilisation au Maroc."); }
