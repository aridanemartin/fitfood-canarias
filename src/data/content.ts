// Central copy + data store for the Fit Food Canarias redesign concept.
// All copy below is original writing based on the real business's public
// positioning — it is not copied from the live site.
//
// Business facts (name, contact details, imagery) are locale-independent;
// the prose is keyed by locale and read through getContent(lang).

import type { Lang } from "../i18n/locales";
import type { DictKey } from "../i18n/dictionaries/en";

export const site = {
  name: "Fit Food Canarias",
  tagline: "Meal prep, measured to your goal",
  phone: "+34 676 08 51 34",
  email: "info@fitfoodcanarias.com",
  address: "Av. Las Salinas, 19, Castillo del Romeral, 35107, Gran Canaria",
  // Real logo, hotlinked from the live site rather than copied into this repo.
  logo: "https://fitfoodcanarias.com/wp-content/uploads/2024/10/fitfoo_logotipo_new.png",
};

// Founder photo and signature are hotlinked directly from the live site
// (not copied into this repo) at the user's explicit request.
export const founderProfile = {
  name: "Patricia",
  photo: "https://fitfoodcanarias.com/wp-content/uploads/2019/10/Patricia_web.jpg",
  signature: "https://fitfoodcanarias.com/wp-content/uploads/2019/05/patpat_sign.png",
};

