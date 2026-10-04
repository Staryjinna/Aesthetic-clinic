"use client";
import Image from "next/image";
import { useState } from "react";

export interface GalleryItem { src: string; alt: string; category: string }

export default function GalleryGrid({ items, categories }: { items: GalleryItem[]; categories: { slug: string; title: string }[] }) {
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? items : items.filter((i) => i.category === cat);
  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
        <button className="chip" aria-pressed={cat === "all"} onClick={() => setCat("all")}>All</button>
        {categories.map((c) => <button key={c.slug} className="chip" aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)}>{c.title}</button>)}
      </div>
      <ul className="mt-8 columns-2 gap-4 md:columns-3 [&>li]:mb-4">
        {shown.map((i) => (
          <li key={i.src} className="break-inside-avoid overflow-hidden rounded-2xl bg-surface">
            <Image src={i.src} alt={i.alt} width={800} height={1000} sizes="(min-width:768px) 33vw, 50vw" className="h-auto w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
