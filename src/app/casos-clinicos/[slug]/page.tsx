import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { clinicalCases, getCaseBySlug } from "@/content/cases";

export function generateStaticParams() {
  return clinicalCases
    .filter((c) => c.patientConsentAuthorized)
    .map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCaseBySlug(params.slug);
  if (!c) return {};
  return { title: c.title, alternates: { canonical: `/casos-clinicos/${c.slug}` } };
}

export default function ClinicalCaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const clinicalCase = getCaseBySlug(params.slug);
  if (!clinicalCase) notFound();

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Casos clínicos", href: "/casos-clinicos" },
          { label: clinicalCase.title },
        ]}
      />
      <h1 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
        {clinicalCase.title}
      </h1>

      <div className="mt-8">
        <BeforeAfterSlider
          beforeImage={clinicalCase.beforeImage}
          afterImage={clinicalCase.afterImage}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">Situación inicial</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.initialSituation}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">Tratamiento seleccionado</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.treatmentSelected}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">Enfoque</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.approach}</p>
        </div>
      </div>
    </Container>
  );
}
