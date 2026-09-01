import type { MetadataRoute } from "next";
import { treatments } from "@/content/treatments";
import { doctors } from "@/content/doctors";
import { getPublishableCases } from "@/content/cases";
import { routing, localeMeta, type Locale } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clinicaavanzada.com.py";

function alternatesFor(pathByLocale: Record<Locale, string>) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[localeMeta[l].hreflang] = `${siteUrl}${pathByLocale[l]}`;
  }
  languages["x-default"] = `${siteUrl}${pathByLocale[routing.defaultLocale]}`;
  return { languages };
}

const STATIC_PATHS: { key: keyof typeof routing.pathnames }[] = [
  { key: "/" },
  { key: "/tratamientos" },
  { key: "/casos-clinicos" },
  { key: "/equipo" },
  { key: "/clinica" },
  { key: "/preguntas-frecuentes" },
  { key: "/contacto" },
  { key: "/agendar" },
  { key: "/privacidad" },
  { key: "/cookies" },
];

function pathnameFor(key: keyof typeof routing.pathnames, locale: Locale) {
  const entry = routing.pathnames[key];
  return typeof entry === "string" ? entry : entry[locale];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { key } of STATIC_PATHS) {
    const pathByLocale = Object.fromEntries(
      routing.locales.map((l) => [l, `/${l}${pathnameFor(key, l)}`.replace(/\/$/, "") || `/${l}`]),
    ) as Record<Locale, string>;

    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${pathByLocale[locale]}`,
        lastModified: now,
        alternates: alternatesFor(pathByLocale),
      });
    }
  }

  for (const treatment of treatments) {
    const pathByLocale = Object.fromEntries(
      routing.locales.map((l) => [l, `/${l}${pathnameFor("/tratamientos", l)}/${treatment.slug[l]}`]),
    ) as Record<Locale, string>;
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${pathByLocale[locale]}`,
        lastModified: now,
        alternates: alternatesFor(pathByLocale),
      });
    }
  }

  for (const doctor of doctors) {
    const pathByLocale = Object.fromEntries(
      routing.locales.map((l) => [l, `/${l}${pathnameFor("/equipo", l)}/${doctor.slug}`]),
    ) as Record<Locale, string>;
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${pathByLocale[locale]}`,
        lastModified: now,
        alternates: alternatesFor(pathByLocale),
      });
    }
  }

  for (const clinicalCase of getPublishableCases()) {
    const pathByLocale = Object.fromEntries(
      routing.locales.map((l) => [l, `/${l}${pathnameFor("/casos-clinicos", l)}/${clinicalCase.slug[l]}`]),
    ) as Record<Locale, string>;
    for (const locale of routing.locales) {
      entries.push({
        url: `${siteUrl}${pathByLocale[locale]}`,
        lastModified: now,
        alternates: alternatesFor(pathByLocale),
      });
    }
  }

  return entries;
}
