# Fit Food Canarias — redesign concept

An independent redesign concept for [fitfoodcanarias.com](https://fitfoodcanarias.com/), a
meal-prep delivery kitchen in Gran Canaria. Built as a design case study / pitch — **not
affiliated with or endorsed by the real business**.

## What this is

The original site sells three goal-based meal plans (Fat Loss, Balanced, Muscle Gain),
personalised by gender and objective, delivered from a kitchen in Castillo del Romeral. This
redesign keeps those real business facts but rewrites all copy, and reworks the visual
direction away from a generic "fitness app" template:

- **Palette drawn from the island, not a stock accent color** — malpaís (volcanic rock) black
  as the base, gofio cream for contrast panels, and three earthy accents lifted from mojo
  rojo, mojo verde and ripe plátano — one per meal plan, so colour carries meaning.
- **A "tray" motif as the structural signature** — asymmetric bento-style grids and a hairline
  divider-with-notches pattern that echoes the divider ridges of an actual compartmentalised
  meal-prep container, used throughout instead of generic centered cards.
- **Type**: Bricolage Grotesque (display), Archivo (body), Space Mono (macros/data/labels —
  a nod to printed nutrition labels).

Photography is hotlinked from Unsplash (see `src/data/content.ts` for sources) rather than
copied from the live site, to keep this repo license-clean as a pitch artifact.

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
