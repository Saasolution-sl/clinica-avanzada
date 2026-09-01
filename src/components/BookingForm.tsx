"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { submitAppointment, type AppointmentRequest } from "@/lib/booking";
import { treatments } from "@/content/treatments";
import { buildWhatsappUrl } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { Button } from "./Button";
import { track } from "@/lib/analytics";

const inputClasses =
  "w-full min-h-[48px] rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40";
const labelClasses = "mb-1.5 block text-sm font-medium text-secondary";
const errorClasses = "mt-1 text-xs text-red-600";

export function BookingForm({ defaultTreatmentSlug }: { defaultTreatmentSlug?: string }) {
  const t = useTranslations("booking");
  const tw = useTranslations("whatsapp");
  const locale = useLocale() as Locale;
  const [submitted, setSubmitted] = useState<AppointmentRequest | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const defaultTreatmentId = useMemo(() => {
    if (!defaultTreatmentSlug) return "";
    return treatments.find((tr) => tr.slug[locale] === defaultTreatmentSlug)?.id ?? "";
  }, [defaultTreatmentSlug, locale]);

  const appointmentSchema = useMemo(
    () =>
      z.object({
        firstName: z.string().min(1, t("validation.firstName")),
        lastName: z.string().min(1, t("validation.lastName")),
        phone: z.string().min(6, t("validation.phone")),
        whatsapp: z.string().min(6, t("validation.whatsapp")),
        email: z.string().email(t("validation.email")),
        treatmentSlug: z.string().min(1, t("validation.treatment")),
        preferredDate: z.string().min(1, t("validation.preferredDate")),
        preferredTime: z.string().min(1, t("validation.preferredTime")),
        patientStatus: z.enum(["nuevo", "existente"]),
        message: z.string().optional(),
        preferredLanguage: z.enum(["es", "pt", "en", "de"]),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentRequest>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientStatus: "nuevo",
      treatmentSlug: defaultTreatmentId,
      preferredLanguage: locale,
    },
  });

  const onSubmit = async (data: AppointmentRequest) => {
    setSubmitError(null);
    track("appointment_started", { treatment: data.treatmentSlug });
    try {
      await submitAppointment({ ...data, preferredLanguage: locale });
      track("appointment_submitted", { treatment: data.treatmentSlug });
      setSubmitted({ ...data, preferredLanguage: locale });
    } catch {
      setSubmitError(t("genericError"));
    }
  };

  if (submitted) {
    const treatmentName =
      treatments.find((tr) => tr.id === submitted.treatmentSlug)?.name[locale] ??
      submitted.treatmentSlug;
    const whatsappMessage = tw("bookingConfirmation")
      .replace("{treatment}", treatmentName)
      .replace("{name}", `${submitted.firstName} ${submitted.lastName}`);

    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-softer">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 font-display text-xl font-medium text-secondary">
          {t("successTitle", { name: submitted.firstName })}
        </h3>
        <p className="mt-2 text-sm text-text-muted">{t("successBody")}</p>
        <div className="mt-6">
          <Button
            href={buildWhatsappUrl(whatsappMessage)}
            external
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />}
            onClick={() => track("whatsapp_clicked", { source: "booking_confirmation" })}
          >
            {t("continueWhatsapp")}
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
        <label className={labelClasses} htmlFor="firstName">{t("fields.firstName")}</label>
        <input id="firstName" className={inputClasses} {...register("firstName")} />
        {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="lastName">{t("fields.lastName")}</label>
        <input id="lastName" className={inputClasses} {...register("lastName")} />
        {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="phone">{t("fields.phone")}</label>
        <input id="phone" type="tel" className={inputClasses} {...register("phone")} />
        {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="whatsapp">{t("fields.whatsapp")}</label>
        <input id="whatsapp" type="tel" className={inputClasses} {...register("whatsapp")} />
        {errors.whatsapp && <p className={errorClasses}>{errors.whatsapp.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className={labelClasses} htmlFor="email">{t("fields.email")}</label>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="treatmentSlug">{t("fields.treatment")}</label>
        <select id="treatmentSlug" className={inputClasses} {...register("treatmentSlug")}>
          <option value="">{t("fields.treatmentPlaceholder")}</option>
          {treatments.map((tr) => (
            <option key={tr.id} value={tr.id}>{tr.name[locale]}</option>
          ))}
        </select>
        {errors.treatmentSlug && <p className={errorClasses}>{errors.treatmentSlug.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="patientStatus">{t("fields.patientStatus")}</label>
        <select id="patientStatus" className={inputClasses} {...register("patientStatus")}>
          <option value="nuevo">{t("fields.newPatient")}</option>
          <option value="existente">{t("fields.existingPatient")}</option>
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="preferredDate">{t("fields.preferredDate")}</label>
        <input id="preferredDate" type="date" className={inputClasses} {...register("preferredDate")} />
        {errors.preferredDate && <p className={errorClasses}>{errors.preferredDate.message}</p>}
      </div>
      <div>
        <label className={labelClasses} htmlFor="preferredTime">{t("fields.preferredTime")}</label>
        <input id="preferredTime" type="time" className={inputClasses} {...register("preferredTime")} />
        {errors.preferredTime && <p className={errorClasses}>{errors.preferredTime.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <label className={labelClasses} htmlFor="message">{t("fields.message")}</label>
        <textarea id="message" rows={4} className={inputClasses} {...register("message")} />
      </div>

      {submitError && <p className={`${errorClasses} sm:col-span-2`}>{submitError}</p>}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </div>
    </form>
  );
}
