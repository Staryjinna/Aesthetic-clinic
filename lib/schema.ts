import { brand, absUrl, phoneIsPlaceholder } from "./brand";
import type { Faq } from "@/brands/types";

const DAYS: Record<string, string[]> = {
  "monday – saturday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  sunday: ["Sunday"],
};
const to24 = (t: string) => {
  const m = t.trim().match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!m) return null;
  let h = +m[1] % 12; if (m[3].toLowerCase() === "pm") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
};

/** Only includes fields that have real values (no placeholder phone, no zero-count ratings). */
export function clinicSchema() {
  const a = brand.address;
  const hours = brand.hours.flatMap((h) => {
    const days = DAYS[h.days.toLowerCase()];
    const [o, c] = h.hours.split(/[–-]/).map((x) => to24(x));
    return days && o && c ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: o, closes: c }] : [];
  });
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: brand.name,
    url: brand.siteUrl,
    description: brand.seo.description,
    ...(brand.logo.endsWith(".svg") ? {} : { logo: absUrl(brand.logo) }),
    image: absUrl(brand.hero.image.src ?? "/"),
    ...(phoneIsPlaceholder ? {} : { telephone: brand.phoneTel }),
    email: brand.email,
    address: { "@type": "PostalAddress", streetAddress: a.lines.join(", "), addressLocality: a.city, addressRegion: a.state, postalCode: a.postalCode, addressCountry: a.country },
    ...(brand.geo ? { geo: { "@type": "GeoCoordinates", latitude: brand.geo.lat, longitude: brand.geo.lng } } : {}),
    ...(hours.length ? { openingHoursSpecification: hours } : {}),
    sameAs: Object.values(brand.social).filter(Boolean),
    ...(brand.googleRating.count > 0 ? { aggregateRating: { "@type": "AggregateRating", ratingValue: brand.googleRating.score, reviewCount: brand.googleRating.count } } : {}),
    medicalSpecialty: "Dermatology",
  };
}

export const faqSchema = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const physicianSchema = (d: { name: string; title: string }) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name: d.name,
  jobTitle: d.title,
  worksFor: { "@type": "MedicalClinic", name: brand.name, url: brand.siteUrl },
  url: absUrl("/about"),
});
