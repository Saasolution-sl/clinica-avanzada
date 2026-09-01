import { MapPin, Phone, Mail, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { site, buildWhatsappUrl } from "@/content/site";
import { routing, type Locale } from "@/i18n/routing";

const telHref = `tel:+595${site.phone.value.replace(/\D/g, "").replace(/^0/, "")}`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/contacto` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tn = await getTranslations({ locale, namespace: "nav" });
  const th = await getTranslations({ locale, namespace: "hours" });
  const tw = await getTranslations({ locale, namespace: "whatsapp" });

  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: tn("home"), href: "/" }, { label: tn("contact") }]} />
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="mt-6"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("address")}</p>
              <p className="mt-1 text-sm text-text-muted">{site.address.value}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("phone")}</p>
              <a href={telHref} className="mt-1 inline-block text-sm text-primary underline">
                {site.phone.value}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("whatsapp")}</p>
              <a
                href={buildWhatsappUrl(tw("base"))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-primary underline"
              >
                {t("whatsappCta")}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("email")}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-text-muted">
                {t("toConfirm")} <PlaceholderBadge />
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("hours")}</p>
              <ul className="mt-1 space-y-0.5 text-sm text-text-muted">
                {site.hours.value.map((h) => (
                  <li key={h.dayKey}>
                    {th(h.dayKey)}: {h.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Instagram className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">{t("instagram")}</p>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-primary underline">
                {site.instagram.handle}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/agendar" icon={<CalendarCheck className="h-4 w-4" />}>{tn("bookCta")}</Button>
            <Button
              href={buildWhatsappUrl(tw("base"))}
              external
              variant="whatsapp"
              icon={<MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />}
            >
              {t("whatsapp")}
            </Button>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.value)}`}
              external
              variant="secondary"
              icon={<MapPin className="h-4 w-4" />}
            >
              {t("directions")}
            </Button>
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border">
          <iframe
            title={t("address")}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.value)}&output=embed`}
          />
        </div>
      </div>
    </Container>
  );
}
