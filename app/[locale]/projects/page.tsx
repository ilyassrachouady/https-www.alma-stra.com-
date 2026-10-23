import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";
import { getProjectImages } from "@/lib/project-details";
export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
 const { locale } = await params; return localize(<main><section className="inner-hero page-shell"><span className="eyebrow">Réalisations</span><h1>Construire du concret.<br /><em>Livrer avec précision.</em></h1><p>Des dossiers à explorer : photographies de chantier, vues d’ensemble et études architecturales, réunies projet par projet.</p></section><section className="projects-archive section page-shell">{projects.map((p, i) => <Reveal key={p.slug}><Link href={`/projects/${p.slug}`} className={`archive-project ${i % 3 === 1 ? 'offset' : ''}`}><div className="archive-project-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 60vw"/>{p.imageKind === "render" && <span className="portfolio-image-label">Vue d’étude</span>}</div><div className="archive-project-meta"><span>{p.number}</span><div><h2>{p.title}</h2><p>{p.category} · {getProjectImages(p.slug).length} vues</p></div><ArrowUpRight size={22}/></div></Link></Reveal>)}</section></main>, locale); }

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) { return pageMetadata((await params).locale, "/projects", "Réalisations", "Découvrez les projets ALMA-STRA : équipements publics, espaces sportifs, bâtiments et aménagements extérieurs."); }
