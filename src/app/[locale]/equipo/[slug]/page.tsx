import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { doctors, getDoctorBySlug } from "@/content/doctors";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => doctors.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return { title: doctor.name, alternates: { canonical: `/${locale}/equipo/${doctor.slug}` } };
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const t = await getTranslations({ locale, namespace: "team" });
  const tn = await getTranslations({ locale, namespace: "nav" });

  const jsonLd = doctor.verified
    ? {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.specialty[locale],
      }
    : null;

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("team"), href: "/equipo" },
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
        <PhotoPlaceholder className="aspect-square w-full rounded-3xl shadow-soft" label={t("photoPending")} />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
              {doctor.name}
            </h1>
            {!doctor.verified && <PlaceholderBadge />}
          </div>
          <p className="mt-2 text-primary">{doctor.specialty[locale]}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-muted">{doctor.bio[locale]}</p>

          {doctor.education.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">{t("education")}</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
          {doctor.certifications.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">{t("certifications")}</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.certifications.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
          {doctor.areasOfExpertise[locale].length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-medium text-secondary">{t("expertise")}</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
                {doctor.areasOfExpertise[locale].map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
