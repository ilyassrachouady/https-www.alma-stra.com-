import { clientMedia, type ProjectImage } from "./client-media";
import { retouchedPhotos } from "./retouched-photos";

export type ProjectDetail = {
  collection: string;
  subtitle: string;
  introduction: string;
  facts: { label: string; value: string }[];
  chapters: { title: string; text: string }[];
  related: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "centre-culturel-tikiouine": {
  "collection": "tikiouine",
  "subtitle": "Un lieu pour la culture, la lecture et la vie associative.",
  "introduction": "Le dossier architectural du Centre culturel de Tikiouine réunit une salle de spectacle, une bibliothèque, un hall d’exposition et des salles d’activités associatives. Les perspectives et les plans présentés sont extraits de la plaquette fournie, conçue par Ateliers Elmeknassi. Ils illustrent le projet d’étude.",
  "facts": [
    {
      "label": "Localisation",
      "value": "Tikiouine"
    },
    {
      "label": "Programme",
      "value": "Centre culturel"
    },
    {
      "label": "Nature du dossier",
      "value": "Étude architecturale"
    },
    {
      "label": "Architecte",
      "value": "Ateliers Elmeknassi"
    }
  ],
  "chapters": [
    {
      "title": "Des espaces pour partager la culture",
      "text": "La salle de spectacle s’organise autour d’une scène et de gradins. La bibliothèque et le hall d’exposition complètent ce programme, avec des espaces dédiés à la lecture et à la découverte."
    },
    {
      "title": "La vie associative au cœur du programme",
      "text": "Le premier étage accueille une salle d’activités principale et deux salles pour les activités associatives. Les plans montrent également les espaces administratifs et les rampes d’accès pour les personnes à mobilité réduite."
    },
    {
      "title": "Une architecture ouverte sur ses abords",
      "text": "Les perspectives présentent la façade à motifs géométriques, le parvis et les jardins. La galerie associe ces vues extérieures aux ambiances intérieures et aux plans des deux niveaux."
    }
  ],
  "related": [
    "al-omrane-souss-massa",
    "province-laayoune"
  ]
},
  "college-ibn-khaldoune-al-omrane": {
    collection: "college", subtitle: "Un terrain de jeu, des espaces pour se retrouver.",
    introduction: "Un terrain multisport associé à des espaces extérieurs pavés. Le revêtement coloré, les lignes de jeu et les équipements sportifs organisent l’aire de pratique, tandis que les gradins et les cheminements accompagnent les usages autour du terrain.",
    facts: [{ label: "Équipement", value: "Collège Ibn Khaldoune Al Omrane" }, { label: "Éléments présentés", value: "Terrain multisport et aménagements extérieurs" }],
    chapters: [
      { title: "L’aire sportive", text: "Les vues du terrain montrent le revêtement bleu, les marquages pour plusieurs pratiques et les équipements de jeu. Une clôture périphérique délimite l’espace sportif." },
      { title: "Les espaces autour du terrain", text: "Les circulations pavées, les gradins et les espaces ouverts constituent le prolongement du terrain. La galerie permet de lire ensemble l’aire de jeu et ses abords." },
    ], related: ["terrain-de-sport-al-omrane", "conseil-provincial-laayoune"],
  },
  "al-omrane-souss-massa": {
    collection: "al-omrane", subtitle: "Le complexe d’activités sociales d’Amssernat.",
    introduction: "Situé dans le quartier Amssernat à Agadir, ce complexe d’activités sociales s’inscrit dans le programme de développement urbain de la ville. Le panneau du projet identifie ALMA-STRA comme entreprise chargée des travaux de construction tous corps d’état.",
    facts: [{ label: "Localisation", value: "Amssernat, Agadir" }, { label: "Programme", value: "Complexe d’activités sociales" }, { label: "Mission documentée", value: "Travaux de construction tous corps d’état" }, { label: "Maîtrise d’ouvrage déléguée", value: "Société Al Omrane Souss Massa" }],
    chapters: [
      { title: "Une construction tous corps d’état", text: "Le périmètre indiqué sur le panneau est la construction TCE du complexe. Il donne une lecture concrète de la responsabilité confiée à ALMA-STRA sur ce bâtiment à vocation sociale." },
      { title: "Du volume architectural aux espaces intérieurs", text: "Les perspectives du dossier présentent la composition des façades, l’organisation des volumes et le hall intérieur. Ces études sont accompagnées d’un photomontage d’insertion dans le site. Elles présentent les intentions architecturales et ne constituent pas des photographies de l’ouvrage réalisé." },
    ], related: ["province-laayoune", "caserne-des-sapeurs-pompiers"],
  },
  "province-laayoune": {
    collection: "province", subtitle: "Un bâtiment administratif, de la structure aux façades.",
    introduction: "Le dossier de la Province Laâyoune documente la construction du 6e arrondissement. Les photographies montrent la structure en béton, une façade en cours de réalisation puis une vue extérieure du bâtiment ; le panneau du chantier mentionne ALMA-STRA comme entreprise chargée du projet.",
    facts: [{ label: "Localisation", value: "Laâyoune" }, { label: "Maître d’ouvrage", value: "Wilaya de la région Laâyoune-Sakia El Hamra" }, { label: "Programme", value: "Bâtiment du 6e arrondissement" }, { label: "Mission documentée", value: "Construction d’un bâtiment administratif" }],
    chapters: [
      { title: "La structure du bâtiment", text: "Une vue de chantier montre les poteaux, les planchers et les éléments de structure en béton. Elle permet de comprendre l’ouvrage avant l’achèvement de ses façades." },
      { title: "La façade et ses abords", text: "Les autres vues présentent l’évolution de la façade, ses reliefs et l’entrée du bâtiment. Le panneau fournit un repère architectural complémentaire aux photographies du chantier." },
    ], related: ["al-omrane-souss-massa", "caserne-des-sapeurs-pompiers"],
  },
  "terrain-de-sport-al-omrane": {
    collection: "sport", subtitle: "Le jeu, les accès et les abords dans un même équipement.",
    introduction: "Un équipement sportif de proximité dont les vues réunissent le terrain, ses équipements, l’éclairage périphérique et les accès. L’ensemble se lit à la fois à l’échelle de l’aire de jeu et de son insertion dans les espaces extérieurs.",
    facts: [{ label: "Type", value: "Équipement sportif" }, { label: "Éléments présentés", value: "Aire de jeu, clôtures, éclairage et accès" }],
    chapters: [
      { title: "Un terrain délimité et équipé", text: "Les photographies montrent les paniers, les lignes de jeu et la clôture de grande hauteur. Les mâts d’éclairage accompagnent le périmètre de l’équipement." },
      { title: "Une attention portée aux accès", text: "Une rampe et un escalier desservent le terrain. Les vues de l’entrée complètent la lecture du projet, au-delà de la seule surface de jeu." },
    ], related: ["college-ibn-khaldoune-al-omrane", "conseil-provincial-laayoune"],
  },
  "atlas-sahara": {
    collection: "atlas", subtitle: "Une station et ses aménagements extérieurs.",
    introduction: "Le dossier Atlas Sahara réunit des vues de structure, de préparation des sols, de mise en œuvre des enrobés et d’aménagement des abords. Les vues diurnes et nocturnes montrent ensuite la station, son aire de circulation, ses plantations et son éclairage.",
    facts: [{ label: "Site", value: "Atlas Sahara" }, { label: "Type", value: "Station et espaces extérieurs" }, { label: "Éléments présentés", value: "Structure, sols, enrobés et aménagements paysagers" }],
    chapters: [
      { title: "De la préparation du sol aux enrobés", text: "Les photographies de chantier donnent à voir les fondations, les plateformes et le compactage. Elles rendent visibles des étapes souvent absentes des seules vues finales d’un site." },
      { title: "Les abords, de jour comme de nuit", text: "Bordures, plantations, signalétique et éclairage composent les espaces autour de la station. Les vues nocturnes montrent l’auvent et les circulations dans une autre condition d’usage." },
    ], related: ["conseil-provincial-laayoune", "caserne-des-sapeurs-pompiers"],
  },
  "caserne-des-sapeurs-pompiers": {
    collection: "caserne", subtitle: "Le bâtiment et le soin apporté à ses abords.",
    introduction: "La façade de la caserne associe des accès de grande largeur à un volume sur deux niveaux. Les détails du dossier complètent cette vue d’ensemble par les revêtements des abords et un ouvrage en eau photographié sur le site.",
    facts: [{ label: "Type", value: "Équipement public" }, { label: "Éléments présentés", value: "Façade et détails d’aménagement" }],
    chapters: [
      { title: "Une façade lisible", text: "La vue extérieure montre les accès, les ouvertures et le traitement de façade. Elle présente le bâtiment dans son ensemble, avec ses matériaux et ses différentes hauteurs." },
      { title: "Des détails à l’échelle du chantier", text: "Le pavage des cheminements et une vue d’ouvrage en eau apportent un second niveau de lecture. La galerie associe ces détails à la vue d’ensemble de la façade pour explorer le projet à plusieurs échelles." },
    ], related: ["province-laayoune", "al-omrane-souss-massa"],
  },
  "conseil-provincial-laayoune": {
    collection: "conseil", subtitle: "Des espaces extérieurs, du sol à la lumière.",
    introduction: "Les images du Conseil Provincial Laâyoune suivent les aménagements extérieurs à différentes étapes : préparation du sol, réalisation des enrobés, traitement de l’entrée et éclairage des abords. Elles relient les vues de chantier à l’expérience du lieu, de jour et de nuit.",
    facts: [{ label: "Localisation", value: "Laâyoune" }, { label: "Type", value: "Équipement institutionnel" }, { label: "Éléments présentés", value: "Sols, enrobés, entrée et éclairage extérieur" }],
    chapters: [
      { title: "Préparer et aménager les surfaces", text: "Les vues de préparation du sol et de pose des enrobés montrent le travail sur les espaces de circulation. Les photographies apportent une lecture de terrain de ces aménagements." },
      { title: "L’entrée et les abords éclairés", text: "Le traitement de l’entrée et l’éclairage des palmiers donnent une autre lecture du bâtiment. Les vues nocturnes complètent la documentation des espaces extérieurs." },
    ], related: ["atlas-sahara", "college-ibn-khaldoune-al-omrane"],
  },
};

export function getProjectImages(slug: string): ProjectImage[] {
  return getCollectionImages(projectDetails[slug]?.collection);
}

export function getCollectionImages(collection: string): ProjectImage[] {
  return (clientMedia[collection] ?? []).map(image => retouchedPhotos[image.src] ? { ...image, ...retouchedPhotos[image.src], retouched: true } : image);
}
