/**
 * i18n architecture, kept intentionally simple for the initial Spanish-only
 * launch while staying easy to extend. `next-intl` is already a project
 * dependency; when Portuguese/English content is ready, the recommended path
 * is:
 *   1. Fill in `messages/pt.json` and `messages/en.json` fully (they already
 *      mirror the shape of `messages/es.json`).
 *   2. Add "pt" / "en" to `locales` below.
 *   3. Wrap `src/app` in an `[locale]` segment and switch `getDictionary()` to
 *      `next-intl`'s `getTranslations`, or keep this dictionary approach —
 *      either works with the shape already in place.
 * Every user-facing string in the Spanish site goes through `getDictionary()`
 * rather than being hardcoded in components, so that swap touches this file
 * and the message JSON, not the components.
 */

export const locales = ["es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
