/**
 * Central site/brand config. Every field is marked `verified: true` (confirmed
 * from the clinic's public Instagram profile, see CLINICA-AVANZADA-CONTENT-AUDIT.md)
 * or `verified: false` (placeholder — must be replaced with real data before
 * anything here is treated as fact). Nothing here is fabricated.
 */

export const site = {
  name: "Clínica Avanzada",
  legalName: {
    value: "Clínica Avanzada",
    verified: false, // legal/registered business name not confirmed
  },
  tagline: {
    value: "Ortodoncia avanzada para una sonrisa que te representa",
    verified: true, // derived directly from the verified Instagram bio themes
  },
  bio: {
    value:
      "Transformamos sonrisas, seguridad y éxito. Ortodoncia y estética dental. Confianza y éxito en cada tratamiento.",
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
    value: [
      { day: "Lunes a Viernes", hours: "08:00 a 17:30" },
      { day: "Sábado", hours: "08:00 a 13:30" },
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

export const whatsappBaseMessage =
  "Hola Clínica Avanzada 👋 Me gustaría recibir información y agendar una consulta.";

export function whatsappMessageForTreatment(treatmentName: string) {
  return `Hola Clínica Avanzada 👋 Me gustaría recibir información sobre ${treatmentName}.`;
}

export function buildWhatsappUrl(message: string) {
  return `${site.whatsapp.link}?text=${encodeURIComponent(message)}`;
}
