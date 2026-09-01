export type Testimonial = {
  id: string;
  name: string;
  treatment: string;
  review: string;
  rating: number | null;
  image: string | null;
  source: "google" | "instagram" | "clinic" | "placeholder";
};

/**
 * No genuine testimonials were available from the public Instagram profile.
 * Left intentionally empty per the brief ("never fabricate reviews"). The
 * /preguntas-frecuentes and home page components render an empty state
 * instead of placeholder reviews, since a fake-looking testimonial is worse
 * than none. Wire in Google Reviews via the Google Business Profile API (see
 * `site.googleBusinessUrl` in `site.ts`) once the clinic's profile URL is
 * confirmed.
 */
export const testimonials: Testimonial[] = [];
