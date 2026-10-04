import { brand, whatsappLink, defaultWhatsappMessage, phoneIsPlaceholder } from "@/lib/brand";

export default function BookingCta({ heading = "Begin with a conversation", message }: { heading?: string; message?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-3xl bg-surface px-6 py-14 text-center sm:px-12">
          <h2 className="h-display mx-auto max-w-2xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">Tell us what you would like to discuss and we will help you find a suitable time for a consultation.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappLink(message ?? defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book on WhatsApp</a>
            {!phoneIsPlaceholder && <a href={`tel:${brand.phoneTel}`} className="btn btn-ghost">Call {brand.phone}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
