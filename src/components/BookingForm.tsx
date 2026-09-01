"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import {
  appointmentSchema,
  submitAppointment,
  type AppointmentRequest,
} from "@/lib/booking";
import { treatments } from "@/content/treatments";
import { buildWhatsappUrl } from "@/content/site";
import { Button } from "./Button";
import { track } from "@/lib/analytics";

const inputClasses =
  "w-full min-h-[48px] rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40";
const labelClasses = "mb-1.5 block text-sm font-medium text-secondary";
const errorClasses = "mt-1 text-xs text-red-600";

export function BookingForm({ defaultTreatmentSlug }: { defaultTreatmentSlug?: string }) {
  const [submitted, setSubmitted] = useState<AppointmentRequest | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentRequest>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientStatus: "nuevo",
      treatmentSlug: defaultTreatmentSlug ?? "",
    },
  });

  const onSubmit = async (data: AppointmentRequest) => {
    setSubmitError(null);
    track("appointment_started", { treatment: data.treatmentSlug });
    try {
      await submitAppointment(data);
      track("appointment_submitted", { treatment: data.treatmentSlug });
      setSubmitted(data);
    } catch {
      setSubmitError(
        "No pudimos enviar tu solicitud en este momento. Podés intentar de nuevo o escribirnos por WhatsApp.",
      );
    }
  };

  if (submitted) {
    const treatmentName =
      treatments.find((t) => t.slug === submitted.treatmentSlug)?.name ??
      submitted.treatmentSlug;
    const whatsappMessage = `Hola Clínica Avanzada 👋 Acabo de agendar una consulta (${treatmentName}) como ${submitted.firstName} ${submitted.lastName}. Quisiera confirmar los detalles.`;

    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-softer">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 font-display text-xl font-medium text-secondary">
          ¡Listo, {submitted.firstName}!
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          Recibimos tu solicitud de consulta. Nos pondremos en contacto a la
          brevedad para confirmar día y horario.
        </p>
        <div className="mt-6">
          <Button
            href={buildWhatsappUrl(whatsappMessage)}
            external
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />}
            onClick={() => track("whatsapp_clicked", { source: "booking_confirmation" })}
          >
            Continuar por WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-surface p-6 shadow-softer sm:grid-cols-2 sm:p-8"
    >
      <div>
        <label className={labelClasses} htmlFor="firstName">Nombre</label>
        <input id="firstName" className={inputClasses} {...register("firstName")} />
        {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="lastName">Apellido</label>
        <input id="lastName" className={inputClasses} {...register("lastName")} />
        {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="phone">Teléfono</label>
        <input id="phone" type="tel" className={inputClasses} {...register("phone")} />
        {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="whatsapp">WhatsApp</label>
        <input id="whatsapp" type="tel" className={inputClasses} {...register("whatsapp")} />
        {errors.whatsapp && <p className={errorClasses}>{errors.whatsapp.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className={labelClasses} htmlFor="email">Email</label>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="treatmentSlug">Tipo de consulta</label>
        <select id="treatmentSlug" className={inputClasses} {...register("treatmentSlug")}>
          <option value="">Seleccioná una opción</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.slug}>{t.name}</option>
          ))}
        </select>
        {errors.treatmentSlug && <p className={errorClasses}>{errors.treatmentSlug.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="patientStatus">Paciente</label>
        <select id="patientStatus" className={inputClasses} {...register("patientStatus")}>
          <option value="nuevo">Nuevo paciente</option>
          <option value="existente">Paciente existente</option>
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="preferredDate">Fecha preferida</label>
        <input id="preferredDate" type="date" className={inputClasses} {...register("preferredDate")} />
        {errors.preferredDate && <p className={errorClasses}>{errors.preferredDate.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="preferredTime">Horario preferido</label>
        <input id="preferredTime" type="time" className={inputClasses} {...register("preferredTime")} />
        {errors.preferredTime && <p className={errorClasses}>{errors.preferredTime.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className={labelClasses} htmlFor="message">Mensaje (opcional)</label>
        <textarea id="message" rows={4} className={inputClasses} {...register("message")} />
      </div>

      {submitError && <p className={`${errorClasses} sm:col-span-2`}>{submitError}</p>}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {isSubmitting ? "Enviando…" : "Agendar consulta"}
        </Button>
      </div>
    </form>
  );
}
