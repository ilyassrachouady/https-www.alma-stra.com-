import { localize } from "@/lib/localize";
import { type Locale } from "@/lib/i18n";
import Image from "next/image";
import { partners } from "@/lib/data";
function LogoGroup({ hidden = false, locale = "fr" }: {
    hidden?: boolean; locale?: Locale;
}) {
    return localize((<div className="alma-logo-marquee-group" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (<div className="alma-logo-marquee-item" key={`${hidden ? "duplicate-" : ""}${partner.name}`}>
          <Image src={partner.src} alt={hidden ? "" : partner.name} width={210} height={110} sizes="180px"/>
        </div>))}
    </div>), locale);
}
export default function LogoMarquee({ locale = "fr" }: { locale?: Locale }) {
    return localize((<div className="alma-logo-marquee" aria-label="Partenaires et références ALMA-STRA">
      <div className="alma-logo-marquee-track">
        <LogoGroup locale={locale} />
        <LogoGroup locale={locale} hidden/>
      </div>
    </div>), locale);
}
