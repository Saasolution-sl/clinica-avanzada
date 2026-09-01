"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/content/treatments";
import type { Locale } from "@/i18n/routing";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("treatmentsSection");

  return (
    <Link
      href={{ pathname: "/tratamientos/[slug]", params: { slug: treatment.slug[locale] } }}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-softer transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <PhotoPlaceholder className="aspect-[4/3] w-full" label={treatment.name[locale]} />
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="font-display text-lg font-medium text-secondary">
            {treatment.name[locale]}
          </h3>
          {!treatment.verified && <PlaceholderBadge label={t("placeholderBadge")} />}
        </div>
        <p className="text-sm leading-relaxed text-text-muted line-clamp-2">
          {treatment.shortDescription[locale]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          {t("learnMore")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
