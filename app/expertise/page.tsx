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
          <h1>Trois expertises. Un projet maîtrisé.</h1>
          <p>Raccorder un terrain. Transformer un espace. Coordonner tous les corps de métier. Découvrez le périmètre, les étapes et le résultat de chaque accompagnement.</p>
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
