"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function JourneySteps() {
  const t = useTranslations("journey");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="bg-surface-muted py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-surface p-7 shadow-softer"
            >
              <span className="font-display text-3xl text-primary-light">
                {String(i + 1).padStart(2, "0")}
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
