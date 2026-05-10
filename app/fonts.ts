import localFont from "next/font/local";

export const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "./fonts/IBMPlexMono-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-Bold.ttf", weight: "700", style: "normal" },
  ],
});

export const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "./fonts/ClashGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const newsreader = localFont({
  variable: "--font-newsreader",
  display: "swap",
  src: [
    { path: "./fonts/Newsreader-Italic.ttf", style: "italic" },
  ],
});
