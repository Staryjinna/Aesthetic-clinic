import { brand, whatsappLink, defaultWhatsappMessage } from "@/lib/brand";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import ResultsSection from "@/components/home/ResultsSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import Why from "@/components/home/Why";
import DoctorHighlight from "@/components/home/DoctorHighlight";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/Faq";
import BookingCta from "@/components/BookingCta";

export default function HomePage() {
  return (
    <>
      <Hero eyebrow={brand.hero.eyebrow} tagline={brand.tagline} cta={brand.hero.cta} whatsapp={whatsappLink(defaultWhatsappMessage)} image={brand.hero.image} />
      <Intro intro={brand.intro} />
      <ResultsSection pairs={brand.beforeAfter} />
      <CategoryGrid categories={brand.categories} />
      <Why points={brand.why} stats={brand.stats} />
      <DoctorHighlight doctor={brand.doctors[0]} />
      <Testimonials items={brand.testimonials} rating={brand.googleRating} />
      <Faq items={brand.homeFaqs} />
      <BookingCta />
    </>
  );
}
