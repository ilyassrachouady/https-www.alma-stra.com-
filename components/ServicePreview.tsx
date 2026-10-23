import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceDiagram from "@/components/ServiceDiagram";
import type { Service } from "@/lib/data";
import { serviceMedia } from "@/lib/media";
export default function ServicePreview({ service, index, locale = "fr" }: {
    locale?: Locale;
    service: Service;
    index: number;
}) {
    const visual = serviceMedia[service.diagram];
    return localize((<Reveal variant="rise" delay={index * 40}>
    <article className={`alma-service-story alma-service-story-${service.diagram}`}>
      <div className="alma-service-story-head">
        <span className="alma-service-story-number">{service.number}</span>
        <div>
          <span className="alma-service-story-label">{service.shortTitle}</span>
          <h3>{service.statement}</h3>
        </div>
      </div>

      <div className="alma-service-story-layout">
        <div className="alma-service-story-media-wrap">
          <div className="alma-service-story-media">
            <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1180px) 48vw, 52vw" style={{ objectPosition: service.imagePosition ?? "center" }}/>
            <div className="alma-service-story-media-tag"><span>{visual.subject}</span><strong>{service.shortTitle}</strong></div>
          </div>
          <p className="expertise-visual-note">{visual.caption}</p>
        </div>

        <div className="alma-service-story-content">
          <div className="expertise-context"><span>Votre enjeu</span><p>{visual.context}</p></div>
          <p className="alma-service-story-outcome">{service.outcome}</p>
          <div className="alma-service-keywords" aria-label={`Compétences clés — ${service.title}`}>
            {service.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}
          </div>
          <ServiceDiagram locale={locale} service={service} compact/>
          <div className="expertise-result"><span>Le résultat</span><strong>{visual.result}</strong></div>
          <Link className="alma-service-story-link" href={`/expertise/${service.slug}`}>
            Découvrir l’expertise <ArrowUpRight size={17}/>
          </Link>
        </div>
      </div>
    </article>
    </Reveal>), locale);
}
