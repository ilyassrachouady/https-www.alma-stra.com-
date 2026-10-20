import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact, services } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="alma-footer">
      <div className="page-shell alma-footer-main">
        <div className="alma-footer-brand">
          <BrandLogo className="alma-footer-logo" />
          <p>Société marocaine spécialisée dans les solutions de construction et d’aménagement.</p>
          <div className="alma-footer-contact">
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>

        <div className="alma-footer-col">
          <span className="alma-footer-label">Liens rapides</span>
          <Link href="/about">À propos</Link>
          <Link href="/expertise">Services</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Nous contacter</Link>
          <a href="https://alma-stra.com/conditions-generales/">Conditions générales</a>
          <a href="https://alma-stra.com/politique-de-confidentialite/">Politique de confidentialité</a>
          <a href="https://alma-stra.com/politique-de-cookies/">Politique des cookies</a>
        </div>

        <div className="alma-footer-col">
          <span className="alma-footer-label">Services</span>
          {services.map(service => <Link href={`/expertise/${service.slug}`} key={service.slug}>{service.title}</Link>)}
        </div>

        <div className="alma-footer-col alma-footer-news">
          <span className="alma-footer-label">Votre projet</span>
          <p>Construction, aménagement ou viabilisation : échangeons sur vos besoins.</p>
          <p>{contact.address}</p>
          <p>{contact.hours}</p>
          <Link className="alma-footer-arrow" href="/contact">Parler de votre projet <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="page-shell alma-footer-bottom">
        <span>© Copyright {new Date().getFullYear()} Alma-stra.com – Tous droits réservés</span>
        <span>{contact.address}</span>
        <a href="https://alma-stra.com/politique-de-cookies/">Gérer le consentement</a>
      </div>
    </footer>
  );
}
