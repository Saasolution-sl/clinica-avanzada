"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  className,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  beforeImage,
  afterImage,
}: {
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl",
        className,
      )}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <div className="absolute inset-0">
        {afterImage ? (
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            draggable={false}
          />
        ) : (
          <PhotoPlaceholder className="h-full w-full" label={afterLabel} />
        )}
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {beforeImage ? (
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            draggable={false}
          />
        ) : (
          <PhotoPlaceholder className="h-full" label={beforeLabel} />
        )}
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        {afterLabel}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Comparar antes y después"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
        }}
        className="absolute inset-y-0 z-10 flex w-1 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{ left: `${position}%` }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lifted">
          <div className="h-4 w-0.5 rounded bg-secondary/40" />
        </div>
      </div>
    </div>
  );
}
