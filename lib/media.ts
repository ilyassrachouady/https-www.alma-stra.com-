/** A single image map separates illustrative service visuals from published references. */
export const serviceMedia = {
  land: {
    src: "/images/expertise/land.webp",
    alt: "Vue aérienne illustrative de lots desservis, de voirie et de réseaux en cours de réalisation",
    subject: "Terrain · Voirie · Réseaux",
    caption: "Illustration générée — terrain et infrastructures",
    context: "Un terrain à raccorder et à rendre accessible.",
    result: "Un site desservi, organisé et prêt à bâtir.",
  },
  space: {
    src: "/images/expertise/space.webp",
    alt: "Visualisation d’un espace professionnel fini : cloisons vitrées, revêtements et éclairage intégré",
    subject: "Distribution · Matières · Finitions",
    caption: "Illustration générée — espace aménagé",
    context: "Un espace brut ou inadapté à son usage.",
    result: "Un environnement fonctionnel, équipé et livré.",
  },
  coordination: {
    src: "/images/expertise/coordination.webp",
    alt: "Visualisation de responsables de chantier coordonnant les plans et les lots techniques",
    subject: "Plans · Métiers · Pilotage",
    caption: "Illustration générée — coordination du chantier",
    context: "Plusieurs métiers et des interfaces à maîtriser.",
    result: "Un interlocuteur unique, de l’étude à la livraison.",
  },
} as const;

export const imagery = {
  hero: "/images/projects/VUE-1-1.jpg",
  field: "/images/projects/MINJ8006.jpg",
};

/** These names and photo associations come from the original public projects index. */
export const projectImageSource = "https://alma-stra.com/projects/";
