"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ca_cookie_consent";

export type ConsentState = "accepted" | "declined" | null;

export function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setStoredConsent(value: Exclude<ConsentState, null>) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event("ca-consent-changed"));
}

/** Non-essential (analytics/marketing) scripts must check this before loading. */
export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const handler = () => setConsent(getStoredConsent());
    window.addEventListener("ca-consent-changed", handler);
    return () => window.removeEventListener("ca-consent-changed", handler);
  }, []);

  return consent;
}
