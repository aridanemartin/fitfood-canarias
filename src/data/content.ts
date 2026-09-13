// Central copy + data store for the Fit Food Canarias redesign concept.
// All copy below is original writing based on the real business's public
// positioning — it is not copied from the live site.

export const site = {
  name: "Fit Food Canarias",
  tagline: "Meal prep, measured to your goal",
  phone: "+34 676 08 51 34",
  email: "info@fitfoodcanarias.com",
  address: "Av. Las Salinas, 19, Castillo del Romeral, 35107, Gran Canaria",
};

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Plans", href: "#plans" },
  { label: "Why us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Home delivery · Gran Canaria",
  headline: "Your macros, portioned by someone who actually checked them.",
  sub: "Three goal-based plans, built around your gender and your objective, cooked fresh in Castillo del Romeral and delivered to your door. No scales, no guesswork, no cooking for a month.",
  ctaPrimary: { label: "See the three plans", href: "#plans" },
  ctaSecondary: { label: "How delivery works", href: "#how-it-works" },
};

export type Plan = {
  id: "fat-loss" | "balanced" | "muscle-gain";
  accent: "fatloss" | "balanced" | "gain";
  name: string;
  macroLabel: string;
  description: string;
  bestFor: string;
  image: string;
  imageAlt: string;
};

export const plans: Plan[] = [
  {
    id: "fat-loss",
    accent: "fatloss",
    name: "Fat Loss",
    macroLabel: "High protein · controlled carb",
    description:
      "A calorie structure built to strip fat without starving muscle — lean proteins, low-GI carbs, and enough volume that you don't spend the afternoon thinking about food.",
    bestFor: "For a cut with a deadline",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
    imageAlt: "A protein-forward bowl with grilled meat and mixed vegetables",
  },
  {
    id: "balanced",
    accent: "balanced",
    name: "Balanced",
    macroLabel: "Even macros · maintenance",
    description:
      "For the weeks when the goal is just staying on track — steady energy, real vegetables, portions sized for a working week rather than a training camp.",
    bestFor: "For busy weeks, not bulking or cutting",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&auto=format&fit=crop&q=60",
    imageAlt: "A colourful vegetable salad bowl with fresh greens",
  },
  {
    id: "muscle-gain",
    accent: "gain",
    name: "Muscle Gain",
    macroLabel: "High protein · high carb",
    description:
      "Surplus calories that go toward the gym, not the couch — bigger portions of protein and complex carbs, timed for recovery between sessions.",
    bestFor: "For training blocks that need fuel",
    image:
      "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?w=1200&auto=format&fit=crop&q=60",
    imageAlt: "Compartmentalised meal prep containers with rice, protein and vegetables",
  },
];

export const steps = [
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
];

export const differentiators = [
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
];

export const testimonials = [
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
];

export const blogPosts = [
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
];
