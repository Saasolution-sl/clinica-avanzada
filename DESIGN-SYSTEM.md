# Clínica Avanzada — Design System

Basis: the Instagram logo (circular mint/teal line-art tooth-and-smile mark on
white) is the only verified brand asset available. We could not retrieve a
high-resolution source file or exact hex values (Instagram serves a low-res
profile thumbnail to unauthenticated visitors), so this palette is **inspired by**
that mark, not sampled pixel-for-pixel. Swap in exact values the moment the clinic
supplies brand assets — everything is defined as CSS variables in
`src/app/globals.css`.

## Colors

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#2F6E68` (deep teal) | Primary buttons, links, icon accents |
| `--color-primary-light` | `#7FC3BA` (mint) | Highlights, hover glows, chart accents |
| `--color-secondary` | `#1C2E2C` (near-black teal) | Headlines, dark surfaces |
| `--color-accent` | `#C8A96A` (warm sand/champagne) | Small accents, dividers — evokes "premium clinic" without competing with teal |
| `--color-bg` | `#FBF9F5` (warm ivory) | Page background — avoids clinical stark white |
| `--color-surface` | `#FFFFFF` | Cards, elevated panels |
| `--color-surface-muted` | `#F1EFE9` | Subtle section backgrounds |
| `--color-border` | `#E4E0D6` | Hairlines, card borders |
| `--color-text` | `#1C2420` | Body copy |
| `--color-text-muted` | `#5C6B67` | Secondary copy |
| `--color-cta` | `#2F6E68` | Primary CTA background |
| `--color-cta-hover` | `#24534F` | Primary CTA hover |
| `--color-whatsapp` | `#25D366` | WhatsApp-specific CTAs only |

Dark surfaces (footer, some section backgrounds) use `--color-secondary` with
ivory/mint text — never pure black, to keep the "warm" feel.

## Typography

- **Display/headings:** `Fraunces` (serif, variable) — editorial, premium-medical
  rather than corporate-dental. Used at large sizes with tight tracking.
- **Body/UI:** `Inter` — neutral, highly legible, excellent at small sizes for
  forms and long-form FAQ copy.
- Both loaded via `next/font` (self-hosted, no external request, no layout shift).
- Scale: mobile base 16px; headings use a fluid `clamp()` scale (H1
  `clamp(2.25rem, 5vw, 4rem)`, H2 `clamp(1.75rem, 3.5vw, 2.75rem)`, H3
  `clamp(1.25rem, 2.5vw, 1.75rem)`).

## Spacing & Layout

- 8px base unit. Section vertical rhythm: `py-20 md:py-32`.
- Max content width: `1280px`, with an editorial-asymmetric variant on desktop
  hero/gallery sections (a wide image column + narrower text column, not a
  centered 50/50 split) to avoid the generic SaaS-landing look.
- Generous whitespace is the default, not the exception — never pack sections
  edge-to-edge.

## Components

- **Buttons:** pill-shaped (`rounded-full`), two variants — solid primary
  (teal, for "Agendar consulta") and outline/ghost secondary. WhatsApp buttons
  use the WhatsApp green only, never the teal, so patients instantly recognize
  the channel.
- **Cards:** `rounded-2xl`, 1px `--color-border`, soft shadow
  (`0 8px 30px -12px rgba(28,46,44,0.15)`), lift + shadow-deepen on hover
  (translateY(-4px), 200ms ease).
- **Glass effect:** used sparingly — the sticky mobile conversion bar and the
  header-on-scroll use `backdrop-blur-md` with `bg-white/80`.
- **Forms:** large tap targets (min 48px height), floating/inline labels, teal
  focus ring (`ring-2 ring-primary/40`), inline validation messages in a muted
  red, never blocking submission with a generic alert.
- **Images:** `rounded-2xl` or `rounded-3xl`, subtle `4px` ivory border on
  editorial gallery shots, Next/Image with blur placeholders, object-fit cover.
- **Before/After slider:** custom draggable divider component, keyboard
  accessible (arrow keys move the divider), labeled "ANTES" / "DESPUÉS".
- **Shadows:** one consistent soft shadow scale (`sm`/`md`/`lg`), never harsh
  drop shadows.
- **Radius scale:** `sm=8px`, `md=16px`, `lg=24px`, `full` for pills/avatars.
- **Icons:** `lucide-react`, 1.5px stroke, sized to type (20px inline, 24–32px
  in feature cards).
- **Motion:** Framer Motion, restrained — fade+rise on scroll-in (`opacity 0→1`,
  `y: 16→0`, 400–600ms, staggered by ~80ms in grids), no bouncy easing, no
  autoplaying carousels that fight for attention. All motion respects
  `prefers-reduced-motion`.

## Mobile rules

- Mobile is the primary layout, not a squeeze of desktop.
- Sticky bottom conversion bar (`Agendar consulta | WhatsApp`) appears after the
  hero has scrolled past, stays out of the way of forms/inputs (hidden while a
  text field is focused to avoid covering the keyboard/CTA).
- Tap targets ≥44px, thumb-reachable primary actions in the lower half of the
  screen where possible.
- Hero order on mobile: message → image → primary CTA → WhatsApp, per the brief.

## Placeholder convention

Any unverified content (see `CLINICA-AVANZADA-CONTENT-AUDIT.md`) renders through a
shared `<PlaceholderBadge>` treatment — a dashed border + small "Contenido a
confirmar" tag — so it is impossible to mistake a placeholder for verified
clinic information, in the CMS/config layer and visually in non-production
review builds.
