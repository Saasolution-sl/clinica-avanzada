"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { buildWhatsappUrl, whatsappBaseMessage } from "@/content/site";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(127,195,186,0.25),transparent_60%)]" />
      <Container className="grid grid-cols-1 gap-8 pb-16 pt-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:col-start-1 lg:row-start-1"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Ortodoncia · Estética dental · Paraguay
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] text-secondary text-balance">
            Ortodoncia avanzada para una sonrisa que te representa.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            En Clínica Avanzada combinamos atención especializada, tecnología
            moderna y una planificación de tratamiento pensada para cada
            paciente en particular.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
        >
          <PhotoPlaceholder className="aspect-[4/5] w-full rounded-3xl shadow-lifted sm:aspect-[5/4] lg:aspect-[4/5]" />
        </motion.div>

        <div className="order-3 flex flex-col gap-3 sm:flex-row lg:col-start-1 lg:row-start-2">
          <Button
            href="/agendar"
            size="lg"
            icon={<CalendarCheck className="h-5 w-5" />}
            onClick={() => track("appointment_started", { source: "hero" })}
          >
            Agendar una consulta
          </Button>
          <Button
            href={buildWhatsappUrl(whatsappBaseMessage)}
            external
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />}
            onClick={() => track("whatsapp_clicked", { source: "hero" })}
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
