"use client";

import { useTranslations } from "next-intl";

export function PlaceholderBadge({ label }: { label?: string }) {
  const t = useTranslations("common");
  return <span className="placeholder-tag">{label ?? t("placeholderBadge")}</span>;
}
