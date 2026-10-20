import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ServiceDiagram from "@/components/ServiceDiagram";
import { projects, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();

  const serviceIndex = services.findIndex(item => item.slug === service.slug);
  const nextService = services[(serviceIndex + 1) % services.length];
  const portfolioProof = projects.slice(0, 3);

  return (
    <main className={`service-detail-page service-detail-${service.diagram}`}>
      <section className="service-detail-hero">
        <div className="page-shell service-detail-hero-grid">
          <Reveal variant="rise">
            <div className="service-detail-hero-copy">
              <Link href="/expertise" className="service-back-link"><ArrowLeft size={15} /> Toutes les expertises</Link>
              <span className="service-detail-number">Expertise {service.number}</span>
              <span className="alma-kicker"><span /> {service.shortTitle}</span>
              <h1>{service.statement}</h1>
              <p>{service.intro}</p>
              <div className="service-detail-keywords">{service.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}</div>
            </div>
          </Reveal>
          <Reveal className="service-detail-hero-media-reveal" variant="fade" delay={80}>
            <div className="service-detail-hero-media">
              <Image
                src={service.image}
                alt={`${service.title} — ALMA-STRA`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                style={{ objectPosition: service.imagePosition ?? "center" }}
              />
              <div className="service-detail-image-caption"><span>ALMA-STRA</span><strong>{service.title}</strong></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-challenge-section service-section">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="service-section-heading">
              <span className="service-section-index">01</span>
              <span className="alma-kicker"><span /> Le contexte</span>
              <h2>{service.problemTitle}</h2>
            </div>
          </Reveal>
          <div className="service-challenge-grid">
            <Reveal variant="fade"><p className="service-large-copy">{service.problemText}</p></Reveal>
            <Reveal variant="rise" delay={80}>
              <div className="service-outcome-panel">
                <small>Le résultat recherché</small>
                <p>{service.outcome}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-scope-section service-section">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="service-section-heading service-section-heading-split">
              <div>
                <span className="service-section-index">02</span>
                <span className="alma-kicker"><span /> Ce qu’ALMA-STRA gère</span>
                <h2>Un périmètre clair, organisé par responsabilités.</h2>
              </div>
              <p>Le service est structuré par familles d’intervention afin de rendre visibles les interfaces qu’ALMA‑STRA coordonne sur le projet.</p>
            </div>
          </Reveal>
          <div className="service-capability-lines">
            {service.capabilities.map((group, index) => (
              <Reveal variant="fade" delay={index * 55} key={group.title}>
                <article className="service-capability-line">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <div>{group.items.map(item => <p key={item}><Check size={14} /> {item}</p>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section service-section">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="service-section-heading service-section-heading-split">
              <div>
                <span className="service-section-index">03</span>
                <span className="alma-kicker"><span /> Transformation</span>
                <h2>Voir comment l’expertise progresse jusqu’au résultat.</h2>
              </div>
              <p>Une lecture simple des étapes permet de comprendre la valeur du service au-delà d’une simple liste de travaux.</p>
            </div>
          </Reveal>
          <Reveal variant="fade" delay={90}><ServiceDiagram service={service} /></Reveal>
          <div className="service-process-list" aria-label={`Processus — ${service.title}`}>
            {service.process.map((step, index) => (
              <Reveal key={step} variant="fade" delay={index * 45}>
                <div className="service-process-step"><span>0{index + 1}</span><strong>{step}</strong></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-value-section">
        <div className="page-shell service-value-grid">
          <Reveal variant="rise">
            <div className="service-value-heading">
              <span className="service-section-index">04</span>
              <span className="alma-kicker alma-kicker-light"><span /> Valeur client</span>
              <h2>Ce que cela change pour votre projet.</h2>
            </div>
          </Reveal>
          <div className="service-value-list">
            {service.clientValue.map((value, index) => (
              <Reveal variant="fade" delay={index * 60} key={value}>
                <div className="service-value-item"><span>0{index + 1}</span><p>{value}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-proof-section service-section">
        <div className="page-shell">
          <Reveal variant="rise">
            <div className="service-section-heading service-section-heading-split">
              <div>
                <span className="service-section-index">05</span>
                <span className="alma-kicker"><span /> Réalisations</span>
                <h2>Le terrain comme preuve.</h2>
              </div>
              <div className="service-proof-heading-action">
                <p>Découvrez une sélection du portfolio ALMA‑STRA et les projets présentés par l’entreprise.</p>
                <Link href="/projects">Toutes les réalisations <ArrowRight size={16} /></Link>
              </div>
            </div>
          </Reveal>
          <div className="service-proof-grid">
            {portfolioProof.map((project, index) => (
              <Reveal variant="fade" delay={index * 70} key={project.slug}>
                <Link className="service-proof-card" href={`/projects/${project.slug}`}>
                  <div className="service-proof-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
                  <div className="service-proof-meta"><span>{project.number}</span><h3>{project.title}</h3><ArrowUpRight size={18} /></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-next-cta">
        <div className="page-shell service-next-cta-grid">
          <Reveal variant="rise">
            <span className="alma-kicker alma-kicker-light"><span /> Votre projet</span>
            <h2>Vous avez un projet de {service.shortTitle.toLowerCase()} ?</h2>
            <Link className="alma-btn alma-btn-light" href="/contact">Parler avec notre équipe <ArrowUpRight size={17} /></Link>
          </Reveal>
          <Reveal variant="fade" delay={90}>
            <Link href={`/expertise/${nextService.slug}`} className="service-next-link">
              <small>Expertise suivante</small>
              <strong>{nextService.title}</strong>
              <ArrowRight size={22} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
