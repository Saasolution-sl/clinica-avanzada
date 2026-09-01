"use client";

import { useState } from "react";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { cn } from "@/lib/utils";
import type { ClinicalCase } from "@/content/cases";
import { track } from "@/lib/analytics";

const FILTERS: { value: ClinicalCase["category"] | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "alineadores", label: "Alineadores" },
  { value: "brackets", label: "Brackets" },
  { value: "adultos", label: "Adultos" },
  { value: "adolescentes", label: "Adolescentes" },
];

export function CasesGrid({ cases }: { cases: ClinicalCase[] }) {
  const [filter, setFilter] = useState<ClinicalCase["category"] | "todos">("todos");

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
        <p className="mt-10 text-sm text-text-muted">
          No hay casos publicados en esta categoría por el momento.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={`/casos-clinicos/${c.slug}`}
              onClick={() => track("clinical_case_viewed", { case: c.slug })}
              className="block overflow-hidden rounded-2xl border border-border bg-surface shadow-softer transition-transform hover:-translate-y-1 hover:shadow-soft"
            >
              <BeforeAfterSlider
                className="rounded-none"
                beforeImage={c.beforeImage}
                afterImage={c.afterImage}
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-secondary">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
