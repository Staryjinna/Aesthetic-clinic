import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import VideoReviews from "@/components/VideoReviews";
import Testimonials from "@/components/Testimonials";
import BookingCta from "@/components/BookingCta";

export const metadata = pageMeta("Reviews", `Patient reviews and video stories for ${brand.name}.`, "/reviews");

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Patient reviews" text="Experiences shared by patients. Everyone's experience is different, and results vary from person to person." crumbs={[{ href: "/", label: "Home" }, { label: "Reviews" }]} />
      <VideoReviews items={brand.videoReviews} instagram={brand.social.instagram} heading="Video reviews" />
      <Testimonials items={brand.testimonials} rating={brand.googleRating} heading="Written reviews" />
      <BookingCta />
    </>
  );
}
