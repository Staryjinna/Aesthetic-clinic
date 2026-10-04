import Link from "next/link";
import Img from "./Img";
import type { Treatment } from "@/brands/types";

export default function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <Link href={`/treatments/${t.slug}`} className="card group block transition-shadow hover:shadow-md">
      <Img slot={t.image} aspect="aspect-[4/3]" sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="transition-transform duration-500 group-hover:scale-[1.02]" />
      <div className="p-5">
        <h3 className="text-lg">{t.title}</h3>
        <p className="mt-2 text-sm text-muted">{t.short}</p>
        <span className="mt-4 inline-block text-sm font-medium text-primary">Learn more →</span>
      </div>
    </Link>
  );
}
