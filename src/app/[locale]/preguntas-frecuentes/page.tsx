import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/FaqJsonLd";
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
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/preguntas-frecuentes` },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("faq") }]} />
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="mt-6"
      />
      <div className="mt-10 max-w-3xl">
        <FAQAccordion faqs={items} />
      </div>
      <FaqJsonLd faqs={items} />
    </Container>
  );
}
