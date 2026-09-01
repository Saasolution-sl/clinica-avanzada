"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { routing, localeMeta, type Locale } from "@/i18n/routing";
import { resolveLocaleSwitchPath } from "@/lib/localeSwitch";
import { cn } from "@/lib/utils";

/**
 * Preserves the current page across a language switch, including dynamic
 * item pages (a specific treatment, clinical case, or team member) whose
 * URL slug differs per locale — see src/lib/localeSwitch.ts for how the
 * equivalent path is resolved.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSelect = (target: Locale) => {
    setOpen(false);
    if (target === locale) return;
    const targetPath = resolveLocaleSwitchPath(pathname, locale, target);
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000`;
    router.push(targetPath);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-text hover:border-primary/40"
      >
        {locale}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lifted"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => handleSelect(l)}
                className={cn(
                  "block w-full px-4 py-2 text-left text-sm hover:bg-surface-muted",
                  l === locale ? "font-semibold text-primary" : "text-text",
                )}
              >
                {localeMeta[l].nativeLabel}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
