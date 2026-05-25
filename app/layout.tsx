import type { Metadata, Viewport } from "next";
import { clash, newsreader, plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vectisbuild.co"),
  title: "/vectis — AI implementation",
  description:
    "AI implementation for businesses and individuals. Engineered to compound. Designed to stand out.",
  openGraph: {
    title: "/vectis — AI implementation",
    description:
      "AI implementation for businesses and individuals. Engineered to compound. Designed to stand out.",
    url: "https://vectisbuild.co",
    siteName: "/vectis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "/vectis — AI implementation",
    description:
      "AI implementation for businesses and individuals. Engineered to compound. Designed to stand out.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1A26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${clash.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
