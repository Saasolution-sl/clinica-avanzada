import { z } from "zod";

export const appointmentSchema = z.object({
  firstName: z.string().min(1, "Ingresá tu nombre"),
  lastName: z.string().min(1, "Ingresá tu apellido"),
  phone: z.string().min(6, "Ingresá un teléfono válido"),
  whatsapp: z.string().min(6, "Ingresá un número de WhatsApp válido"),
  email: z.string().email("Ingresá un email válido"),
  treatmentSlug: z.string().min(1, "Seleccioná un tipo de consulta"),
  preferredDate: z.string().min(1, "Seleccioná una fecha"),
  preferredTime: z.string().min(1, "Seleccioná un horario"),
  patientStatus: z.enum(["nuevo", "existente"]),
  message: z.string().optional(),
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
