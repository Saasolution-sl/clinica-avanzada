import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { JourneySteps } from "@/components/JourneySteps";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Button } from "@/components/Button";
import { treatments } from "@/content/treatments";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}` },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "treatmentsSection" });
  const tc = await getTranslations({ locale, namespace: "finalCta" });

  return (
    <>
      <Hero />
      <TrustSection />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
            <Button href="/tratamientos" variant="secondary">{t("viewAll")}</Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 3).map((tItem) => (
              <TreatmentCard key={tItem.id} treatment={tItem} />
            ))}
          </div>
        </Container>
      </section>

      <JourneySteps />
      <InstagramGallery />

      <section className="bg-secondary py-20 text-center md:py-28">
        <Container>
          <SectionHeading
            eyebrow={tc("eyebrow")}
            title={tc("title")}
            description={tc("description")}
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/agendar" size="lg">{tc("bookCta")}</Button>
            <Button href="/contacto" variant="ghost" size="lg">{tc("contactCta")}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
