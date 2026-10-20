export function getServiceImage(slug: string, fallback: string) {
  if (slug === "viabilisation-des-lotissements") return "/services/viabilisation.avif";
  if (slug === "travaux-tous-corps-detat") return "/services/tce.avif";
  return fallback;
}
