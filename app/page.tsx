import Link from "next/link";
import { brand, whatsappLink, defaultWhatsappMessage } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import Img from "@/components/Img";
import JsonLd from "@/components/JsonLd";
import TreatmentCard from "@/components/TreatmentCard";
import Testimonials from "@/components/Testimonials";
import VideoReviews from "@/components/VideoReviews";
import Faq from "@/components/Faq";
import BookingCta from "@/components/BookingCta";

export const metadata = { ...pageMeta(brand.seo.title, brand.seo.description, "/"), title: { absolute: brand.seo.title } };

const steps = [
  ["Consult", "Share your concerns and history. Your doctor examines your skin, hair or area of concern."],
  ["Plan", "Options, expectations and aftercare are explained, including options that need no procedure."],
  ["Treat", "Your treatment is carried out with attention to comfort and safety."],
  ["Follow up", "Progress is reviewed and the plan adjusted as needed."],
];

export default function HomePage() {
  const featured = brand.categories.flatMap((c) => c.treatments.slice(0, 1)).slice(0, 3);
  const doctor = brand.doctors[0];
  return (
    <>
      <JsonLd data={faqSchema(brand.homeFaqs)} />
      <section>
        <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            {brand.hero.eyebrow && <p className="eyebrow">{brand.hero.eyebrow}</p>}
            <h1 className="mt-4 text-[clamp(2.2rem,5.2vw,4rem)]">{brand.hero.headline ?? brand.tagline}</h1>
            <p className="mt-6 max-w-lg text-lg text-muted">{brand.hero.text ?? brand.intro.text[0]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{brand.hero.cta}</a>
              <Link href="/treatments" className="btn btn-ghost">Explore treatments</Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
              {["Doctor-led care", "Consultation first", "Personalised plans"].map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />{t}</li>)}
            </ul>
          </div>
          <Img slot={brand.hero.image} priority aspect="aspect-[4/5]" sizes="(min-width:1024px) 45vw, 100vw" className="rounded-3xl" />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h-display">{brand.intro.heading}</h2>
            {brand.intro.text.map((t) => <p key={t} className="mt-4 text-muted">{t}</p>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">Treatments</p><h2 className="h-display mt-2">Care, by concern</h2></div>
            <Link href="/treatments" className="text-sm font-medium text-primary">View all treatments →</Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {brand.categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/treatments#${c.slug}`} className="group block">
                  <Img slot={c.image} aspect="aspect-[4/5]" sizes="(min-width:1024px) 22vw, 45vw" className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
                  <h3 className="mt-3 text-base sm:text-lg">{c.title}</h3>
                  <p className="mt-1 hidden text-sm text-muted sm:block">{c.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <h2 className="h-display text-center">How we work</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="rounded-2xl border border-line bg-paper p-6">
                <span className="text-sm font-medium text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="h-display">Popular treatments</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map((t) => <li key={t.slug}><TreatmentCard t={t} /></li>)}</ul>
        </div>
      </section>

      {doctor && (
        <section className="section bg-surface">
          <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Img slot={doctor.image} aspect="aspect-[4/5]" className="rounded-3xl" />
            <div>
              <p className="eyebrow">Meet the doctor</p>
              <h2 className="h-display mt-2">{doctor.name}</h2>
              <p className="mt-1 text-muted">{doctor.title}</p>
              {doctor.quote && <blockquote className="mt-6 border-l-2 border-accent pl-5 text-xl">“{doctor.quote}”</blockquote>}
              <p className="mt-6 max-w-xl text-muted">{doctor.bio[0]}</p>
              <Link href="/about" className="btn btn-ghost mt-8">About the clinic</Link>
            </div>
          </div>
        </section>
      )}

      <VideoReviews items={brand.videoReviews.slice(0, 4)} instagram={brand.social.instagram} />
      <Testimonials items={brand.testimonials} rating={brand.googleRating} />
      <Faq items={brand.homeFaqs} />
      <BookingCta />
    </>
  );
}
