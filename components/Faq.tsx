"use client";
import { useState } from "react";
import type { Faq as F } from "@/brands/types";

export default function Faq({ items, heading = "Questions, answered" }: { items: F[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="h-display mt-5">{heading}</h2>
        </div>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {items.map((f, i) => (
            <div key={f.q}>
              <h3>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl"
                >
                  {f.q}
                  <span className="text-2xl text-accent" aria-hidden>{open === i ? "−" : "+"}</span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" hidden={open !== i} className="pb-6 pr-10 text-muted">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
