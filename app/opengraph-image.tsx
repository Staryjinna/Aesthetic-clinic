import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = brand.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#ffffff", color: brand.palette.primary }}>
        <div style={{ fontSize: 40, letterSpacing: 10, color: brand.palette.accent }}>{brand.wordmark.line2 ?? ""}</div>
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: 6, marginTop: 8 }}>{brand.wordmark.line1}</div>
        <div style={{ fontSize: 38, marginTop: 36, color: "#444" }}>{brand.tagline}</div>
        <div style={{ height: 6, width: 160, background: brand.palette.accent, marginTop: 48 }} />
      </div>
    ),
    size
  );
}
