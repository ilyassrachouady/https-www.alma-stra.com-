/** Fields requested by ALMA-STRA for each project. Publish only values supported by its dossier. */
export type ProjectDossier = {
  owner?: string;
  place?: string;
  year?: string;
  work?: string;
};

export const projectDossiers: Record<string, ProjectDossier> = {
  "college-ibn-khaldoune-al-omrane": {
    work: "Terrain multisport et aménagements extérieurs",
  },
  "al-omrane-souss-massa": {
    place: "Amssernat, Agadir",
    work: "Travaux de construction tous corps d’état",
  },
  "province-laayoune": {
    owner: "Wilaya de la région Laâyoune-Sakia El Hamra",
    place: "Laâyoune",
    work: "Construction d’un bâtiment administratif",
  },
  "terrain-de-sport-al-omrane": {},
  "atlas-sahara": {},
  "caserne-des-sapeurs-pompiers": {},
  "conseil-provincial-laayoune": {
    place: "Laâyoune",
  },
};
