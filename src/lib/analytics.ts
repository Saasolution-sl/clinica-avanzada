/**
 * Minimal analytics wrapper. GA4 / Meta Pixel scripts are NOT loaded here —
 * they should only be injected after consent is granted (see
 * `useConsent` in `src/lib/consent.ts`), typically from
 * `src/components/AnalyticsScripts.tsx` once a real GA4/Pixel ID is supplied.
 * `track()` is safe to call unconditionally; it no-ops until a provider is
 * wired in, so components can call it now without waiting on IDs.
 */

export type AnalyticsEvent =
  | "appointment_started"
  | "appointment_submitted"
  | "whatsapp_clicked"
  | "phone_clicked"
  | "directions_clicked"
  | "treatment_viewed"
  | "clinical_case_viewed"
  | "instagram_clicked";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, payload);
  window.fbq?.("trackCustom", event, payload);

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload);
  }
}
