"use client";
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

/**
 * The Instagram embed renders the video's cover and details but does not play here: a transparent
 * link sits over it, so a tap opens the reel on Instagram instead of starting playback in the page.
 */
function Card({ v }: { v: VideoReview }) {
  const src = embedUrl(v.instagramUrl);
  return (
    <li className="card flex flex-col">
      <div className="relative h-[30rem] overflow-hidden bg-gradient-to-br from-primary/15 via-surface to-accent/20 sm:h-[34rem]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-sm text-muted" aria-hidden>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper shadow">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></svg>
          </span>
          Instagram reel
        </div>
        {src && <iframe src={src} title={`Instagram video review preview: ${v.name}`} loading="lazy" tabIndex={-1} scrolling="no" className="pointer-events-none absolute inset-0 h-full w-full border-0" />}
        <a href={v.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${v.name} on Instagram`} className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/25 via-transparent to-transparent pb-5 opacity-100 transition-colors hover:from-black/40">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow">Watch on Instagram</span>
        </a>
      </div>
      <div className="p-4 text-sm">
        <p className="font-medium">{v.name}</p>
        {v.treatment && <p className="text-muted">{v.treatment}</p>}
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
