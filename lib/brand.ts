import type { BrandConfig, Treatment, TreatmentCategory } from "@/brands/types";
import { withStock } from "./stock";

/** Brands are auto-discovered: any brands/<id>.ts is selectable via NEXT_PUBLIC_BRAND=<id>. No registration needed. */
const DEFAULT_BRAND = "starter";
const requested = process.env.NEXT_PUBLIC_BRAND?.trim();
const load = (id: string): BrandConfig | undefined => {
  if (!/^[a-z0-9-]+$/.test(id) || id === "types") return undefined;
  try { return require(`@/brands/${id}`).default; } catch { return undefined; }
};
const selected = requested ? load(requested) : undefined;
export const BRAND_ID = selected ? requested! : DEFAULT_BRAND;
export const brand: BrandConfig = withStock(selected ?? load(DEFAULT_BRAND)!);

export const allTreatments = (): (Treatment & { category: TreatmentCategory })[] =>
  brand.categories.flatMap((c) => c.treatments.map((t) => ({ ...t, category: c })));

export const findTreatment = (slug: string) => allTreatments().find((t) => t.slug === slug);

export const whatsappLink = (message?: string) =>
  `https://wa.me/${brand.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const defaultWhatsappMessage = `Hello ${brand.name}, I'd like to book a consultation.`;

export const absUrl = (path = "/") => new URL(path, brand.siteUrl).toString();
export const phoneIsPlaceholder = /^\+91 0{5}/.test(brand.phone);
