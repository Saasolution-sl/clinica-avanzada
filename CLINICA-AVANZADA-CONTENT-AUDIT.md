# Clínica Avanzada — Content Audit

Source examined: `https://www.instagram.com/clinica.avanzadapy`, in two passes:

1. **Unauthenticated pass** — the public profile view, no login. Instagram gates
   almost everything beyond the profile header for automated/logged-out visitors:
   the bio truncates with no way to expand it, and clicking into any post or story
   highlight redirects to a sign-up/log-in interstitial. Per the brief, we did not
   build a login-based scraper to get around this.
2. **Authenticated pass** — the site owner (the person directing this project)
   logged into their own personal Instagram account in their own browser and asked
   for that already-authenticated session to be used to view specific public
   content (profile detail, story highlights, feed posts) on
   @clinica.avanzadapy. No credentials were entered or seen in the course of this
   project; the account holder authenticated the session themselves. This is a
   one-time manual content-gathering pass, not an automated integration — the
   live site does not scrape Instagram (see the Instagram section of the site
   itself, which uses CMS-managed links instead).

Everything not listed as VERIFIED below is wired into the codebase as an explicit,
obvious placeholder (see `src/content/*.ts` — every unverified record carries
`verified: false` and a `PLACEHOLDER` label that renders visibly in the UI in dev
and is easy to grep for). Nothing fabricated has been published as fact.

## VERIFIED (observed directly, authenticated pass unless noted otherwise)

- **Address:** Acceso Sur 668 c/ Palma, Villa Elisa, Paraguay (shown in the
  profile's contact-address field once logged in — this is what the truncated
  "📍Villa…" in the public bio was cut off before)
- **Phone / WhatsApp number:** 0985 169281, shown on multiple highlight graphic
  cards ("Profesionales", "Tratamientos !") alongside the address
- **Hours:** Lunes a Viernes 08:00–17:30, Sábado 08:00–13:30 (from the
  "Horarios" story highlight)
- **Team, with real names, registration numbers and stated specialties** (from
  graphic cards inside the "Profesionales" highlight):
  - Dra. Andrea Pereira, Reg. 8487 — Especialista en Ortodoncia, Odontología
    General, Cirugía Dentomaxilar y Endodoncia (also the name on the clinic's
    own logo, suggesting she is the lead/founding orthodontist)
  - Dra. Jennifer Hachen, Reg. 8918 — Operatoria Dental en Alta Estética y
    Odontopediatría
  - Mirta Fleitas, Reg. 1185 — Técnico en Prótesis Dental
  - A separate highlight card states the team overall covers: Ortodoncia,
    Endodoncia, Odontopediatría, Rehabilitación Oral, Implantología Oral
- **Treatments confirmed as actually offered** (from highlight cards and reel
  captions/hashtags): Limpieza, Ortodoncia (including specifically "ortodoncia
  autoligada" / self-ligating braces, and lingual/behind-the-teeth braces shown
  in feed photos), Prótesis, Endodoncia, Odontopediatría, Rehabilitación Oral,
  Implantología Oral, and Gingivioplastia (shown with an actual "antes" patient
  photo in its own highlight)
- A "Mini Tour" reel shows real clinic interior (reception area, teal-toned
  decor) — useful reference for the clinic gallery page once real photo/video
  assets are supplied
- 142 posts total on the account, steady posting cadence

## VERIFIED (observed on the public, unauthenticated profile)

- **Handle:** @clinica.avanzadapy
- **Display name:** Clinica Avanzada
- **Follower count at time of audit:** 3,459 followers / 1,418 following (a snapshot,
  not something to publish on the site since it will go stale immediately)
- **Bio (full text, confirmed in the authenticated pass):**
  > ✨Transformamos sonrisas, seguridad y éxito
  > 🦷Ortodoncia y estética dental
  > 💡Confianza y éxito en cada tratamiento
  > 📍Villa Elisa, Paraguay
  > 🗓️Agenda tu cita
- **Primary contact method:** a WhatsApp deep link in the bio — `wa.link/14lhzi`.
  This is the one verified, clickable contact channel and is what the site's
  WhatsApp button/links point to.
