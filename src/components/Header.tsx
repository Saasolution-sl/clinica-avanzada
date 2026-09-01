"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { buildWhatsappUrl } from "@/content/site";
import { track } from "@/lib/analytics";

export function Header() {
  const t = useTranslations("nav");
  const th = useTranslations("hero");
  const tw = useTranslations("whatsapp");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NAV_LINKS = [
    { href: "/" as const, label: t("home") },
    { href: "/tratamientos" as const, label: t("treatments") },
    { href: "/casos-clinicos" as const, label: t("cases") },
    { href: "/equipo" as const, label: t("team") },
    { href: "/clinica" as const, label: t("clinic") },
    { href: "/preguntas-frecuentes" as const, label: t("faq") },
    { href: "/contacto" as const, label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-md shadow-softer"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-secondary"
        >
          Clínica Avanzada
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button href="/agendar" variant="primary" size="md">
            {t("bookCta")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-secondary"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-white px-6 py-10 lg:hidden">
          <nav className="flex flex-1 flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border py-4 font-display text-2xl text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-6">
            <Button href="/agendar" variant="primary" size="lg" className="w-full">
              {t("bookCta")}
            </Button>
            <Button
              href={buildWhatsappUrl(tw("base"))}
              external
              variant="whatsapp"
              size="lg"
              className="w-full"
              icon={<MessageCircle className="h-5 w-5" fill="white" strokeWidth={0} />}
              onClick={() => track("whatsapp_clicked", { source: "mobile_menu" })}
            >
              {th("whatsappCta")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
