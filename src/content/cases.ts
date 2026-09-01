export type ClinicalCase = {
  slug: string;
  title: string;
  treatmentSlug: string;
  category: "alineadores" | "brackets" | "adultos" | "adolescentes";
  /**
   * A case must never render publicly unless this is explicitly true. Set to
   * true only once the clinic/account owner has explicitly confirmed, in
   * writing, that the specific images are authorized for public reuse.
   */
  patientConsentAuthorized: boolean;
  beforeImage: string;
  afterImage: string;
  initialSituation: string;
  treatmentSelected: string;
  approach: string;
  result: string;
};

/**
 * Sourced directly from @clinica.avanzadapy Instagram posts, viewed and
 * confirmed authorized for site use by the account owner (see
 * CLINICA-AVANZADA-CONTENT-AUDIT.md). Images were pulled at full resolution
 * from each post's own carousel data (not fabricated or stock). Case
 * descriptions use only what each post's own caption states — no outcome,
 * timeline, or diagnosis is invented beyond that.
 */
export const clinicalCases: ClinicalCase[] = [
  {
    slug: "caso-1",
    title: "Retiro de brackets — nueva sonrisa",
    treatmentSlug: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-1-antes.jpg",
    afterImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-1-despues.jpg",
    initialSituation: "Tratamiento de ortodoncia con brackets en curso.",
    treatmentSelected: "Ortodoncia con brackets.",
    approach: "Seguimiento hasta el retiro de los brackets al finalizar el tratamiento.",
    result: "Paciente feliz con los resultados al retirar los brackets, según lo compartido por la clínica.",
  },
  {
    slug: "caso-2",
    title: "Retiro de brackets en diciembre",
    treatmentSlug: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-2-antes.jpg",
    afterImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-2-despues.jpg",
    initialSituation: "Tratamiento de ortodoncia con brackets en curso.",
    treatmentSelected: "Ortodoncia con brackets.",
    approach: "Seguimiento hasta el retiro de los brackets al finalizar el tratamiento.",
    result: "Paciente luciendo su nueva sonrisa tras el retiro de los brackets, según lo compartido por la clínica.",
  },
  {
    slug: "caso-3",
    title: "Dos años de tratamiento de ortodoncia",
    treatmentSlug: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-3-antes.jpg",
    afterImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-3-despues.jpg",
    initialSituation: "Tratamiento de ortodoncia con brackets en curso.",
    treatmentSelected: "Ortodoncia con brackets.",
    approach: "Dos años de tratamiento, según lo compartido por la clínica.",
    result: "Paciente feliz con su nueva sonrisa al finalizar el tratamiento, según lo compartido por la clínica.",
  },
  {
    slug: "caso-4",
    title: "Apiñamiento dental severo — avance a 1 año",
    treatmentSlug: "ortodoncia",
    category: "brackets",
    patientConsentAuthorized: true,
    beforeImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-4-antes.jpg",
    afterImage: "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/caso-4-despues.jpg",
    initialSituation: "Caso clínico de apiñamiento dental severo, según lo publicado por la clínica.",
    treatmentSelected: "Ortodoncia convencional metálica, a cargo de la Dra. Andrea Pereira.",
    approach: "Tratamiento de ortodoncia convencional durante 1 año (avance, no resultado final).",
    result: "Avance del tratamiento al año de iniciado, según lo publicado por la clínica.",
  },
];

export function getPublishableCases() {
  return clinicalCases.filter((c) => c.patientConsentAuthorized);
}

export function getCaseBySlug(slug: string) {
  const c = clinicalCases.find((c) => c.slug === slug);
  return c && c.patientConsentAuthorized ? c : undefined;
}
