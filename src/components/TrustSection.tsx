"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { UserCheck, Cpu, Fingerprint, MessagesSquare } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const ICONS = [UserCheck, Cpu, Fingerprint, MessagesSquare];

export function TrustSection() {
  const t = useTranslations("trust");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((point, i) => {
            const Icon = ICONS[i] ?? UserCheck;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-7 shadow-softer transition-transform hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-medium text-secondary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
