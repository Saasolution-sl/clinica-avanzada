"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { cn } from "@/lib/utils";
import type { ClinicalCase } from "@/content/cases";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";

export function CasesGrid({ cases }: { cases: ClinicalCase[] }) {
  const t = useTranslations("cases");
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<ClinicalCase["category"] | "todos">("todos");

  const FILTERS: { value: ClinicalCase["category"] | "todos"; label: string }[] = [
    { value: "todos", label: t("filters.all") },
    { value: "alineadores", label: t("filters.aligners") },
    { value: "brackets", label: t("filters.braces") },
    { value: "adultos", label: t("filters.adults") },
    { value: "adolescentes", label: t("filters.teens") },
  ];

  const filtered = filter === "todos" ? cases : cases.filter((c) => c.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f.value
                ? "border-primary bg-primary text-white"
                : "border-border bg-surface text-text-muted hover:border-primary/40",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-text-muted">{t("emptyFiltered")}</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Link
              key={c.id}
              href={{ pathname: "/casos-clinicos/[slug]", params: { slug: c.slug[locale] } }}
              onClick={() => track("clinical_case_viewed", { case: c.id })}
              className="block overflow-hidden rounded-2xl border border-border bg-surface shadow-softer transition-transform hover:-translate-y-1 hover:shadow-soft"
            >
              <BeforeAfterSlider
                className="rounded-none"
                beforeImage={c.beforeImage}
                afterImage={c.afterImage}
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-secondary">{c.title[locale]}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
