export const contact = {
  phone: "+212 661-347602",
  phoneHref: "+212661347602",
  email: "contact@alma-stra.com",
  address: "Av. Sakia El Hamra N°28, Hay Chouhada, Laâyoune",
  hours: "Lundi - Vendredi: 08.00 - 17.00",
};

export const imagery = {
  hero: "https://alma-stra.com/wp-content/uploads/2015/05/Design-sans-titre-2.png",
  viabilisation: "https://images.unsplash.com/photo-1723369962534-34866660b716?auto=format&fit=crop&w=1800&q=86",
  amenagement: "https://images.unsplash.com/photo-1774953037913-af0cf688491a?auto=format&fit=crop&w=1800&q=86",
  tce: "https://images.unsplash.com/photo-1609867271967-a82f85c48531?auto=format&fit=crop&w=1800&q=86",
  field: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-1.png",
};

// Project photography stays independent from the service storytelling images.
// This prevents service visuals from being presented as photographs of ALMA-STRA projects.
export const projectImagery = {
  field: "https://alma-stra.com/wp-content/uploads/2025/07/Design-sans-titre-1.png",
  amenagement: "https://alma-stra.com/wp-content/uploads/2015/05/Design-sans-titre-2.png",
  tce: "https://alma-stra.com/wp-content/uploads/2015/05/1.jpg",
  viabilisation: "https://alma-stra.com/wp-content/uploads/2015/05/2-2.jpeg",
};

export type ServiceDiagram = "land" | "space" | "coordination";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  statement: string;
  intro: string;
  outcome: string;
  image: string;
  imagePosition?: string;
  diagram: ServiceDiagram;
  keywords: string[];
  problemTitle: string;
  problemText: string;
  details: string[];
  capabilities: { title: string; items: string[] }[];
  process: string[];
  clientValue: string[];
};

