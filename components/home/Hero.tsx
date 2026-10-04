"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Wordmark from "../Wordmark";
import Img from "../Img";
import type { ImageSlot } from "@/brands/types";

export default function Hero({ eyebrow, tagline, cta, whatsapp, image }: { eyebrow?: string; tagline: string; cta: string; whatsapp: string; image: ImageSlot }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <section className="relative overflow-hidden">
      <Img slot={image} aspect="" priority sizes="100vw" tone={2} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-paper/40 to-paper" aria-hidden />
      <div className="container-x relative flex min-h-[78vh] flex-col items-center justify-center py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }}>
          {eyebrow && <p className="eyebrow mb-8">{eyebrow}</p>}
          <h1 className="sr-only">{tagline}</h1>
          <Wordmark large />
          <p className="mx-auto mt-8 max-w-md font-display text-xl italic text-ink/80 sm:text-2xl">{tagline}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{cta}</a>
            <Link href="/treatments" className="btn btn-ghost">Our Treatments</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
