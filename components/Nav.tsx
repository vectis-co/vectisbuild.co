"use client";

import { useEffect, useState } from "react";
import { CommandCTA } from "./CommandCTA";
import { Lockup } from "./Lockup";

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = Math.max(window.innerHeight * 0.8, 480);
      setStuck(window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,backdrop-filter,border-color] duration-150 ease-out ${
        stuck
          ? "border-b border-coral/15 bg-navy/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-16 ${
          stuck ? "py-4 md:py-5" : "py-4 md:pt-10 md:pb-6"
        } transition-[padding] duration-150 ease-out`}
      >
        <a
          href="#top"
          aria-label="vectis home"
          className="inline-flex min-h-[44px] items-center opacity-95 transition-opacity duration-150 hover:opacity-100 active:opacity-80"
        >
          <Lockup tone="on-navy" className="text-[18px] md:text-[22px]" />
        </a>

        <CommandCTA
          href="#begin"
          tone="on-navy"
          size="md"
          className="min-h-[44px] items-center"
        >
          begin
        </CommandCTA>
      </div>
    </header>
  );
}
