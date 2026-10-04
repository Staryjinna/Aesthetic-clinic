import {
  Cormorant_Garamond,
  Jost,
  Marcellus,
  Manrope,
  Playfair_Display,
  Inter,
} from "next/font/google";
import type { FontKey } from "@/brands/types";
import { brand } from "./brand";

// next/font needs literal options, so each supported font is declared once here.
// To offer a new font to brand configs: add it here and to FontKey in brands/types.ts.
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], display: "swap" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], display: "swap" });
const marcellus = Marcellus({ subsets: ["latin"], weight: "400", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"], display: "swap" });

const map: Record<FontKey, { className: string; style: { fontFamily: string } }> = {
  cormorant, jost, marcellus, manrope, playfair, inter,
};

export const displayFont = map[brand.fonts.display];
export const bodyFont = map[brand.fonts.body];
