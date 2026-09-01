import { defineRouting } from "next-intl/routing";

export const locales = ["es", "pt", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/**
 * Maps each locale label + BCP-47 tag used for hreflang/OpenGraph.
 */
export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; hreflang: string; ogLocale: string }
> = {
  es: { label: "Español", nativeLabel: "Español", hreflang: "es-PY", ogLocale: "es_PY" },
  pt: { label: "Português", nativeLabel: "Português", hreflang: "pt-BR", ogLocale: "pt_BR" },
  en: { label: "English", nativeLabel: "English", hreflang: "en", ogLocale: "en_US" },
  de: { label: "Deutsch", nativeLabel: "Deutsch", hreflang: "de", ogLocale: "de_DE" },
};

/**
 * Localized static pathnames. Dynamic segments ([slug]) keep the same
 * shape across locales here — the actual localized slug *value* for a
 * given item (treatment, case, doctor) is resolved separately via each
 * content file's per-locale slug field (see src/content/*.ts), since
 * next-intl's pathnames map only translates the static parts of a route.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/tratamientos": {
      es: "/tratamientos",
      pt: "/tratamentos",
      en: "/treatments",
      de: "/behandlungen",
    },
    "/tratamientos/[slug]": {
      es: "/tratamientos/[slug]",
      pt: "/tratamentos/[slug]",
      en: "/treatments/[slug]",
      de: "/behandlungen/[slug]",
    },
    "/casos-clinicos": {
      es: "/casos-clinicos",
      pt: "/casos-clinicos",
      en: "/clinical-cases",
      de: "/patientenfaelle",
    },
    "/casos-clinicos/[slug]": {
      es: "/casos-clinicos/[slug]",
      pt: "/casos-clinicos/[slug]",
      en: "/clinical-cases/[slug]",
      de: "/patientenfaelle/[slug]",
    },
    "/equipo": {
      es: "/equipo",
      pt: "/equipe",
      en: "/team",
      de: "/team",
    },
    "/equipo/[slug]": {
      es: "/equipo/[slug]",
      pt: "/equipe/[slug]",
      en: "/team/[slug]",
      de: "/team/[slug]",
    },
    "/clinica": {
      es: "/clinica",
      pt: "/clinica",
      en: "/clinic",
      de: "/praxis",
    },
    "/preguntas-frecuentes": {
      es: "/preguntas-frecuentes",
      pt: "/perguntas-frequentes",
      en: "/faq",
      de: "/haeufige-fragen",
    },
    "/contacto": {
      es: "/contacto",
      pt: "/contato",
      en: "/contact",
      de: "/kontakt",
    },
    "/agendar": {
      es: "/agendar",
      pt: "/agendar",
      en: "/book-consultation",
      de: "/termin-vereinbaren",
    },
    "/privacidad": {
      es: "/privacidad",
      pt: "/privacidade",
      en: "/privacy-policy",
      de: "/datenschutz",
    },
    "/cookies": {
      es: "/cookies",
      pt: "/cookies",
      en: "/cookies",
      de: "/cookies",
    },
  },
});
