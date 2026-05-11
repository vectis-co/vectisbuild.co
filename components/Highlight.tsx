import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Block-highlight matching the browser's text-selection state.
 * Coral background, cream text, no horizontal padding overflow.
 * Wraps cleanly across lines via box-decoration-break: clone.
 * Works across all font families (Newsreader Italic, Clash Grotesk, Plex Mono).
 */
export function Highlight({ children, className = "" }: Props) {
  return (
    <span
      className={`bg-coral text-cream phosphor-coral-soft whitespace-nowrap ${className}`}
      style={{
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}
