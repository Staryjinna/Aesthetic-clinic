import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import { physicianSchema } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import JsonLd from "@/components/JsonLd";
import BookingCta from "@/components/BookingCta";

export const metadata = pageMeta("About", `About ${brand.name}: our approach, our doctor and what to expect from your first visit.`, "/about");
const real = <T extends { name?: string; year?: string }>(x: T) => x.name !== "Team Member" && !x.year?.includes("X");

export default function AboutPage() {
  const team = brand.team.filter(real);
  const timeline = brand.timeline.filter(real);
  return (
    <>
      {brand.doctors.map((d) => <JsonLd key={d.name} data={physicianSchema(d)} />)}
      <PageHero eyebrow="About" title={brand.about.heroHeading} crumbs={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-muted">{brand.about.story.map((p) => <p key={p}>{p}</p>)}</div>
          <blockquote className="self-start rounded-3xl bg-surface p-8 text-2xl leading-snug">“{brand.about.pullQuote}”</blockquote>
        </div>
      </section>

      {brand.doctors.map((d) => (
        <section key={d.name} className="section bg-surface">
          <div className="container-x grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Img slot={d.image} aspect="aspect-[4/5]" className="rounded-3xl" />
            <div>
              <p className="eyebrow">Our doctor</p>
              <h2 className="h-display mt-2">{d.name}</h2>
              <p className="mt-1 text-muted">{d.title}{d.credentials ? ` · ${d.credentials}` : ""}</p>
              <div className="mt-6 space-y-4 text-muted">{d.bio.map((p) => <p key={p}>{p}</p>)}</div>
              {d.specialties && <ul className="mt-6 flex flex-wrap gap-2">{d.specialties.map((s) => <li key={s} className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm">{s}</li>)}</ul>}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container-x">
          <h2 className="h-display">What guides our care</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {brand.about.philosophy.map((p) => <li key={p.title} className="rounded-2xl border border-line p-6"><h3 className="text-lg">{p.title}</h3><p className="mt-2 text-muted">{p.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <h2 className="h-display">Why patients choose us</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brand.why.map((w) => <li key={w.title} className="rounded-2xl bg-paper p-6"><h3 className="text-lg">{w.title}</h3><p className="mt-2 text-sm text-muted">{w.text}</p></li>)}
          </ul>
        </div>
      </section>

      {team.length > 0 && (
        <section className="section"><div className="container-x">
          <h2 className="h-display">The team</h2>
          <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">{team.map((m) => <li key={m.name}><Img slot={m.image} aspect="aspect-[4/5]" className="rounded-2xl" /><p className="mt-3 font-medium">{m.name}</p><p className="text-sm text-muted">{m.role}</p></li>)}</ul>
        </div></section>
      )}
      {timeline.length > 0 && (
        <section className="section bg-surface"><div className="container-x max-w-3xl">
          <h2 className="h-display">Our journey</h2>
          <ol className="mt-10 space-y-6 border-l border-line pl-6">{timeline.map((m) => <li key={m.title}><p className="text-sm font-medium text-accent">{m.year}</p><h3 className="text-lg">{m.title}</h3><p className="text-muted">{m.text}</p></li>)}</ol>
        </div></section>
      )}
      <BookingCta />
    </>
  );
}
