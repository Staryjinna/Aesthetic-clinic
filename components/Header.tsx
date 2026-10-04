"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAV } from "@/lib/nav";
import Wordmark from "./Wordmark";

interface Props { phone: string; phoneTel: string; categories: { slug: string; title: string }[]; showPhone: boolean; hideHrefs: string[] }

export default function Header({ phone, phoneTel, categories, showPhone, hideHrefs }: Props) {
  const nav = NAV.filter((n) => !hideHrefs.includes(n.href));
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  const reduce = useReducedMotion();

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  const active = nav.find((n) => isActive(n.href))?.href ?? null;
  const lit = hover ?? active;

  useEffect(() => { setOpen(false); setSub(false); }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { if (open) { setOpen(false); btn.current?.focus(); } setSub(false); } };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const Pill = () => (
    <motion.span layoutId="nav-pill" transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
      className="absolute inset-0 -z-10 rounded-full bg-paper shadow-[0_1px_6px_rgba(0,0,0,0.12)] ring-1 ring-black/5" />
  );
  const tab = (href: string) => `relative inline-flex min-h-[2.5rem] items-center gap-1 rounded-full px-4 text-sm transition-colors ${isActive(href) ? "font-medium text-primary" : "text-ink"}`;

  return (
    <>
    <header className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur transition-shadow ${scrolled ? "border-line shadow-sm" : "border-transparent"}`}>
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-3">
        <Link href="/" aria-label="Home" className="min-w-0 shrink"><Wordmark /></Link>

        <nav aria-label="Primary" className="hidden items-center rounded-full border border-line bg-surface p-1 lg:flex" onMouseLeave={() => setHover(null)}>
          {nav.map((n) =>
            "dropdown" in n ? (
              <div key={n.href} className="relative" onMouseEnter={() => { setSub(true); setHover(n.href); }} onMouseLeave={() => setSub(false)}>
                <button aria-expanded={sub} aria-haspopup="true" onClick={() => setSub((s) => !s)} onFocus={() => setHover(n.href)} className={tab(n.href)}>
                  {lit === n.href && <Pill />}
                  {n.label}
                  <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${sub ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M2 4.5l4 4 4-4" /></svg>
                </button>
                {sub && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                    <ul className="rounded-2xl border border-line bg-paper p-2 shadow-xl">
                      <li><Link href="/treatments" className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-surface">All treatments</Link></li>
                      {categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} onClick={() => setSub(false)} className="block rounded-xl px-3 py-2.5 text-sm hover:bg-surface">{c.title}</Link></li>)}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} href={n.href} onMouseEnter={() => setHover(n.href)} onFocus={() => setHover(n.href)} aria-current={isActive(n.href) ? "page" : undefined} className={tab(n.href)}>
                {lit === n.href && <Pill />}
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {showPhone && <a href={`tel:${phoneTel}`} className="hidden text-sm text-ink hover:text-primary xl:block"><span className="text-muted">Call us at </span>{phone}</a>}
          <Link href="/community" className="btn btn-primary hidden !min-h-[2.5rem] !px-5 sm:inline-flex">Join Community</Link>
          <button ref={btn} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu" aria-label="Open menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>

    {/* Rendered outside <header>: its backdrop-blur would otherwise become the containing block for this fixed overlay. */}
    <div id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}
      className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-opacity duration-200 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      {...(!open ? { inert: true } : {})}>
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-3">
        <Wordmark />
        <button onClick={() => { setOpen(false); btn.current?.focus(); }} aria-label="Close menu" className="-mr-2 flex h-11 w-11 items-center justify-center text-ink">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <nav aria-label="Mobile" className="container-x pb-12 pt-2">
        <ul className="divide-y divide-line border-y border-line">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined} className={`flex min-h-[3.5rem] items-center text-lg ${isActive(n.href) ? "font-medium text-primary" : "text-ink"}`}>{n.label}</Link>
              {"dropdown" in n && (
                <ul className="-mt-1 mb-3 space-y-0.5 border-l border-line pl-4">
                  {categories.map((c) => <li key={c.slug}><Link href={`/treatments#${c.slug}`} className="block py-2 text-base text-muted hover:text-ink">{c.title}</Link></li>)}
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
    </>
  );
}
