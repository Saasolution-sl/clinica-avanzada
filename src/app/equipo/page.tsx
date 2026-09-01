import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoctorCard } from "@/components/DoctorCard";
import { doctors } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description: "Conocé a los especialistas de Clínica Avanzada en Paraguay.",
  alternates: { canonical: "/equipo" },
};

export default function TeamPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Equipo" }]} />
      <SectionHeading
        eyebrow="Especialistas"
        title="Nuestro equipo"
        description="Elegís un especialista, no simplemente un servicio dental."
        className="mt-6"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d) => (
          <DoctorCard key={d.slug} doctor={d} />
        ))}
      </div>
    </Container>
  );
}
