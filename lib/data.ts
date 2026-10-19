export const contact = {
  phone: "+212 661-347602",
  phoneHref: "+212661347602",
  email: "contact@alma-stra.com",
  address: "Av. Sakia El Hamra N°28, Hay Chouhada, Laâyoune",
  hours: "Lundi – Vendredi · 08:00 – 17:00",
};

export const imagery = {
  viabilisation: "https://alma-stra.com/wp-content/uploads/2015/05/2-2.jpeg",
  amenagement: "https://alma-stra.com/wp-content/uploads/2015/05/Design-sans-titre-2.png",
  tce: "https://alma-stra.com/wp-content/uploads/2015/05/1.jpg",
  field: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-1.png",
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  image: string;
  details: string[];
  capabilities: { title: string; items: string[] }[];
};

export const services: Service[] = [
  {
    slug: "viabilisation-des-lotissements",
    number: "01",
    title: "Viabilisation des lotissements",
    intro: "Réalisation des réseaux, voiries et infrastructures nécessaires pour rendre les terrains constructibles et prêts à bâtir.",
    image: imagery.viabilisation,
    details: [
      "ALMA-STRA accompagne promoteurs, collectivités et aménageurs dans la mise en place des infrastructures indispensables à la viabilisation.",
      "La prestation couvre les réseaux humides et secs, les voiries, les accès et les aménagements extérieurs, avec un suivi rigoureux de chaque étape."
    ],
    capabilities: [
      { title: "Réseaux humides", items: ["Eau potable", "Assainissement eaux usées", "Eaux pluviales", "Stations de relevage si nécessaire"] },
      { title: "Réseaux secs", items: ["Électricité basse et moyenne tension", "Télécommunications", "Fibre optique"] },
      { title: "Voiries & extérieurs", items: ["Routes et voies d’accès", "Trottoirs et parkings", "Éclairage public", "Signalisation"] },
      { title: "Études & contrôle", items: ["Études hydrauliques", "Études topographiques", "Tests et contrôles des installations"] }
    ]
  },
  {
    slug: "amenagement-btp",
    number: "02",
    title: "Aménagement BTP",
    intro: "Transformation d’espaces professionnels, commerciaux, industriels ou résidentiels pour les rendre fonctionnels, durables et adaptés à leur usage.",
    image: imagery.amenagement,
    details: [
      "Du terrain brut à l’espace opérationnel, ALMA-STRA conçoit et réalise des aménagements répondant aux contraintes fonctionnelles, techniques et d’exploitation.",
      "Les interventions peuvent concerner les extérieurs, les intérieurs et les équipements techniques et de sécurité."
    ],
    capabilities: [
      { title: "Aménagement extérieur", items: ["Voiries et trottoirs", "Parkings", "Espaces verts", "Clôtures", "Éclairage extérieur"] },
      { title: "Aménagement intérieur", items: ["Optimisation des espaces", "Cloisons", "Faux plafonds", "Revêtements", "Aménagements décoratifs"] },
      { title: "Technique & sécurité", items: ["Infrastructures électriques et fluides", "Signalétique", "Sécurité incendie", "Contrôle d’accès"] }
    ]
  },
  {
    slug: "travaux-tous-corps-detat",
    number: "03",
    title: "Travaux tous corps d’état",
    intro: "Pilotage complet des lots techniques et architecturaux, des études à la livraison finale, avec un interlocuteur unique.",
    image: imagery.tce,
    details: [
      "ALMA-STRA prend en charge des projets résidentiels, publics, industriels et commerciaux avec une coordination globale du chantier.",
      "L’approche TCE vise une qualité homogène, une planification centralisée et une exécution maîtrisée de l’ensemble des corps de métier."
    ],
    capabilities: [
      { title: "Gros œuvre", items: ["Maçonnerie", "Structure", "Travaux préparatoires"] },
      { title: "Lots techniques", items: ["Électricité", "Plomberie", "Fluides", "Équipements techniques"] },
      { title: "Second œuvre", items: ["Revêtements", "Finitions", "Aménagements intérieurs"] },
      { title: "Pilotage", items: ["Planification", "Coordination des métiers", "Contrôle qualité", "Reporting régulier"] }
    ]
  }
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
};

export const projects: Project[] = [
  { slug: "college-ibn-khaldoune-al-omrane", number: "01", title: "Collège Ibn Khaldoune · Al Omrane", category: "Équipement public", image: imagery.field },
  { slug: "al-omrane-souss-massa", number: "02", title: "Al Omrane Souss Massa", category: "Aménagement", image: imagery.amenagement },
  { slug: "province-laayoune", number: "03", title: "Province Laâyoune", category: "Travaux & aménagement", image: imagery.tce },
  { slug: "terrain-de-sport-al-omrane", number: "04", title: "Terrain de sport · Al Omrane", category: "Équipement sportif", image: imagery.viabilisation },
  { slug: "atlas-sahara", number: "05", title: "Atlas Sahara", category: "Aménagement", image: imagery.field },
  { slug: "caserne-des-sapeurs-pompiers", number: "06", title: "Caserne des sapeurs-pompiers", category: "Équipement public", image: imagery.tce },
  { slug: "conseil-provincial-laayoune", number: "07", title: "Conseil Provincial Laâyoune", category: "Institutionnel", image: imagery.amenagement }
];

export const partners = [
  { name: "Groupe Al Omrane", src: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-20.png" },
  { name: "Atlas Sahara", src: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-19.png" },
  { name: "ANEP", src: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-18.png" },
  { name: "Région Marrakech-Safi", src: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-16.png" },
  { name: "Préfecture d’Inezgane-Aït Melloul", src: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-15.png" }
];

export const process = [
  { number: "01", title: "Étude", text: "Comprendre les objectifs, le site et les contraintes techniques avant d’engager les travaux." },
  { number: "02", title: "Planification", text: "Structurer les lots, les séquences d’intervention et le calendrier du chantier." },
  { number: "03", title: "Exécution", text: "Coordonner les équipes et mettre en œuvre les travaux selon les exigences du projet." },
  { number: "04", title: "Contrôle", text: "Suivre l’avancement, la qualité et la conformité tout au long de la réalisation." },
  { number: "05", title: "Livraison", text: "Finaliser, vérifier et remettre un ouvrage prêt à être exploité." }
];
