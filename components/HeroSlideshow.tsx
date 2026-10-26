"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { translate, type Locale } from "@/lib/i18n";

const slides = [
  { src: "/images/hero/slide-1.webp", alt: "Vue d’étude — bâtiment et aménagement paysager", position: "55% 52%" },
  { src: "/images/hero/slide-2.webp", alt: "Vue d’étude — façade principale et entrée", position: "56% 55%" },
  { src: "/images/hero/slide-3.webp", alt: "Vue d’étude — détails architecturaux de la façade", position: "57% 50%" },
  { src: "/images/hero/slide-4.webp", alt: "Vue d’étude — complexe d’activités sociales", position: "60% 50%" },
  { src: "/images/hero/slide-5.webp", alt: "Vue d’étude — volumes et façades du complexe", position: "55% 50%" },
];
const duration = 6000;
const subscribeMotion = (callback: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const getMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const subscribeVisibility = (callback: () => void) => {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
};
const getVisibility = () => document.visibilityState === "visible";
const serverSnapshot = () => false;

export default function HeroSlideshow({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const [preparedCount, setPreparedCount] = useState(1);
  const ready = useRef(new Set<number>());
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotion, serverSnapshot);
  const visible = useSyncExternalStore(subscribeVisibility, getVisibility, serverSnapshot);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const timer = window.setInterval(() => {
      const next = (active + 1) % slides.length;
      // Keep the current image until the next one has decoded.
      if (!ready.current.has(next)) return;
      setActive(next);
      setPreparedCount(count => Math.max(count, Math.min(next + 2, slides.length)));
    }, duration);
    return () => window.clearInterval(timer);
  }, [active, reducedMotion, visible]);

  return <div className="hero-slideshow" aria-label={translate("Perspectives architecturales", locale)}>
    <div className="hero-slideshow-images">{slides.slice(0, preparedCount).map((slide, index) => <div key={slide.src} className={`hero-slide${index === active ? " is-active" : ""}`} aria-hidden={index !== active}>
      <Image src={slide.src} alt={translate(slide.alt, locale)} fill sizes="100vw" preload={index === 0} loading={index === 0 ? undefined : "eager"} fetchPriority={index === 0 ? "high" : "low"} onLoad={() => {
        ready.current.add(index);
        if (index === 0) setPreparedCount(count => Math.max(count, 2));
      }} style={{ objectPosition: slide.position }}/>
    </div>)}</div>
    <div className="hero-slideshow-shade" aria-hidden="true"/>
  </div>;
}
