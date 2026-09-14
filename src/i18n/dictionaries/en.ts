/* ------------------------------------------------------------------ *
 * English UI copy — the canonical dictionary.
 *
 * Every other locale is typed against this object, so adding a key here
 * and forgetting it elsewhere is a typecheck error rather than a missing
 * string in production. `{named}` placeholders are interpolated by
 * useTranslations.
 * ------------------------------------------------------------------ */

export const en = {
  // Site-wide
  'site.title':
    'Fit Food Canarias — Meal prep, measured to your goal (redesign concept)',
  'site.description':
    'An independent redesign concept for Fit Food Canarias: goal-based meal prep delivery in Gran Canaria, personalised by gender and objective.',
  'nav.label': 'Primary',
  'lang.label': 'Language',
  'cta.viewPlans': 'View plans',

  // Navigation
  'nav.howItWorks': 'How it works',
  'nav.plans': 'Plans',
  'nav.whyUs': 'Why us',
  'nav.about': 'About',
  'nav.contact': 'Contact',

  // Hero
  'hero.word1': 'Cooked',
  'hero.word2': 'Counted',
  'hero.word3': 'Delivered',
  'hero.badge': 'Nutritionist-approved kitchen',
  'hero.credential':
    'Fit Food Canarias builds every plan around your gender and objective — cooked fresh in Castillo del Romeral, delivered to your door.',
  'hero.ctaPrimary': 'See the plans',
  'hero.scrollLabel': 'Scroll to how it works',
  'hero.photoAlt':
    'Three glass meal-prep containers on a bright kitchen counter: grilled chicken with roasted vegetables and quinoa, salmon with asparagus, broccoli and quinoa, and spiced chickpeas with avocado and quinoa',

  // How it works
  'how.eyebrow': 'How it works',
  'how.heading': "Three steps, then it's just dinner.",

  // Plans
  'plans.eyebrow': 'Plans',
  'plans.heading': 'Pick the macro split, not a diet fad.',
  'plans.intro':
    'Every plan carries the same fresh-kitchen standard. What changes is the ratio — matched to gender and objective when you set up delivery.',

  // Founder
  'founder.eyebrow': 'About us',
  'founder.headline':
    'The only kitchen on the island that asks your gender before your goal.',
  'founder.photoAlt': '{name}, founder of Fit Food Canarias',
  'founder.signAlt': "{name}'s signature",
  'founder.role': 'Founder',

  // Why us
  'why.eyebrow': 'Why us',
  'why.heading': "We're not a recipe app with a delivery van.",

  // Testimonials
  'testimonials.eyebrow': "From the kitchen's clients",
  'testimonials.heading': 'Illustrative feedback, written for this concept',
  'testimonials.note':
    'Sample quotes for this redesign pitch — not verified reviews from the live business.',
  'testimonials.rating': '5 out of 5 stars',

  // Blog
  'blog.eyebrow': 'From the notebook',
  'blog.heading': 'Notes on eating for a goal, not a trend.',
  'blog.read': 'Read the note →',

  // Contact
  'contact.eyebrow': 'Get your first delivery',
  'contact.heading': "Tell the kitchen which plan, we'll handle the rest.",
  'contact.sub':
    'Call or email to set your gender and objective — your first box ships within the week.',
  'contact.call': 'Call {phone}',
  'contact.email': 'Email the kitchen',
  'contact.kitchen': 'Kitchen',
  'contact.phone': 'Phone',
  'contact.emailLabel': 'Email',

  // Footer
  'footer.tagline': 'Meal prep, measured to your goal.',
  'footer.disclaimer':
    'Independent redesign concept created as a design case study. Not affiliated with or endorsed by the real Fit Food Canarias business.',
  'footer.navHeading': 'Site',
  'footer.contactHeading': 'Contact',
  'footer.followHeading': 'Follow',
  'footer.socialsComingSoon': 'Social media links coming soon.',
  'footer.madeIn': 'Made in Gran Canaria',
  'footer.copy': '© {year} — concept design, not a live storefront.',
} as const;

export type DictKey = keyof typeof en;
export type Dict = Record<DictKey, string>;
