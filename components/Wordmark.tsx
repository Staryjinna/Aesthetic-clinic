import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Wordmark({ className, large }: { className?: string; large?: boolean }) {
  const { line1, line2 } = brand.wordmark;
  return (
    <span className={cn("inline-flex flex-col items-center text-primary leading-none", className)}>
      <span className={cn("font-display tracking-wordmark", large ? "text-3xl sm:text-5xl md:text-6xl" : "text-lg sm:text-xl")} style={{ marginRight: "-0.32em" }}>
        {line1}
      </span>
      {line2 && (
        <span className={cn("mt-2 font-sans text-accent uppercase", large ? "text-xs sm:text-sm tracking-[0.5em]" : "text-[0.6rem] tracking-[0.5em]")} style={{ marginRight: "-0.5em" }}>
          {line2}
        </span>
      )}
    </span>
  );
}
