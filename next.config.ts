import type { NextConfig } from "next";
import type { BrandConfig } from "./brands/types";

// Brands are auto-discovered: NEXT_PUBLIC_BRAND=<id> loads brands/<id>.ts (default: starter).
const load = (id: string): BrandConfig | undefined => {
  if (!/^[a-z0-9-]+$/.test(id) || id === "types") return undefined;
  try { return require(`./brands/${id}`).default; } catch { return undefined; }
};
const active = load((process.env.NEXT_PUBLIC_BRAND ?? "").trim()) ?? load("starter")!;

const config: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Old URL -> new URL, 301, from the active brand's redirect map.  Next strips trailing slashes, so /old/ is covered.
  async redirects() {
    return Object.entries(active.redirects).map(([from, to]) => ({ source: from, destination: to, statusCode: 301 }));
  },
};
export default config;
