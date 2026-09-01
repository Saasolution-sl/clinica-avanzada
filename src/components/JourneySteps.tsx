"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Primera consulta",
    description:
      "Conversamos sobre tus inquietudes y objetivos junto al especialista.",
  },
  {
    number: "02",
    title: "Diagnóstico",
    description:
      "Examen clínico y estudios complementarios según cada caso.",
  },
  {
    number: "03",
    title: "Plan de tratamiento",
    description: "Presentación de la estrategia de tratamiento recomendada.",
  },
  {
    number: "04",
    title: "Inicio",
    description: "Comienzo del tratamiento de ortodoncia acordado.",
  },
  {
    number: "05",
    title: "Seguimiento",
    description: "Controles clínicos regulares para monitorear el progreso.",
  },
  {
    number: "06",
    title: "Retención",
    description:
      "Acompañamiento para ayudar a mantener el resultado alcanzado.",
  },
];

export function JourneySteps() {
  return (
    <section className="bg-surface-muted py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="El recorrido de tu tratamiento"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-surface p-7 shadow-softer"
            >
              <span className="font-display text-3xl text-primary-light">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-secondary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
