import { pageMetadata } from "@/lib/metadata";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { getProjectImages, projectDetails } from "@/lib/project-details";
import ProjectGallery from "@/components/ProjectGallery";
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string; locale: Locale;
    }>;
}): Promise<Metadata> {
    const { slug, locale } = await params;
    const project = projects.find(item => item.slug === slug);
    const detail = projectDetails[slug];
    if (!project || !detail)
        return {};
    return pageMetadata(locale, `/projects/${slug}`, project.title, detail.introduction, project.image);
}
export default async function ProjectPage({ params }: {
    params: Promise<{
        slug: string; locale: Locale;
    }>;
}) {
    const { slug, locale } = await params;
    const index = projects.findIndex(project => project.slug === slug);
    const detail = projectDetails[slug];
    if (index < 0 || !detail)
        notFound();
    const project = projects[index];
    const next = projects[(index + 1) % projects.length];
    const images = getProjectImages(slug);
    const cover = images[0];
    const related = projects.filter(item => detail.related.includes(item.slug));
    return localize(<main className="project-case-page">
    <section className="project-detail-intro page-shell">
      <Link href="/projects" className="back-link"><ArrowLeft size={15}/> Toutes les réalisations</Link>
      <div className="project-kicker"><span>Projet {project.number}</span><span>{project.category}</span></div>
      <h1>{project.title}</h1>
      <div className="project-case-deck"><p>{detail.subtitle}</p><a href="#galerie">Explorer les {images.length} vues <ArrowRight size={16}/></a></div>
    </section>
    <figure className="project-case-cover">
      <div className="project-detail-image"><Image src={cover.src} alt={cover.alt} fill priority placeholder="blur" blurDataURL={cover.blurDataURL} sizes="100vw" style={{ objectFit: "cover", objectPosition: project.imagePosition ?? "center" }}/></div>
      <figcaption className="page-shell"><span className="project-cover-kind">{project.imageKind === "render" ? "Vue d’étude" : "Photographie retouchée"}</span>{cover.caption}</figcaption>
    </figure>
    <section className="project-case-overview section page-shell" aria-labelledby="project-overview-title">
      <dl className="project-case-facts">{detail.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      <div className="section-label"><span>01</span><span>Le projet</span></div>
      <div className="project-case-overview-grid"><h2 id="project-overview-title" className="display-title medium">Le projet</h2><p className="project-case-introduction">{detail.introduction}</p></div>

    </section>

    <section id="galerie" className="project-case-gallery section page-shell" aria-labelledby="project-gallery-title">
      <div className="section-label"><span>02</span><span>Au plus près du projet</span></div>
      <div className="project-case-gallery-heading"><h2 id="project-gallery-title" className="display-title medium">Le projet en images.</h2><p>Vues d’ensemble, détails et chantier : explorez chaque image dans son intégralité.</p></div>
      <ProjectGallery locale={locale} images={images} title={project.title}/>
    </section>
    <section className="project-case-reading" aria-label="Lecture du projet"><div className="page-shell project-case-chapters">{detail.chapters.map((chapter, chapterIndex) => <article key={chapter.title}><span>0{chapterIndex + 1}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></article>)}</div></section>
    <section className="project-case-related section page-shell" aria-labelledby="project-related-title">
      <div className="section-label"><span>03</span><span>Autres réalisations</span></div>
      <h2 id="project-related-title" className="display-title medium">Poursuivre la découverte.</h2>
      <div className="project-case-related-grid">{related.map(item => <Link href={`/projects/${item.slug}`} key={item.slug}><div className="project-case-related-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="portfolio-image-label">{item.imageKind === "render" ? "Vue d’étude" : "Photographie retouchée"}</span></div><div><span>{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={22}/></div></Link>)}</div>
    </section>
    <section className="project-next dark-section"><div className="page-shell"><span>Projet suivant</span><Link href={`/projects/${next.slug}`}><h2>{next.title}</h2><ArrowRight size={36}/></Link></div></section>
    <section className="inline-cta"><div className="page-shell"><h2>Vous avez un projet similaire ?</h2><Link className="button dark" href={`/contact?project=${encodeURIComponent(project.title)}`}>Échanger avec ALMA-STRA <ArrowUpRight size={16}/></Link></div></section>
  </main>, locale);
}
