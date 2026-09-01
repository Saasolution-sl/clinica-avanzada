import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CasesGrid } from "@/components/CasesGrid";
import { getPublishableCases } from "@/content/cases";

export const metadata: Metadata = {
  title: "Casos clínicos",
  description:
    "Casos clínicos de ortodoncia de Clínica Avanzada en Paraguay, mostrados únicamente con autorización del paciente.",
  alternates: { canonical: "/casos-clinicos" },
};

export default function ClinicalCasesPage() {
  const cases = getPublishableCases();

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Casos clínicos" }]} />
      <SectionHeading
        eyebrow="Resultados"
        title="Casos clínicos"
        description="Publicamos únicamente casos con autorización expresa del paciente. Deslizá cada imagen para comparar antes y después."
        className="mt-6"
      />

      {cases.length === 0 ? (
        <div className="mt-14 rounded-2xl border border-dashed border-border bg-surface-muted p-10 text-center">
          <p className="text-sm text-text-muted">
            Todavía no contamos con casos clínicos autorizados para publicar en
            el sitio. Esta sección se actualizará en cuanto la clínica confirme
            casos con consentimiento firmado del paciente.
          </p>
        </div>
      ) : (
        <div className="mt-12">
          <CasesGrid cases={cases} />
        </div>
      )}
    </Container>
  );
}
