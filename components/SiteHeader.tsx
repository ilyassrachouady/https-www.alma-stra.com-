"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Clock3, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, services } from "@/lib/data";

const nav = [
  ["Accueil", "/"],
  ["À propos", "/about"],
  ["Projets", "/projects"],
  ["Contact", "/contact"],
];

function Brand() {
  return (
    <span className="alma-brand-lockup" aria-label="ALMA-STRA">
      <span className="alma-brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span className="alma-brand-copy">
        <strong>ALMA-STRA</strong>
        <small>Travaux de Construction & Aménagement</small>
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <header className={`alma-site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="alma-topbar">
          <div className="page-shell alma-topbar-inner">
            <a href={`tel:${contact.phoneHref}`}><Phone size={13} />{contact.phone}</a>
            <a href={`mailto:${contact.email}`}><Mail size={13} />{contact.email}</a>
            <span><Clock3 size={13} />{contact.hours}</span>
          </div>
        </div>
        <div className="alma-nav-wrap">
          <div className="page-shell alma-nav-inner">
            <Link href="/" className="alma-logo"><Brand /></Link>
            <nav className="alma-desktop-nav" aria-label="Navigation principale">
              <Link className={pathname === "/" ? "active" : ""} href="/">Accueil</Link>
              <Link className={pathname === "/about" ? "active" : ""} href="/about">À propos</Link>
              <div className="alma-nav-dropdown">
                <Link className={pathname.startsWith("/expertise") ? "active" : ""} href="/expertise">Services <ChevronDown size={14} /></Link>
                <div className="alma-nav-dropdown-panel">
                  <span>Nos services</span>
                  {services.map(service => <Link href={`/expertise/${service.slug}`} key={service.slug}>{service.title}</Link>)}
                </div>
              </div>
              <Link className={pathname.startsWith("/projects") ? "active" : ""} href="/projects">Projets</Link>
              <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact</Link>
            </nav>
            <Link href="/contact" className="alma-nav-cta">Demander un devis</Link>
            <button className="alma-menu-toggle" aria-expanded={open} aria-label="Ouvrir le menu" onClick={() => setOpen(true)}><Menu size={24} /></button>
          </div>
        </div>
      </header>

      <div className={`alma-mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="alma-mobile-top">
          <Link href="/" onClick={() => setOpen(false)}><Brand /></Link>
          <button onClick={() => setOpen(false)} aria-label="Fermer le menu"><X size={25} /></button>
        </div>
        <div className="alma-mobile-links">
          {nav.slice(0, 2).map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}
          <Link href="/expertise" onClick={() => setOpen(false)}>Services</Link>
          <div className="alma-mobile-subnav">
            {services.map(service => <Link href={`/expertise/${service.slug}`} onClick={() => setOpen(false)} key={service.slug}>{service.title}</Link>)}
          </div>
          {nav.slice(2).map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}
        </div>
        <div className="alma-mobile-contact">
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.hours}</span>
        </div>
      </div>
    </>
  );
}
