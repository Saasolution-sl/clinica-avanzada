"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { buildWhatsappUrl } from "@/content/site";
import { track } from "@/lib/analytics";

/**
 * Sticky bottom conversion bar, mobile only. Hidden while a text input is
 * focused so it never covers the on-screen keyboard or a form's own submit
 * button (see DESIGN-SYSTEM.md > Mobile rules).
 */
export function MobileStickyBar() {
  const t = useTranslations("hero");
  const tw = useTranslations("whatsapp");
  const [hiddenForInput, setHiddenForInput] = useState(false);

  useEffect(() => {
    const isTextField = (el: EventTarget | null) =>
      el instanceof HTMLElement &&
      (el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT");

    const onFocusIn = (e: FocusEvent) => {
      if (isTextField(e.target)) setHiddenForInput(true);
    };
    const onFocusOut = (e: FocusEvent) => {
      if (isTextField(e.target)) setHiddenForInput(false);
    };

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-white/90 p-3 backdrop-blur-md transition-transform duration-200 md:hidden ${
        hiddenForInput ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        href="/agendar"
        onClick={() => track("appointment_started", { source: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-white"
      >
        <CalendarCheck className="h-4 w-4" />
        {t("bookCta")}
      </Link>
      <a
        href={buildWhatsappUrl(tw("base"))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_clicked", { source: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-white"
      >
        <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
        WhatsApp
      </a>
    </div>
  );
}
