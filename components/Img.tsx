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

/** Renders the brand's own photo. With no `src` it renders nothing: no placeholder or stock imagery is ever shown. */
export default function Img({ slot, className, sizes = "(min-width:1024px) 33vw, 100vw", priority, aspect = "aspect-[4/5]" }: Props) {
  if (!slot.src) return null;
  return (
    <div className={cn(!className?.includes("absolute") && "relative", "overflow-hidden bg-surface", aspect, className)}>
      <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
