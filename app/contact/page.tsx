import { brand, allTreatments, whatsappLink, defaultWhatsappMessage, phoneIsPlaceholder } from "@/lib/brand";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = pageMeta("Contact", `Book a consultation or find ${brand.name}: phone, WhatsApp, address, map and opening hours.`, "/contact");

export default function ContactPage() {
  const a = brand.address;
  return (
    <>
      <PageHero eyebrow="Contact" title="Book a consultation" text="Message us on WhatsApp, call the clinic, or visit. We will help you find a suitable time." crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Send us a message</h2>
            <div className="mt-6"><ContactForm whatsapp={brand.whatsapp} brandName={brand.name} treatments={allTreatments().map((t) => t.title)} /></div>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">WhatsApp us</a>
              {!phoneIsPlaceholder && <a href={`tel:${brand.phoneTel}`} className="btn btn-ghost">Call {brand.phone}</a>}
            </div>
            <div><h2 className="text-lg">Address</h2><address className="mt-2 not-italic text-muted">{a.lines.map((l) => <div key={l}>{l}</div>)}<div>{a.city}, {a.state} {a.postalCode}</div></address></div>
            <div><h2 className="text-lg">Opening hours</h2><dl className="mt-2 text-muted">{brand.hours.map((h) => <div key={h.days} className="flex justify-between gap-6 border-b border-line py-1.5"><dt>{h.days}</dt><dd>{h.hours}</dd></div>)}</dl></div>
            <div><h2 className="text-lg">Email</h2><a href={`mailto:${brand.email}`} className="mt-2 inline-block text-primary">{brand.email}</a></div>
          </div>
        </div>
        <div className="container-x mt-14">
          <iframe src={brand.mapEmbedUrl} title={`Map showing ${brand.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full rounded-3xl border border-line" />
        </div>
      </section>
    </>
  );
}
