export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];

export function getLangPaths() {
  return LANGS.map((lang) => ({
    params: { lang },
  }));
}
