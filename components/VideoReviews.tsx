"use client";
import { useState } from "react";
import type { VideoReview } from "@/brands/types";

/** Accepts only instagram.com reel/post URLs and returns the official embed URL. */
const embedUrl = (u: string) => {
  try {
    const x = new URL(u);
    if (!/(^|\.)instagram\.com$/.test(x.hostname)) return null;
    const m = x.pathname.match(/^\/(reel|reels|p|tv)\/([\w-]+)/);
    return m ? `https://www.instagram.com/${m[1] === "reels" ? "reel" : m[1]}/${m[2]}/embed` : null;
  } catch { return null; }
};

function Card({ v }: { v: VideoReview }) {
  const [on, setOn] = useState(false);
  const src = embedUrl(v.instagramUrl);
  return (
    <li className="card flex flex-col">
      <div className="relative aspect-[9/14] bg-surface">
        {on && src ? (
          <iframe src={src} title={`Instagram video review by ${v.name}`} loading="lazy" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
        ) : (
          <button onClick={() => setOn(true)} disabled={!src} className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm hover:bg-line/40" aria-label={`Play video review by ${v.name}`}>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white"><svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg></span>
            Play video
          </button>
        )}
      </div>
      <div className="p-4 text-sm">
        <p className="font-medium">{v.name}</p>
        {v.treatment && <p className="text-muted">{v.treatment}</p>}
        <a href={v.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-primary">View on Instagram →</a>
      </div>
    </li>
  );
}

export default function VideoReviews({ items, instagram, heading = "Video reviews" }: { items: VideoReview[]; instagram?: string; heading?: string }) {
  if (!items.length && !instagram) return null;
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center">
          <h2 className="h-display">{heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">Patients share their experience in their own words. Individual experiences differ, and results vary from person to person.</p>
        </div>
        {items.length ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map((v) => <Card key={v.instagramUrl} v={v} />)}</ul>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-line p-8 text-center">
            <p className="text-muted">Video reviews are shared on our Instagram.</p>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">Watch on Instagram</a>
          </div>
        )}
      </div>
    </section>
  );
}
