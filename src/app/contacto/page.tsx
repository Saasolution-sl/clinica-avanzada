import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons/InstagramIcon";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { PlaceholderBadge } from "@/components/PlaceholderBadge";
import { site, buildWhatsappUrl, whatsappBaseMessage } from "@/content/site";

const telHref = `tel:+595${site.phone.value.replace(/\D/g, "").replace(/^0/, "")}`;

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Clínica Avanzada en Paraguay: WhatsApp, dirección, horarios y agenda de consultas.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
      <SectionHeading
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        description="Escribinos por WhatsApp o agendá tu consulta directamente."
        className="mt-6"
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">Dirección</p>
              <p className="mt-1 text-sm text-text-muted">{site.address.value}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">Teléfono</p>
              <a href={telHref} className="mt-1 inline-block text-sm text-primary underline">
                {site.phone.value}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">WhatsApp</p>
              <a
                href={buildWhatsappUrl(whatsappBaseMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-primary underline"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">Email</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-text-muted">
                A confirmar <PlaceholderBadge />
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">Horarios</p>
              <ul className="mt-1 space-y-0.5 text-sm text-text-muted">
                {site.hours.value.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
            <Instagram className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium text-secondary">Instagram</p>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-primary underline">
                {site.instagram.handle}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/agendar" icon={<CalendarCheck className="h-4 w-4" />}>Agendar consulta</Button>
            <Button
              href={buildWhatsappUrl(whatsappBaseMessage)}
              external
              variant="whatsapp"
              icon={<MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />}
            >
              WhatsApp
            </Button>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.value)}`}
              external
              variant="secondary"
              icon={<MapPin className="h-4 w-4" />}
            >
              Cómo llegar
            </Button>
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Ubicación de Clínica Avanzada"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.value)}&output=embed`}
          />
        </div>
      </div>
    </Container>
  );
}
