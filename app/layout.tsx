import type { Metadata, Viewport } from "next";
import "./globals.css";
import { brand, whatsappLink, defaultWhatsappMessage } from "@/lib/brand";
import { bodyFont, displayFont } from "@/lib/fonts";
import { hexToRgb } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: { default: brand.seo.title, template: `%s | ${brand.name}` },
  description: brand.seo.description,
  keywords: brand.seo.keywords,
  icons: { icon: brand.favicon },
  openGraph: { siteName: brand.name, type: "website", locale: "en_IN" },
};
export const viewport: Viewport = { themeColor: brand.palette.primary, width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const p = brand.palette;
  const vars = {
    "--c-primary": hexToRgb(p.primary),
    "--c-accent": hexToRgb(p.accent),
    "--c-bg": hexToRgb(p.background),
    "--c-surface": hexToRgb(p.surface),
    "--c-text": hexToRgb(p.text),
    "--c-muted": hexToRgb(p.muted),
    "--c-line": hexToRgb(p.line),
    "--font-display": displayFont.style.fontFamily,
    "--font-body": bodyFont.style.fontFamily,
  } as React.CSSProperties;
  const wa = whatsappLink(defaultWhatsappMessage);
  const social = [
    brand.social.instagram && { label: "Instagram", href: brand.social.instagram },
    brand.social.facebook && { label: "Facebook", href: brand.social.facebook },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <html lang="en-IN" style={vars} className={`${displayFont.className} ${bodyFont.className}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2">Skip to content</a>
        <Header whatsapp={wa} social={social} tagline={brand.tagline} />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat href={wa} name={brand.name} />
      </body>
    </html>
  );
}
