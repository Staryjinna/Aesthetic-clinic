import type { Metadata, Viewport } from "next";
import "./globals.css";
import { brand, whatsappLink, defaultWhatsappMessage, phoneIsPlaceholder } from "@/lib/brand";
import { bodyFont, displayFont } from "@/lib/fonts";
import { hexToRgb } from "@/lib/utils";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { clinicSchema } from "@/lib/schema";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: { default: brand.seo.title, template: `%s | ${brand.name}` },
  alternates: { canonical: "/" },
  description: brand.seo.description,
  keywords: brand.seo.keywords,
  icons: { icon: brand.favicon },
  openGraph: { siteName: brand.name, type: "website", locale: "en_IN", title: brand.seo.title, description: brand.seo.description },
  twitter: { card: "summary_large_image" },
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
  const showGallery = brand.gallery.length >= 3 || brand.beforeAfter.some((p) => p.before.src && p.after.src);

  return (
    <html lang="en-IN" style={vars} className={`${displayFont.className} ${bodyFont.className}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2">Skip to content</a>
        <JsonLd data={clinicSchema()} />
        <Header phone={brand.phone} phoneTel={brand.phoneTel} categories={brand.categories.map((c) => ({ slug: c.slug, title: c.title }))} showPhone={!phoneIsPlaceholder} hideHrefs={showGallery ? [] : ["/gallery"]} />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat href={wa} name={brand.name} />
      </body>
    </html>
  );
}
