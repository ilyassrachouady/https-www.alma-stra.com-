/** A single image map separates illustrative service visuals from published references. */
export const serviceMedia = {
  land: {
    src: "/images/portfolio/viabilisation/reseaux-enterres.webp",
    alt: "Conduites et ouvrages d’assainissement en tranchée — chantier de viabilisation",
    subject: "Terrain · Voirie · Réseaux",
    label: "Chantier ALMA-STRA",
    caption: "Photographie ALMA-STRA — travaux de viabilisation",
    context: "Un terrain à raccorder et à rendre accessible.",
    result: "Un site desservi, organisé et prêt à bâtir.",
  },
  space: {
    src: "/images/portfolio/caserne/pavage.webp",
    alt: "Pavage et aménagement des abords de la caserne des sapeurs-pompiers",
    subject: "Distribution · Matières · Finitions",
    label: "Chantier ALMA-STRA",
    caption: "Photographie ALMA-STRA — aménagement des espaces extérieurs",
    context: "Un espace brut ou inadapté à son usage.",
    result: "Un environnement fonctionnel, équipé et livré.",
  },
  coordination: {
    src: "/images/portfolio/province/structure.webp",
    alt: "Structure en béton du bâtiment du 6e arrondissement — vue de chantier",
    subject: "Plans · Métiers · Pilotage",
    label: "Chantier ALMA-STRA",
    caption: "Photographie ALMA-STRA — chantier du 6e arrondissement",
    context: "Plusieurs métiers et des interfaces à maîtriser.",
    result: "Un interlocuteur unique, de l’étude à la livraison.",
  },
} as const;

export const imagery = {
  hero: "/images/portfolio/province/facade.webp",
  field: "/images/portfolio/conseil/cour-chantier.webp",
};

/** These names and photo associations come from the original public projects index. */
export const projectImageSource = "https://alma-stra.com/projects/";
