"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { localize } from "@/lib/localize";
import { type Locale, translate } from "@/lib/i18n";
import { contact } from "@/lib/data";

const mapQuery = encodeURIComponent(`${contact.address}, Maroc`);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&output=embed`;

export default function ContactMap({ locale }: { locale: Locale }) {
  const [showMap, setShowMap] = useState(false);

  return localize(<section className="contact-map-section page-shell" aria-labelledby="contact-map-title">
    <div className="contact-map-heading">
      <div>
        <span className="eyebrow">Nous trouver</span>
        <h2 id="contact-map-title">ALMA-STRA à Laâyoune.</h2>
        <p>{contact.address}</p>
      </div>
      <a href={directionsUrl} target="_blank" rel="noopener noreferrer">Ouvrir l’itinéraire <ArrowUpRight size={17} aria-hidden="true" /></a>
    </div>
    <div className="contact-map-frame">
      {showMap ? <iframe
        src={embedUrl}
        title={translate("Carte de localisation d’ALMA-STRA", locale)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      /> : <button type="button" onClick={() => setShowMap(true)}>
        <MapPin size={30} strokeWidth={1.5} aria-hidden="true" />
        <span>Afficher la carte</span>
        <small>La carte Google Maps se charge après votre clic.</small>
      </button>}
    </div>
  </section>, locale);
}
