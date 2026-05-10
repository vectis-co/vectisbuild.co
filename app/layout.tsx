import type { Metadata, Viewport } from "next";
import { clash, newsreader, plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vectis — Engineered to compound. Designed to stand out.",
  description:
    "AI implementation for operators of $1M–$50M companies. Private 1:1 advisory for senior operators. The deliverable is the system in production, not the recommendation.",
  metadataBase: new URL("https://vectisbuild.co"),
};

export const viewport: Viewport = {
  themeColor: "#1F384A",
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
