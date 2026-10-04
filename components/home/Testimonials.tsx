"use client";
import { useRef } from "react";
import type { Testimonial } from "@/brands/types";

const Stars = ({ n }: { n: number }) => (
  <span aria-label={`${n} out of 5 stars`} className="text-accent tracking-widest">{"★".repeat(n)}{"☆".repeat(5 - n)}</span>
);

export default function Testimonials({ items, rating }: { items: Testimonial[]; rating: { score: number; count: number; url?: string } }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.8), behavior: "smooth" });
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Patient reviews</p>
          <h2 className="h-display mt-5">In their words</h2>
          <p className="mt-5 flex items-center justify-center gap-3 text-sm text-muted">
            <span className="font-display text-3xl text-primary">{rating.score.toFixed(1)}</span>
            <Stars n={Math.round(rating.score)} />
            {rating.count > 0 && <span>{rating.count} Google reviews</span>}
          </p>
        </div>
        <div ref={track} tabIndex={0} aria-label="Testimonials" className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t, i) => (
            <figure key={i} className="w-[85%] shrink-0 snap-start rounded-card border border-line bg-paper p-8 sm:w-[46%] lg:w-[31%]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-lg text-primary">{t.name[0]}</span>
                <div><figcaption className="text-sm font-normal">{t.name}</figcaption>{t.when && <p className="text-xs text-muted">{t.when}</p>}</div>
              </div>
              <div className="mt-4"><Stars n={t.rating} /></div>
              <blockquote className="mt-3 text-sm text-muted">{t.text}</blockquote>
              {t.treatment && <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-accent">{t.treatment}</p>}
            </figure>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => scroll(-1)} aria-label="Previous reviews" className="h-11 w-11 rounded-full border border-line hover:border-primary">←</button>
          <button onClick={() => scroll(1)} aria-label="Next reviews" className="h-11 w-11 rounded-full border border-line hover:border-primary">→</button>
        </div>
      </div>
    </section>
  );
}
