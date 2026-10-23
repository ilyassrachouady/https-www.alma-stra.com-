import ar from './translations/ar.json';
export type Locale = 'fr' | 'ar';
export const isLocale = (value: string): value is Locale => value === 'fr' || value === 'ar';
export function unlocalizedPath(path: string) {
  return path.replace(/^\/(fr|ar)(?=\/|$)/, '') || '/';
}
export function localePath(path: string, locale: Locale) {
  if (!path.startsWith('/') || path.startsWith('//') || /^\/(images|services|api|_next|fonts)(\/|$)/.test(path) || /\.[a-z0-9]+(?:[?#]|$)/i.test(path)) return path;
  const clean = unlocalizedPath(path);
  return locale === 'ar' ? `/ar${clean === '/' ? '' : clean}` : clean;
}
const dictionary: Record<string, string> = ar;
const foldedDictionary = Object.fromEntries(Object.entries(ar).map(([key, value]) => [key.toLocaleLowerCase('fr'), value]));
export function translate(text: string, locale: Locale): string {
  if (locale === 'fr') return text;
  const normalized = text.trim().replace(/\s+/g, ' ').replace(/‑/g, '-');
  const translated = dictionary[normalized] || foldedDictionary[normalized.toLocaleLowerCase('fr')];
  if (translated) return text.replace(text.trim(), translated);
  const count = normalized.match(/^(.*?)(\d+) vues$/);
  if (count && dictionary[count[1].trim()]) return `${dictionary[count[1].trim()]} ${count[2]} صور`;
  const combined = normalized.split(' · ');
  if (combined.length > 1) return combined.map(part => translate(part, locale)).join(' · ');
  for (const prefix of ['Processus — ', 'Compétences clés — ', 'Agrandir : ']) {
    if (normalized.startsWith(prefix)) return `${dictionary[prefix.trim()] || prefix} ${translate(normalized.slice(prefix.length), locale)}`;
  }
  return text;
}
