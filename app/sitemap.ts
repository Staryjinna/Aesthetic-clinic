import type { MetadataRoute } from "next";
import { brand, allTreatments, absUrl } from "@/lib/brand";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["/", "/treatments", "/about", "/gallery", "/reviews", "/blog", "/community", "/contact", "/privacy-policy", "/terms-conditions"];
  return [
    ...fixed.map((p) => ({ url: absUrl(p), lastModified: now, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...allTreatments().map((t) => ({ url: absUrl(`/treatments/${t.slug}`), lastModified: now, priority: 0.8 })),
    ...getPosts().map((p) => ({ url: absUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
