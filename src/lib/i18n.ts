import { es } from "@/i18n/es";
import { en } from "@/i18n/en";

export const dictionaries = {
  es,
  en,
} as const;

export type Lang = keyof typeof dictionaries;
export type Dictionaries = typeof dictionaries;
