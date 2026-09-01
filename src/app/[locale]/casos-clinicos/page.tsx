import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CasesGrid } from "@/components/CasesGrid";
import { getPublishableCases } from "@/content/cases";
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
  const t = await getTranslations({ locale, namespace: "cases" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/casos-clinicos` },
  };
}

export default async function ClinicalCasesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cases" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const cases = getPublishableCases();

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("cases") }]} />
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="mt-6"
      />

      {cases.length === 0 ? (
        <div className="mt-14 rounded-2xl border border-dashed border-border bg-surface-muted p-10 text-center">
          <p className="text-sm text-text-muted">{t("empty")}</p>
        </div>
      ) : (
        <div className="mt-12">
          <CasesGrid cases={cases} />
        </div>
      )}
    </Container>
  );
}
