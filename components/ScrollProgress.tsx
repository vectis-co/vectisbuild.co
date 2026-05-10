"use client";

import { useEffect, useState } from "react";

/**
 * 1px coral hairline pinned to the top of the viewport, above the sticky nav.
 * scaleX from 0 → 1 as the user scrolls from top of document to bottom.
 * No glow, no shadow, just a line.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) {
          setProgress(0);
          return;
        }
        const p = window.scrollY / scrollable;
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px origin-left bg-coral"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
