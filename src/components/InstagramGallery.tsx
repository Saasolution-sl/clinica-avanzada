import { InstagramIcon as Instagram } from "./icons/InstagramIcon";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { site } from "@/content/site";

/**
 * The brief asks for an official, supported Instagram integration and
 * explicitly rules out a fragile scraper. The Instagram Basic Display API
 * used for this kind of public read-only feed has been deprecated, and pulling
 * content without the clinic's own Meta Business/Graph API access token isn't
 * possible from here. This renders a CMS-managed placeholder grid — each tile
 * links straight to the real profile — ready to swap for real post data (and
 * real thumbnails) the moment a Graph API token for the clinic's Instagram
 * Business account is available.
 */
export function InstagramGallery() {
  const tiles = Array.from({ length: 6 });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Redes sociales"
            title="Seguinos en Instagram"
            description="Contenido, tratamientos y novedades de la clínica, directamente en nuestro perfil."
          />
          <Button href={site.instagram.url} external variant="secondary" icon={<Instagram className="h-4 w-4" />}>
            {site.instagram.handle}
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {tiles.map((_, i) => (
            <a
              key={i}
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl"
            >
              <PhotoPlaceholder className="aspect-square w-full" label="" />
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/0 transition-colors group-hover:bg-secondary/40">
                <Instagram className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
