import type { Metadata, Viewport } from "next";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://bulletfamilyhouse.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bullet Family House | Budowa domów, wykończenia i elewacje",
    template: "%s | Bullet Family House",
  },
  description:
    "Bullet Family House wykonuje stany surowe, wykończenia, elewacje, remonty łazienek, murowanie, stropy, ścianki działowe, kostkę brukową, słupy i schody.",
  keywords: [
    "Bullet Family House",
    "firma budowlana",
    "budowa domu",
    "stany surowe",
    "wykończenia wnętrz",
    "elewacje",
    "remont łazienki",
    "murowanie",
    "stropy",
    "ścianki działowe",
    "kostka brukowa",
    "renowacja kamienic",
  ],
  authors: [{ name: "Bullet Family House" }],
  creator: "Bullet Family House",
  publisher: "Bullet Family House",
  applicationName: "Bullet Family House",
  category: "construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bullet Family House | Budowa domów i wykończenia",
    description:
      "Kompleksowe usługi budowlane od stanu surowego po gotowe wykończenia. Doświadczenie, precyzja i spokojne prowadzenie inwestycji.",
    url: "/",
    siteName: "Bullet Family House",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bullet Family House - usługi budowlane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bullet Family House | Budowa domów i wykończenia",
    description:
      "Stany surowe, wykończenia, elewacje, remonty łazienek, murowanie, stropy, kostka brukowa i prace zewnętrzne.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Bullet Family House",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    logo: `${siteUrl}/images/bullet-family-house-logo.png`,
    description:
      "Firma budowlana wykonująca stany surowe, wykończenia, elewacje, remonty łazienek, murowanie, stropy, ścianki działowe, kostkę brukową, słupy i schody.",
    telephone: ["+48666610480", "+48606441448", "+48516588349"],
    areaServed: "Polska",
    priceRange: "$$",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stany surowe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wykończenia wnętrz" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elewacje" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remonty łazienek" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kostka brukowa" } }
    ],
  };

  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
