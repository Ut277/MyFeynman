import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { hi } from "./dictionaries/hi";

const dictionaries = { en, hi };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
