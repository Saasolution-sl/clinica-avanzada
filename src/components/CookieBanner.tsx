"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white p-5 shadow-lifted sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border">
      <p className="text-sm text-text-muted">
        Usamos cookies esenciales para el funcionamiento del sitio y, con tu
        consentimiento, cookies de análisis para entender cómo se usa.{" "}
        <Link href="/cookies" className="underline text-primary">
          Más información
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => {
            setStoredConsent("declined");
            setVisible(false);
          }}
          className="flex-1 rounded-full border border-border px-4 py-2 text-sm font-medium"
        >
          Rechazar no esenciales
        </button>
        <button
          onClick={() => {
            setStoredConsent("accepted");
            setVisible(false);
          }}
          className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
        >
          Aceptar todas
        </button>
      </div>
    </div>
  );
}
