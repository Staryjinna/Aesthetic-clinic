import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata = pageMeta("Terms & Conditions", "Terms & Conditions for " + brand.name + ".", "/terms-conditions");

export default function Page() {
  return (
    <>
      <PageHero title="Terms & Conditions" text="Draft: to be reviewed by the clinic and a legal adviser before launch." crumbs={[{ href: "/", label: "Home" }, { label: "Terms & Conditions" }]} />
      <section className="section"><div className="container-x max-w-3xl prose-clinic">
        <h2>General information only</h2>
        <p>The content on this website is general information. It is not medical advice and does not create a doctor-patient relationship. Please consult a qualified doctor about your own situation.</p>
        <h2>Results</h2>
        <p>Results vary from person to person. No outcome is guaranteed.</p>
        <h2>Appointments</h2>
        <p>Treatments are offered only after a consultation and suitability assessment.</p>
        <h2>Links and embeds</h2>
        <p>We are not responsible for the content of third-party sites we link to or embed.</p>
      </div></section>
    </>
  );
}
