"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "./icons/InstagramIcon";
import { Container } from "./Container";
import { site, buildWhatsappUrl } from "@/content/site";
import { treatments } from "@/content/treatments";
import { track } from "@/lib/analytics";
import type { Locale } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const th = useTranslations("hours");
  const tw = useTranslations("whatsapp");
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-semibold text-white">
            Clínica Avanzada
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {t("description")}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={() => track("instagram_clicked", { source: "footer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsappUrl(tw("base"))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => track("whatsapp_clicked", { source: "footer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            {t("navTitle")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/tratamientos" className="hover:text-white">{tn("treatments")}</Link></li>
            <li><Link href="/casos-clinicos" className="hover:text-white">{tn("cases")}</Link></li>
            <li><Link href="/equipo" className="hover:text-white">{tn("team")}</Link></li>
            <li><Link href="/clinica" className="hover:text-white">{tn("clinic")}</Link></li>
            <li><Link href="/preguntas-frecuentes" className="hover:text-white">{tn("faq")}</Link></li>
            <li><Link href="/contacto" className="hover:text-white">{tn("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            {t("treatmentsTitle")}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {treatments.map((tItem) => (
              <li key={tItem.id}>
                <Link href={{ pathname: "/tratamientos/[slug]", params: { slug: tItem.slug[locale] } }} className="hover:text-white">
                  {tItem.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            {t("contactTitle")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{site.address.value}</li>
            <li>{t("phoneLabel")}: {site.phone.value}</li>
            {site.hours.value.map((h) => (
              <li key={h.dayKey}>
                {th(h.dayKey)}: {h.hours}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Clínica Avanzada. {t("rights")}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Link href="/privacidad" className="hover:text-white">{t("privacy")}</Link>
            <Link href="/cookies" className="hover:text-white">{t("cookiesLink")}</Link>
            <a
              href="https://saasolution.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {t("credit")}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
