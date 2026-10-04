import Image from "next/image";
import type { ImageSlot } from "@/brands/types";
import { cn } from "@/lib/utils";

interface Props {
  slot: ImageSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind aspect class, e.g. "aspect-[4/5]" */
  aspect?: string;
  tone?: 1 | 2 | 3;
}

const tones = [
  "from-accent/45 via-accent/20 to-primary/30",
  "from-primary/30 via-accent/25 to-accent/50",
  "from-accent/30 via-surface to-primary/40",
];

/** Renders next/image when `slot.src` exists, else a soft gradient placeholder. */
export default function Img({ slot, className, sizes = "(min-width:1024px) 33vw, 100vw", priority, aspect = "aspect-[4/5]", tone = 1 }: Props) {
  return (
    <div className={cn(!className?.includes("absolute") && "relative", "overflow-hidden", aspect, className)}>
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={slot.alt} className={cn("absolute inset-0 bg-gradient-to-br", tones[tone - 1])}>
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/40 blur-2xl" />
          <div className="absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        </div>
      )}
    </div>
  );
}
