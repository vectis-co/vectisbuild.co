import type { Metadata, Viewport } from "next";
import { clash, inter, newsreader, plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "/vectis",
  description: "Vectis — AI implementation. Engineered to compound.",
  metadataBase: new URL("https://vectisbuild.co"),
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
      className={`${plexMono.variable} ${clash.variable} ${newsreader.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
