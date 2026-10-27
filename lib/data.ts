export const contact = {
  phone: "+212 661-347602",
  phoneHref: "+212661347602",
  email: "contact@alma-stra.com",
  address: "Av. Sakia El Hamra N°28, Hay Chouhada, Laâyoune",
  hours: "Lundi - Vendredi: 08.00 - 17.00",
};

// All photography is deliberately assigned by role in lib/media.ts.
export { imagery } from "./media";
import { serviceMedia } from "./media";

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
    image: serviceMedia.land.src,
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
    image: serviceMedia.space.src,
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
    image: serviceMedia.coordination.src,
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
  imageKind?: "photo" | "render";
};

export const projects: Project[] = [
  { slug: "centre-culturel-tikiouine", number: "01", title: "Centre culturel de Tikiouine", category: "Équipement culturel", image: "/images/portfolio/tikiouine/facade.webp", imageKind: "render" },
  { slug: "college-ibn-khaldoune-al-omrane", number: "02", title: "Collège Ibn Khaldoune Al Omrane", category: "Équipement public", image: "/images/portfolio/retouched/college-terrain-multisport.webp" },
  { slug: "al-omrane-souss-massa", number: "03", title: "Al Omrane Souss Massa", category: "Construction TCE", image: "/images/portfolio/al-omrane/facade.webp", imageKind: "render" },
  { slug: "province-laayoune", number: "04", title: "Province de Laâyoune", category: "Bâtiment administratif", image: "/images/portfolio/retouched/province-facade.webp" },
  { slug: "terrain-de-sport-al-omrane", number: "05", title: "Terrain de sport Al Omrane", category: "Équipement sportif", image: "/images/portfolio/retouched/sport-terrain.webp" },
  { slug: "atlas-sahara", number: "06", title: "Atlas Sahara", category: "Aménagement", image: "/images/portfolio/retouched/atlas-station-de-nuit.webp" },
  { slug: "caserne-des-sapeurs-pompiers", number: "07", title: "Caserne des sapeurs-pompiers", category: "Équipement public", image: "/images/portfolio/retouched/caserne-facade.webp" },
  { slug: "conseil-provincial-laayoune", number: "08", title: "Conseil provincial de Laâyoune", category: "Institutionnel", image: "/images/portfolio/retouched/conseil-cour-chantier.webp" }
];

export const partners = [
  { name: "Groupe Al Omrane", src: "/images/partner-al-omrane.png" },
  { name: "Atlas Sahara", src: "/images/partner-atlas-sahara.png" },
  { name: "ANEP", src: "/images/partner-anep.png" },
  { name: "Région Marrakech-Safi", src: "/images/partner-marrakech-safi.png" },
  { name: "Préfecture d’Inezgane-Aït Melloul", src: "/images/partner-inezgane.png" }
];

export const process = [
  { number: "01", title: "Étude", text: "Comprendre les objectifs, le site et les contraintes techniques avant d’engager les travaux." },
  { number: "02", title: "Planification", text: "Structurer les lots, les séquences d’intervention et le calendrier du chantier." },
  { number: "03", title: "Exécution", text: "Coordonner les équipes et mettre en œuvre les travaux selon les exigences du projet." },
  { number: "04", title: "Contrôle", text: "Suivre l’avancement, la qualité et la conformité tout au long de la réalisation." },
  { number: "05", title: "Livraison", text: "Finaliser, vérifier et remettre un ouvrage prêt à être exploité." }
];
