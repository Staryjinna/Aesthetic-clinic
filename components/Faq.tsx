"use client";
import { useState } from "react";
import type { Faq as F } from "@/brands/types";

export default function Faq({ items, heading = "Frequently asked questions" }: { items: F[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h2 className="h-display text-center">{heading}</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((f, i) => (
            <div key={f.q}>
              <h3>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-${i}`}
                  className="flex min-h-[3.5rem] w-full items-center justify-between gap-6 py-4 text-left text-base font-medium sm:text-lg">
                  {f.q}
                  <span className="text-2xl text-accent" aria-hidden>{open === i ? "−" : "+"}</span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" hidden={open !== i} className="pb-5 pr-10 text-muted">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