/** Nav targets are shared across locales; only the label is translated. */
export const nav: { key: DictKey; href: string }[] = [
  { key: "nav.howItWorks", href: "#how-it-works" },
  { key: "nav.plans", href: "#plans" },
  { key: "nav.whyUs", href: "#why-us" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export type PlanId = "fat-loss" | "balanced" | "muscle-gain";

export type Plan = {
  id: PlanId;
  name: string;
  macroLabel: string;
  description: string;
  bestFor: string;
  image: string;
  imageAlt: string;
};

export type Step = {
  number: string;
  title: string;
  text: string;
};

export type Differentiator = {
  title: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

interface StructuredContent {
  plans: Plan[];
  steps: Step[];
  founderParagraphs: string[];
  differentiators: Differentiator[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
}

/* ------------------------------------------------------------------ *
 * Imagery is shared across locales; only the alternative text differs.
 * ------------------------------------------------------------------ */

const planMedia: Record<PlanId, { image: string; imageAlt: Record<Lang, string> }> = {
  "fat-loss": {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
    imageAlt: {
      es: "Un bol rico en proteína con carne a la parrilla y verduras variadas",
      en: "A protein-forward bowl with grilled meat and mixed vegetables",
    },
  },
  balanced: {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&auto=format&fit=crop&q=60",
    imageAlt: {
      es: "Un bol de ensalada colorida de verduras con hojas frescas",
      en: "A colourful vegetable salad bowl with fresh greens",
    },
  },
  "muscle-gain": {
    image:
      "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?w=1200&auto=format&fit=crop&q=60",
    imageAlt: {
      es: "Fiambreras compartimentadas con arroz, proteína y verduras",
      en: "Compartmentalised meal prep containers with rice, protein and vegetables",
    },
  },
};

/* ------------------------------------------------------------------ *
 * Prose, keyed by locale.
 * ------------------------------------------------------------------ */

type PlanCopy = Omit<Plan, "image" | "imageAlt">;

const planCopy: Record<Lang, PlanCopy[]> = {
  es: [
    {
      id: "fat-loss",
      name: "Pérdida de grasa",
      macroLabel: "Alta proteína · carbohidrato controlado",
      description:
        "Una estructura calórica pensada para eliminar grasa sin sacrificar músculo: proteínas magras, carbohidratos de bajo índice glucémico y el volumen suficiente para que no pases la tarde pensando en comida.",
      bestFor: "Para un corte con fecha límite",
    },
    {
      id: "balanced",
      name: "Equilibrado",
      macroLabel: "Macros equilibrados · mantenimiento",
      description:
        "Para las semanas en las que el objetivo es simplemente no perder el rumbo: energía estable, verduras de verdad y raciones pensadas para una semana de trabajo, no para un campamento de entrenamiento.",
      bestFor: "Para semanas ajetreadas, sin volumen ni definición",
    },
    {
      id: "muscle-gain",
      name: "Ganancia muscular",
      macroLabel: "Alta proteína · altos carbohidratos",
      description:
        "Calorías de superávit que van al gimnasio y no al sofá: raciones más grandes de proteína y carbohidratos complejos, pautadas para la recuperación entre sesiones.",
      bestFor: "Para bloques de entrenamiento que necesitan combustible",
    },
  ],
  en: [
    {
      id: "fat-loss",
      name: "Fat Loss",
      macroLabel: "High protein · controlled carb",
      description:
        "A calorie structure built to strip fat without starving muscle — lean proteins, low-GI carbs, and enough volume that you don't spend the afternoon thinking about food.",
      bestFor: "For a cut with a deadline",
    },
    {
      id: "balanced",
      name: "Balanced",
      macroLabel: "Even macros · maintenance",
      description:
        "For the weeks when the goal is just staying on track — steady energy, real vegetables, portions sized for a working week rather than a training camp.",
      bestFor: "For busy weeks, not bulking or cutting",
    },
    {
      id: "muscle-gain",
      name: "Muscle Gain",
      macroLabel: "High protein · high carb",
      description:
        "Surplus calories that go toward the gym, not the couch — bigger portions of protein and complex carbs, timed for recovery between sessions.",
      bestFor: "For training blocks that need fuel",
    },
  ],
};

const steps: Record<Lang, Step[]> = {
  es: [
    {
      number: "01",
      title: "Elige tu plan",
      text: "Pérdida de grasa, Equilibrado o Ganancia muscular: elige el que encaja con lo que entrenas ahora mismo, no un objetivo calórico genérico.",
    },
    {
      number: "02",
      title: "Define tu perfil",
      text: "El sexo y el objetivo ajustan las raciones y el reparto de macros. Hay opciones vegetarianas, veganas y pescetarianas en todos los planes.",
    },
    {
      number: "03",
      title: "Abre y come",
      text: "Las comidas llegan frescas desde la cocina de Castillo del Romeral, racionadas y etiquetadas. Calienta, abre y listo.",
    },
  ],
  en: [
    {
      number: "01",
      title: "Choose your plan",
      text: "Fat Loss, Balanced, or Muscle Gain — pick the one that matches what you're training for right now, not a generic calorie target.",
    },
    {
      number: "02",
      title: "Set your profile",
      text: "Gender and objective adjust the portions and macro split. Vegetarian, vegan, and pescatarian options are available on every plan.",
    },
    {
      number: "03",
      title: "Unwrap and eat",
      text: "Meals arrive fresh from the Castillo del Romeral kitchen, portioned and labelled. Heat, open, done.",
    },
  ],
};

const founderParagraphs: Record<Lang, string[]> = {
  es: [
    "Fit Food Canarias nació de un hueco evidente: los planes genéricos ignoran que un objetivo de pérdida de grasa no es el mismo plato para una persona que para otra. Construimos cada plan en torno a tu sexo y tu objetivo, no a un único recuento de macros estirado para todos.",
    "Elige Pérdida de grasa, Equilibrado o Ganancia muscular, dinos tu sexo y nosotros nos encargamos del resto: cocinado fresco y entregado en tu puerta, para que la única decisión que quede sea cuál abrir primero.",
  ],
  en: [
    "Fit Food Canarias started from a simple gap: generic meal plans ignore that a fat-loss target for one person isn't the same plate as for another. We build every plan around your gender and your objective, not a single macro count stretched across everyone.",
    "Choose Fat Loss, Balanced, or Muscle Gain, tell us your gender, and we take it from there — cooked fresh and delivered to your door, so the only decision left is which one to eat first.",
  ],
};

const differentiators: Record<Lang, Differentiator[]> = {
  es: [
    {
      title: "Creado por sexo y objetivo",
      text: "La única cocina de comida preparada en Gran Canaria que ajusta las raciones por sexo y también por objetivo, no un único objetivo de macros estirado para todos.",
    },
    {
      title: "Nutricionistas en plantilla",
      text: "Nuestro equipo de nutrición aprueba cada plan antes de que llegue a la cocina; no se arma a partir de un recetario genérico.",
    },
    {
      title: "Producto de la isla",
      text: "Frutas, verduras y proteína compradas a proveedores de Gran Canaria siempre que es posible: las comidas se cocinan la misma semana en que se comen.",
    },
    {
      title: "Pensado para dietas especiales",
      text: "Versiones vegetarianas, veganas y pescetarianas de todos los planes, no un único menú alternativo añadido como ocurrencia de última hora.",
    },
  ],
  en: [
    {
      title: "Built by gender and goal",
      text: "The only meal prep kitchen in Gran Canaria that adjusts portions by gender as well as objective — not one macro target stretched across everyone.",
    },
    {
      title: "Nutritionists on staff",
      text: "Every plan is signed off by our resident nutrition team before it reaches the kitchen, not assembled from a generic recipe bank.",
    },
    {
      title: "Sourced on the island",
      text: "Produce and protein bought from Gran Canaria suppliers where possible — meals are cooked the same week they're eaten.",
    },
    {
      title: "Diet-aware by default",
      text: "Vegetarian, vegan, and pescatarian versions of every plan, not a single side menu bolted on as an afterthought.",
    },
  ],
};

const testimonials: Record<Lang, Testimonial[]> = {
  es: [
    {
      quote:
        "Dejé de pesar el arroz a las 11 de la noche. El plan de Pérdida de grasa llegaba ya racionado y perdí los últimos kilos antes de competir.",
      name: "Marta R.",
      role: "Triatleta amateur, Vecindario",
    },
    {
      quote:
        "El plan de Ganancia muscular encajó con mi bloque de entrenamiento mejor que el menú que me vendía mi gimnasio, y sin tener que cocinarlo.",
      name: "Iván G.",
      role: "Cliente, Telde",
    },
    {
      quote:
        "El plan Equilibrado durante la temporada de viajes de trabajo me salvó de vivir de comida de máquina expendedora. Así de simple.",
      name: "Noa S.",
      role: "Cliente, Las Palmas",
    },
  ],
  en: [
    {
      quote:
        "I stopped weighing rice at 11pm. The Fat Loss plan just showed up portioned and I dropped the last few kilos before competition.",
      name: "Marta R.",
      role: "Amateur triathlete, Vecindario",
    },
    {
      quote:
        "Muscle Gain plan matched my training block better than the meal plan my gym sold me — and I didn't have to cook it.",
      name: "Iván G.",
      role: "Client, Telde",
    },
    {
      quote:
        "Balanced plan during a work trip season kept me from living on vending-machine food. Simple as that.",
      name: "Noa S.",
      role: "Client, Las Palmas",
    },
  ],
};

/* Imagery is shared across locales, indexed by post order; only the
 * alternative text differs. Same sourcing pattern as WhyUs: Unsplash
 * stock photos, stored locally so the page has no runtime dependency
 * on a third-party CDN. */
const blogMedia: { image: string; imageAlt: Record<Lang, string> }[] = [
  {
    image: "/images/blog-portion.webp", // Unsplash photo-1594221708779-94832f4320d1
    imageAlt: {
      es: "Un bol de comida ya porcionado en un táper para llevar",
      en: "A pre-portioned meal bowl in a takeout container",
    },
  },
  {
    image: "/images/blog-competition.webp", // Unsplash photo-1571019613454-1cb2f99b2d8b
    imageAlt: {
      es: "Una atleta haciendo abdominales durante un entrenamiento",
      en: "An athlete doing sit-ups during a training session",
    },
  },
  {
    image: "/images/blog-fresh.webp", // Unsplash photo-1490645935967-10de6ba17061
    imageAlt: {
      es: "Ingredientes frescos, incluido aguacate y tomate, sobre una mesa de madera",
      en: "Fresh ingredients, including avocado and tomato, on a wooden table",
    },
  },
];

type BlogCopy = Omit<BlogPost, "image" | "imageAlt">;

const blogCopy: Record<Lang, BlogCopy[]> = {
  es: [
    {
      title: "Por qué la ración importa más que las apps de conteo de calorías",
      excerpt:
        "Una cocina que ya viene racionada elimina la variable que casi ninguna app resuelve: adivinar cuánto es realmente un puñado.",
    },
    {
      title: "Definir para un reportaje o definir para una competición",
      excerpt:
        "Sobre el papel, los objetivos de macros se parecen. El momento y lo que aguantas seis semanas no.",
    },
    {
      title: "Qué significa 'fresco' en una cocina de comida preparada",
      excerpt:
        "Lotes cocinados bajo pedido, producto de la misma semana y por qué una vida útil de cinco días es una ventaja, no una limitación.",
    },
  ],
  en: [
    {
      title: "Why portion size beats calorie counting apps",
      excerpt:
        "A pre-portioned kitchen removes the one variable most tracking apps can't fix: guessing how big a handful actually is.",
    },
    {
      title: "Cutting for a photoshoot vs. cutting for a competition",
      excerpt:
        "The macro targets look similar on paper. The timing, and what you can live with for six weeks, don't.",
    },
    {
      title: "What 'fresh' actually means in a meal prep kitchen",
      excerpt:
        "Cooked-to-order batches, same-week produce, and why a five-day shelf life is a feature, not a limitation.",
    },
  ],
};

function buildBlogPosts(lang: Lang): BlogPost[] {
  return blogCopy[lang].map((post, i) => ({
    ...post,
    image: blogMedia[i].image,
    imageAlt: blogMedia[i].imageAlt[lang],
  }));
}

function buildPlans(lang: Lang): Plan[] {
  return planCopy[lang].map((plan) => ({
    ...plan,
    image: planMedia[plan.id].image,
    imageAlt: planMedia[plan.id].imageAlt[lang],
  }));
}

const contentByLang: Record<Lang, StructuredContent> = {
  es: {
    plans: buildPlans("es"),
    steps: steps.es,
    founderParagraphs: founderParagraphs.es,
    differentiators: differentiators.es,
    testimonials: testimonials.es,
    blogPosts: buildBlogPosts("es"),
  },
  en: {
    plans: buildPlans("en"),
    steps: steps.en,
    founderParagraphs: founderParagraphs.en,
    differentiators: differentiators.en,
    testimonials: testimonials.en,
    blogPosts: buildBlogPosts("en"),
  },
};

export const getContent = (lang: Lang): StructuredContent => contentByLang[lang];
