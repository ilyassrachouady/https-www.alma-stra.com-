import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params; const service = services.find(s=>s.slug===slug); if(!service) notFound();
 return <main><section className="detail-hero"><Image src={service.image} alt={service.title} fill priority sizes="100vw"/><div className="detail-overlay"/><div className="detail-hero-copy page-shell"><Link href="/expertise" className="back-link"><ArrowLeft size={15}/> Toutes les expertises</Link><span className="eyebrow light">Expertise · {service.number}</span><h1>{service.title}</h1><p>{service.intro}</p></div></section><section className="detail-copy section page-shell"><div className="section-label"><span>01</span><span>Approche</span></div><div className="split-editorial"><h2 className="display-title medium">De la précision technique<br/>à l’exécution terrain.</h2><div className="stack-copy">{service.details.map(p=><p key={p}>{p}</p>)}</div></div></section><section className="capabilities section page-shell"><Reveal><div className="section-label"><span>02</span><span>Prestations</span></div><h2 className="display-title medium">Périmètre d’intervention.</h2></Reveal><div className="capability-grid">{service.capabilities.map((g,i)=><Reveal key={g.title}><article><span>0{i+1}</span><h3>{g.title}</h3><ul>{g.items.map(x=><li key={x}>{x}</li>)}</ul></article></Reveal>)}</div></section><section className="inline-cta dark-section"><div className="page-shell"><h2>Parlons de votre projet.</h2><Link className="button accent" href="/contact">Contacter ALMA-STRA <ArrowUpRight size={16}/></Link></div></section></main>
}
