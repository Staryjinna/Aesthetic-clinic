"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";
import Wordmark from "./Wordmark";

interface Props { phone: string; phoneTel: string; categories: { slug: string; title: string }[]; showPhone: boolean }

export default function Header({ phone, phoneTel, categories, showPhone }: Props) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => { setOpen(false); setSub(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { if (open) { setOpen(false); btn.current?.focus(); } setSub(false); } };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const link = (href: string) => `text-sm transition-colors hover:text-primary ${path === href || (href !== "/" && path.startsWith(href)) ? "text-primary" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Home" className="shrink-0"><Wordmark /></Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            "dropdown" in n ? (
              <div key={n.href} className="relative" onMouseEnter={() => setSub(true)} onMouseLeave={() => setSub(false)}>
                <button aria-expanded={sub} aria-haspopup="true" onClick={() => setSub((s) => !s)} className={`${link(n.href)} inline-flex items-center gap-1`}>
                  {n.label}
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M2 4.5l4 4 4-4" /></svg>
                </button>
                {sub && (
                  <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3">
                    <ul className="rounded-xl border border-line bg-paper p-2 shadow-lg">
                      <li><Link href="/treatments" className="block rounded-lg px-3 py-2 text-sm hover:bg-surface">All treatments</Link></li>
                      {categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} onClick={() => setSub(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-surface">{c.title}</Link></li>)}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} href={n.href} className={link(n.href)}>{n.label}</Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          {showPhone && <a href={`tel:${phoneTel}`} className="hidden text-sm text-ink hover:text-primary xl:block"><span className="text-muted">Call us at </span>{phone}</a>}
          <Link href="/community" className="btn btn-primary hidden !min-h-[2.5rem] !px-5 sm:inline-flex">Join Community</Link>
          <button ref={btn} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu" aria-label="Open menu" className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>

      <div id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}
        className={`fixed inset-0 z-50 overflow-y-auto bg-paper transition-opacity duration-200 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        {...(!open ? { inert: true } : {})}>
        <div className="container-x flex h-[4.25rem] items-center justify-between">
          <Wordmark />
          <button onClick={() => { setOpen(false); btn.current?.focus(); }} aria-label="Close menu" className="-mr-2 flex h-11 w-11 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="container-x pb-12 pt-4">
          <ul className="divide-y divide-line border-y border-line">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block py-4 text-lg">{n.label}</Link>
                {"dropdown" in n && (
                  <ul className="pb-3 pl-4">
                    {categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} className="block py-2 text-muted">{c.title}</Link></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/community" className="btn btn-primary">Join Community</Link>
            {showPhone && <a href={`tel:${phoneTel}`} className="btn btn-ghost">Call {phone}</a>}
          </div>
        </nav>
      </div>
    </header>
  );
}
