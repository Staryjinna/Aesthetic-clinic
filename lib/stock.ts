import type { BrandConfig, ImageSlot } from "@/brands/types";

/**
 * Free stock photography (Unsplash / Pexels licences, no attribution required) used until
 * brand-owned photos are supplied. A brand overrides any slot by setting `src` in its config.
 * Stock images are generic scenes: never present them as patients, results or staff.
 */
const S = (n: string) => `/stock/${n}.jpg`;

export const STOCK = {
  hero: S("facial-treatment"),
  skin: [S("facial-mask"), S("facial-brush"), S("mask-teal"), S("facial-clay"), S("cleansing-mask"), S("avocado-mask")],
  injectables: [S("clinician-patient"), S("serum-dropper"), S("dropper-hands"), S("clinical-gloves")],
  hair: [S("hair-long"), S("hair-styling")],
  wellness: [S("spa-room"), S("spa-woman"), S("body-massage"), S("face-massage")],
  journal: [S("products-flatlay"), S("products-stones"), S("petals-serum")],
};
type Pool = "skin" | "injectables" | "hair" | "wellness";

const poolFor = (slug: string): Pool => (/hair/.test(slug) ? "hair" : /inject|filler|botox/.test(slug) ? "injectables" : /well|iv|spa/.test(slug) ? "wellness" : "skin");

export const stockFor = (slug: string, i = 0) => {
  const pool = STOCK[poolFor(slug)];
  return pool[i % pool.length];
};

const fill = (slot: ImageSlot, src: string, alt?: string): ImageSlot => (slot.src ? slot : { src, alt: alt ?? slot.alt });

/** Returns the brand with stock photos filled into every empty image slot (hero, categories, treatments). */
export function withStock(b: BrandConfig): BrandConfig {
  return {
    ...b,
    hero: { ...b.hero, image: fill(b.hero.image, STOCK.hero, "Facial skin treatment in progress") },
    categories: b.categories.map((c, ci) => ({
      ...c,
      image: fill(c.image, stockFor(c.slug, 0), `${c.title}: illustrative image`),
      treatments: c.treatments.map((t, ti) => ({ ...t, image: fill(t.image, stockFor(c.slug, ti + ci), `${t.title}: illustrative image`) })),
    })),
  };
}
