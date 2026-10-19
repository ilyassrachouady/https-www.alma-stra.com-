import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Leaf, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, imagery, partners, projects, services } from "@/lib/data";

const testimonials = [
  {
    quote: "Nous avons confié à Alma-Stra la viabilisation et l’aménagement complet d’un lotissement résidentiel. Leur rigueur dans la gestion du chantier et le respect des délais nous ont permis de lancer la commercialisation sereinement. Une équipe très professionnelle.",
    name: "Mohamed B.",
    role: "Promoteur immobilier à Rabat",
  },
  {
    quote: "Alma-Stra a réalisé l’aménagement de notre nouveau siège social. Ils ont su s’adapter à nos contraintes en termes de design et de fonctionnalité, tout en assurant une qualité irréprochable des finitions. Je recommande sans hésiter.",
    name: "Fatima E.",
    role: "Directrice générale à Casablanca",
  },
  {
    quote: "Nous avons fait appel à Alma-Stra pour la rénovation et la mise aux normes de notre site industriel. Leur expertise technique et leur suivi de projet nous ont vraiment rassurés. Résultat impeccable et conforme aux normes.",
    name: "Youssef A.",
    role: "Chef d’entreprise à Marrakech",
  },
];

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

export default function HomePage() {
  return (
    <main className="alma-home">
      <section className="alma-hero">
        <div className="page-shell alma-hero-grid">
          <Reveal>
            <div className="alma-hero-copy">
              <span className="alma-kicker"><span /> Construction · Aménagement · Viabilisation</span>
              <h1>Construire avec rigueur.<br /><em>Aménager avec vision.</em></h1>
              <p>ALMA‑STRA propose une offre complète de services dans le secteur du BTP, allant de la conception à la réalisation, avec un accompagnement clé en main.</p>
              <div className="alma-hero-actions">
                <Link className="alma-btn alma-btn-primary" href="/expertise">Découvrir nos services <ArrowRight size={17} /></Link>
                <Link className="alma-btn alma-btn-ghost" href="/projects">Voir nos projets <ArrowUpRight size={17} /></Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="alma-hero-media">
              <Image src={imagery.amenagement} alt="Projet de construction ALMA-STRA" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
              <div className="alma-hero-media-badge"><strong>ALMA-STRA</strong><span>Laâyoune · Maroc</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-section alma-services">
        <div className="page-shell">
          <Reveal>
            <div className="alma-section-intro">
              <div><span className="alma-kicker"><span /> Nos services</span><h2>Une expertise complète<br />pour chaque chantier.</h2></div>
              <p>ALMA‑STRA propose une offre complète de services dans le secteur du BTP, allant de la conception à la réalisation, avec un accompagnement clé en main.</p>
            </div>
          </Reveal>
          <div className="alma-service-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <Link className="alma-service-card" href={`/expertise/${service.slug}`}>
                  <div className="alma-service-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
                  <div className="alma-service-body">
                    <span className="alma-service-number">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.intro}</p>
                    <span className="alma-card-link">Découvrir <ArrowUpRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="alma-centered-action"><Link className="alma-btn alma-btn-primary" href="/expertise">Voir tous les services <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="alma-section alma-projects">
        <div className="page-shell">
          <Reveal>
            <div className="alma-projects-head">
              <div><span className="alma-kicker"><span /> Projects</span><h2>Des projets concrets.<br /><em>Des résultats durables.</em></h2></div>
              <div className="alma-projects-copy"><p>Voici quelques-uns des nombreux projets que nous avons réalisés pour nos clients. Nous offrons un service professionnel comprenant la consultation, le devis gratuit, la conception, la fourniture des matériaux et l’installation.</p><Link href="/projects">Tous les projets <ArrowRight size={16} /></Link></div>
            </div>
          </Reveal>
          <div className="alma-project-grid">
            {projects.slice(0, 5).map((project, index) => (
              <Reveal key={project.slug} delay={index * 50}>
                <Link className={`alma-project-card alma-project-${index + 1}`} href={`/projects/${project.slug}`}>
                  <div className="alma-project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
                  <div className="alma-project-info"><div><span>{project.category}</span><h3>{project.title}</h3></div><ArrowUpRight size={22} /></div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="alma-project-cta"><span>Explorez nos projets</span><Link className="alma-btn alma-btn-primary" href="/projects">Voir tous les projets <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="alma-section alma-about">
        <div className="page-shell alma-about-grid">
          <Reveal>
            <div className="alma-about-media"><Image src={imagery.field} alt="Équipe et chantier ALMA-STRA" fill sizes="(max-width: 900px) 100vw, 44vw" /></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="alma-about-copy">
              <span className="alma-kicker"><span /> À propos de nous</span>
              <h2>Un partenaire fiable,<br /><em>du premier plan à la livraison.</em></h2>
              <p className="alma-lead">ALMA‑STRA est une société marocaine spécialisée dans les solutions de construction et d’aménagement, offrant des prestations de haute qualité pour les secteurs résidentiel, commercial et industriel.</p>
              <div className="alma-pillars">
                <article><CheckCircle2 size={19} /><div><h3>Accompagnement global</h3><p>De l’étude et la conception à la réalisation et la livraison clé en main.</p></div></article>
                <article><Leaf size={19} /><div><h3>Vision durable</h3><p>Des projets pensés pour durer et s’intégrer harmonieusement à leur environnement.</p></div></article>
                <article><ShieldCheck size={19} /><div><h3>Qualité & sécurité</h3><p>Sélection rigoureuse des matériaux, respect strict des normes, suivi de chantier de bout en bout.</p></div></article>
              </div>
              <Link className="alma-text-link" href="/about">Découvrir ALMA-STRA <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-offer">
        <div className="page-shell">
          <div className="alma-offer-tabs"><span>Nous offrons</span><span>Nous garantissons</span><span>Nous fournissons</span></div>
          <Reveal>
            <div className="alma-offer-main">
              <span className="alma-kicker alma-kicker-light"><span /> Notre offre</span>
              <h2>Une offre globale et intégrée.</h2>
              <p>Nous mettons à votre disposition une offre globale et intégrée dans le domaine du BTP, afin de répondre à tous vos besoins en matière de construction, d’aménagement et de préparation de terrain.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alma-section alma-why">
        <div className="page-shell">
          <Reveal><div className="alma-why-heading"><span className="alma-kicker"><span /> Pourquoi nous choisir</span><h2>Pourquoi choisir ALMA‑STRA ?</h2><p>Choisir ALMA‑STRA, c’est opter pour un partenaire de confiance qui place votre projet au centre de ses priorités.</p></div></Reveal>
          <div className="alma-reasons-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return <Reveal key={reason.title} delay={index * 70}><article className="alma-reason"><div className="alma-reason-icon"><Icon size={24} /></div><span>0{index + 1}</span><h3>{reason.title}</h3><p>{reason.text}</p></article></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="alma-section alma-testimonials">
        <div className="page-shell">
          <Reveal><div className="alma-section-intro alma-testimonial-head"><div><span className="alma-kicker"><span /> Témoignages</span><h2>La confiance se construit<br />sur le terrain.</h2></div><Sparkles size={28} /></div></Reveal>
          <div className="alma-testimonial-grid">
            {testimonials.map((item, index) => <Reveal key={item.name} delay={index * 70}><article className="alma-testimonial"><span className="alma-quote">“</span><p>{item.quote}</p><div><strong>{item.name}</strong><span>{item.role}</span></div></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="alma-section alma-partners">
        <div className="page-shell">
          <Reveal><div className="alma-partner-heading"><span className="alma-kicker"><span /> Nos références</span><h2>Nous travaillons avec</h2></div></Reveal>
          <div className="alma-partner-grid">{partners.map((partner, index) => <Reveal key={partner.name} delay={index * 50}><div className="alma-partner-logo"><Image src={partner.src} alt={partner.name} width={210} height={110} /></div></Reveal>)}</div>
        </div>
      </section>

      <section className="alma-contact-band">
        <div className="page-shell alma-contact-grid">
          <a href={`tel:${contact.phoneHref}`}><span><Phone size={20} /></span><div><small>Téléphone</small><strong>{contact.phone}</strong></div></a>
          <div><span><MapPin size={20} /></span><div><small>Adresse</small><strong>{contact.address}</strong></div></div>
          <a href={`mailto:${contact.email}`}><span><Mail size={20} /></span><div><small>E-mail</small><strong>{contact.email}</strong></div></a>
        </div>
      </section>
    </main>
  );
}
