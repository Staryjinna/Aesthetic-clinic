"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";
import Wordmark from "./Wordmark";

export default function Header({ whatsapp, social, tagline }: { whatsapp: string; social: { label: string; href: string }[]; tagline: string }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) first.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        btn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line/70">
      <div className="container-x grid h-[4.5rem] grid-cols-[1fr_auto_1fr] items-center">
        <button
          ref={btn}
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label="Open menu"
          className="group -ml-2 flex h-11 w-11 flex-col items-start justify-center gap-[7px] p-2"
        >
          <span className="block h-px w-6 bg-ink transition-all group-hover:w-6" />
          <span className="block h-px w-4 bg-ink transition-all group-hover:w-6" />
          <span className="block h-px w-6 bg-ink transition-all group-hover:w-6" />
        </button>
        <Link href="/" aria-label="Home"><Wordmark /></Link>
        <div className="flex justify-end">
          <Link href="/contact" className="hidden text-[0.72rem] uppercase tracking-[0.22em] text-primary hover:text-ink sm:block">Book</Link>
        </div>
      </div>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-paper transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        {...(!open ? { inert: true } : {})}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <button onClick={() => { setOpen(false); btn.current?.focus(); }} aria-label="Close menu" className="-ml-2 h-11 w-11 p-2 text-ink">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
          <Wordmark />
          <span className="w-11" />
        </div>
        <nav aria-label="Primary" className="container-x flex h-[calc(100%-4.5rem)] flex-col items-center justify-center gap-1 pb-16 text-center">
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              ref={i === 0 ? first : undefined}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ink transition-colors hover:text-accent sm:text-5xl py-1.5"
            >
              {n.label}
            </Link>
          ))}
          <a href={whatsapp} className="btn btn-primary mt-8" onClick={() => setOpen(false)}>Book Consultation</a>
          <div className="mt-8 flex gap-6 text-[0.72rem] uppercase tracking-[0.22em] text-muted">
            {social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{s.label}</a>)}
          </div>
          <p className="mt-6 text-sm text-muted">{tagline}</p>
        </nav>
      </div>
    </header>
  );
}
