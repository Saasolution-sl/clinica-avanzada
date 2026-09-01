"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Doctor } from "@/content/doctors";
import type { Locale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("team");

  return (
    <Link
      href={{ pathname: "/equipo/[slug]", params: { slug: doctor.slug } }}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-softer transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <PhotoPlaceholder className="aspect-square w-full" label={t("photoPending")} />
      <div className="p-6">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="font-display text-lg font-medium text-secondary">
            {doctor.name}
          </h3>
          {!doctor.verified && <PlaceholderBadge />}
        </div>
        <p className="text-sm text-primary">{doctor.specialty[locale]}</p>
      </div>
    </Link>
  );
}
