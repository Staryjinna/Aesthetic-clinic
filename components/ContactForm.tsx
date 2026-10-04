"use client";
import { useState } from "react";

export default function ContactForm({ whatsapp, brandName, treatments }: { whatsapp: string; brandName: string; treatments: string[] }) {
  const [f, setF] = useState({ name: "", phone: "", treatment: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [`Hello ${brandName}, I'd like to book a consultation.`, `Name: ${f.name}`, `Phone: ${f.phone}`, f.treatment && `Interested in: ${f.treatment}`, f.message && `Message: ${f.message}`].filter(Boolean).join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };
  const field = "mt-1.5 min-h-[2.75rem] w-full rounded-xl border border-line bg-paper px-4 text-base focus:border-ink";
  return (
    <form onSubmit={submit} className="space-y-5">
      <div><label htmlFor="c-name" className="text-sm font-medium">Name</label><input id="c-name" required value={f.name} onChange={set("name")} autoComplete="name" className={field} /></div>
      <div><label htmlFor="c-phone" className="text-sm font-medium">Phone</label><input id="c-phone" required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" className={field} /></div>
      <div><label htmlFor="c-t" className="text-sm font-medium">Treatment of interest</label>
        <select id="c-t" value={f.treatment} onChange={set("treatment")} className={field}><option value="">Not sure yet</option>{treatments.map((t) => <option key={t}>{t}</option>)}</select></div>
      <div><label htmlFor="c-m" className="text-sm font-medium">Message (optional)</label><textarea id="c-m" rows={4} value={f.message} onChange={set("message")} className={`${field} py-3`} /></div>
      <button className="btn btn-primary w-full sm:w-auto">Continue on WhatsApp</button>
      <p className="text-xs text-muted">This opens WhatsApp with your details pre-filled. Nothing is sent until you press send there.</p>
    </form>
  );
}
