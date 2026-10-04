import type { BrandConfig, Treatment, TreatmentCategory } from "@/brands/types";
import adyarHydra from "@/brands/adyar-hydra";
import eternalRadiance from "@/brands/eternal-radiance";

/** Register new brands here. */
const BRANDS: Record<string, BrandConfig> = {
  "adyar-hydra": adyarHydra,
  "eternal-radiance": eternalRadiance,
};

const requested = process.env.NEXT_PUBLIC_BRAND?.trim();
export const BRAND_ID = requested && BRANDS[requested] ? requested : "adyar-hydra";
export const brand: BrandConfig = BRANDS[BRAND_ID];

export const allTreatments = (): (Treatment & { category: TreatmentCategory })[] =>
  brand.categories.flatMap((c) => c.treatments.map((t) => ({ ...t, category: c })));

export const findTreatment = (slug: string) => allTreatments().find((t) => t.slug === slug);

export const whatsappLink = (message?: string) =>
  `https://wa.me/${brand.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const defaultWhatsappMessage = `Hello ${brand.name}, I'd like to book a consultation.`;

export const absUrl = (path = "/") => new URL(path, brand.siteUrl).toString();
export const phoneIsPlaceholder = /^\+91 0{5}/.test(brand.phone);
