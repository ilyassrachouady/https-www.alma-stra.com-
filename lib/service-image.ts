import { serviceMedia } from "./media";

export function getServiceImage(slug: string, fallback: string) {
  if (slug === "viabilisation-des-lotissements") return serviceMedia.land.src;
  if (slug === "amenagement-btp") return serviceMedia.space.src;
  if (slug === "travaux-tous-corps-detat") return serviceMedia.coordination.src;
  return fallback;
}
