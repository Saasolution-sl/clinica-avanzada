export type Faq = { question: string; answer: string };

/**
 * General orthodontic FAQ content. Answers are intentionally general and
 * medically responsible — no individual outcomes, durations, or prices are
 * promised, per the project brief. This is safe evergreen content, not
 * clinic-specific claims, so it does not carry a verified/placeholder flag.
 */
export const faqs: Faq[] = [
  {
    question: "¿Cuándo debería realizarse la primera consulta de ortodoncia?",
    answer:
      "Una primera consulta de evaluación es útil apenas surge la inquietud, sin importar la edad. El especialista determinará, según cada caso, el momento más adecuado para iniciar un tratamiento.",
  },
  {
    question: "¿Los adultos pueden realizarse ortodoncia?",
    answer:
      "Sí, la ortodoncia en adultos es una práctica habitual. El plan de tratamiento se adapta a la situación clínica particular de cada paciente, sin importar la edad.",
  },
  {
    question: "¿Brackets o alineadores?",
    answer:
      "La elección depende del diagnóstico, la complejidad del caso y las preferencias del paciente. El especialista evaluará cuál alternativa es la más adecuada durante la consulta.",
  },
  {
    question: "¿La ortodoncia duele?",
    answer:
      "Es común sentir cierta molestia o sensibilidad, especialmente en los primeros días tras la colocación o algunos controles. El equipo puede orientar sobre cómo manejar esa sensibilidad.",
  },
  {
    question: "¿Cuánto dura un tratamiento?",
    answer:
      "La duración varía según el diagnóstico y la complejidad de cada caso. El especialista brinda una estimación personalizada durante la evaluación inicial, que puede ajustarse durante el tratamiento.",
  },
  {
    question: "¿Cada cuánto son los controles?",
    answer:
      "La frecuencia de los controles la define el especialista según el tipo de tratamiento y su evolución. Mantener la asistencia a los controles es importante para el progreso del tratamiento.",
  },
  {
    question: "¿Qué sucede después de terminar la ortodoncia?",
    answer:
      "Habitualmente se indica una fase de retención para ayudar a mantener el resultado alcanzado. El especialista explicará el esquema de retención recomendado para cada caso.",
  },
  {
    question: "¿Necesito estudios antes de comenzar?",
    answer:
      "Según el diagnóstico, el especialista puede solicitar estudios complementarios (como radiografías) para planificar el tratamiento de forma adecuada.",
  },
  {
    question: "¿Cómo puedo agendar una consulta?",
    answer:
      "Podés agendar una consulta completando el formulario en la página de Agendar, o escribiendo directamente por WhatsApp desde cualquier página del sitio.",
  },
];
