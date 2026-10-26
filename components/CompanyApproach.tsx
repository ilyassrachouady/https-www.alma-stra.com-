import { ArrowDown, ArrowUpRight, ClipboardCheck, HardHat, Ruler } from "lucide-react";
import Link from "next/link";
import { localize } from "@/lib/localize";
import type { Locale } from "@/lib/i18n";

export default function CompanyApproach({ locale }: { locale: Locale }) {
  const steps = [
    { icon: Ruler, title: "Étude", description: "Comprendre le projet et préparer les travaux." },
    { icon: HardHat, title: "Exécution", description: "Coordonner les métiers et suivre le chantier." },
    { icon: ClipboardCheck, title: "Livraison", description: "Contrôler les finitions et réceptionner les travaux." },
  ];
  return localize(<aside className="company-approach" aria-label="Notre approche">
    <div className="company-approach-heading"><span>ALMA-STRA</span><span>Construction · Aménagement · Viabilisation</span></div>
    <h3>Votre projet,<br /><em>un seul pilotage.</em></h3>
    <ol className="company-approach-steps">{steps.map((step, index) => {
      const Icon = step.icon;
      return <li key={step.title}><span className="company-approach-step-icon"><Icon size={23} strokeWidth={1.5}/></span><div><span className="company-approach-number">0{index + 1}</span><h4>{step.title}</h4><p>{step.description}</p></div>{index < steps.length - 1 && <ArrowDown className="company-approach-connector" size={15} aria-hidden="true"/>}</li>;
    })}</ol>
    <Link className="company-approach-link" href="/societe">Découvrir notre société <ArrowUpRight size={18}/></Link>
  </aside>, locale);
}
