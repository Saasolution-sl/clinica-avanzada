import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/content/treatments";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { PlaceholderBadge } from "./PlaceholderBadge";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={`/tratamientos/${treatment.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-softer transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <PhotoPlaceholder className="aspect-[4/3] w-full" label={treatment.name} />
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="font-display text-lg font-medium text-secondary">
            {treatment.name}
          </h3>
          {!treatment.verified && <PlaceholderBadge />}
        </div>
        <p className="text-sm leading-relaxed text-text-muted line-clamp-2">
          {treatment.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Conocer más
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
