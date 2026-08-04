import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
// Self-hosted (not loaded from Google's CDN at request time) — one less
// third-party request, and no visitor data shared with Google.
const display = localFont({
  variable: "--font-display",
  src: [
    { path: "../fonts/CormorantGaramond-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/CormorantGaramond-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/CormorantGaramond-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/CormorantGaramond-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/CormorantGaramond-Italic-Regular.woff2", weight: "400", style: "italic" },
    { path: "../fonts/CormorantGaramond-MediumItalic.woff2", weight: "500", style: "italic" },
  ],
});
const body = localFont({
  variable: "--font-body",
  src: [
    { path: "../fonts/Lora-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Lora-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Lora-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Lora-Italic-Regular.woff2", weight: "400", style: "italic" },
  ],
});
const mono = localFont({
  variable: "--font-mono",
  src: [
    { path: "../fonts/SpaceMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/SpaceMono-Bold.woff2", weight: "700", style: "normal" },
  ],
});
export const metadata: Metadata = {
  title: "Musetta — Antiques & Hosted Dinners",
  description:
    "Musetta is a living showroom of unique antique furniture and curated hosted dinners in Elizabeth Bay, Sydney.",
};

// LocalBusiness schema — read by Google and AI answer engines (ChatGPT,
// Perplexity, Gemini) to understand what Musetta is, where roughly it's
// based, and how to get in touch. No street address (appointment-only,
// kept private) and no phone — just the contact form. Suburb-level
// location only, matching what's already public on the About page.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Musetta",
  description:
    "Musetta is a living showroom in Elizabeth Bay, Sydney — an apartment overlooking the harbour where antique furniture, art, and objects are lived with rather than displayed, alongside seasonal curated hosted dinners. Viewings are by private appointment only.",
  url: "https://musetta-site.vercel.app",
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Elizabeth Bay",
    addressRegion: "NSW",
    postalCode: "2011",
    addressCountry: "AU",
  },
  openingHours: "By appointment only",
  potentialAction: {
    "@type": "CommunicateAction",
    target: "https://musetta-site.vercel.app/contact",
    name: "Request a Viewing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="xrOouzTUkBex4TuCGzLQOZwQt1D7GAz21L2ZWYTJ728"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-plaster text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
