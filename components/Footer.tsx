import Link from "next/link";
import { brand, whatsappLink, defaultWhatsappMessage } from "@/lib/brand";
import { NAV } from "@/lib/nav";
import Wordmark from "./Wordmark";

export default function Footer() {
  const a = brand.address;
  return (
    <footer className="mt-0 border-t border-line bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm text-muted">{brand.tagline}</p>
        </div>
        <div>
          <h2 className="eyebrow mb-4 font-sans">Explore</h2>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-primary">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4 font-sans">Treatments</h2>
          <ul className="space-y-2 text-sm">
            {brand.categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} className="hover:text-primary">{c.title}</Link></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="eyebrow mb-4 font-sans">Visit</h2>
          <address className="not-italic text-muted">
            {a.lines.map((l) => <div key={l}>{l}</div>)}
            <div>{a.city}, {a.state} {a.postalCode}</div>
          </address>
          <p className="mt-3"><a href={`tel:${brand.phoneTel}`} className="hover:text-primary">{brand.phone}</a></p>
          <p><a href={`mailto:${brand.email}`} className="hover:text-primary break-all">{brand.email}</a></p>
          <div className="mt-3 text-muted">{brand.hours.map((h) => <div key={h.days}>{h.days}: {h.hours}</div>)}</div>
          <div className="mt-4 flex gap-5 text-[0.72rem] uppercase tracking-[0.2em]">
            {brand.social.instagram && <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>}
            {brand.social.facebook && <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>}
            <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
