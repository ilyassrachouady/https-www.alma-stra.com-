import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceDiagram from "@/components/ServiceDiagram";
import type { Service } from "@/lib/data";

export default function ServicePreview({ service, index }: { service: Service; index: number }) {
  return (
    <article className={`alma-service-story alma-service-story-${service.diagram}`}>
      <Reveal variant={index % 2 === 0 ? "rise" : "fade"}>
        <div className="alma-service-story-head">
          <span className="alma-service-story-number">{service.number}</span>
          <div>
            <span className="alma-service-story-label">{service.shortTitle}</span>
            <h3>{service.statement}</h3>
          </div>
        </div>
      </Reveal>

      <div className="alma-service-story-layout">
        <Reveal className="alma-service-story-media-wrap" variant="fade" delay={60}>
          <div className="alma-service-story-media">
            <Image
              src={service.image}
              alt={`${service.title} — ALMA-STRA`}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1180px) 48vw, 52vw"
              style={{ objectPosition: service.imagePosition ?? "center" }}
            />
            <div className="alma-service-story-media-tag"><span>Expertise {service.number}</span><strong>{service.shortTitle}</strong></div>
          </div>
        </Reveal>

        <Reveal className="alma-service-story-content" variant="rise" delay={110}>
          <p className="alma-service-story-outcome">{service.outcome}</p>
          <div className="alma-service-keywords" aria-label={`Compétences clés — ${service.title}`}>
            {service.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}
          </div>
          <ServiceDiagram service={service} compact />
          <Link className="alma-service-story-link" href={`/expertise/${service.slug}`}>
            Découvrir l’expertise <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
