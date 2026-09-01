import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { doctors, getDoctorBySlug } from "@/content/doctors";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const doctor = getDoctorBySlug(params.slug);
  if (!doctor) return {};
  return { title: doctor.name, alternates: { canonical: `/equipo/${doctor.slug}` } };
}

export default function DoctorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const doctor = getDoctorBySlug(params.slug);
  if (!doctor) notFound();

  const jsonLd = doctor.verified
    ? {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.specialty,
      }
    : null;

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Equipo", href: "/equipo" },
          { label: doctor.name },
        ]}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr,1fr] lg:items-start">
        <PhotoPlaceholder className="aspect-square w-full rounded-3xl shadow-soft" label="Foto profesional" />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
              {doctor.name}
            </h1>
            {!doctor.verified && <PlaceholderBadge />}
          </div>
          <p className="mt-2 text-primary">{doctor.specialty}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-muted">{doctor.bio}</p>

          {doctor.education.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">Formación</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
          {doctor.certifications.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">Certificaciones</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.certifications.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
          {doctor.areasOfExpertise.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">Áreas de especialización</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.areasOfExpertise.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
