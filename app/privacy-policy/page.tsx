import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata = pageMeta("Privacy Policy", "Privacy Policy for " + brand.name + ".", "/privacy-policy");

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" text="Draft: to be reviewed by the clinic and a legal adviser before launch." crumbs={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]} />
      <section className="section"><div className="container-x max-w-3xl prose-clinic">
        <h2>Information we collect</h2>
        <p>If you contact us by phone, email or WhatsApp, we receive the details you choose to share, such as your name, phone number and the reason for your enquiry. This website does not store form entries: the contact form opens WhatsApp with your message pre-filled.</p>
        <h2>How we use it</h2>
        <p>We use your details only to respond to your enquiry and to arrange appointments. We do not sell your information.</p>
        <h2>Third-party services</h2>
        <p>Pages may embed content from Google Maps and Instagram, which have their own privacy policies and may set cookies when loaded.</p>
        <h2>Contact</h2>
        <p>For questions about your information, write to {brand.email}.</p>
      </div></section>
    </>
  );
}
