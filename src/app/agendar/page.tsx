import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Agendar consulta",
  description: "Agendá tu consulta de ortodoncia en Clínica Avanzada, Paraguay.",
  alternates: { canonical: "/agendar" },
};

export default function BookingPage({
  searchParams,
}: {
  searchParams: { tratamiento?: string };
}) {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Agendar consulta" }]} />
      <SectionHeading
        eyebrow="Agendar"
        title="Agendá tu consulta"
        description="Completá tus datos y nos pondremos en contacto para confirmar día y horario."
        className="mt-6"
      />
      <div className="mt-10 max-w-3xl">
        <BookingForm defaultTreatmentSlug={searchParams.tratamiento} />
      </div>
    </Container>
  );
}