export const services: Service[] = [
  {
    slug: "viabilisation-des-lotissements",
    number: "01",
    title: "Viabilisation des lotissements",
    shortTitle: "Viabilisation",
    statement: "Du terrain brut au terrain prêt à bâtir.",
    intro: "Réalisation des réseaux (eau, électricité, voirie, assainissement…) pour rendre les terrains constructibles et prêts à bâtir.",
    outcome: "ALMA-STRA coordonne les infrastructures nécessaires pour rendre un terrain constructible, accessible et prêt à accueillir son futur projet.",
    image: imagery.viabilisation,
    imagePosition: "center",
    diagram: "land",
    keywords: ["Voirie", "Eau", "Assainissement", "Électricité"],
    problemTitle: "Rendre un terrain réellement exploitable demande de coordonner plusieurs réseaux et contraintes techniques.",
    problemText: "La viabilisation ne se limite pas à un seul lot. Elle implique les réseaux humides et secs, les accès, les voiries, les aménagements extérieurs et les contrôles nécessaires avant l'accueil des futures constructions.",
    details: [
      "La viabilisation est une étape cruciale pour rendre un terrain constructible et exploitable. ALMA-STRA accompagne promoteurs, collectivités et aménageurs dans la mise en place des infrastructures indispensables.",
      "Nos équipes assurent un suivi rigoureux des réseaux, voiries et aménagements extérieurs afin de garantir une exécution structurée et conforme au projet."
    ],
    capabilities: [
      { title: "Réseaux humides", items: ["Eau potable", "Assainissement eaux usées", "Eaux pluviales", "Stations de relevage si nécessaire"] },
      { title: "Réseaux secs", items: ["Électricité basse et moyenne tension", "Télécommunications", "Fibre optique"] },
      { title: "Voiries & extérieurs", items: ["Routes et voies d’accès", "Trottoirs et parkings", "Éclairage public", "Signalisation"] },
      { title: "Études & contrôle", items: ["Études hydrauliques", "Études topographiques", "Tests et contrôles des installations"] }
    ],
    process: ["Étude", "Réseaux humides", "Réseaux secs", "Voirie & accès", "Contrôle", "Terrain viabilisé"],
    clientValue: [
      "Un seul pilotage pour coordonner les infrastructures du lotissement",
      "Des réseaux et accès pensés ensemble plutôt que traités séparément",
      "Une vision claire des étapes avant l'accueil des futures constructions",
      "Un terrain raccordé, accessible et prêt pour la suite du projet"
    ]
  },
  {
    slug: "amenagement-btp",
    number: "02",
    title: "Aménagement BTP",
    shortTitle: "Aménagement BTP",
    statement: "Transformer les espaces. Optimiser chaque usage.",
    intro: "Optimisation et transformation d’espaces professionnels, commerciaux, industriels ou résidentiels selon les normes et les besoins fonctionnels.",
    outcome: "ALMA-STRA transforme un espace existant ou brut en environnement fonctionnel, durable et adapté à son usage réel.",
    image: imagery.amenagement,
    imagePosition: "center",
    diagram: "space",
    keywords: ["Cloisons", "Revêtements", "Plafonds", "Équipements techniques"],
    problemTitle: "Un espace peut être construit sans être réellement adapté à son usage.",
    problemText: "Circulation, distribution des zones, finitions, équipements techniques et sécurité doivent fonctionner ensemble. L'aménagement organise ces éléments pour rendre le lieu opérationnel et cohérent avec les besoins du projet.",
    details: [
      "ALMA-STRA met son expertise au service de vos projets d’aménagement BTP pour transformer vos espaces en lieux fonctionnels, esthétiques et durables.",
      "Du terrain ou bâtiment brut à l’espace opérationnel, nous concevons et réalisons des aménagements adaptés à vos usages et à vos contraintes techniques."
    ],
    capabilities: [
      { title: "Aménagement extérieur", items: ["Voiries et trottoirs", "Parkings", "Espaces verts", "Clôtures", "Éclairage extérieur"] },
      { title: "Aménagement intérieur", items: ["Optimisation des espaces", "Cloisons", "Faux plafonds", "Revêtements", "Aménagements décoratifs"] },
      { title: "Technique & sécurité", items: ["Infrastructures électriques et fluides", "Signalétique", "Sécurité incendie", "Contrôle d’accès"] }
    ],
    process: ["Analyse", "Conception", "Préparation", "Aménagement", "Équipements", "Livraison"],
    clientValue: [
      "Un espace organisé autour des usages et contraintes du projet",
      "Une coordination cohérente entre finitions et équipements techniques",
      "Des aménagements intérieurs et extérieurs pilotés dans la même logique",
      "Un environnement fonctionnel et prêt à être utilisé"
    ]
  },
  {
    slug: "travaux-tous-corps-detat",
    number: "03",
    title: "Travaux tous corps d’état",
    shortTitle: "Tous corps d’état",
    statement: "Tous les corps de métier. Une seule coordination.",
    intro: "Prise en charge de l’ensemble des travaux techniques et architecturaux (maçonnerie, électricité, plomberie, revêtements, etc.).",
    outcome: "ALMA-STRA centralise le pilotage du chantier afin que les différents corps de métier avancent dans une même organisation, jusqu’à la livraison.",
    image: imagery.tce,
    imagePosition: "center",
    diagram: "coordination",
    keywords: ["Coordination", "Lots techniques", "Second œuvre", "Livraison"],
    problemTitle: "Plus un chantier réunit de métiers, plus la coordination devient un enjeu central.",
    problemText: "Les interfaces entre gros œuvre, lots techniques, second œuvre et finitions doivent être planifiées et suivies comme un ensemble. Le TCE apporte un interlocuteur unique et un pilotage global plutôt qu'une succession d'intervenants isolés.",
    details: [
      "ALMA-STRA propose une prise en charge complète de vos projets de construction grâce à son offre en travaux tous corps d’état.",
      "Un interlocuteur unique pilote l’ensemble du chantier, des études techniques à la livraison finale, pour une réalisation coordonnée et clé en main."
    ],
    capabilities: [
      { title: "Gros œuvre", items: ["Maçonnerie", "Structure", "Travaux préparatoires"] },
      { title: "Lots techniques", items: ["Électricité", "Plomberie", "Fluides", "Équipements techniques"] },
      { title: "Second œuvre", items: ["Revêtements", "Finitions", "Aménagements intérieurs"] },
      { title: "Pilotage", items: ["Planification", "Coordination des métiers", "Contrôle qualité", "Reporting régulier"] }
    ],
    process: ["Planification", "Coordination", "Exécution", "Suivi", "Contrôle", "Livraison"],
    clientValue: [
      "Un interlocuteur unique pour l'ensemble des corps de métier",
      "Moins de complexité de coordination côté client",
      "Un suivi centralisé du planning, de l'exécution et des interfaces",
      "Une visibilité régulière sur l'avancement du chantier",
      "Une livraison pilotée dans une logique globale"
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
  { slug: "college-ibn-khaldoune-al-omrane", number: "01", title: "COLLEGE IBN KHALDOUNE AL OMRANE", category: "Équipement public", image: projectImagery.field },
  { slug: "al-omrane-souss-massa", number: "02", title: "AL OMARANE SOUSS MASSA", category: "Aménagement", image: projectImagery.amenagement },
  { slug: "province-laayoune", number: "03", title: "PROVINCE LAAYOUNE", category: "Travaux & aménagement", image: projectImagery.tce },
  { slug: "terrain-de-sport-al-omrane", number: "04", title: "TERRAIN DE SPORT AL OMRANE", category: "Équipement sportif", image: projectImagery.viabilisation },
  { slug: "atlas-sahara", number: "05", title: "ATLAS SAHARA", category: "Aménagement", image: projectImagery.field },
  { slug: "caserne-des-sapeurs-pompiers", number: "06", title: "Caserne des sapeurs-pompiers", category: "Équipement public", image: projectImagery.tce },
  { slug: "conseil-provincial-laayoune", number: "07", title: "Conseil Provincial Laâyoune", category: "Institutionnel", image: projectImagery.amenagement }
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
