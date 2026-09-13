import { activeLocales, type Lang } from './locales';
import { localizedUrl } from './index';

export interface Alternate {
  lang: Lang;
  href: string;
}

/**
 * Reciprocal hreflang alternates for the home page.
 *
 * The home page exists in every active locale, so this is simply one
 * entry per locale. Kept as a function (mirroring the coffee project's
 * `alternatesFor`) so a future page with partial translations can opt out
 * of advertising a locale that was never built.
 */
export function alternatesFor(): Alternate[] {
  return activeLocales().map((lang) => ({
    lang,
    href: localizedUrl(lang, { kind: 'home' }),
  }));
}
