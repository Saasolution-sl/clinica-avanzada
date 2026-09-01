import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
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
  const t = await getTranslations({ locale, namespace: "clinic" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/clinica` },
  };
}

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "clinic" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const spaces = t.raw("spaces") as string[];

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("clinic") }]} />
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="mt-6"
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:grid-rows-2">
        <PhotoPlaceholder className="rounded-2xl sm:col-span-4 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full" label={spaces[0]} />
        <PhotoPlaceholder className="rounded-2xl aspect-square sm:col-span-2" label={spaces[1]} />
        <PhotoPlaceholder className="rounded-2xl aspect-square sm:col-span-2" label={spaces[2]} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PhotoPlaceholder className="rounded-2xl aspect-[16/10]" label={spaces[3]} />
        <PhotoPlaceholder className="rounded-2xl aspect-[16/10]" label={spaces[4]} />
      </div>

      <p className="mt-10 max-w-2xl text-sm text-text-muted">{t("photosNote")}</p>
    </Container>
  );
}
