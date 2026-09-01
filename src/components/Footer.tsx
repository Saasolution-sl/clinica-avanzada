"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "./icons/InstagramIcon";
import { Container } from "./Container";
import { site, buildWhatsappUrl, whatsappBaseMessage } from "@/content/site";
import { treatments } from "@/content/treatments";
import { track } from "@/lib/analytics";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-semibold text-white">
            Clínica Avanzada
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Ortodoncia y estética dental con atención especializada y
            planificación de tratamiento personalizada.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Clínica Avanzada"
              onClick={() => track("instagram_clicked", { source: "footer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsappUrl(whatsappBaseMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Clínica Avanzada"
              onClick={() => track("whatsapp_clicked", { source: "footer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Navegación
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/tratamientos" className="hover:text-white">Tratamientos</Link></li>
            <li><Link href="/casos-clinicos" className="hover:text-white">Casos clínicos</Link></li>
            <li><Link href="/equipo" className="hover:text-white">Equipo</Link></li>
            <li><Link href="/clinica" className="hover:text-white">La clínica</Link></li>
            <li><Link href="/preguntas-frecuentes" className="hover:text-white">Preguntas frecuentes</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Tratamientos
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link href={`/tratamientos/${t.slug}`} className="hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{site.address.value}</li>
            <li>Tel/WhatsApp: {site.phone.value}</li>
            {site.hours.value.map((h) => (
              <li key={h.day}>
                {h.day}: {h.hours}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Clínica Avanzada. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-white">Política de privacidad</Link>
            <Link href="/cookies" className="hover:text-white">Política de cookies</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
