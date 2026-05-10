"use client";

import { useEffect, useState } from "react";

/**
 * Vertical coral progress bar that scroll-fills as the user reads the T-state
 * column. Anchors:
 *
 *   - progress = 0 when the column's top enters the bottom of the viewport.
 *   - progress = 1 when the end-anchor element's top reaches viewport center
 *     (i.e. user is actively reading the final state, not after they've
 *     scrolled past it).
 *
 * Pure transform: scaleY with origin-top, driven via rAF.
 */
type Props = {
  targetRef: React.RefObject<HTMLElement | null>;
  endAnchorRef: React.RefObject<HTMLElement | null>;
  className?: string;
};

export function CompoundProgressBar({ targetRef, endAnchorRef, className = "" }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const col = targetRef.current;
        const end = endAnchorRef.current;
        if (!col || !end) return;
        const colRect = col.getBoundingClientRect();
        const endRect = end.getBoundingClientRect();
        const vh = window.innerHeight;
        // Offset of end-anchor's top from column's top (constant for the page).
        const offset = endRect.top - colRect.top;
        const traveled = vh - colRect.top;
        const total = vh / 2 + offset;
        if (total <= 0) {
          setProgress(1);
          return;
        }
        const raw = traveled / total;
        setProgress(Math.max(0, Math.min(1, raw)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetRef, endAnchorRef]);

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute origin-top bg-coral ${className}`}
      style={{ transform: `scaleY(${progress})` }}
    />
  );
}
