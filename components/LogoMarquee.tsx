import Image from "next/image";
import { partners } from "@/lib/data";

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="alma-logo-marquee-group" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <div className="alma-logo-marquee-item" key={`${hidden ? "duplicate-" : ""}${partner.name}`}>
          <Image src={partner.src} alt={hidden ? "" : partner.name} width={210} height={110} sizes="180px" />
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="alma-logo-marquee" aria-label="Partenaires et références ALMA-STRA">
      <div className="alma-logo-marquee-track">
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </div>
  );
}
