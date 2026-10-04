import type { Metadata } from "next";
import { brand, absUrl } from "./brand";

export function pageMeta(title: string, description: string, path: string, image?: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absUrl(path) },
    openGraph: { title: `${title} | ${brand.name}`, description, url: absUrl(path), siteName: brand.name, type: "website", locale: "en_IN", ...(image ? { images: [{ url: absUrl(image) }] } : {}) },
  };
}
