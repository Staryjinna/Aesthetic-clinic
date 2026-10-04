import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brand, absUrl } from "@/lib/brand";
import { getPost, getPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import BookingCta from "@/components/BookingCta";

export const dynamicParams = false;
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? pageMeta(p.title, p.excerpt, `/blog/${p.slug}`, p.image) : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const more = getPosts().filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.excerpt, datePublished: p.date, mainEntityOfPage: absUrl(`/blog/${p.slug}`), ...(p.image ? { image: absUrl(p.image) } : {}), author: { "@type": "Organization", name: brand.name }, publisher: { "@type": "Organization", name: brand.name } }} />
      <PageHero eyebrow={p.category} title={p.title} text={p.excerpt} crumbs={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: p.title }]} />
      <article className="section">
        <div className="container-x max-w-3xl">
          {p.image && <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl bg-surface"><Image src={p.image} alt="" fill priority sizes="(min-width:768px) 768px, 100vw" className="object-cover" /></div>}
          <p className="text-sm text-muted">{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {p.readingMinutes} min read</p>
          <div className="prose-clinic" dangerouslySetInnerHTML={{ __html: p.html }} />
          <ul className="mt-10 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-surface px-3 py-1 text-sm text-muted">#{t}</li>)}</ul>
        </div>
      </article>
      {more.length > 0 && (
        <section className="section bg-surface"><div className="container-x max-w-3xl">
          <h2 className="text-2xl">More to read</h2>
          <ul className="mt-6 space-y-4">{more.map((m) => <li key={m.slug}><Link href={`/blog/${m.slug}`} className="text-lg text-primary hover:underline">{m.title}</Link><p className="text-sm text-muted">{m.excerpt}</p></li>)}</ul>
        </div></section>
      )}
      <BookingCta />
    </>
  );
}
