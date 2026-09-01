import type { Locale } from "@/i18n/routing";

/**
 * Clean integration seam for a future MedicalOS connection. Nothing here
 * calls MedicalOS yet — this only shapes the patient's language preference
 * into the format MedicalOS is expected to want, so that when a real
 * integration is built (appointment confirmations, reminders, intake forms,
 * patient portal, email/SMS/WhatsApp, payment communication), it can consume
 * `toMedicalOSLocalePayload()` without the rest of the app changing.
 */

const COMMUNICATION_LANGUAGE: Record<Locale, string> = {
  es: "Spanish",
  pt: "Portuguese",
  en: "English",
  de: "German",
};

const BCP47: Record<Locale, string> = {
  es: "es-PY",
  pt: "pt-BR",
  en: "en-US",
  de: "de-DE",
};

export type MedicalOSLocalePayload = {
  locale: string;
  preferredLanguage: Locale;
  communicationLanguage: string;
};

export function toMedicalOSLocalePayload(locale: Locale): MedicalOSLocalePayload {
  return {
    locale: BCP47[locale],
    preferredLanguage: locale,
    communicationLanguage: COMMUNICATION_LANGUAGE[locale],
  };
}
