import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/content/site";
import { routing, localeMeta, type Locale } from "@/i18n/routing";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clinicaavanzada.com.py";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [localeMeta[l].hreflang, `${siteUrl}/${l}`]),
  );
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${site.name} — ${t("title")}`,
      template: `%s | ${site.name}`,
    },
    description: t("description"),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeMeta[locale].ogLocale,
      siteName: site.name,
      title: `${site.name} — ${t("title")}`,
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${t("title")}`,
      description: t("description"),
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#2f6e68",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    url: `${siteUrl}/${locale}`,
    sameAs: [site.instagram.url],
    areaServed: "PY",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.value,
      addressLocality: site.city.value,
      addressCountry: "PY",
    },
    telephone: site.phone.value,
  };

  return (
    <html lang={locale}>
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased bg-bg text-text`}>
        <NextIntlClientProvider locale={locale}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsappFloat />
          <MobileStickyBar />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
