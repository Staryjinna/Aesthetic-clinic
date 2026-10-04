import type { NextConfig } from "next";
import adyarHydra from "./brands/adyar-hydra";
import eternalRadiance from "./brands/eternal-radiance";

const BRANDS = { "adyar-hydra": adyarHydra, "eternal-radiance": eternalRadiance } as const;
const id = (process.env.NEXT_PUBLIC_BRAND ?? "").trim();
const active = BRANDS[id as keyof typeof BRANDS] ?? adyarHydra;

const config: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Old URL -> new URL, 301, from the active brand's redirect map.  Next strips trailing slashes, so /old/ is covered.
  async redirects() {
    return Object.entries(active.redirects).map(([from, to]) => ({ source: from, destination: to, statusCode: 301 }));
  },
};
export default config;
