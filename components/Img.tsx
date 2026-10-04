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
}

/** next/image when `slot.src` exists, otherwise a quiet neutral placeholder. */
export default function Img({ slot, className, sizes = "(min-width:1024px) 33vw, 100vw", priority, aspect = "aspect-[4/5]" }: Props) {
  return (
    <div className={cn(!className?.includes("absolute") && "relative", "overflow-hidden bg-surface", aspect, className)}>
      {slot.src ? (
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={slot.alt} className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted">Photo</div>
      )}
    </div>
  );
}
