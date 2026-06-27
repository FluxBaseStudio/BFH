import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bullet Family House | Usługi budowlane i wykończenia",
  description:
    "Nowoczesne usługi budowlane: wykończenia, elewacje, remonty łazienek, renowacje kamienic, stany surowe, murowanie, stropy, ścianki działowe, kostka brukowa, wieńce, słupy i schody.",
  openGraph: {
    title: "Bullet Family House",
    description:
      "Kompleksowe usługi budowlane od stanu surowego po gotowe wykończenia.",
    type: "website",
    locale: "pl_PL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
