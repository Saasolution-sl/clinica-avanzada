import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { treatments } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Tratamientos de ortodoncia",
  description:
    "Conocé los tratamientos de ortodoncia y estética dental de Clínica Avanzada en Paraguay.",
  alternates: { canonical: "/tratamientos" },
};

export default function TreatmentsPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Tratamientos" }]} />
      <SectionHeading
        eyebrow="Tratamientos"
        title="Conocé nuestros tratamientos"
        description="Cada tratamiento comienza con una evaluación clínica individual para definir el enfoque más adecuado."
        className="mt-6"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <TreatmentCard key={t.slug} treatment={t} />
        ))}
      </div>
    </Container>
  );
}
