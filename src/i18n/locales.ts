/* ------------------------------------------------------------------ *
 * The locale registry — the only place a locale is declared.
 *
 * Routing, dictionaries, hreflang and the language selector all read
 * from here, so adding a language is an entry in this file plus a
 * dictionary. Nothing else hardcodes a locale code.
 * ------------------------------------------------------------------ */

export interface LocaleConfig {
  code: string;
  label: string;
  /** The canonical locale — served at the root with no prefix. Exactly one. */
  default: boolean;
  /** 'backfill' builds no public pages and emits no hreflang. 'live' ships. */
  status: 'backfill' | 'live';
}

export const LOCALES = [
  { code: 'es', label: 'Español', default: true, status: 'live' },
  { code: 'en', label: 'English', default: false, status: 'live' },
] as const satisfies readonly LocaleConfig[];

export type Lang = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Lang = 'es';

export const localeConfig = (lang: Lang): LocaleConfig =>
  LOCALES.find((locale) => locale.code === lang)!;

/** Locales whose pages are actually built and linked. */
export const activeLocales = (): Lang[] =>
  LOCALES.filter((locale) => locale.status === 'live').map((locale) => locale.code);

export const nonDefaultLocales = (): Lang[] =>
  LOCALES.filter((locale) => !locale.default).map((locale) => locale.code);