- **Logo:** a circular badge, white background, mint/teal line-art tooth-and-smile
  mark, with "Clínica Avanzada" wordmark and, underneath it, "Dra Andrea Pereira" —
  confirming she is the named professional behind the clinic brand. Used as the
  basis for the site's color direction — see `DESIGN-SYSTEM.md`.
- **Story highlight categories (names only — content requires login):**
  Profesionales, Tratamientos !, Horarios 🤩, Pacientes 🦷🤍, Gingivioplastia,
  Promociones, Clínica 🤩🙌🏻, Medios de pagos, #Consejos.
  These confirm the *topics* the clinic talks about (team, treatments, hours,
  patients, a gingivoplasty highlight specifically, promotions, the clinic space,
  payment methods, tips) but not the actual facts inside them.
- **Activity:** the account is active with a steady mix of photo carousels and reels
  (most recent items in the feed strip ranged from mid-April through early June
  2026 at the time of the audit), consistent with a genuinely operating clinic.

## LIKELY BUT REQUIRES CONFIRMATION

- Dra. Andrea Pereira being the clinic's founder/lead (inferred from her name
  appearing on the logo itself) — likely, but no post explicitly states "founder"
  or "director".
- Whether "evelinrojasbalbuena", reposted in the "Pacientes" highlight smiling in
  the clinic with braces ("Mi lugar feliz❤️"), consents to that specific image
  being reused on the clinic's own website rather than just her Instagram story —
  a repost onto Instagram and republication on an external website are different
  uses; treated as not yet cleared without explicit confirmation.

## VERIFIED — five published clinical cases

The site owner identified five specific Instagram posts and explicitly confirmed
the before/after photos in them are patient-authorized for use on this website.
Full-resolution images were pulled directly from each post's own carousel data
(via the post's public embed page, not by scraping the authenticated feed) and
are now live in `public/casos-clinicos/` and wired into `src/content/cases.ts`
as `caso-1` through `caso-5`, each with `patientConsentAuthorized: true`. Case
descriptions use only what each post's own caption stated:

- `caso-1` (`instagram.com/p/C1cO6KEg0RO`) — braces retiro, patient tagged
  `@analia.aquino`
- `caso-2` (`instagram.com/p/C1KCeFegsaB`) — braces retiro, December
- `caso-3` (`instagram.com/p/C0hNRoRAmgh`) — braces retiro after "2 años de
  tratamiento" per the caption
- `caso-4` (`instagram.com/p/Cge6NsNA1XA`, first image) — a clinic-made
  before/after graphic explicitly labeled "Caso clínico: apiñamiento dental
  severo. Tratamiento: Ortodoncia convencional metálica", credited to Dra.
  Andrea Pereira; shown as a 1-year progress comparison, not a finished result
- `caso-5` (`instagram.com/p/Cge6NsNA1XA`, second image) — a second
  before/after graphic from the same post, "1 año de tratamiento"

One additional post the owner shared, `instagram.com/p/C1aNsueArUz` (patient
tagged `@roche_1400`), only yielded two "after" style photos (smiling, braces
already removed) — no genuine "before" image was available in that post's own
carousel, so it was not turned into a before/after case rather than pairing it
with a mismatched image.

## MISSING (do not fabricate — placeholders only)

- Doctor education/university history and full bios (only name, registration
  number, and specialty were shown)
- Doctor photography (headshots) — clinic space/case photography is now
  covered by the five published cases above
- Email address
- Current prices (a 2022 post mentioned a promotional monthly installment
  plan — "CUOTA DE 150.000 mensual, sin entrada inicial" — but that is old
  promotional pricing, not published as a current price on the site)
- Awards, years in operation, patient counts, or any other statistic
- Google Business Profile / Google Reviews presence

For everything else still missing, the fastest path is for someone with clinic
access to supply: doctor bios/photos, an email address, and a Meta Graph API
access token for the Instagram Business account (so the site can pull real posts
via the official Instagram Graph API rather than scraping). All of
`src/content/*.ts` is structured so that dropping in real data is a matter of
editing those files — no component code needs
to change.
