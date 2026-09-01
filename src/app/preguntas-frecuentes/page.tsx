import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas a las preguntas más frecuentes sobre ortodoncia en Clínica Avanzada, Paraguay.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FaqPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Preguntas frecuentes" }]} />
      <SectionHeading
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        description="Información general sobre ortodoncia. Cada tratamiento se evalúa de forma individual en la consulta."
        className="mt-6"
      />
      <div className="mt-10 max-w-3xl">
        <FAQAccordion faqs={faqs} />
      </div>
      <FaqJsonLd faqs={faqs} />
    </Container>
  );
}
