"use client";
import { useEffect, useState } from "react";

export default function WhatsAppFloat({ href, name }: { href: string; name: string }) {
  const [bubble, setBubble] = useState(false);
  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("wa-bubble") === "1"; } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setBubble(true), 2500);
    return () => clearTimeout(t);
  }, []);
  const close = () => {
    setBubble(false);
    try { sessionStorage.setItem("wa-bubble", "1"); } catch {}
  };
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
      {bubble && (
        <div className="relative max-w-[13rem] rounded-2xl rounded-br-sm border border-line bg-paper px-4 py-3 pr-8 text-sm shadow-sm">
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-ink">Have questions? <span className="text-primary">Chat with us</span></a>
          <button onClick={close} aria-label="Dismiss" className="absolute right-2 top-1.5 p-1 text-muted hover:text-ink">×</button>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${name} on WhatsApp`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true"><path d="M16.04 3C8.84 3 3 8.8 3 15.97c0 2.3.6 4.54 1.74 6.5L3 29l6.7-1.7a13.1 13.1 0 0 0 6.34 1.62h.01c7.2 0 13.05-5.82 13.05-12.97C29.1 8.8 23.24 3 16.04 3Zm0 23.7h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-3.97 1.01 1.06-3.86-.26-.4a10.7 10.7 0 0 1-1.67-5.72c0-5.94 4.86-10.77 10.83-10.77 2.89 0 5.6 1.12 7.64 3.15a10.66 10.66 0 0 1 3.17 7.62c0 5.94-4.87 10.73-10.84 10.73Zm5.94-8.05c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.17-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.7.08-.33-.16-1.38-.5-2.62-1.6-.97-.86-1.62-1.92-1.81-2.24-.19-.33-.02-.5.14-.66.15-.14.33-.38.5-.57.16-.19.22-.33.33-.54.11-.22.05-.4-.03-.57-.08-.16-.74-1.77-1.01-2.42-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.33-1.14 1.11-1.14 2.7 0 1.6 1.17 3.14 1.33 3.36.16.22 2.29 3.5 5.55 4.9.78.33 1.38.53 1.85.68.78.25 1.49.21 2.05.13.63-.09 1.93-.78 2.2-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" /></svg>
      </a>
    </div>
  );
}
