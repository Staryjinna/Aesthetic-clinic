import { brand, whatsappLink, defaultWhatsappMessage } from "@/lib/brand";

export default function BookingCta({ heading = "Begin with a conversation" }: { heading?: string }) {
  return (
    <section className="section bg-primary text-white">
      <div className="container-x max-w-2xl text-center">
        <p className="eyebrow !text-white/70">Book a consultation</p>
        <h2 className="h-display mt-5 !text-white">{heading}</h2>
        <p className="mt-5 text-white/80">Tell us what you would like to discuss and we will help you find a suitable time.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary hover:bg-surface">WhatsApp us</a>
          <a href={`tel:${brand.phoneTel}`} className="btn border border-white/50 text-white hover:bg-white/10">Call {brand.phone}</a>
        </div>
      </div>
    </section>
  );
}
