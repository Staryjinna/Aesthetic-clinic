import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import TreatmentCard from "@/components/TreatmentCard";
import BookingCta from "@/components/BookingCta";

export const metadata = pageMeta("Treatments", `Skin, hair, injectable and wellness treatments at ${brand.name}, each planned after a consultation.`, "/treatments");

export default function TreatmentsPage() {
  return (
    <>
      <PageHero eyebrow="Treatments" title="Treatments, planned around you" text="Every treatment begins with a consultation. Browse by area, then read what to expect, who it may suit and how recovery usually goes." />
      <div className="container-x sticky top-[4.25rem] z-30 -mb-px border-b border-line bg-paper/95 py-3 backdrop-blur">
        <nav aria-label="Treatment categories" className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {brand.categories.map((c) => <a key={c.slug} href={`#${c.slug}`} className="chip shrink-0">{c.title}</a>)}
        </nav>
      </div>
      {brand.categories.map((c) => (
        <section key={c.slug} id={c.slug} className="section scroll-mt-32 border-b border-line last:border-0">
          <div className="container-x">
            <h2 className="h-display">{c.title}</h2>
            <p className="mt-3 max-w-2xl text-muted">{c.blurb}</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{c.treatments.map((t) => <li key={t.slug}><TreatmentCard t={t} /></li>)}</ul>
          </div>
        </section>
      ))}
      <BookingCta heading="Not sure which treatment fits?" />
    </>
  );
}
