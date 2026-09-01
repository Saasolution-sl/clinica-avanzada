export type Doctor = {
  slug: string;
  name: string;
  verified: boolean;
  specialty: string;
  education: string[];
  certifications: string[];
  areasOfExpertise: string[];
  bio: string;
  photo: string | null;
};

/**
 * Sourced from Instagram highlight cards under "Profesionales" (authenticated
 * view — see CLINICA-AVANZADA-CONTENT-AUDIT.md). Each card gave a name,
 * professional registration number, and stated specialty; nothing beyond
 * that (years of experience, degrees/universities, full bios, photos) was
 * shown, so those fields stay empty/placeholder rather than invented.
 */
export const doctors: Doctor[] = [
  {
    slug: "andrea-pereira",
    name: "Dra. Andrea Pereira",
    verified: true,
    specialty: "Especialista en Ortodoncia, Odontología General, Cirugía Dentomaxilar y Endodoncia",
    education: [],
    certifications: ["Reg. 8487"],
    areasOfExpertise: [
      "Ortodoncia",
      "Odontología General",
      "Cirugía Dentomaxilar",
      "Endodoncia",
    ],
    bio: "Especialista en Ortodoncia, Odontología General, Cirugía Dentomaxilar y Endodoncia en Clínica Avanzada.",
    photo: null,
  },
  {
    slug: "jennifer-hachen",
    name: "Dra. Jennifer Hachen",
    verified: true,
    specialty: "Operatoria Dental en Alta Estética y Odontopediatría",
    education: [],
    certifications: ["Reg. 8918"],
    areasOfExpertise: ["Operatoria Dental en Alta Estética", "Odontopediatría"],
    bio: "Especialista en Operatoria Dental en Alta Estética y Odontopediatría en Clínica Avanzada.",
    photo: null,
  },
  {
    slug: "mirta-fleitas",
    name: "Mirta Fleitas",
    verified: true,
    specialty: "Técnico en Prótesis Dental",
    education: [],
    certifications: ["Reg. 1185"],
    areasOfExpertise: ["Prótesis Dental"],
    bio: "Técnico en Prótesis Dental en Clínica Avanzada.",
    photo: null,
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
