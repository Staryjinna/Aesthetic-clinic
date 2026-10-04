import Link from "next/link";
import Img from "../Img";
import type { Doctor } from "@/brands/types";

export default function DoctorHighlight({ doctor }: { doctor: Doctor }) {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Img slot={doctor.image} aspect="aspect-[4/5]" tone={3} className="rounded-card" sizes="(min-width:768px) 40vw, 100vw" />
        <div>
          <p className="eyebrow">Meet the doctor</p>
          <h2 className="h-display mt-5">{doctor.name}</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted">{doctor.title}</p>
          {doctor.credentials && <p className="mt-1 text-sm text-muted">{doctor.credentials}</p>}
          {doctor.quote && <blockquote className="mt-8 border-l border-accent pl-5 font-display text-2xl italic text-primary">“{doctor.quote}”</blockquote>}
          <p className="mt-8 text-muted">{doctor.bio[0]}</p>
          <Link href="/about" className="btn btn-ghost mt-8">About the clinic</Link>
        </div>
      </div>
    </section>
  );
}
