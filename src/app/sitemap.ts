import type { MetadataRoute } from "next";
import { treatments } from "@/content/treatments";
import { doctors } from "@/content/doctors";
import { getPublishableCases } from "@/content/cases";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clinicaavanzada.com.py";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tratamientos",
    "/casos-clinicos",
    "/equipo",
    "/clinica",
    "/preguntas-frecuentes",
    "/contacto",
    "/agendar",
    "/privacidad",
    "/cookies",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${siteUrl}/tratamientos/${t.slug}`,
    lastModified: new Date(),
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${siteUrl}/equipo/${d.slug}`,
    lastModified: new Date(),
  }));

  const caseRoutes = getPublishableCases().map((c) => ({
    url: `${siteUrl}/casos-clinicos/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes, ...caseRoutes];
}
