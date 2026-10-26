/** A single image map separates illustrative service visuals from published references. */
export const serviceMedia = {
  land: {
    src: "/images/services/viabilisation-concept.webp",
    alt: "Illustration de terrains viabilisés, voiries et réseaux",
    subject: "Terrain · Voirie · Réseaux",
    label: "Illustration IA",
    caption: "Illustration IA — voirie, réseaux et terrains prêts à bâtir",
    context: "Un terrain à raccorder et à rendre accessible.",
    result: "Un site desservi, organisé et prêt à bâtir.",
  },
  space: {
    src: "/images/services/amenagement-concept.webp",
    alt: "Illustration d’un aménagement intérieur professionnel",
    subject: "Distribution · Matières · Finitions",
    label: "Illustration IA",
    caption: "Illustration IA — distribution, matériaux et finitions",
    context: "Un espace brut ou inadapté à son usage.",
    result: "Un environnement fonctionnel, équipé et livré.",
  },
  coordination: {
    src: "/images/services/tce-concept.webp",
    alt: "Illustration de la coordination du gros œuvre et des lots techniques",
    subject: "Plans · Métiers · Pilotage",
    label: "Illustration IA",
    caption: "Illustration IA — structure et lots techniques coordonnés",
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
