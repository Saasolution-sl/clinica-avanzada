import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * No real clinic/doctor photography was available (Instagram gates images
 * behind a login wall, and we do not fabricate stock-photo substitutes
 * pretending to be the clinic). This renders a premium-feeling gradient
 * placeholder instead of a broken image or a misleading stock photo — swap
 * for `next/image` with real assets once supplied.
 */
export function PhotoPlaceholder({
  className,
  label = "Fotografía de la clínica — pendiente",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/40 via-surface-muted to-accent/20",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,rgba(47,110,104,0.25),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <Sparkle className="h-6 w-6 text-primary/60" />
        <span className="text-xs font-medium uppercase tracking-wide text-secondary/50">
          {label}
        </span>
      </div>
    </div>
  );
}
