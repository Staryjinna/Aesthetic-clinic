"use client";
import { motion, useReducedMotion } from "framer-motion";

const icons = {
  consult: <path d="M4 5h16v10H9l-5 4V5Zm4 4h8M8 12h5" />,
  plan: <path d="M9 4h6l1 2h3v14H5V6h3l1-2Zm-1 8 2 2 4-4" />,
  treat: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />,
  follow: <path d="M5 5h14v15H5V5Zm0 5h14M9 3v4m6-4v4m-6 8 2 2 4-4" />,
} as const;

const STEPS: { key: keyof typeof icons; title: string; text: string }[] = [
  { key: "consult", title: "Consult", text: "Share your concerns and history. Your doctor examines your skin, hair or area of concern." },
  { key: "plan", title: "Plan", text: "Options, expectations and aftercare are explained, including options that need no procedure." },
  { key: "treat", title: "Treat", text: "Your treatment is carried out with attention to comfort and safety." },
  { key: "follow", title: "Follow up", text: "Progress is reviewed and the plan is adjusted as needed." },
];

export default function HowWeWork() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay: reduce ? 0 : i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-white/60">Your journey</p>
          <h2 className="h-display mt-3 !text-white">How we work</h2>
          <p className="mt-4 text-white/70">Four unhurried steps, from the first conversation to follow-up.</p>
        </div>

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-white/30 to-transparent lg:block" aria-hidden />
          {STEPS.map((s, i) => (
            <motion.li key={s.key} {...item(i)} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 pt-8 backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08] lg:text-center">
              <span className="pointer-events-none absolute -bottom-5 right-3 select-none font-display text-[6rem] font-semibold leading-none text-white/[0.06]" aria-hidden>0{i + 1}</span>
              <span className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-white/25 bg-ink ring-4 ring-white/5 transition-transform duration-300 group-hover:scale-105 lg:mx-auto">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{icons[s.key]}</svg>
              </span>
              <p className="relative mt-5 text-xs font-medium uppercase tracking-[0.2em] text-white/50">Step 0{i + 1}</p>
              <h3 className="relative mt-1 text-xl !text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm text-white/70">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
