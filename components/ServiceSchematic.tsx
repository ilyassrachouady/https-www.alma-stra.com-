"use client";
import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import { useId, useState } from "react";
import type { ServiceDiagram } from "@/lib/data";
/** Concept diagrams describe the service; they are never presented as project plans. */
export default function ServiceSchematic({ kind, locale = "fr" }: {
    locale?: Locale;
    kind: ServiceDiagram;
}) {
    const [stage, setStage] = useState(1);
    const id = useId();
    const land = kind === "land";
    const labels = land ? ["Terrain brut", "Terrain desservi"] : ["Espace existant", "Espace aménagé"];
    return localize((<div className={`expertise-schematic expertise-schematic-${kind}`}>
      <div className="expertise-schematic-bar">
        <span>Schéma de principe</span>
        <div role="group" aria-label="Comparer les étapes de transformation">
          {labels.map((label, index) => <button type="button" key={label} aria-pressed={stage === index} aria-controls={id} onClick={() => setStage(index)}>{label}</button>)}
        </div>
      </div>
      <div id={id} className="expertise-plan" role="img" aria-label={land ? (stage ? "Parcelles desservies par une voirie centrale et des réseaux d’eau, d’électricité et d’assainissement" : "Terrain sans voirie ni raccordements") : (stage ? "Plan aménagé avec bureaux, espaces de circulation et zones techniques" : "Plateau existant sans distribution intérieure")}>
        <svg viewBox="0 0 800 400" aria-hidden="true">
          <defs><pattern id={`${id}-grid`} width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="currentColor" strokeWidth=".3"/></pattern></defs>
          <rect width="800" height="400" fill={`url(#${id}-grid)`} opacity=".35"/>
          {land ? <>
            <path d="M64 54L707 35 747 330 103 366Z" className="plan-boundary"/>
            <path d="M110 115Q260 15 439 100T718 130M96 260Q300 190 440 280T730 280" className="plan-contour"/>
            {stage === 1 && <g className="plan-delivered">
              <path d="M90 196H712" stroke="#dce3d5" strokeWidth="52"/>
              <path d="M90 196H712" stroke="#68725f" strokeWidth="1" strokeDasharray="9 9"/>
              {[140, 245, 350, 455, 560].map(x => <g key={x}><rect x={x} y="81" width="84" height="82" className="plan-lot"/><rect x={x} y="231" width="84" height="82" className="plan-lot"/><path d={`M${x + 42} 163V180M${x + 42} 213V231`} className="plan-network"/></g>)}
              <path d="M90 178H704M90 214H704" className="plan-network"/>
              <path d="M90 226H704" stroke="#688aa0" fill="none" strokeWidth="2" strokeDasharray="5 5"/>
              {[182, 287, 392, 497, 602].map(x => <circle key={x} cx={x} cy="214" r="4" fill="#5d8e27"/>)}
            </g>}
          </> : <>
            <rect x="100" y="60" width="600" height="280" fill="#fafbf7" stroke="currentColor" strokeWidth="4"/>
            <path d="M165 60H350M410 60H625M165 340H350M410 340H625" stroke="#99b5bd" strokeWidth="7"/>
            {stage === 1 ? <g>
              <path d="M300 60V165M300 235V340M500 60V165M500 235V340M100 165H700M100 235H700" stroke="currentColor" strokeWidth="2"/>
              <rect x="121" y="81" width="154" height="60" rx="2" className="plan-lot"/>
              <rect x="326" y="80" width="148" height="60" rx="2" className="plan-lot"/>
              <rect x="526" y="80" width="148" height="60" rx="2" className="plan-lot"/>
              <rect x="128" y="258" width="144" height="54" rx="24" className="plan-lot"/>
              <rect x="326" y="258" width="148" height="54" rx="2" className="plan-lot"/>
              <path d="M527 259H674V313H527Z" className="plan-lot"/>
              <path d="M120 200H680" className="plan-network" strokeDasharray="6 6"/>
            </g> : <path d="M140 100L660 300M660 100L140 300" className="plan-contour"/>}
          </>}
          <path d="M755 65V25L746 40M755 25L764 40" stroke="currentColor" fill="none" strokeWidth="1.5"/>
          <path d="M50 376H150M50 371V381M100 371V381M150 371V381" stroke="currentColor" fill="none"/>
        </svg>
      </div>
      <div className="expertise-plan-legend" aria-live="polite">
        <strong>{labels[stage]}</strong>
        <span>{land ? (stage ? "Voirie · Réseaux humides · Réseaux secs · Parcelles" : "Accès et raccordements à organiser") : (stage ? "Distribution · Circulation · Équipements · Finitions" : "Usages et répartition des espaces à définir")}</span>
      </div>
      <p className="expertise-visual-note">Représentation pédagogique, sans échelle. Chaque projet fait l’objet d’une étude spécifique.</p>
    </div>), locale);
}
