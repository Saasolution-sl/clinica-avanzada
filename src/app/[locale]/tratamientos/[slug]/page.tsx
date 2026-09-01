import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { Button } from "@/components/Button";
import { treatments, getTreatmentBySlug } from "@/content/treatments";
import { buildWhatsappUrl } from "@/content/site";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    treatments.map((t) => ({ locale, slug: t.slug[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const treatment = getTreatmentBySlug(locale, slug);
  if (!treatment) return {};
  return {
    title: treatment.name[locale],
    description: treatment.shortDescription[locale],
    alternates: { canonical: `/${locale}/tratamientos/${slug}` },
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const treatment = getTreatmentBySlug(locale, slug);
  if (!treatment) notFound();

  const t = await getTranslations({ locale, namespace: "treatmentsSection" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const tw = await getTranslations({ locale, namespace: "whatsapp" });
  const whatsappUrl = buildWhatsappUrl(
    tw("treatment").replace("{treatment}", treatment.name[locale]),
  );

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("treatments"), href: "/tratamientos" },
          { label: treatment.name[locale] },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,0.8fr] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
              {treatment.name[locale]}
            </h1>
            {!treatment.verified && <PlaceholderBadge />}
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            {treatment.shortDescription[locale]}
          </p>

          {treatment.suitableFor[locale].length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">{t("whoFor")}</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-text-muted">
                {treatment.suitableFor[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {treatment.process[locale].length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">{t("howItWorks")}</h2>
              <ol className="mt-3 space-y-2 text-sm text-text-muted">
                {treatment.process[locale].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-primary">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {treatment.benefits[locale].length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-secondary">{t("benefits")}</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-text-muted">
                {treatment.benefits[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-10 text-xs text-text-muted">{t("disclaimer")}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/agendar" size="lg" icon={<CalendarCheck className="h-5 w-5" />}>
              {t("bookEvaluation")}
            </Button>
            <Button
              href={whatsappUrl}
              external
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />}
            >
              {t("consultWhatsapp")}
            </Button>
          </div>
        </div>

        <PhotoPlaceholder className="aspect-[4/5] w-full rounded-3xl shadow-soft" label={treatment.name[locale]} />
      </div>
    </Container>
  );
}
