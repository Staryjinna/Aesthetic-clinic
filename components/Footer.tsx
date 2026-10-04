import Link from "next/link";
import { brand, whatsappLink, defaultWhatsappMessage, phoneIsPlaceholder } from "@/lib/brand";
import Wordmark from "./Wordmark";

export default function Footer() {
  const a = brand.address;
  const col = "text-sm space-y-2.5";
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm text-muted">{brand.tagline}</p>
          <div className="mt-5 flex gap-4 text-sm">
            {brand.social.instagram && <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>}
            {brand.social.facebook && <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>}
            <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
          </div>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4 font-sans">Explore</h2>
          <ul className={col}>
            {[["/about", "About"], ...(brand.gallery.length >= 3 ? [["/gallery", "Gallery"]] : []), ["/reviews", "Reviews"], ["/blog", "Blog"], ["/community", "Community"], ["/contact", "Contact"]].map(([h, l]) => <li key={h}><Link href={h} className="hover:text-primary">{l}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Treatments">
          <h2 className="eyebrow mb-4 font-sans">Treatments</h2>
          <ul className={col}>
            {brand.categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} className="hover:text-primary">{c.title}</Link></li>)}
          </ul>
        </nav>
        <div className="text-sm">
          <h2 className="eyebrow mb-4 font-sans">Visit</h2>
          <address className="not-italic text-muted">
            {a.lines.map((l) => <div key={l}>{l}</div>)}
            <div>{a.city}, {a.state} {a.postalCode}</div>
          </address>
          {!phoneIsPlaceholder && <p className="mt-3"><a href={`tel:${brand.phoneTel}`} className="hover:text-primary">{brand.phone}</a></p>}
          <p><a href={`mailto:${brand.email}`} className="break-all hover:text-primary">{brand.email}</a></p>
          <div className="mt-3 text-muted">{brand.hours.map((h) => <div key={h.days}>{h.days}: {h.hours}</div>)}</div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. <Link href="/privacy-policy" className="underline">Privacy</Link> · <Link href="/terms-conditions" className="underline">Terms</Link></p>
          <p className="max-w-xl sm:text-right">{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
