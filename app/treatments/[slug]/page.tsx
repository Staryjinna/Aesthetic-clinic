import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allTreatments, findTreatment, whatsappLink, brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import TreatmentCard from "@/components/TreatmentCard";
import BookingCta from "@/components/BookingCta";

export const dynamicParams = false;
export const generateStaticParams = () => allTreatments().map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = findTreatment((await params).slug);
  return t ? pageMeta(t.title, t.short, `/treatments/${t.slug}`, t.image.src) : {};
}

const List = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className="text-xl">{title}</h2>
    <ul className="mt-4 space-y-2 text-muted">{items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />{i}</li>)}</ul>
  </div>
);

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = findTreatment((await params).slug);
  if (!t) notFound();
  const related = (t.related ?? []).map(findTreatment).filter(Boolean) as NonNullable<ReturnType<typeof findTreatment>>[];
  return (
    <>
      {t.faqs.length > 0 && <JsonLd data={faqSchema(t.faqs)} />}
      <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalProcedure", name: t.title, description: t.short, procedureType: "https://schema.org/CosmeticProcedure" }} />
      <PageHero title={t.title} text={t.short} crumbs={[{ href: "/", label: "Home" }, { href: "/treatments", label: "Treatments" }, { href: `/treatments#${t.category.slug}`, label: t.category.title }, { label: t.title }]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="space-y-4 text-lg text-muted">{t.long.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <List title="Potential benefits" items={t.benefits} />
              <List title="May suit" items={t.suitableFor} />
            </div>
            <h2 className="mt-14 text-2xl">What to expect</h2>
            <ol className="mt-6 space-y-5">
              {t.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-medium">{i + 1}</span>
                  <div><h3 className="text-lg">{s.title}</h3><p className="text-muted">{s.text}</p></div>
                </li>
              ))}
            </ol>
            <h2 className="mt-14 text-2xl">Recovery and aftercare</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">{t.recovery.map((r) => <li key={r}>{r}</li>)}</ul>
            <p className="mt-10 rounded-2xl bg-surface p-5 text-sm text-muted">{brand.disclaimer}</p>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Img slot={t.image} aspect="aspect-[4/3]" sizes="(min-width:1024px) 35vw, 100vw" className="rounded-2xl" />
            <div className="mt-5 rounded-2xl border border-line p-6">
              {t.duration && <><p className="text-xs uppercase tracking-[0.15em] text-muted">Typical session</p><p className="mt-1 font-medium">{t.duration}</p></>}
              <a href={whatsappLink(`Hello ${brand.name}, I'd like to know more about ${t.title}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 w-full">Ask about this treatment</a>
              <Link href="/contact" className="btn btn-ghost mt-3 w-full">Book consultation</Link>
            </div>
          </aside>
        </div>
      </section>
      {t.faqs.length > 0 && <Faq items={t.faqs} heading={`${t.title}: questions`} />}
      {related.length > 0 && (
        <section className="section bg-surface">
          <div className="container-x">
            <h2 className="h-display">Related treatments</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <li key={r.slug}><TreatmentCard t={r} /></li>)}</ul>
          </div>
        </section>
      )}
      <BookingCta message={`Hello ${brand.name}, I'd like to book a consultation about ${t.title}.`} />
    </>
  );
}
