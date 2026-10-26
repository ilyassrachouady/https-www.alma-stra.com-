"use client";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
export default function HeroMedia({ src, alt, locale = "fr" }: {
    locale?: Locale;
    src: string;
    alt: string;
}) {
    const mediaRef = useRef<HTMLDivElement>(null);
    const layerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const media = mediaRef.current;
        const layer = layerRef.current;
        if (!media || !layer)
            return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (reduced)
            return;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let targetScroll = 0;
        let raf = 0;
        const animate = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY + targetScroll - currentY) * 0.12;
            layer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.045)`;
            if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY + targetScroll - currentY) > 0.02) {
                raf = requestAnimationFrame(animate);
            }
            else {
                raf = 0;
            }
        };
        const schedule = () => {
            if (!raf)
                raf = requestAnimationFrame(animate);
        };
        const updateScroll = () => {
            const rect = media.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const normalized = (viewportCenter - center) / Math.max(window.innerHeight, 1);
            targetScroll = Math.max(-28, Math.min(28, normalized * 42));
            schedule();
        };
        const handlePointer = (event: PointerEvent) => {
            if (!finePointer)
                return;
            const rect = media.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            targetX = x * 5;
            targetY = y * 5;
            schedule();
        };
        const resetPointer = () => {
            targetX = 0;
            targetY = 0;
            schedule();
        };
        updateScroll();
        window.addEventListener("scroll", updateScroll, { passive: true });
        window.addEventListener("resize", updateScroll);
        if (finePointer) {
            media.addEventListener("pointermove", handlePointer);
            media.addEventListener("pointerleave", resetPointer);
        }
        return () => {
            if (raf)
                cancelAnimationFrame(raf);
            window.removeEventListener("scroll", updateScroll);
            window.removeEventListener("resize", updateScroll);
            media.removeEventListener("pointermove", handlePointer);
            media.removeEventListener("pointerleave", resetPointer);
        };
    }, []);
    return localize((<div ref={mediaRef} className="alma-hero-media alma-hero-media-enter">
      <div ref={layerRef} className="alma-hero-media-parallax">
        <Image src={src} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 52vw"/>
      </div>
      <Link href="/projects/province-laayoune" className="alma-hero-media-badge"><div><strong>ALMA-STRA</strong><span>Laâyoune · Bâtiment administratif</span></div><ArrowUpRight size={20} aria-hidden="true"/></Link>
    </div>), locale);
}
