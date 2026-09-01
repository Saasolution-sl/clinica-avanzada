import type { Locale } from "@/i18n/routing";

type LocaleText = Record<Locale, string>;

/**
 * Central site/brand config. Every field is marked `verified: true` (confirmed
 * from the clinic's public Instagram profile, see CLINICA-AVANZADA-CONTENT-AUDIT.md)
 * or `verified: false` (placeholder — must be replaced with real data before
 * anything here is treated as fact). Nothing here is fabricated.
 *
 * Facts that don't change with language (address, phone, WhatsApp link,
 * Instagram handle, coordinates) are stored once, not duplicated per locale.
 * Only genuinely linguistic content (tagline, bio) varies by locale.
 */

export const site = {
  name: "Clínica Avanzada",
  legalName: {
    value: "Clínica Avanzada",
    verified: false, // legal/registered business name not confirmed
  },
  tagline: {
    value: {
      es: "Ortodoncia avanzada para una sonrisa que te representa",
      pt: "Ortodontia avançada para um sorriso que representa você",
      en: "Advanced orthodontics for a smile that represents you",
      de: "Fortschrittliche Kieferorthopädie für ein Lächeln, das zu Ihnen passt",
    } as LocaleText,
    verified: true, // derived directly from the verified Instagram bio themes
  },
  bio: {
    value: {
      es: "Transformamos sonrisas, seguridad y éxito. Ortodoncia y estética dental. Confianza y éxito en cada tratamiento.",
      pt: "Transformamos sorrisos, autoconfiança e sucesso. Ortodontia e estética dental. Confiança e sucesso em cada tratamento.",
      en: "We transform smiles, confidence, and success. Orthodontics and dental aesthetics. Trust and success in every treatment.",
      de: "Wir verwandeln Lächeln, Selbstvertrauen und Erfolg. Kieferorthopädie und ästhetische Zahnmedizin. Vertrauen und Erfolg bei jeder Behandlung.",
    } as LocaleText,
    verified: true,
    source: "Instagram bio (@clinica.avanzadapy), partially truncated",
  },
  country: "Paraguay",
  city: {
    value: "Villa Elisa",
    verified: true,
    source: "Instagram profile, authenticated view (contact address field)",
  },
  address: {
    value: "Acceso Sur 668 c/ Palma, Villa Elisa, Paraguay",
    verified: true,
    source: "Instagram profile, authenticated view (contact address field)",
  },
  phone: {
    value: "0985 169281",
    verified: true,
    source: "Instagram highlight cards (\"Profesionales\", \"Tratamientos !\"), authenticated view",
  },
  whatsapp: {
    // Verified deep link from the Instagram bio.
    link: "https://wa.link/14lhzi",
    displayNumber: "0985 169281",
    verified: true,
    source: "Instagram bio (@clinica.avanzadapy)",
  },
  email: {
    value: "",
    verified: false,
  },
  hours: {
    // Hour ranges are language-independent (24h clock); day-of-week labels
    // are translated at render time via the "hours" message namespace.
    value: [
      { dayKey: "mondayFriday" as const, hours: "08:00–17:30" },
      { dayKey: "saturday" as const, hours: "08:00–13:30" },
    ],
    verified: true,
    source: "Instagram highlight \"Horarios\", authenticated view",
  },
  instagram: {
    handle: "@clinica.avanzadapy",
    url: "https://www.instagram.com/clinica.avanzadapy",
    verified: true,
  },
  googleMapsUrl: {
    value: "",
    verified: false,
  },
  googleBusinessUrl: {
    value: "",
    verified: false,
  },
} as const;

export function buildWhatsappUrl(message: string) {
  return `${site.whatsapp.link}?text=${encodeURIComponent(message)}`;
}
