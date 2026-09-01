import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("pageTitle"),
    alternates: { canonical: `/${locale}/privacidad` },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });
  const tn = await getTranslations({ locale, namespace: "nav" });

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: t("pageTitle") }]} />
      <h1 className="mt-6 font-display text-3xl font-medium text-secondary">{t("pageTitle")}</h1>
      <div className="prose mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">
        <p>{t("p1")}</p>
        <p className="mt-4">
          <strong>{t("notice")}</strong> {t("p2")}
        </p>
        <p className="mt-4">{t("p3")}</p>
      </div>
    </Container>
  );
}
