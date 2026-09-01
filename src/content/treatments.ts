export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  verified: boolean;
  suitableFor: string[];
  process: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

/**
 * This list is now backed by real Instagram content viewed in an
 * authenticated session (see CLINICA-AVANZADA-CONTENT-AUDIT.md): a
 * highlight card lists the clinic's specialties (Ortodoncia, Endodoncia,
 * Odontopediatría, Rehabilitación Oral, Implantología Oral), another lists
 * Limpieza / Ortodoncia / Prótesis as core offerings, and individual reels
 * confirm self-ligating ("autoligada") orthodontics and gingivoplasty as
 * treatments actually performed. Descriptions, process steps and benefits
 * below are still general/evergreen copy — no post gave step-by-step
 * process detail, so those remain conservative and non-promissory rather
 * than invented specifics.
 */
export const treatments: Treatment[] = [
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    verified: true,
    shortDescription:
      "Diagnóstico y planificación de tratamiento ortodóncico a cargo de un especialista, adaptado a cada paciente.",
    suitableFor: [
      "Pacientes que buscan mejorar la alineación dental",
      "Adolescentes y adultos",
    ],
    process: [
      "Consulta inicial y evaluación clínica",
      "Estudios diagnósticos según el caso",
      "Presentación del plan de tratamiento",
      "Controles periódicos durante el tratamiento",
    ],
    benefits: [
      "Seguimiento profesional durante todo el proceso",
      "Plan de tratamiento personalizado",
    ],
    faqs: [],
  },
  {
    slug: "ortodoncia-autoligada",
    name: "Ortodoncia autoligada",
    verified: true,
    shortDescription:
      "Un sistema de brackets que, en muchos casos, permite un tratamiento más cómodo, práctico y con menos controles frente a la ortodoncia convencional.",
    suitableFor: ["Pacientes evaluados por el especialista como buenos candidatos a este sistema"],
    process: [
      "Evaluación para determinar si es una opción adecuada",
      "Colocación de los brackets autoligado",
      "Controles periódicos, habitualmente con una frecuencia menor que la ortodoncia convencional",
    ],
    benefits: ["Mayor comodidad reportada por el sistema autoligado", "Menor frecuencia de controles en muchos casos"],
    faqs: [],
  },
  {
    slug: "endodoncia",
    name: "Endodoncia",
    verified: true,
    shortDescription:
      "Tratamiento de conducto indicado ante señales como dolor, oscurecimiento del diente, sensibilidad marcada o desgaste por bruxismo.",
    suitableFor: ["Pacientes con señales clínicas evaluadas por el especialista"],
    process: [
      "Evaluación clínica de la señal o síntoma",
      "Diagnóstico del estado del diente",
      "Tratamiento de conducto si está indicado",
    ],
    benefits: ["Atención de señales tempranas para evitar complicaciones mayores"],
    faqs: [],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatría",
    verified: true,
    shortDescription: "Atención odontológica orientada a pacientes niños y niñas.",
    suitableFor: ["Pacientes pediátricos"],
    process: ["Consulta inicial adaptada al paciente pediátrico", "Plan de tratamiento según la edad y el caso"],
    benefits: ["Atención especializada para las particularidades de la odontología infantil"],
    faqs: [],
  },
  {
    slug: "rehabilitacion-oral",
    name: "Rehabilitación Oral",
    verified: true,
    shortDescription: "Tratamientos orientados a restaurar la función y estética de la dentadura.",
    suitableFor: ["Pacientes con necesidad de restauración dental evaluada por el especialista"],
    process: ["Evaluación clínica", "Plan de rehabilitación personalizado"],
    benefits: ["Enfoque integral de la salud bucal"],
    faqs: [],
  },
  {
    slug: "implantologia-oral",
    name: "Implantología Oral",
    verified: true,
    shortDescription: "Colocación de implantes dentales como parte de un plan de tratamiento evaluado por el especialista.",
    suitableFor: ["Pacientes evaluados como candidatos a implantes"],
    process: ["Evaluación y estudios diagnósticos", "Planificación del implante", "Colocación y seguimiento"],
    benefits: ["Opción para restaurar piezas dentales ausentes"],
    faqs: [],
  },
  {
    slug: "protesis",
    name: "Prótesis Dental",
    verified: true,
    shortDescription: "Diseño y colocación de prótesis dentales a medida.",
    suitableFor: ["Pacientes con necesidad de reemplazo de piezas dentales"],
    process: ["Evaluación clínica", "Toma de registros/moldes", "Confección y colocación de la prótesis"],
    benefits: ["Prótesis adaptada a cada paciente"],
    faqs: [],
  },
  {
    slug: "limpieza",
    name: "Limpieza Dental",
    verified: true,
    shortDescription: "Limpieza dental profesional como parte del cuidado bucal preventivo.",
    suitableFor: ["Pacientes en general, como parte de sus controles periódicos"],
    process: ["Evaluación clínica", "Limpieza profesional"],
    benefits: ["Cuidado preventivo de la salud bucal"],
    faqs: [],
  },
  {
    slug: "gingivioplastia",
    name: "Gingivioplastia",
    verified: true,
    shortDescription:
      "Procedimiento de estética gingival, mostrado en el perfil de Instagram de la clínica junto a un caso de paciente con ortodoncia.",
    suitableFor: ["Pacientes evaluados por el especialista para estética gingival"],
    process: ["Evaluación clínica", "Procedimiento de gingivioplastia"],
    benefits: ["Mejora de la estética gingival como parte del tratamiento integral"],
    faqs: [],
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
