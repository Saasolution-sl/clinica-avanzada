import { routing, type Locale } from "@/i18n/routing";
import { treatments } from "@/content/treatments";
import { doctors } from "@/content/doctors";
import { clinicalCases } from "@/content/cases";

const STATIC_KEYS = [
  "/tratamientos",
  "/casos-clinicos",
  "/equipo",
  "/clinica",
  "/preguntas-frecuentes",
  "/contacto",
  "/agendar",
  "/privacidad",
  "/cookies",
] as const;

const DETAIL_KEYS = ["/tratamientos", "/casos-clinicos", "/equipo"] as const;

function staticSegment(key: (typeof STATIC_KEYS)[number], locale: Locale): string {
  const entry = routing.pathnames[key];
  const value = typeof entry === "string" ? entry : entry[locale];
  return value.replace(/\/\[slug\]$/, "");
}

/**
 * Given the raw current pathname (e.g. "/en/treatments/clear-aligners") and
 * a target locale, returns the equivalent path in that locale — including
 * swapping a dynamic item's slug (treatment, case, or doctor) for its
 * translated slug, not just the static segment. Falls back to the target
 * locale's homepage if nothing matches.
 */
export function resolveLocaleSwitchPath(currentPathname: string, currentLocale: Locale, targetLocale: Locale): string {
  const withoutLocale = currentPathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";
  const segments = withoutLocale.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  for (const key of STATIC_KEYS) {
    const currentStatic = staticSegment(key, currentLocale).replace(/^\//, "");
    if (segments[0] !== currentStatic) continue;

    const targetStatic = staticSegment(key, targetLocale);
    const isDetail = (DETAIL_KEYS as readonly string[]).includes(key);
    const currentSlug = isDetail ? segments[1] : undefined;

    if (!isDetail || !currentSlug) {
      return `/${targetLocale}${targetStatic}`;
    }

    const targetSlug = resolveItemSlug(key as (typeof DETAIL_KEYS)[number], currentSlug, currentLocale, targetLocale);
    if (!targetSlug) {
      return `/${targetLocale}${targetStatic}`;
    }
    return `/${targetLocale}${targetStatic}/${targetSlug}`;
  }

  return `/${targetLocale}`;
}

function resolveItemSlug(
  key: (typeof DETAIL_KEYS)[number],
  currentSlug: string,
  currentLocale: Locale,
  targetLocale: Locale,
): string | undefined {
  if (key === "/tratamientos") {
    const item = treatments.find((t) => t.slug[currentLocale] === currentSlug);
    return item?.slug[targetLocale];
  }
  if (key === "/casos-clinicos") {
    const item = clinicalCases.find((c) => c.slug[currentLocale] === currentSlug);
    return item?.slug[targetLocale];
  }
  if (key === "/equipo") {
    const item = doctors.find((d) => d.slug === currentSlug);
    return item?.slug; // doctor slugs are proper nouns, identical across locales
  }
  return undefined;
}
