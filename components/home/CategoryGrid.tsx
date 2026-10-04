import Link from "next/link";
import Img from "../Img";
import type { TreatmentCategory } from "@/brands/types";

export default function CategoryGrid({ categories }: { categories: TreatmentCategory[] }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Treatments</p>
          <h2 className="h-display mt-5">Care, by concern</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, n) => (
            <Link key={c.slug} href={`/treatments#${c.slug}`} className="group block">
              <div className="overflow-hidden rounded-card">
                <Img slot={c.image} tone={((n % 3) + 1) as 1 | 2 | 3} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <h3 className="mt-5 text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.blurb}</p>
              <span className="mt-3 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-primary">{c.treatments.length} treatment{c.treatments.length > 1 ? "s" : ""} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
