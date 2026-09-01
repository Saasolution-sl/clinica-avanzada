import type { Locale } from "@/i18n/routing";

type LocaleText = Record<Locale, string>;
type LocaleList = Record<Locale, string[]>;

export type Doctor = {
  slug: string; // proper noun, same across locales
  name: string; // proper noun, same across locales
  verified: boolean;
  specialty: LocaleText;
  education: string[];
  certifications: string[]; // registration numbers, not translated
  areasOfExpertise: LocaleList;
  bio: LocaleText;
  photo: string | null;
};

/**
 * Sourced from Instagram highlight cards under "Profesionales" (authenticated
 * view — see CLINICA-AVANZADA-CONTENT-AUDIT.md). Names and registration
 * numbers are proper nouns/identifiers and stay identical across locales;
 * only the specialty label, expertise list, and bio sentence are translated.
 */
export const doctors: Doctor[] = [
  {
    slug: "andrea-pereira",
    name: "Dra. Andrea Pereira",
    verified: true,
    specialty: {
      es: "Especialista en Ortodoncia, Odontología General, Cirugía Dentomaxilar y Endodoncia",
      pt: "Especialista em Ortodontia, Odontologia Geral, Cirurgia Dentomaxilar e Endodontia",
      en: "Specialist in Orthodontics, General Dentistry, Dentomaxillary Surgery and Root Canal Therapy",
      de: "Fachärztin für Kieferorthopädie, Allgemeine Zahnheilkunde, Dentomaxillarchirurgie und Wurzelkanalbehandlung",
    },
    education: [],
    certifications: ["Reg. 8487"],
    areasOfExpertise: {
      es: ["Ortodoncia", "Odontología General", "Cirugía Dentomaxilar", "Endodoncia"],
      pt: ["Ortodontia", "Odontologia Geral", "Cirurgia Dentomaxilar", "Endodontia"],
      en: ["Orthodontics", "General Dentistry", "Dentomaxillary Surgery", "Root Canal Therapy"],
      de: ["Kieferorthopädie", "Allgemeine Zahnheilkunde", "Dentomaxillarchirurgie", "Wurzelkanalbehandlung"],
    },
    bio: {
      es: "Especialista en Ortodoncia, Odontología General, Cirugía Dentomaxilar y Endodoncia en Clínica Avanzada.",
      pt: "Especialista em Ortodontia, Odontologia Geral, Cirurgia Dentomaxilar e Endodontia na Clínica Avanzada.",
      en: "Specialist in Orthodontics, General Dentistry, Dentomaxillary Surgery and Root Canal Therapy at Clínica Avanzada.",
      de: "Fachärztin für Kieferorthopädie, Allgemeine Zahnheilkunde, Dentomaxillarchirurgie und Wurzelkanalbehandlung in der Clínica Avanzada.",
    },
    photo: null,
  },
  {
    slug: "jennifer-hachen",
    name: "Dra. Jennifer Hachen",
    verified: true,
    specialty: {
      es: "Operatoria Dental en Alta Estética y Odontopediatría",
      pt: "Dentística em Alta Estética e Odontopediatria",
      en: "Restorative Dentistry in High Aesthetics and Pediatric Dentistry",
      de: "Restaurative Zahnheilkunde mit Schwerpunkt Ästhetik und Kinderzahnheilkunde",
    },
    education: [],
    certifications: ["Reg. 8918"],
    areasOfExpertise: {
      es: ["Operatoria Dental en Alta Estética", "Odontopediatría"],
      pt: ["Dentística em Alta Estética", "Odontopediatria"],
      en: ["Restorative Dentistry in High Aesthetics", "Pediatric Dentistry"],
      de: ["Restaurative Zahnheilkunde mit Schwerpunkt Ästhetik", "Kinderzahnheilkunde"],
    },
    bio: {
      es: "Especialista en Operatoria Dental en Alta Estética y Odontopediatría en Clínica Avanzada.",
      pt: "Especialista em Dentística em Alta Estética e Odontopediatria na Clínica Avanzada.",
      en: "Specialist in Restorative Dentistry in High Aesthetics and Pediatric Dentistry at Clínica Avanzada.",
      de: "Fachärztin für restaurative Zahnheilkunde mit Schwerpunkt Ästhetik und Kinderzahnheilkunde in der Clínica Avanzada.",
    },
    photo: null,
  },
  {
    slug: "mirta-fleitas",
    name: "Mirta Fleitas",
    verified: true,
    specialty: {
      es: "Técnico en Prótesis Dental",
      pt: "Técnica em Prótese Dentária",
      en: "Dental Prosthetics Technician",
      de: "Zahntechnikerin für Zahnprothetik",
    },
    education: [],
    certifications: ["Reg. 1185"],
    areasOfExpertise: {
      es: ["Prótesis Dental"],
      pt: ["Prótese Dentária"],
      en: ["Dental Prosthetics"],
      de: ["Zahnprothetik"],
    },
    bio: {
      es: "Técnico en Prótesis Dental en Clínica Avanzada.",
      pt: "Técnica em Prótese Dentária na Clínica Avanzada.",
      en: "Dental Prosthetics Technician at Clínica Avanzada.",
      de: "Zahntechnikerin für Zahnprothetik in der Clínica Avanzada.",
    },
    photo: null,
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
