import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata = { title: "Expertise", description: "Viabilisation, aménagement BTP et travaux tous corps d’état par ALMA-STRA." };

export default function ExpertisePage() {
 return <main><section className="inner-hero page-shell"><span className="eyebrow">Expertise</span><h1>Une maîtrise complète<br/><em>du chantier.</em></h1><p>Trois expertises complémentaires pour préparer, aménager et réaliser des projets de construction avec un pilotage cohérent.</p></section><section className="expertise-index section page-shell">{services.map((s,i)=><Reveal key={s.slug}><article className="service-index-row"><div className="service-index-number">{s.number}</div><div className="service-index-media"><Image src={s.image} alt={s.title} fill sizes="(max-width: 900px) 100vw, 46vw"/></div><div className="service-index-copy"><h2>{s.title}</h2><p>{s.intro}</p><ul>{s.capabilities.flatMap(g=>g.items).slice(0,5).map(x=><li key={x}>{x}</li>)}</ul><Link className="text-link" href={`/expertise/${s.slug}`}>Voir l’expertise <ArrowUpRight size={15}/></Link></div></article></Reveal>)}</section></main>
}
