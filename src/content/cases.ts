import type { Locale } from "@/i18n/routing";

type LocaleText = Record<Locale, string>;

export type ClinicalCase = {
  id: string;
  slug: Record<Locale, string>;
  title: LocaleText;
  treatmentId: string;
  category: "alineadores" | "brackets" | "adultos" | "adolescentes";
  /**
   * A case must never render publicly unless this is explicitly true. Set to
   * true only once the clinic/account owner has explicitly confirmed, in
   * writing, that the specific images are authorized for public reuse.
   */
  patientConsentAuthorized: boolean;
  beforeImage: string;
  afterImage: string;
  initialSituation: LocaleText;
  treatmentSelected: LocaleText;
  approach: LocaleText;
  result: LocaleText;
};

const IMG = "https://raw.githubusercontent.com/Saasolution-sl/clinica-avanzada/main/casos-clinicos/";

/**
 * Sourced directly from @clinica.avanzadapy Instagram posts, viewed and
 * confirmed authorized for site use by the account owner (see
 * CLINICA-AVANZADA-CONTENT-AUDIT.md). Descriptions translate only what each
 * post's own caption stated — no outcome, timeline, or diagnosis is invented
 * in any language.
 */
export const clinicalCases: ClinicalCase[] = [
  {
    id: "caso-1",
    slug: { es: "caso-1", pt: "caso-1", en: "case-1", de: "fall-1" },
    title: {
      es: "Retiro de brackets — nueva sonrisa",
      pt: "Remoção do aparelho — novo sorriso",
      en: "Braces removal — new smile",
      de: "Entfernung der Brackets — neues Lächeln",
    },
    treatmentId: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: `${IMG}caso-1-antes.jpg`,
    afterImage: `${IMG}caso-1-despues.jpg`,
    initialSituation: {
      es: "Tratamiento de ortodoncia con brackets en curso.",
      pt: "Tratamento de ortodontia com aparelho fixo em andamento.",
      en: "Orthodontic treatment with braces in progress.",
      de: "Kieferorthopädische Behandlung mit Brackets in Bearbeitung.",
    },
    treatmentSelected: {
      es: "Ortodoncia con brackets.",
      pt: "Ortodontia com aparelho fixo.",
      en: "Orthodontic treatment with braces.",
      de: "Kieferorthopädische Behandlung mit Brackets.",
    },
    approach: {
      es: "Seguimiento hasta el retiro de los brackets al finalizar el tratamiento.",
      pt: "Acompanhamento até a remoção do aparelho ao final do tratamento.",
      en: "Follow-up through to braces removal at the end of treatment.",
      de: "Betreuung bis zur Entfernung der Brackets am Ende der Behandlung.",
    },
    result: {
      es: "Paciente feliz con los resultados al retirar los brackets, según lo compartido por la clínica.",
      pt: "Paciente feliz com os resultados ao remover o aparelho, segundo o compartilhado pela clínica.",
      en: "Patient happy with the results after braces removal, as shared by the clinic.",
      de: "Laut Angaben der Praxis war die Patientin nach der Entfernung der Brackets mit dem Ergebnis zufrieden.",
    },
  },
  {
    id: "caso-2",
    slug: { es: "caso-2", pt: "caso-2", en: "case-2", de: "fall-2" },
    title: {
      es: "Retiro de brackets en diciembre",
      pt: "Remoção do aparelho em dezembro",
      en: "Braces removal in December",
      de: "Entfernung der Brackets im Dezember",
    },
    treatmentId: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: `${IMG}caso-2-antes.jpg`,
    afterImage: `${IMG}caso-2-despues.jpg`,
    initialSituation: {
      es: "Tratamiento de ortodoncia con brackets en curso.",
      pt: "Tratamento de ortodontia com aparelho fixo em andamento.",
      en: "Orthodontic treatment with braces in progress.",
      de: "Kieferorthopädische Behandlung mit Brackets in Bearbeitung.",
    },
    treatmentSelected: {
      es: "Ortodoncia con brackets.",
      pt: "Ortodontia com aparelho fixo.",
      en: "Orthodontic treatment with braces.",
      de: "Kieferorthopädische Behandlung mit Brackets.",
    },
    approach: {
      es: "Seguimiento hasta el retiro de los brackets al finalizar el tratamiento.",
      pt: "Acompanhamento até a remoção do aparelho ao final do tratamento.",
      en: "Follow-up through to braces removal at the end of treatment.",
      de: "Betreuung bis zur Entfernung der Brackets am Ende der Behandlung.",
    },
    result: {
      es: "Paciente luciendo su nueva sonrisa tras el retiro de los brackets, según lo compartido por la clínica.",
      pt: "Paciente exibindo seu novo sorriso após a remoção do aparelho, segundo o compartilhado pela clínica.",
      en: "Patient showing off their new smile after braces removal, as shared by the clinic.",
      de: "Laut Angaben der Praxis präsentierte der Patient nach der Entfernung der Brackets sein neues Lächeln.",
    },
  },
  {
    id: "caso-3",
    slug: { es: "caso-3", pt: "caso-3", en: "case-3", de: "fall-3" },
    title: {
      es: "Dos años de tratamiento de ortodoncia",
      pt: "Dois anos de tratamento ortodôntico",
      en: "Two years of orthodontic treatment",
      de: "Zwei Jahre kieferorthopädische Behandlung",
    },
    treatmentId: "ortodoncia",
    category: "adultos",
    patientConsentAuthorized: true,
    beforeImage: `${IMG}caso-3-antes.jpg`,
    afterImage: `${IMG}caso-3-despues.jpg`,
    initialSituation: {
      es: "Tratamiento de ortodoncia con brackets en curso.",
      pt: "Tratamento de ortodontia com aparelho fixo em andamento.",
      en: "Orthodontic treatment with braces in progress.",
      de: "Kieferorthopädische Behandlung mit Brackets in Bearbeitung.",
    },
    treatmentSelected: {
      es: "Ortodoncia con brackets.",
      pt: "Ortodontia com aparelho fixo.",
      en: "Orthodontic treatment with braces.",
      de: "Kieferorthopädische Behandlung mit Brackets.",
    },
    approach: {
      es: "Dos años de tratamiento, según lo compartido por la clínica.",
      pt: "Dois anos de tratamento, segundo o compartilhado pela clínica.",
      en: "Two years of treatment, as shared by the clinic.",
      de: "Laut Angaben der Praxis zwei Jahre Behandlungsdauer.",
    },
    result: {
      es: "Paciente feliz con su nueva sonrisa al finalizar el tratamiento, según lo compartido por la clínica.",
      pt: "Paciente feliz com seu novo sorriso ao final do tratamento, segundo o compartilhado pela clínica.",
      en: "Patient happy with their new smile at the end of treatment, as shared by the clinic.",
      de: "Laut Angaben der Praxis war die Patientin am Ende der Behandlung mit ihrem neuen Lächeln zufrieden.",
    },
  },
  {
    id: "caso-4",
    slug: { es: "caso-4", pt: "caso-4", en: "case-4", de: "fall-4" },
    title: {
      es: "Apiñamiento dental severo — avance a 1 año",
      pt: "Apinhamento dentário severo — evolução em 1 ano",
      en: "Severe dental crowding — 1-year progress",
      de: "Starke Zahnfehlstellung — Fortschritt nach 1 Jahr",
    },
    treatmentId: "ortodoncia",
    category: "brackets",
    patientConsentAuthorized: true,
    beforeImage: `${IMG}caso-4-antes.jpg`,
    afterImage: `${IMG}caso-4-despues.jpg`,
    initialSituation: {
      es: "Caso clínico de apiñamiento dental severo, según lo publicado por la clínica.",
      pt: "Caso clínico de apinhamento dentário severo, segundo publicado pela clínica.",
      en: "Clinical case of severe dental crowding, as published by the clinic.",
      de: "Klinischer Fall mit starker Zahnfehlstellung, laut Veröffentlichung der Praxis.",
    },
    treatmentSelected: {
      es: "Ortodoncia convencional metálica, a cargo de la Dra. Andrea Pereira.",
      pt: "Ortodontia convencional metálica, conduzida pela Dra. Andrea Pereira.",
      en: "Conventional metal braces, led by Dr. Andrea Pereira.",
      de: "Konventionelle Metallbrackets, durchgeführt von Dr. Andrea Pereira.",
    },
    approach: {
      es: "Tratamiento de ortodoncia convencional durante 1 año (avance, no resultado final).",
      pt: "Tratamento de ortodontia convencional durante 1 ano (evolução, não resultado final).",
      en: "One year of conventional orthodontic treatment (progress, not a final result).",
      de: "Ein Jahr konventionelle kieferorthopädische Behandlung (Fortschritt, kein Endergebnis).",
    },
    result: {
      es: "Avance del tratamiento al año de iniciado, según lo publicado por la clínica.",
      pt: "Evolução do tratamento após um ano de início, segundo publicado pela clínica.",
      en: "Treatment progress one year after starting, as published by the clinic.",
      de: "Behandlungsfortschritt ein Jahr nach Behandlungsbeginn, laut Veröffentlichung der Praxis.",
    },
  },
];

export function getPublishableCases() {
  return clinicalCases.filter((c) => c.patientConsentAuthorized);
}

export function getCaseBySlug(locale: Locale, slug: string) {
  const c = clinicalCases.find((c) => c.slug[locale] === slug);
  return c && c.patientConsentAuthorized ? c : undefined;
}
