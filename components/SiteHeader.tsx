"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/data";

const nav = [
  ["Accueil", "/"],
  ["Expertise", "/expertise"],
  ["Réalisations", "/projects"],
  ["À propos", "/about"],
  ["Contact", "/contact"]
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="ALMA-STRA — Accueil">
            <span className="brand-mark">A</span>
            <span className="brand-name">ALMA—STRA</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <Link href="/contact" className="header-cta">Parler de votre projet <ArrowUpRight size={16} /></Link>
          <button className="menu-toggle" aria-expanded={open} aria-label="Ouvrir le menu" onClick={() => setOpen(true)}><Menu size={24} /></button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top">
          <span className="brand-name">ALMA—STRA</span>
          <button onClick={() => setOpen(false)} aria-label="Fermer le menu"><X size={26} /></button>
        </div>
        <div className="mobile-menu-links">
          {nav.map(([label, href], i) => (
            <Link href={href} onClick={() => setOpen(false)} key={href}><span>0{i + 1}</span>{label}</Link>
          ))}
        </div>
        <div className="mobile-menu-contact">
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>{contact.address}</p>
        </div>
      </div>
    </>
  );
}
