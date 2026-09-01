import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  const t = await getTranslations({ locale, namespace: "treatmentsSection" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  return {
    title: tn("treatments"),
    description: t("listDescription"),
    alternates: { canonical: `/${locale}/tratamientos` },
  };
}

export default async function TreatmentsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "treatmentsSection" });
  const tn = await getTranslations({ locale, namespace: "nav" });

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("treatments") }]} />
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("listTitle")}
        description={t("listDescription")}
        className="mt-6"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((tItem) => (
          <TreatmentCard key={tItem.id} treatment={tItem} />
        ))}
      </div>
    </Container>
  );
}
