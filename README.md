# Fit Food Canarias — redesign concept

An independent redesign concept for [fitfoodcanarias.com](https://fitfoodcanarias.com/), a
meal-prep delivery kitchen in Gran Canaria. Built as a design case study / pitch — **not
affiliated with or endorsed by the real business**.

## What this is

The original site sells three goal-based meal plans (Fat Loss, Balanced, Muscle Gain),
personalised by gender and objective, delivered from a kitchen in Castillo del Romeral. This
redesign keeps those real business facts but rewrites all copy, and reworks the visual
direction away from a generic "fitness app" template:

- **Real corporate colors** — pulled directly from the live site's stylesheet: brand green
  `#51ad32`, near-black for dark sections, `#333333` / `#8d8d8d` for text, white for light
  panels. This is the actual Fit Food Canarias identity, not an invented palette.
- **A "tray" motif as the structural signature** — asymmetric bento-style grids and a hairline
  divider-with-notches pattern that echoes the divider ridges of an actual compartmentalised
  meal-prep container, used throughout instead of generic centered cards.
- **Type**: Bricolage Grotesque (display), Archivo (body), Space Mono (macros/data/labels —
  a nod to printed nutrition labels).
- **Real brand assets** — the actual Fit Food Canarias logo, and an "About us" section using
  founder Patricia's real photo and signature, all hotlinked directly from the live site
  (`fitfoodcanarias.com`) rather than copied into this repo.

Meal photography is hotlinked from Unsplash (see `src/data/content.ts` for sources) rather
than copied from the live site, to keep that part of the repo license-clean as a pitch
artifact. The logo, founder photo, and signature are real assets from the business, hotlinked
at the requester's direction since this is a pitch built around the real brand.

## Stack

- [Astro](https://astro.build) (static output)
- Plain CSS with design tokens (no framework)

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Project structure

```text
src/
├── data/content.ts       # all copy + plan/testimonial/blog data
├── layouts/BaseLayout.astro
├── components/            # Header, Hero, HowItWorks, Plans, WhyUs,
│                           # Testimonials, BlogTeaser, ContactCTA, Footer
├── styles/global.css      # design tokens, resets, shared utilities
└── pages/index.astro
```

## Disclaimer

This is a design exercise / freelance pitch, not a live storefront. Business details
(address, phone, email) match the real company's public listing for realism, but no order,
contact, or payment flow here is functional.
