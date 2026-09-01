import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { JourneySteps } from "@/components/JourneySteps";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Button } from "@/components/Button";
import { treatments } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Ortodoncia en Paraguay",
  description:
    "Clínica Avanzada: ortodoncia avanzada y estética dental en Paraguay. Atención especializada, tecnología moderna y planificación de tratamiento personalizada. Agendá tu consulta.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Tratamientos"
              title="Conocé nuestros tratamientos"
              description="Ortodoncia y estética dental con un plan diseñado para cada paciente."
            />
            <Button href="/tratamientos" variant="secondary">Ver todos</Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 3).map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
        </Container>
      </section>

      <JourneySteps />
      <InstagramGallery />

      <section className="bg-secondary py-20 text-center md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Empecemos"
            title="Tu sonrisa merece un plan hecho a tu medida"
            description="Agendá tu consulta o escribinos por WhatsApp y damos el primer paso juntos."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/agendar" size="lg">Agendar una consulta</Button>
            <Button href="/contacto" variant="ghost" size="lg">Ver datos de contacto</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
