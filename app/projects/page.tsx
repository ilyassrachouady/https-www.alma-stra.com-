import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata = { title: "Réalisations", description: "Découvrez une sélection de réalisations ALMA-STRA au Maroc." };

export default function ProjectsPage(){return <main><section className="inner-hero page-shell"><span className="eyebrow">Réalisations</span><h1>Construire du concret.<br/><em>Livrer avec précision.</em></h1><p>Une sélection de projets référencés par ALMA-STRA. Les anciennes fiches comportaient des données de démonstration ; seules les informations vérifiables sont reprises ici.</p></section><section className="projects-archive section page-shell">{projects.map((p,i)=><Reveal key={p.slug}><Link href={`/projects/${p.slug}`} className={`archive-project ${i%3===1?'offset':''}`}><div className="archive-project-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 60vw"/></div><div className="archive-project-meta"><span>{p.number}</span><div><h2>{p.title}</h2><p>{p.category}</p></div><ArrowUpRight size={22}/></div></Link></Reveal>)}</section></main>}
