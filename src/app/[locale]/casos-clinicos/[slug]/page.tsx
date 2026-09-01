import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { clinicalCases, getCaseBySlug } from "@/content/cases";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    clinicalCases
      .filter((c) => c.patientConsentAuthorized)
      .map((c) => ({ locale, slug: c.slug[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const c = getCaseBySlug(locale, slug);
  if (!c) return {};
  return { title: c.title[locale], alternates: { canonical: `/${locale}/casos-clinicos/${slug}` } };
}

export default async function ClinicalCaseDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const clinicalCase = getCaseBySlug(locale, slug);
  if (!clinicalCase) notFound();

  const t = await getTranslations({ locale, namespace: "cases" });
  const tn = await getTranslations({ locale, namespace: "nav" });

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("cases"), href: "/casos-clinicos" },
          { label: clinicalCase.title[locale] },
        ]}
      />
      <h1 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-secondary">
        {clinicalCase.title[locale]}
      </h1>

      <div className="mt-8">
        <BeforeAfterSlider
          beforeImage={clinicalCase.beforeImage}
          afterImage={clinicalCase.afterImage}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">{t("initialSituation")}</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.initialSituation[locale]}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">{t("treatmentSelected")}</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.treatmentSelected[locale]}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium text-secondary">{t("approach")}</h2>
          <p className="mt-2 text-sm text-text-muted">{clinicalCase.approach[locale]}</p>
        </div>
      </div>
    </Container>
  );
}
