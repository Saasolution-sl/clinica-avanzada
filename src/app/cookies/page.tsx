import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de cookies",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <Container className="py-14 md:py-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Cookies" }]} />
      <h1 className="mt-6 font-display text-3xl font-medium text-secondary">Política de cookies</h1>
      <div className="prose mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">
        <p>
          Este sitio utiliza cookies esenciales, necesarias para su
          funcionamiento básico, y opcionalmente cookies de análisis (por
          ejemplo, Google Analytics) y de marketing (por ejemplo, Meta Pixel),
          que solo se cargan si aceptás su uso en el aviso de cookies.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5">
          <li><strong>Esenciales:</strong> recuerdan tu preferencia de cookies y permiten el funcionamiento del sitio.</li>
          <li><strong>Análisis (opcional):</strong> nos ayudan a entender cómo se usa el sitio para mejorarlo.</li>
          <li><strong>Marketing (opcional):</strong> permiten medir la efectividad de campañas.</li>
        </ul>
        <p className="mt-4">
          Podés cambiar tu preferencia en cualquier momento borrando los datos
          de este sitio en la configuración de tu navegador.
        </p>
      </div>
    </Container>
  );
}
