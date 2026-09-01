import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { Button } from "@/components/Button";
import { treatments, getTreatmentBySlug } from "@/content/treatments";
import { buildWhatsappUrl, whatsappMessageForTreatment } from "@/content/site";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.shortDescription,
    alternates: { canonical: `/tratamientos/${treatment.slug}` },
  };
}

export default function TreatmentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const treatment = getTreatmentBySlug(params.slug);
  if (!treatment) notFound();

  const whatsappUrl = buildWhatsappUrl(whatsappMessageForTreatment(treatment.name));

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Tratamientos", href: "/tratamientos" },
          { label: treatment.name },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,0.8fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
              {treatment.name}
            </h1>
            {!treatment.verified && <PlaceholderBadge label="Descripción a confirmar" />}
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            {treatment.shortDescription}
          </p>

          {treatment.suitableFor.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">¿Para quién es?</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-text-muted">
                {treatment.suitableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {treatment.process.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">Cómo funciona el proceso</h2>
              <ol className="mt-3 space-y-2 text-sm text-text-muted">
                {treatment.process.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-primary">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {treatment.benefits.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">Beneficios</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-text-muted">
                {treatment.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {treatment.faqs.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">Preguntas frecuentes</h2>
              <div className="mt-4">
                <FAQAccordion faqs={treatment.faqs} />
              </div>
              <FaqJsonLd faqs={treatment.faqs} />
            </div>
          )}

          <p className="mt-10 text-xs text-text-muted">
            La información de esta página es general y no reemplaza una
            evaluación clínica individual. No garantizamos resultados ni
            plazos específicos: estos se definen en la consulta con el
            especialista.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/agendar" size="lg" icon={<CalendarCheck className="h-5 w-5" />}>
              Agendar una evaluación
            </Button>
            <Button
              href={whatsappUrl}
              external
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>

        <PhotoPlaceholder className="aspect-[4/5] w-full rounded-3xl shadow-soft" label={treatment.name} />
      </div>
    </Container>
  );
}
