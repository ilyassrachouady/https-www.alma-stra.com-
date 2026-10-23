"use client";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectImage } from "@/lib/client-media";
const labels = { photo: "Photographie", render: "Visualisation architecturale", document: "Document du projet" };
export default function ProjectGallery({ images, title, locale = "fr" }: {
    locale?: Locale;
    images: ProjectImage[];
    title: string;
}) {
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openerRef = useRef<HTMLButtonElement | null>(null);
    const headingId = useId();
    const open = active !== null;
    const current = active === null ? null : images[active];
    const kinds = Array.from(new Set(images.map(image => image.kind)));
    const visibleCount = images.filter(image => filter === "all" || image.kind === filter).length;
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || !open)
            return;
        const overflow = document.body.style.overflow;
        const rootOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        if (!dialog.open)
            dialog.showModal();
        return () => {
            dialog.close();
            document.body.style.overflow = overflow;
            document.documentElement.style.overflow = rootOverflow;
            openerRef.current?.focus();
        };
    }, [open]);
    function move(direction: number) {
        setActive(index => index === null ? null : (index + direction + images.length) % images.length);
    }
    return localize((<div className="project-gallery">
      <div className="project-gallery-toolbar">
        <p>{visibleCount} {visibleCount === 1 ? "vue" : "vues"}{filter !== "all" ? (locale === "ar" ? ` من أصل ${images.length}` : ` sur ${images.length}`) : ""} · Cliquez pour explorer</p>
        {kinds.length > 1 && <div className="project-gallery-filters" role="group" aria-label="Filtrer la galerie">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>Toutes les vues</button>
          {kinds.map(kind => <button type="button" key={kind} aria-pressed={filter === kind} onClick={() => setFilter(kind)}>{labels[kind]}</button>)}
        </div>}
      </div>
      <div className="project-gallery-grid">
        {images.map((image, index) => (filter === "all" || filter === image.kind) && (<figure key={image.src} className={image.width < image.height ? "project-gallery-portrait" : ""}>
            <button type="button" className="project-gallery-open" aria-label={`Agrandir : ${image.caption}`} onClick={event => { openerRef.current = event.currentTarget; setActive(index); }}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} placeholder="blur" blurDataURL={image.blurDataURL} sizes="(max-width: 760px) 100vw, 50vw"/>
              <span className="project-gallery-type">{labels[image.kind]}</span>
              <span className="project-gallery-expand" aria-hidden="true"><Expand size={19}/></span>
            </button>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.caption}</figcaption>
          </figure>))}
      </div>
      <dialog ref={dialogRef} className="project-lightbox" aria-labelledby={headingId} onCancel={event => { event.preventDefault(); setActive(null); }} onClick={event => { if (event.target === event.currentTarget)
        setActive(null); }} onKeyDown={event => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
            }
            if (event.key === "Tab") {
                const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
                const first = controls?.[0];
                const last = controls?.[controls.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                }
                else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }
        }}>
        {current && <>
          <div className="project-lightbox-bar"><span id={headingId}>{title}</span><button type="button" autoFocus onClick={() => setActive(null)} aria-label="Fermer la galerie"><X size={24}/></button></div>
          <div className="project-lightbox-image"><Image key={current.src} src={current.src} alt={current.alt} fill placeholder="blur" blurDataURL={current.blurDataURL} loading="eager" sizes="100vw" style={{ objectFit: "contain" }}/></div>
          <div className="project-lightbox-caption" aria-live="polite"><div><small>{labels[current.kind]} · {(active ?? 0) + 1} / {images.length}</small><p>{current.caption}</p></div><div className="project-lightbox-controls"><a href={current.src} target="_blank" rel="noreferrer">Ouvrir l’image</a><button type="button" onClick={() => move(-1)} aria-label="Image précédente"><ArrowLeft size={22}/></button><button type="button" onClick={() => move(1)} aria-label="Image suivante"><ArrowRight size={22}/></button></div></div>
        </>}
      </dialog>
    </div>), locale);
}
