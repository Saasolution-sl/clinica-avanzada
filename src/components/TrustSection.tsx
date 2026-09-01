"use client";

import { motion } from "framer-motion";
import { UserCheck, Cpu, Fingerprint, MessagesSquare } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const POINTS = [
  {
    icon: UserCheck,
    title: "Atención especializada",
    description:
      "Cada plan de tratamiento se construye a partir de la evaluación clínica individual del paciente.",
  },
  {
    icon: Cpu,
    title: "Tecnología avanzada",
    description:
      "Diagnóstico y planificación de tratamiento apoyados en herramientas modernas de ortodoncia.",
  },
  {
    icon: Fingerprint,
    title: "Tratamientos personalizados",
    description:
      "No todas las sonrisas reciben el mismo enfoque: el plan se adapta a cada diagnóstico.",
  },
  {
    icon: MessagesSquare,
    title: "Seguimiento profesional",
    description:
      "Comunicación clara durante cada etapa, desde la primera consulta hasta la retención.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Una clínica pensada alrededor del paciente"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-7 shadow-softer transition-transform hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <point.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-medium text-secondary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
