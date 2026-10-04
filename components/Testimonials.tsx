import type { Testimonial } from "@/brands/types";

const Stars = ({ n }: { n: number }) => <span role="img" aria-label={`${n} out of 5 stars`} className="tracking-widest text-accent">{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;

export default function Testimonials({ items, rating, heading = "What patients say", source }: { items: Testimonial[]; rating: { score: number; count: number; url?: string }; heading?: string; source?: string }) {
  if (!items.length) return null;
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="text-center">
          <h2 className="h-display">{heading}</h2>
          {rating.count > 0 && (
            <p className="mt-4 flex items-center justify-center gap-3 text-sm text-muted">
              <span className="text-2xl font-medium text-ink">{rating.score.toFixed(1)}</span><Stars n={Math.round(rating.score)} />
              <span>{rating.url ? <a href={rating.url} className="underline" target="_blank" rel="noopener noreferrer">{rating.count} Google reviews</a> : `${rating.count} Google reviews`}</span>
            </p>
          )}
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <li key={t.name} className="rounded-2xl border border-line bg-paper p-6">
              <Stars n={t.rating} />
              <blockquote className="mt-3 text-sm text-muted">“{t.text}”</blockquote>
              <p className="mt-4 text-sm font-medium">{t.name}{t.when && <span className="font-normal text-muted"> · {t.when}</span>}</p>
              {t.treatment && <p className="text-xs text-muted">{t.treatment}</p>}
            </li>
          ))}
        </ul>
        {source && <p className="mt-6 text-center text-xs text-muted">{source}</p>}
      </div>
    </section>
  );
}
