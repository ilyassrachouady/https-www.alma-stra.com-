import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServicePreview from "@/components/ServicePreview";
import { services } from "@/lib/data";

export const metadata = {
  title: "Expertise",
  description: "Comprendre les expertises ALMA-STRA : viabilisation, aménagement BTP et travaux tous corps d’état, de l'enjeu au résultat.",
};

export default function ExpertisePage() {
  return (
    <main className="expertise-overview-page">
      <section className="expertise-overview-hero page-shell">
        <Reveal variant="rise">
          <span className="alma-kicker"><span /> Nos expertises</span>
          <h1>Comprendre ce que nous prenons réellement en charge.</h1>
          <p>Préparer un terrain, transformer un espace et piloter un chantier complet sont trois responsabilités différentes. Cette page montre ce qu’ALMA‑STRA gère, comment chaque expertise progresse et quel résultat le client obtient.</p>
        </Reveal>
      </section>

      <section className="expertise-overview-stories page-shell">
        {services.map((service, index) => <ServicePreview service={service} index={index} key={service.slug} />)}
      </section>

      <section className="expertise-overview-cta">
        <div className="page-shell">
          <Reveal variant="rise">
            <span className="alma-kicker alma-kicker-light"><span /> Votre besoin</span>
            <h2>Vous ne savez pas encore quelle expertise correspond à votre projet ?</h2>
            <Link className="alma-btn alma-btn-light" href="/contact">Parler de votre projet <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
