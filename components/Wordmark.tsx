import Image from "next/image";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  const { line1, line2 } = brand.wordmark;
  const mark = brand.mark;
  return (
    <span className={cn("inline-flex items-center gap-3", light ? "text-white" : "text-primary", className)}>
      {mark && <Image src={mark.src} alt="" width={mark.width} height={mark.height} priority className="h-11 w-auto sm:h-12" />}
      <span className="inline-flex flex-col items-start leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.2em] sm:text-2xl">{line1}</span>
        {line2 && <span className={cn("mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.5em]", light ? "text-white/70" : "text-accent")}>{line2}</span>}
      </span>
    </span>
  );
}
