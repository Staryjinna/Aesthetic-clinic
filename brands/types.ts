/**
 * Shared shape of every brand config. To add a brand: create brands/<id>.ts that
 * satisfies BrandConfig, register it in lib/brand.ts, and drop assets in
 * public/brands/<id>/. No component changes are needed.
 */

export type FontKey =
  | "cormorant"
  | "jost"
  | "marcellus"
  | "manrope"
  | "playfair"
  | "inter";

export interface Palette {
  /** Main brand colour: wordmark, headings accents, primary buttons. Hex. */
  primary: string;
  /** Muted accent: links, small highlights, ratings. Hex. */
  accent: string;
  /** Page background. Hex. */
  background: string;
  /** Soft tinted surface for cards / alternating sections. Hex. */
  surface: string;
  /** Body text. Hex. */
  text: string;
  /** Secondary text. Hex. */
  muted: string;
  /** Hairline borders. Hex. */
  line: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  linkedin?: string;
}

export interface OpeningHours {
  /** e.g. "Monday – Saturday" */
  days: string;
  /** e.g. "10:00 am – 7:00 pm" */
  hours: string;
}

/** Image slot. When `src` is missing a tasteful gradient placeholder is drawn. */
export interface ImageSlot {
  src?: string;
  alt: string;
}

export interface Doctor {
  name: string;
  title: string; // e.g. "Founder & Lead Aesthetic Physician"
  credentials?: string; // e.g. "MBBS, MD (Dermatology)"
  bio: string[]; // paragraphs
  quote?: string;
  image: ImageSlot;
  specialties?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: ImageSlot;
}

export interface Milestone {
  year: string;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Treatment {
  slug: string;
  title: string;
  short: string;
  long: string[]; // overview paragraphs
  benefits: string[];
  suitableFor: string[];
  steps: { title: string; text: string }[];
  recovery: string[];
  duration?: string; // "45 – 60 minutes"
  faqs: Faq[];
  image: ImageSlot;
  related?: string[]; // slugs
}

export interface TreatmentCategory {
  slug: string;
  title: string;
  blurb: string;
  image: ImageSlot;
  treatments: Treatment[];
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number; // 1-5
  treatment?: string;
  when?: string; // "2 months ago"
}

export interface BeforeAfter {
  id: string;
  title: string;
  categorySlug: string;
  treatment: string;
  before: ImageSlot;
  after: ImageSlot;
  note?: string; // "Results vary from person to person."
}

export interface HomeStat {
  value: string;
  label: string;
}

export interface WhyPoint {
  title: string;
  text: string;
}

export interface BrandConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  /** Short intro paragraph on the home page. */
  intro: { eyebrow: string; heading: string; text: string[] };
  /** Wordmark shown in header/hero if there is no raster logo. */
  wordmark: { line1: string; line2?: string };
  logo: string; // path under /public, e.g. /brands/adyar-hydra/logo.svg
  favicon: string;
  ogImage?: string;
  palette: Palette;
  fonts: { display: FontKey; body: FontKey };
  siteUrl: string; // production URL, used for sitemap / canonical / OG
  phone: string; // display, e.g. "+91 98765 43210"
  phoneTel: string; // tel: value, e.g. "+919876543210"
  whatsapp: string; // digits only with country code
  email: string;
  address: { lines: string[]; city: string; state: string; postalCode: string; country: string };
  geo?: { lat: number; lng: number };
  mapEmbedUrl: string;
  hours: OpeningHours[];
  social: SocialLinks;
  hero: { eyebrow?: string; cta: string; image: ImageSlot };
  doctors: Doctor[];
  team: TeamMember[];
  about: {
    heroHeading: string;
    story: string[];
    pullQuote: string;
    philosophy: { title: string; text: string }[];
  };
  timeline: Milestone[];
  categories: TreatmentCategory[];
  why: WhyPoint[];
  testimonials: Testimonial[];
  googleRating: { score: number; count: number; url?: string };
  beforeAfter: BeforeAfter[];
  stats: HomeStat[];
  homeFaqs: Faq[];
  seo: { title: string; description: string; keywords?: string[] };
  /** old URL path -> new URL path. All issued as 301s. */
  redirects: Record<string, string>;
  disclaimer: string;
}
