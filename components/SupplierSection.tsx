import Image from "next/image";
import { localize } from "@/lib/localize";
import type { Locale } from "@/lib/i18n";

const suppliers = [
  { name: "Nexans", logo: "nexans" },
  { name: "Ingelec", logo: "ingelec" },
  { name: "L.A.P.", logo: "lap-current-hd" },
  { name: "Carrier", logo: "carrier" },
  { name: "Trane", logo: "trane" },
  { name: "Elkron", logo: "elkron-clean-hd" },
  { name: "AGT", logo: "agt-clean-hd" },
  { name: "Gadimat", logo: "gadimat-clean-hd" },
  { name: "Super Cérame", logo: "super-cerame-clean-hd" },
  { name: "Groupe Strapex Maroc", logo: "strapex-clean-hd" },
  { name: "Sorexi", logo: "sorexi" },
  { name: "Sika", logo: "sika" },
  { name: "Roca", logo: "roca-clean-hd" },
  { name: "Colorado", logo: "colorado-official" },
  { name: "Atlas", logo: "atlas-clean-hd" },
  { name: "Astral", logo: "astral-clean-hd" },
  { name: "Ciments du Maroc", logo: "ciments-du-maroc" },
  { name: "Vetcam", logo: "vetcam" },
];

export default function SupplierSection({ locale }: { locale: Locale }) {
  return localize(<section className="alma-section alma-suppliers" aria-labelledby="suppliers-title">
    <div className="page-shell">
      <div className="alma-suppliers-heading">
        <div><span className="alma-kicker"><span /> Nos fournisseurs</span><h2 id="suppliers-title">Les fournisseurs avec qui<br />nous travaillons.</h2></div>
        <p>Des matériaux aux finitions, des marques qui accompagnent nos chantiers.</p>
      </div>
      <ul className="alma-supplier-grid" aria-label="Nos fournisseurs">
        {suppliers.map(supplier => <li key={supplier.name}>
          {supplier.logo ? <Image src={`/images/suppliers/${supplier.logo}${["sika", "nexans", "ciments-du-maroc"].includes(supplier.logo) ? ".svg" : supplier.logo === "sorexi" ? "-clean.webp" : ".webp"}`} alt={supplier.name} width={200} height={90} sizes="(max-width: 600px) 120px, 140px" /> : <span className="alma-supplier-name" lang="fr" dir="ltr">{supplier.name}</span>}
        </li>)}
      </ul>
    </div>
  </section>, locale);
}
