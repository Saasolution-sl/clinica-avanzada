import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "La clínica",
  description: "Conocé las instalaciones y el ambiente de Clínica Avanzada en Paraguay.",
  alternates: { canonical: "/clinica" },
};

const SPACES = ["Recepción", "Sala de tratamiento", "Equipamiento", "Tecnología de diagnóstico", "Ambiente para pacientes"];

export default function ClinicPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "La clínica" }]} />
      <SectionHeading
        eyebrow="Nuestro espacio"
        title="Nuestra clínica"
        description="Un ambiente pensado para que cada visita sea clara, cómoda y profesional."
        className="mt-6"
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:grid-rows-2">
        <PhotoPlaceholder className="rounded-2xl sm:col-span-4 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full" label={SPACES[0]} />
        <PhotoPlaceholder className="rounded-2xl aspect-square sm:col-span-2" label={SPACES[1]} />
        <PhotoPlaceholder className="rounded-2xl aspect-square sm:col-span-2" label={SPACES[2]} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PhotoPlaceholder className="rounded-2xl aspect-[16/10]" label={SPACES[3]} />
        <PhotoPlaceholder className="rounded-2xl aspect-[16/10]" label={SPACES[4]} />
      </div>

      <p className="mt-10 max-w-2xl text-sm text-text-muted">
        Las fotografías reales de la clínica todavía no están disponibles para
        este sitio (ver <code>CLINICA-AVANZADA-CONTENT-AUDIT.md</code>). Esta
        sección usa marcadores de posición hasta contar con material
        fotográfico autorizado por la clínica.
      </p>
    </Container>
  );
}
