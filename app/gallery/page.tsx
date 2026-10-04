import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingCta from "@/components/BookingCta";

export const metadata = pageMeta("Gallery", `Photographs of ${brand.name}.`, "/gallery");

export default function GalleryPage() {
  const pairs = brand.beforeAfter.filter((p) => p.before.src && p.after.src);
  const slugs = Array.from(new Set(brand.gallery.map((g) => g.categorySlug).filter(Boolean)));
  const categories = brand.categories.filter((c) => slugs.includes(c.slug)).map((c) => ({ slug: c.slug, title: c.title }));
  return (
    <>
      <PageHero eyebrow="Gallery" title="Gallery" text="Photographs of our clinic." crumbs={[{ href: "/", label: "Home" }, { label: "Gallery" }]} />
      <section className="section">
        <div className="container-x"><GalleryGrid items={brand.gallery.map((g) => ({ src: g.src, alt: g.alt, category: g.categorySlug ?? "" }))} categories={categories} /></div>
      </section>
      {pairs.length > 0 && (
        <section className="section bg-surface">
          <div className="container-x">
            <h2 className="h-display">Patient results</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">{pairs.map((p) => <BeforeAfterSlider key={p.id} pair={p} />)}</div>
          </div>
        </section>
      )}
      <BookingCta />
    </>
  );
}
