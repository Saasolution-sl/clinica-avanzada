import type { Locale } from "@/i18n/routing";

type LocaleText = Record<Locale, string>;
type LocaleList = Record<Locale, string[]>;

export type Treatment = {
  /** Stable internal key, independent of any locale's URL slug. */
  id: string;
  verified: boolean;
  /** Localized URL slug per locale (used under the localized "/tratamientos" pathname). */
  slug: LocaleText;
  name: LocaleText;
  shortDescription: LocaleText;
  suitableFor: LocaleList;
  process: LocaleList;
  benefits: LocaleList;
};

/**
 * This list is backed by real Instagram content viewed in an authenticated
 * session (see CLINICA-AVANZADA-CONTENT-AUDIT.md). Descriptions, process
 * steps and benefits are general/evergreen copy translated with the same
 * level of medical caution across all four languages — no language adds
 * claims, outcomes, or timelines the Spanish source doesn't make.
 */
export const treatments: Treatment[] = [
  {
    id: "ortodoncia",
    verified: true,
    slug: { es: "ortodoncia", pt: "ortodontia", en: "orthodontics", de: "kieferorthopaedie" },
    name: { es: "Ortodoncia", pt: "Ortodontia", en: "Orthodontics", de: "Kieferorthopädie" },
    shortDescription: {
      es: "Diagnóstico y planificación de tratamiento ortodóncico a cargo de un especialista, adaptado a cada paciente.",
      pt: "Diagnóstico e planejamento de tratamento ortodôntico conduzido por um especialista, adaptado a cada paciente.",
      en: "Diagnosis and treatment planning led by a specialist, adapted to each patient.",
      de: "Diagnose und Behandlungsplanung durch einen Facharzt, individuell auf jeden Patienten abgestimmt.",
    },
    suitableFor: {
      es: ["Pacientes que buscan mejorar la alineación dental", "Adolescentes y adultos"],
      pt: ["Pacientes que buscam melhorar o alinhamento dental", "Adolescentes e adultos"],
      en: ["Patients looking to improve dental alignment", "Teens and adults"],
      de: ["Patienten, die ihre Zahnstellung verbessern möchten", "Jugendliche und Erwachsene"],
    },
    process: {
      es: ["Consulta inicial y evaluación clínica", "Estudios diagnósticos según el caso", "Presentación del plan de tratamiento", "Controles periódicos durante el tratamiento"],
      pt: ["Consulta inicial e avaliação clínica", "Exames diagnósticos conforme o caso", "Apresentação do plano de tratamento", "Consultas de acompanhamento periódicas"],
      en: ["Initial consultation and clinical evaluation", "Diagnostic studies as needed", "Presentation of the treatment plan", "Periodic check-ups during treatment"],
      de: ["Erstberatung und klinische Untersuchung", "Diagnostische Verfahren je nach Fall", "Vorstellung des Behandlungsplans", "Regelmäßige Kontrollen während der Behandlung"],
    },
    benefits: {
      es: ["Seguimiento profesional durante todo el proceso", "Plan de tratamiento personalizado"],
      pt: ["Acompanhamento profissional durante todo o processo", "Plano de tratamento personalizado"],
      en: ["Professional follow-up throughout the process", "Personalized treatment plan"],
      de: ["Professionelle Begleitung während des gesamten Prozesses", "Individueller Behandlungsplan"],
    },
  },
  {
    id: "ortodoncia-autoligada",
    verified: true,
    slug: { es: "ortodoncia-autoligada", pt: "ortodontia-autoligavel", en: "self-ligating-braces", de: "selbstligierende-brackets" },
    name: { es: "Ortodoncia autoligada", pt: "Ortodontia autoligável", en: "Self-ligating braces", de: "Selbstligierende Brackets" },
    shortDescription: {
      es: "Un sistema de brackets que, en muchos casos, permite un tratamiento más cómodo, práctico y con menos controles frente a la ortodoncia convencional.",
      pt: "Um sistema de brackets que, em muitos casos, permite um tratamento mais confortável, prático e com menos consultas de ajuste em comparação à ortodontia convencional.",
      en: "A bracket system that, in many cases, allows for a more comfortable, practical treatment with fewer check-ups compared to conventional braces.",
      de: "Ein Brackets-System, das in vielen Fällen eine komfortablere, praktischere Behandlung mit selteneren Kontrollterminen als bei konventionellen Brackets ermöglicht.",
    },
    suitableFor: {
      es: ["Pacientes evaluados por el especialista como buenos candidatos a este sistema"],
      pt: ["Pacientes avaliados pelo especialista como bons candidatos a este sistema"],
      en: ["Patients assessed by the specialist as good candidates for this system"],
      de: ["Patienten, die vom Facharzt als geeignete Kandidaten für dieses System eingestuft wurden"],
    },
    process: {
      es: ["Evaluación para determinar si es una opción adecuada", "Colocación de los brackets autoligado", "Controles periódicos, habitualmente con una frecuencia menor que la ortodoncia convencional"],
      pt: ["Avaliação para determinar se é uma opção adequada", "Colocação dos brackets autoligáveis", "Consultas de acompanhamento periódicas, geralmente com frequência menor que a ortodontia convencional"],
      en: ["Assessment to determine if it's a suitable option", "Placement of the self-ligating brackets", "Periodic check-ups, usually less frequent than with conventional braces"],
      de: ["Untersuchung zur Feststellung der Eignung", "Anbringen der selbstligierenden Brackets", "Regelmäßige Kontrollen, meist seltener als bei konventionellen Brackets"],
    },
    benefits: {
      es: ["Mayor comodidad reportada por el sistema autoligado", "Menor frecuencia de controles en muchos casos"],
      pt: ["Maior conforto relatado com o sistema autoligável", "Menor frequência de consultas em muitos casos"],
      en: ["Greater reported comfort with the self-ligating system", "Fewer check-ups in many cases"],
      de: ["Häufig als komfortabler beschriebenes selbstligierendes System", "In vielen Fällen seltenere Kontrolltermine"],
    },
  },
  {
    id: "endodoncia",
    verified: true,
    slug: { es: "endodoncia", pt: "endodontia", en: "root-canal-therapy", de: "wurzelkanalbehandlung" },
    name: { es: "Endodoncia", pt: "Endodontia", en: "Root canal therapy", de: "Wurzelkanalbehandlung" },
    shortDescription: {
      es: "Tratamiento de conducto indicado ante señales como dolor, oscurecimiento del diente, sensibilidad marcada o desgaste por bruxismo.",
      pt: "Tratamento de canal indicado diante de sinais como dor, escurecimento do dente, sensibilidade acentuada ou desgaste por bruxismo.",
      en: "Root canal treatment indicated for signs such as pain, tooth darkening, marked sensitivity, or wear from bruxism.",
      de: "Wurzelkanalbehandlung, die bei Anzeichen wie Schmerzen, Zahnverdunkelung, ausgeprägter Empfindlichkeit oder Abnutzung durch Bruxismus angezeigt sein kann.",
    },
    suitableFor: {
      es: ["Pacientes con señales clínicas evaluadas por el especialista"],
      pt: ["Pacientes com sinais clínicos avaliados pelo especialista"],
      en: ["Patients with clinical signs assessed by the specialist"],
      de: ["Patienten mit vom Facharzt beurteilten klinischen Anzeichen"],
    },
    process: {
      es: ["Evaluación clínica de la señal o síntoma", "Diagnóstico del estado del diente", "Tratamiento de conducto si está indicado"],
      pt: ["Avaliação clínica do sinal ou sintoma", "Diagnóstico do estado do dente", "Tratamento de canal, se indicado"],
      en: ["Clinical evaluation of the sign or symptom", "Diagnosis of the tooth's condition", "Root canal treatment if indicated"],
      de: ["Klinische Beurteilung des Symptoms", "Diagnose des Zahnzustands", "Wurzelkanalbehandlung, sofern angezeigt"],
    },
    benefits: {
      es: ["Atención de señales tempranas para evitar complicaciones mayores"],
      pt: ["Atenção a sinais precoces para evitar complicações maiores"],
      en: ["Addressing early signs to help avoid larger complications"],
      de: ["Frühzeitige Behandlung von Anzeichen zur Vermeidung größerer Komplikationen"],
    },
  },
  {
    id: "odontopediatria",
    verified: true,
    slug: { es: "odontopediatria", pt: "odontopediatria", en: "pediatric-dentistry", de: "kinderzahnheilkunde" },
    name: { es: "Odontopediatría", pt: "Odontopediatria", en: "Pediatric dentistry", de: "Kinderzahnheilkunde" },
    shortDescription: {
      es: "Atención odontológica orientada a pacientes niños y niñas.",
      pt: "Atendimento odontológico voltado a pacientes infantis.",
      en: "Dental care focused on child patients.",
      de: "Zahnärztliche Betreuung für Kinder.",
    },
    suitableFor: {
      es: ["Pacientes pediátricos"],
      pt: ["Pacientes pediátricos"],
      en: ["Pediatric patients"],
      de: ["Kinder"],
    },
    process: {
      es: ["Consulta inicial adaptada al paciente pediátrico", "Plan de tratamiento según la edad y el caso"],
      pt: ["Consulta inicial adaptada ao paciente pediátrico", "Plano de tratamento conforme a idade e o caso"],
      en: ["Initial consultation adapted to the pediatric patient", "Treatment plan based on age and case"],
      de: ["Erstberatung, angepasst an das Kind", "Behandlungsplan je nach Alter und Fall"],
    },
    benefits: {
      es: ["Atención especializada para las particularidades de la odontología infantil"],
      pt: ["Atendimento especializado para as particularidades da odontologia infantil"],
      en: ["Specialized care for the particularities of pediatric dentistry"],
      de: ["Fachliche Betreuung für die Besonderheiten der Kinderzahnheilkunde"],
    },
  },
  {
    id: "rehabilitacion-oral",
    verified: true,
    slug: { es: "rehabilitacion-oral", pt: "reabilitacao-oral", en: "oral-rehabilitation", de: "orale-rehabilitation" },
    name: { es: "Rehabilitación Oral", pt: "Reabilitação Oral", en: "Oral Rehabilitation", de: "Orale Rehabilitation" },
    shortDescription: {
      es: "Tratamientos orientados a restaurar la función y estética de la dentadura.",
      pt: "Tratamentos voltados a restaurar a função e a estética da dentição.",
      en: "Treatments aimed at restoring the function and appearance of the teeth.",
      de: "Behandlungen zur Wiederherstellung von Funktion und Ästhetik des Gebisses.",
    },
    suitableFor: {
      es: ["Pacientes con necesidad de restauración dental evaluada por el especialista"],
      pt: ["Pacientes com necessidade de restauração dental avaliada pelo especialista"],
      en: ["Patients with a need for dental restoration assessed by the specialist"],
      de: ["Patienten mit vom Facharzt festgestelltem Restaurationsbedarf"],
    },
    process: {
      es: ["Evaluación clínica", "Plan de rehabilitación personalizado"],
      pt: ["Avaliação clínica", "Plano de reabilitação personalizado"],
      en: ["Clinical evaluation", "Personalized rehabilitation plan"],
      de: ["Klinische Untersuchung", "Individueller Rehabilitationsplan"],
    },
    benefits: {
      es: ["Enfoque integral de la salud bucal"],
      pt: ["Abordagem integral da saúde bucal"],
      en: ["A comprehensive approach to oral health"],
      de: ["Ganzheitlicher Ansatz für die Mundgesundheit"],
    },
  },
  {
    id: "implantologia-oral",
    verified: true,
    slug: { es: "implantologia-oral", pt: "implantodontia", en: "dental-implants", de: "zahnimplantate" },
    name: { es: "Implantología Oral", pt: "Implantodontia", en: "Dental Implants", de: "Zahnimplantate" },
    shortDescription: {
      es: "Colocación de implantes dentales como parte de un plan de tratamiento evaluado por el especialista.",
      pt: "Colocação de implantes dentários como parte de um plano de tratamento avaliado pelo especialista.",
      en: "Placement of dental implants as part of a treatment plan assessed by the specialist.",
      de: "Einsetzen von Zahnimplantaten im Rahmen eines vom Facharzt beurteilten Behandlungsplans.",
    },
    suitableFor: {
      es: ["Pacientes evaluados como candidatos a implantes"],
      pt: ["Pacientes avaliados como candidatos a implantes"],
      en: ["Patients assessed as candidates for implants"],
      de: ["Patienten, die als Kandidaten für Implantate eingestuft wurden"],
    },
    process: {
      es: ["Evaluación y estudios diagnósticos", "Planificación del implante", "Colocación y seguimiento"],
      pt: ["Avaliação e exames diagnósticos", "Planejamento do implante", "Colocação e acompanhamento"],
      en: ["Assessment and diagnostic studies", "Implant planning", "Placement and follow-up"],
      de: ["Untersuchung und diagnostische Verfahren", "Planung des Implantats", "Einsetzen und Nachsorge"],
    },
    benefits: {
      es: ["Opción para restaurar piezas dentales ausentes"],
      pt: ["Opção para restaurar dentes ausentes"],
      en: ["An option for restoring missing teeth"],
      de: ["Option zum Ersatz fehlender Zähne"],
    },
  },
  {
    id: "protesis",
    verified: true,
    slug: { es: "protesis", pt: "protese-dental", en: "dental-prosthetics", de: "zahnprothetik" },
    name: { es: "Prótesis Dental", pt: "Prótese Dental", en: "Dental Prosthetics", de: "Zahnprothetik" },
    shortDescription: {
      es: "Diseño y colocación de prótesis dentales a medida.",
      pt: "Design e colocação de próteses dentárias sob medida.",
      en: "Design and fitting of custom dental prosthetics.",
      de: "Anfertigung und Einsetzen individuell angepasster Zahnprothesen.",
    },
    suitableFor: {
      es: ["Pacientes con necesidad de reemplazo de piezas dentales"],
      pt: ["Pacientes com necessidade de substituição de dentes"],
      en: ["Patients needing tooth replacement"],
      de: ["Patienten mit Bedarf an Zahnersatz"],
    },
    process: {
      es: ["Evaluación clínica", "Toma de registros/moldes", "Confección y colocación de la prótesis"],
      pt: ["Avaliação clínica", "Registro/moldagem", "Confecção e colocação da prótese"],
      en: ["Clinical evaluation", "Taking records/impressions", "Fabrication and fitting of the prosthetic"],
      de: ["Klinische Untersuchung", "Abformung/Registrierung", "Anfertigung und Einsetzen der Prothese"],
    },
    benefits: {
      es: ["Prótesis adaptada a cada paciente"],
      pt: ["Prótese adaptada a cada paciente"],
      en: ["A prosthetic adapted to each patient"],
      de: ["Individuell an jeden Patienten angepasste Prothese"],
    },
  },
  {
    id: "limpieza",
    verified: true,
    slug: { es: "limpieza", pt: "limpeza-dental", en: "dental-cleaning", de: "zahnreinigung" },
    name: { es: "Limpieza Dental", pt: "Limpeza Dental", en: "Dental Cleaning", de: "Zahnreinigung" },
    shortDescription: {
      es: "Limpieza dental profesional como parte del cuidado bucal preventivo.",
      pt: "Limpeza dental profissional como parte do cuidado bucal preventivo.",
      en: "Professional dental cleaning as part of preventive oral care.",
      de: "Professionelle Zahnreinigung im Rahmen der vorbeugenden Mundpflege.",
    },
    suitableFor: {
      es: ["Pacientes en general, como parte de sus controles periódicos"],
      pt: ["Pacientes em geral, como parte de seus controles periódicos"],
      en: ["Patients in general, as part of routine check-ups"],
      de: ["Patienten allgemein, im Rahmen regelmäßiger Kontrolltermine"],
    },
    process: {
      es: ["Evaluación clínica", "Limpieza profesional"],
      pt: ["Avaliação clínica", "Limpeza profissional"],
      en: ["Clinical evaluation", "Professional cleaning"],
      de: ["Klinische Untersuchung", "Professionelle Reinigung"],
    },
    benefits: {
      es: ["Cuidado preventivo de la salud bucal"],
      pt: ["Cuidado preventivo da saúde bucal"],
      en: ["Preventive care for oral health"],
      de: ["Vorbeugende Pflege der Mundgesundheit"],
    },
  },
  {
    id: "gingivioplastia",
    verified: true,
    slug: { es: "gingivioplastia", pt: "gengivoplastia", en: "gingivoplasty", de: "gingivoplastik" },
    name: { es: "Gingivioplastia", pt: "Gengivoplastia", en: "Gingivoplasty", de: "Gingivoplastik" },
    shortDescription: {
      es: "Procedimiento de estética gingival, mostrado en el perfil de Instagram de la clínica junto a un caso de paciente con ortodoncia.",
      pt: "Procedimento de estética gengival, mostrado no perfil do Instagram da clínica junto a um caso de paciente em tratamento ortodôntico.",
      en: "A gum-aesthetics procedure, shown on the clinic's Instagram profile alongside an orthodontic patient case.",
      de: "Ein Verfahren zur ästhetischen Gestaltung des Zahnfleisches, das im Instagram-Profil der Praxis im Zusammenhang mit einem kieferorthopädischen Patientenfall gezeigt wurde.",
    },
    suitableFor: {
      es: ["Pacientes evaluados por el especialista para estética gingival"],
      pt: ["Pacientes avaliados pelo especialista para estética gengival"],
      en: ["Patients assessed by the specialist for gum aesthetics"],
      de: ["Patienten, die vom Facharzt für eine ästhetische Zahnfleischbehandlung beurteilt wurden"],
    },
    process: {
      es: ["Evaluación clínica", "Procedimiento de gingivioplastia"],
      pt: ["Avaliação clínica", "Procedimento de gengivoplastia"],
      en: ["Clinical evaluation", "Gingivoplasty procedure"],
      de: ["Klinische Untersuchung", "Gingivoplastik-Verfahren"],
    },
    benefits: {
      es: ["Mejora de la estética gingival como parte del tratamiento integral"],
      pt: ["Melhora da estética gengival como parte do tratamento integral"],
      en: ["Improved gum aesthetics as part of comprehensive treatment"],
      de: ["Verbesserte Zahnfleischästhetik als Teil der Gesamtbehandlung"],
    },
  },
];

export function getTreatmentBySlug(locale: Locale, slug: string) {
  return treatments.find((t) => t.slug[locale] === slug);
}

export function getTreatmentPath(locale: Locale, id: string) {
  const treatment = treatments.find((t) => t.id === id);
  return treatment?.slug[locale];
}
