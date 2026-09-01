import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/content/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clínica Avanzada — Ortodoncia en Paraguay",
    template: "%s | Clínica Avanzada",
  },
  description:
    "Ortodoncia avanzada y estética dental en Paraguay. Atención especializada, tecnología moderna y planificación de tratamiento personalizada.",
  openGraph: {
    type: "website",
    locale: "es_PY",
    siteName: "Clínica Avanzada",
    title: "Clínica Avanzada — Ortodoncia en Paraguay",
    description:
      "Ortodoncia avanzada y estética dental en Paraguay. Atención especializada, tecnología moderna y planificación de tratamiento personalizada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Avanzada — Ortodoncia en Paraguay",
    description:
      "Ortodoncia avanzada y estética dental en Paraguay. Atención especializada, tecnología moderna y planificación de tratamiento personalizada.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2f6e68",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: siteUrl,
  sameAs: [site.instagram.url],
  areaServed: "PY",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.value,
    addressLocality: site.city.value,
    addressCountry: "PY",
  },
  telephone: site.phone.value,
  openingHoursSpecification: site.hours.value.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    description: h.hours,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PY">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased bg-bg text-text`}>
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
      </body>
    </html>
  );
}
