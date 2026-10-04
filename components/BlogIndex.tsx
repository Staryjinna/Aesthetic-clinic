"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/blog";

const PER_PAGE = 6;
const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

function Cover({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;
  return <div className="relative aspect-[16/10] bg-surface"><Image src={src} alt={alt} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" /></div>;
}

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);

  const cats = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const tags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(), [posts]);
  const filtered = useMemo(() => posts.filter((p) =>
    (cat === "All" || p.category === cat) && (!tag || p.tags.includes(tag)) &&
    (!q || `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(q.toLowerCase()))), [posts, q, cat, tag]);

  const filtering = !!q || cat !== "All" || !!tag;
  const featured = !filtering ? posts.find((p) => p.featured) ?? posts[0] : undefined;
  const list = filtered.filter((p) => p !== featured);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const cur = Math.min(page, pages);
  const visible = list.slice((cur - 1) * PER_PAGE, cur * PER_PAGE);
  const reset = (fn: () => void) => { fn(); setPage(1); };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <input id="blog-search" type="search" value={q} onChange={(e) => reset(() => setQ(e.target.value))} placeholder="Search articles"
            className="min-h-[2.75rem] w-full rounded-full border border-line px-5 text-sm focus:border-ink sm:max-w-sm" />
        </div>
        <div role="group" aria-label="Categories" className="flex flex-wrap gap-2">
          {cats.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => reset(() => setCat(c))}>{c}</button>)}
        </div>
        <div role="group" aria-label="Tags" className="flex flex-wrap gap-2 text-sm">
          {tags.map((t) => <button key={t} aria-pressed={tag === t} onClick={() => reset(() => setTag(tag === t ? "" : t))} className="rounded-full bg-surface px-3 py-1 text-muted hover:text-ink aria-pressed:bg-ink aria-pressed:text-white">#{t}</button>)}
        </div>
      </div>

      {featured && (
        <Link href={`/blog/${featured.slug}`} className={`card mt-10 grid overflow-hidden ${featured.image ? "md:grid-cols-2" : ""}`}>
          <Cover src={featured.image} alt="" />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="eyebrow">Featured · {featured.category}</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-muted">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-muted">{fmt(featured.date)} · {featured.readingMinutes} min read</p>
          </div>
        </Link>
      )}

      <p className="mt-8 text-sm text-muted" role="status">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
      <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="card block h-full transition-shadow hover:shadow-md">
              <Cover src={p.image} alt="" />
              <div className="p-5">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-2 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                <p className="mt-3 text-xs text-muted">{fmt(p.date)} · {p.readingMinutes} min read</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {!filtered.length && <p className="mt-6 text-muted">No articles match your search.</p>}

      {pages > 1 && (
        <nav aria-label="Pagination" className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => <button key={n} className="chip !px-0 w-10 justify-center" aria-current={n === cur ? "true" : undefined} onClick={() => setPage(n)}>{n}</button>)}
        </nav>
      )}
    </div>
  );
}
