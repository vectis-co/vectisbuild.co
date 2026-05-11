"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CommandCTA } from "../CommandCTA";
import { Highlight } from "../Highlight";

export function Hero() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(1.06);

  useEffect(() => {
    const updateScale = () => {
      // Mobile: scale up the illustration so the rocket fills more of the
      // narrow viewport while the plume continues to bleed off the right edge.
      setScale(window.innerWidth < 768 ? 1.18 : 1.06);
    };
    updateScale();
    window.addEventListener("resize", updateScale);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return () => window.removeEventListener("resize", updateScale);
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top, 0), rect.height);
        setOffset(progress * 0.15);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      id="top"
      className="surface-navy relative isolate overflow-hidden text-cream"
    >
      {/* Background illustration — full bleed; rocket+plume run off the right edge */}
      <div
        className="hero-image pointer-events-none absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${-offset}px, 0) scale(${scale})` }}
      >
        <Image
          src="/hero-illustration.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_40%] md:object-[47%_50%]"
        />
        {/* Left-side legibility scrim — keeps the rocket clear on the right */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,56,74,0.82) 0%, rgba(31,56,74,0.55) 32%, rgba(31,56,74,0.10) 62%, rgba(31,56,74,0) 100%)",
          }}
        />
        {/* Mobile scrim — heavier vertical wash for legibility on narrow screens */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,56,74,0.92) 0%, rgba(31,56,74,0.78) 40%, rgba(31,56,74,0.45) 70%, rgba(31,56,74,0.25) 100%)",
          }}
        />
      </div>

      {/* Top-of-hero vignette — gives the unstuck nav legibility against the
          cream cloud areas of the illustration. Sits above the illustration
          but below content; sticky nav's navy/92 backdrop takes over once
          stuck. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,30,40,0.6), transparent 30%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-32 md:px-16 md:pt-40 md:pb-44 lg:pt-48 lg:pb-52">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6">
          <div className="hero-text md:col-span-9 lg:col-span-9">
            <h1 className="font-italic text-[44px] leading-[1.05] text-cream md:text-[56px] lg:text-[60px]">
              Engineered to compound.
              <br />
              Designed to <Highlight>stand out</Highlight>
            </h1>

            <p className="mt-7 font-mono text-[16px] font-medium leading-[1.5] text-cream md:text-[18px]">
              We make businesses and busy people AI native.
            </p>

            <p className="mt-[18px] max-w-[60ch] font-mono text-[14px] leading-[1.65] text-cream/85 md:text-[16px]">
              AI implementation for operators of $1M–$50M companies. Private
              1:1 advisory for senior operators. The deliverable is the system
              in production, not the recommendation.
            </p>

            <div className="mt-10">
              <CommandCTA href="#begin" tone="on-navy" size="lg">
                begin engagement
              </CommandCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
