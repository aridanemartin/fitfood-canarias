import { DEFAULT_LOCALE, type Lang } from './locales';
import { en, type Dict, type DictKey } from './dictionaries/en';
import { es } from './dictionaries/es';

const DICTIONARIES: Record<Lang, Dict> = { es, en };

/**
 * Returns a lookup that interpolates `{named}` placeholders.
 *
 * A missing key is impossible by construction — every non-default
 * dictionary is typed as `Dict`, so the gap surfaces at typecheck time
 * rather than as an empty string in production.
 */
export function useTranslations(lang: Lang) {
  const dict = DICTIONARIES[lang] ?? DICTIONARIES[DEFAULT_LOCALE];

  return (key: DictKey, vars: Record<string, string | number> = {}): string =>
    Object.entries(vars).reduce<string>(
      (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
      dict[key],
    );
}

/** The one public page this site has, so far. */
export type UrlKind = { kind: 'home' };

/**
 * Build a locale-correct, trailing-slashed URL.
 *
 * English stays under /en/; Spanish — the canonical locale — is served at
 * the root with no prefix.
 */
export function localizedUrl(lang: Lang, _target: UrlKind): string {
  return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
}

export { DEFAULT_LOCALE };
export type { Lang, Dict, DictKey };
