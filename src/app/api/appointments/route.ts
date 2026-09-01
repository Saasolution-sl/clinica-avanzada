import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/booking";
import { toMedicalOSLocalePayload } from "@/lib/medicalos";

/**
 * Booking intake endpoint. For now this validates the payload and logs it —
 * there is no calendar backend connected yet. This is the single seam to
 * wire in MedicalOS Calendar / Google Calendar / another provider: replace
 * the `console.info` below with the real API call once credentials exist.
 * The route's request/response contract can stay the same. The patient's
 * `preferredLanguage` is captured here so a future MedicalOS integration
 * knows which language to use for confirmations, reminders, and other
 * patient communication (see src/lib/medicalos.ts).
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  console.info("[appointment_request]", {
    ...parsed.data,
    medicalOS: toMedicalOSLocalePayload(parsed.data.preferredLanguage),
  });

  return NextResponse.json({ ok: true });
}
