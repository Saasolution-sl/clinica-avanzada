import { z } from "zod";
import type { Locale } from "@/i18n/routing";

/**
 * Structural schema used for the request body shape and as a server-side
 * safety net. Field-level, user-facing validation messages are localized
 * client-side in BookingForm (built from the "booking.validation" message
 * namespace) so the visitor always sees errors in their selected language;
 * this schema's own messages are an internal fallback, not shown in the
 * normal flow.
 */
export const appointmentSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().min(6, "Invalid phone number"),
  whatsapp: z.string().min(6, "Invalid WhatsApp number"),
  email: z.string().email("Invalid email"),
  treatmentSlug: z.string().min(1, "Required"),
  preferredDate: z.string().min(1, "Required"),
  preferredTime: z.string().min(1, "Required"),
  patientStatus: z.enum(["nuevo", "existente"]),
  message: z.string().optional(),
  /** The visitor's website language at the time of booking — see src/lib/medicalos.ts */
  preferredLanguage: z.enum(["es", "pt", "en", "de"]),
});

export type AppointmentRequest = z.infer<typeof appointmentSchema>;

/**
 * Modular submission layer: today this posts to our own `/api/appointments`
 * route, which just validates and logs the request. Swapping in MedicalOS
 * Calendar, Google Calendar, or another booking API later only means
 * changing what that route does with a validated payload — this function's
 * contract with the form doesn't need to change.
 */
export async function submitAppointment(data: AppointmentRequest) {
  const res = await fetch("/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("No se pudo enviar la solicitud de consulta.");
  }

  return res.json() as Promise<{ ok: true }>;
}

export function currentLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return (["es", "pt", "en", "de"] as const).includes(seg as Locale)
    ? (seg as Locale)
    : "es";
}
