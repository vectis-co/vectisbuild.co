"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnyElementRef = {
  current: HTMLElement | null;
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Trigger threshold — 0.3 means fire when ~30% visible. */
  threshold?: number;
  /** Delay (ms) after entering viewport. Used to stagger T-state rows. */
  delay?: number;
  /** Element tag. Defaults to div. */
  as?: "div" | "section" | "li" | "article" | "header" | "footer" | "span";
  /** Optional external ref kept in sync with the underlying DOM node. */
  domRef?: AnyElementRef;
  /** CSS variant — defaults to "reveal" (350ms fade+rise). Pass "counter-reveal" for the T-state counter emphasis (slower fade+rise to 20% opacity). */
  variant?: "reveal" | "counter-reveal";
};

export function Reveal({
  children,
  className = "",
  threshold = 0.3,
  delay = 0,
  as: Tag = "div",
  domRef,
  variant = "reveal",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
    if (domRef) {
      domRef.current = node;
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            observer.disconnect();
            break;
          }
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay, visible]);

  const TagAny = Tag as unknown as React.ElementType;
  return (
    <TagAny
      ref={setRef}
      className={`${variant} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </TagAny>
  );
}
