import { brand } from "@/lib/brand";
import { STOCK } from "@/lib/stock";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import GalleryGrid, { type GalleryItem } from "@/components/GalleryGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingCta from "@/components/BookingCta";

export const metadata = pageMeta("Gallery", `A look at the treatments and care at ${brand.name}.`, "/gallery");

const map: Record<string, string[]> = { skin: STOCK.skin, injectables: STOCK.injectables, hair: STOCK.hair, wellness: STOCK.wellness };
const poolOf = (slug: string) => (/hair/.test(slug) ? STOCK.hair : /inject/.test(slug) ? STOCK.injectables : /well/.test(slug) ? STOCK.wellness : map.skin);

export default function GalleryPage() {
  const items: GalleryItem[] = brand.categories.flatMap((c) => poolOf(c.slug).map((src) => ({ src, category: c.slug, alt: `${c.title}: illustrative image` })));
  const pairs = brand.beforeAfter.filter((p) => p.before.src && p.after.src);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Gallery" text="Images of the kinds of care we offer, grouped by area. These are illustrative photographs, not patient results." crumbs={[{ href: "/", label: "Home" }, { label: "Gallery" }]} />
      <section className="section">
        <div className="container-x"><GalleryGrid items={items} categories={brand.categories.map((c) => ({ slug: c.slug, title: c.title }))} /></div>
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
