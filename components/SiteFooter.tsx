import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact, services } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top page-shell">
        <div className="footer-brand">
          <span className="brand-name">ALMA—STRA</span>
          <p>Société marocaine spécialisée dans les solutions de construction et d’aménagement.</p>
        </div>
        <div className="footer-col"><span className="footer-label">Navigation</span><Link href="/">Accueil</Link><Link href="/expertise">Expertise</Link><Link href="/projects">Réalisations</Link><Link href="/about">À propos</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-col"><span className="footer-label">Expertises</span>{services.map(s => <Link href={`/expertise/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div>
        <div className="footer-col"><span className="footer-label">Coordonnées</span><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>{contact.address}</p><Link className="footer-arrow" href="/contact">Nous écrire <ArrowUpRight size={15}/></Link></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} ALMA-STRA</span><span>Laâyoune · Maroc</span></div>
    </footer>
  );
}
