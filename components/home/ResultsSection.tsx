"use client";
import { useState } from "react";
import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";
import type { BeforeAfter } from "@/brands/types";

export default function ResultsSection({ pairs }: { pairs: BeforeAfter[] }) {
  const [i, setI] = useState(0);
  return (
    <section className="section bg-surface">
      <div className="container-x max-w-4xl">
        <div className="text-center">
          <p className="eyebrow">Results</p>
          <h2 className="h-display mt-5">See the difference, gently</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">Drag the handle to compare. Results vary from person to person.</p>
        </div>
        <div className="mt-12"><BeforeAfterSlider key={pairs[i].id} pair={pairs[i]} /></div>
        {pairs.length > 1 && (
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose example">
            {pairs.map((p, n) => (
              <button key={p.id} role="tab" aria-selected={n === i} onClick={() => setI(n)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors ${n === i ? "border-primary bg-primary text-white" : "border-line text-muted hover:border-primary"}`}>
                {p.title}
              </button>
            ))}
          </div>
        )}
        <div className="mt-10 text-center"><Link href="/results" className="btn btn-ghost">View all results</Link></div>
      </div>
    </section>
  );
}
