import type { BrandConfig } from "@/brands/types";

export default function Why({ points, stats }: { points: BrandConfig["why"]; stats: BrandConfig["stats"] }) {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Why choose us</p>
          <h2 className="h-display mt-5">A considered approach</h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <div key={p.title} className="text-center">
              <span className="font-display text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-line pt-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl text-primary sm:text-4xl">{s.value}</dd>
              <dt className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:text-xs">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
