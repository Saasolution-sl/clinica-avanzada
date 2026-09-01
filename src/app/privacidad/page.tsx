import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Privacidad" }]} />
      <h1 className="mt-6 font-display text-3xl font-medium text-secondary">Política de privacidad</h1>
      <div className="prose mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">
        <p>
          Esta política describe, en términos generales, cómo Clínica Avanzada
          trata la información que los visitantes comparten a través de este
          sitio (por ejemplo, al completar el formulario de agendamiento de
          consultas).
        </p>
        <p className="mt-4">
          <strong>Aviso:</strong> el texto legal específico de esta política
          (responsable del tratamiento, datos de contacto legales, base legal
          aplicable en Paraguay, plazos de conservación, y procedimiento para
          ejercer derechos de acceso/rectificación/eliminación) debe ser
          redactado o revisado por la clínica y/o un asesor legal antes de la
          publicación. No se ha inventado información corporativa o legal
          para completar este texto.
        </p>
        <p className="mt-4">
          Los datos enviados a través del formulario de agendamiento (nombre,
          apellido, teléfono, WhatsApp, email, tipo de consulta y mensaje) se
          utilizan exclusivamente para gestionar la solicitud de consulta y
          contactar al paciente.
        </p>
      </div>
    </Container>
  );
}
