import type { BrandConfig } from "@/brands/types";

export default function Intro({ intro }: { intro: BrandConfig["intro"] }) {
  return (
    <section className="section">
      <div className="container-x max-w-3xl text-center">
        <p className="eyebrow">{intro.eyebrow}</p>
        <h2 className="h-display mt-5">{intro.heading}</h2>
        <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        <div className="mt-8 space-y-5 text-muted">
          {intro.text.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
