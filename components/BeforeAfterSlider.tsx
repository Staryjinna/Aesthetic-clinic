"use client";
import { useCallback, useRef, useState } from "react";
import Img from "./Img";
import type { BeforeAfter } from "@/brands/types";

export default function BeforeAfterSlider({ pair }: { pair: BeforeAfter }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((x: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  }, []);

  return (
    <div>
      <div
        ref={box}
        className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden rounded-card sm:aspect-[16/10]"
        onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Img slot={pair.after} aspect="" className="absolute inset-0" sizes="(min-width:1024px) 900px, 100vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Img slot={pair.before} aspect="" className="absolute inset-0" sizes="(min-width:1024px) 900px, 100vw" />
        </div>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs">Before</span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${pos}%` }}>
          <div
            role="slider" tabIndex={0} aria-label={`Compare before and after: ${pair.title}`}
            aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
            }}
            className="pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-primary shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-muted">{pair.treatment}{pair.note ? ` · ${pair.note}` : ""}</p>
    </div>
  );
}
