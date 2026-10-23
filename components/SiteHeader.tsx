"use client";
import { localize } from "@/lib/localize";
import { type Locale, localePath, unlocalizedPath } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Clock3, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact, services } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";
const nav = [
    ["Accueil", "/"],
    ["À propos", "/about"],
    ["Société", "/societe"],
    ["Projets", "/projects"],
    ["Contact", "/contact"],
];
export default function SiteHeader({ locale = "fr" }: { locale?: Locale }) {
    const pathname = unlocalizedPath(usePathname());
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDialogElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => { const close = () => setOpen(false); window.addEventListener("popstate", close); return () => window.removeEventListener("popstate", close); }, []);
    useEffect(() => {
        if (!open)
            return;
        previousFocus.current = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        const previousRootOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        const menu = menuRef.current;
        const focusables = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (menu && !menu.open) menu.showModal();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
                return;
            }
            if (event.key !== "Tab" || !focusables?.length)
                return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (!menu?.contains(document.activeElement)) { event.preventDefault(); first.focus(); return; }
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            menu?.close();
            document.body.style.overflow = previousOverflow;
            document.documentElement.style.overflow = previousRootOverflow;
            previousFocus.current?.focus();
        };
    }, [open]);
    return localize((<>
      <header className={`alma-site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="alma-topbar">
          <div className="page-shell alma-topbar-inner">
            <a href={`tel:${contact.phoneHref}`}><Phone size={13}/>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}><Mail size={13}/>{contact.email}</a>
            <span><Clock3 size={13}/>{contact.hours}</span>
          </div>
        </div>
        <div className="alma-nav-wrap">
          <div className="page-shell alma-nav-inner">
            <Link href="/" className="alma-logo" aria-label="ALMA-STRA — Accueil"><BrandLogo /></Link>
            <nav className="alma-desktop-nav" aria-label="Navigation principale">
              <Link className={pathname === "/" ? "active" : ""} href="/">Accueil</Link>
              <Link className={pathname === "/about" ? "active" : ""} href="/about">À propos</Link>
              <Link className={pathname === "/societe" ? "active" : ""} href="/societe">Société</Link>
                    <div className="alma-nav-dropdown">
                <Link className={pathname.startsWith("/expertise") ? "active" : ""} href="/expertise">Services <ChevronDown size={14}/></Link>
                <div className="alma-nav-dropdown-panel">
                  <span>Nos services</span>
                  {services.map(service => <Link href={`/expertise/${service.slug}`} key={service.slug}>{service.title}</Link>)}
                </div>
              </div>
              <Link className={pathname.startsWith("/projects") ? "active" : ""} href="/projects">Projets</Link>
              <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact</Link>
            </nav>
            <a className="language-switch" onClick={event => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); window.location.assign(localePath(window.location.pathname, locale === "fr" ? "ar" : "fr") + window.location.search + window.location.hash); }} href={localePath(pathname, locale === "fr" ? "ar" : "fr")} lang={locale === "fr" ? "ar" : "fr"} hrefLang={locale === "fr" ? "ar" : "fr"} aria-label={locale === "fr" ? "عرض هذه الصفحة بالعربية" : "Voir cette page en français"}>{locale === "fr" ? "العربية" : "FR"}</a>
                    <Link href="/contact" className="alma-nav-cta">Demander un devis <ArrowUpRight size={14}/></Link>
            <button className="alma-menu-toggle" aria-expanded={open} aria-controls="alma-mobile-menu" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}><Menu size={24}/></button>
          </div>
        </div>
      </header>

      <dialog onCancel={event => { event.preventDefault(); setOpen(false); }} ref={menuRef} id="alma-mobile-menu" className={`alma-mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label="Navigation principale">
        <div className="alma-mobile-top">
          <Link href="/" onClick={() => setOpen(false)} aria-label="ALMA-STRA — Accueil"><BrandLogo /></Link>
          <button onClick={() => setOpen(false)} aria-label="Fermer le menu"><X size={25}/></button>
        </div>
        <div className="alma-mobile-links">
          {nav.slice(0, 3).map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}
          <Link href="/expertise" onClick={() => setOpen(false)}>Services</Link>
          <div className="alma-mobile-subnav">
            {services.map(service => <Link href={`/expertise/${service.slug}`} onClick={() => setOpen(false)} key={service.slug}>{service.title}</Link>)}
          </div>
          {nav.slice(3).map(([label, href]) => <Link href={href} onClick={() => setOpen(false)} key={href}>{label}</Link>)}
        </div>
        <Link className="alma-mobile-cta" href="/contact" onClick={() => setOpen(false)}>Parler de votre projet <ArrowUpRight size={16}/></Link>
        <div className="alma-mobile-contact">
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.hours}</span>
        </div>
      </dialog>
    </>), locale);
}
