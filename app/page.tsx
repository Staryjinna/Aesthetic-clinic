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
import HowWeWork from "@/components/HowWeWork";

export const metadata = { ...pageMeta(brand.seo.title, brand.seo.description, "/"), title: { absolute: brand.seo.title } };

export default function HomePage() {
  const featured = brand.categories.flatMap((c) => c.treatments.slice(0, 1)).slice(0, 3);
  const doctor = brand.doctors[0];
  return (
    <>
      <JsonLd data={faqSchema(brand.homeFaqs)} />
      <section className="relative isolate overflow-hidden bg-ink">
        <Img slot={brand.hero.image} priority aspect="" sizes="100vw" className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/15 to-transparent max-sm:from-black/40 max-sm:via-black/25 max-sm:to-black/20" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
        <div className="container-x flex min-h-[clamp(32rem,86vh,50rem)] flex-col justify-center py-24 text-white [text-shadow:0_1px_2px_rgba(0,0,0,.35),0_4px_24px_rgba(0,0,0,.45)]">
          {brand.hero.eyebrow && <p className="eyebrow !text-white">{brand.hero.eyebrow}</p>}
          <h1 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.8rem)] font-semibold !text-white">{brand.hero.headline ?? brand.tagline}</h1>
          <p className="mt-6 max-w-lg text-lg text-white">{brand.hero.text ?? brand.intro.text[0]}</p>
          <div className="mt-8 flex flex-col gap-3 [text-shadow:none] sm:flex-row">
            <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink shadow-lg hover:bg-surface">{brand.hero.cta}</a>
            <Link href="/treatments" className="btn border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25">Explore treatments</Link>
          </div>
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

      <HowWeWork />

      <section className="section">
        <div className="container-x">
          <h2 className="h-display">Popular treatments</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map((t) => <li key={t.slug}><TreatmentCard t={t} /></li>)}</ul>
        </div>
      </section>

      {doctor && (
        <section className="section bg-surface">
          <div className={`container-x grid items-center gap-10 ${doctor.image.src ? "lg:grid-cols-[0.8fr_1.2fr]" : ""}`}>
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
