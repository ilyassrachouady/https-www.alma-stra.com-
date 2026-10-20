import { ArrowDown, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceDiagram({ service, compact = false }: { service: Service; compact?: boolean }) {
  if (service.diagram === "land") {
    const steps = compact ? ["Terrain brut", "Réseaux", "Voirie", "Terrain viabilisé"] : ["Étude", "Réseaux humides", "Réseaux secs", "Voirie & accès", "Contrôle", "Terrain viabilisé"];
    return (
      <div className={`service-diagram service-diagram-land ${compact ? "is-compact" : ""}`} aria-label="Transformation d'un terrain jusqu'à sa viabilisation">
        {steps.map((step, index) => (
          <div className="service-flow-node" key={step}>
            <div><small>0{index + 1}</small><strong>{step}</strong></div>
            {index < steps.length - 1 && <ArrowRight className="service-flow-arrow desktop-arrow" size={17} aria-hidden="true" />}
            {index < steps.length - 1 && <ArrowDown className="service-flow-arrow mobile-arrow" size={17} aria-hidden="true" />}
          </div>
        ))}
      </div>
    );
  }

  if (service.diagram === "space") {
    const stages = compact
      ? [
          ["Avant", "Espace existant"],
          ["Étude", "Usage & contraintes"],
          ["Travaux", "Coordination des lots"],
          ["Après", "Espace fonctionnel"],
        ]
      : [
          ["Analyse", "Usages, circulation, contraintes"],
          ["Conception", "Organisation des espaces"],
          ["Préparation", "Séquençage des interventions"],
          ["Exécution", "Aménagement & équipements"],
          ["Finitions", "Revêtements, plafonds, détails"],
          ["Livraison", "Espace prêt à être utilisé"],
        ];
    return (
      <div className={`service-diagram service-diagram-space ${compact ? "is-compact" : ""}`} aria-label="Transformation d'un espace existant en espace fonctionnel">
        {stages.map(([label, text], index) => (
          <div className="service-space-stage" key={label}>
            <span>{label}</span>
            <strong>{text}</strong>
            {index < stages.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
    );
  }

  const disciplines = compact
    ? ["Gros œuvre", "Électricité", "Plomberie", "Finitions"]
    : ["Gros œuvre", "Électricité", "Plomberie", "Lots techniques", "Second œuvre", "Finitions"];

  return (
    <div className={`service-diagram service-diagram-coordination ${compact ? "is-compact" : ""}`} aria-label="Coordination de plusieurs corps de métier par ALMA-STRA">
      <div className="service-coordination-center"><small>Pilotage global</small><strong>ALMA-STRA</strong></div>
      <div className="service-coordination-branches">
        {disciplines.map((discipline, index) => <span key={discipline} style={{ "--branch-index": index } as React.CSSProperties}>{discipline}</span>)}
      </div>
    </div>
  );
}
