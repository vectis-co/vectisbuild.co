"use client";

import Image from "next/image";
import { useRef } from "react";
import { CompoundProgressBar } from "../CompoundProgressBar";
import { Highlight } from "../Highlight";
import { Reveal } from "../Reveal";

const STATES = [
  {
    counter: "00",
    label: "T0 — IDLE",
    body: "Where most companies start. Disconnected tools, no compound.",
  },
  {
    counter: "01",
    label: "T1 — ALIGN",
    body: "A 2-week paid audit. Map existing systems. Identify the highest-leverage AI integration points.",
  },
  {
    counter: "02",
    label: "T2 — ACCELERATE",
    body: "A 6–10 week sprint. Build the workflows, automations, and systems that compound.",
  },
  {
    counter: "03",
    label: "T3 — COMPOUND",
    body: "A monthly retainer. Maintenance, optimization, new builds as the business evolves.",
  },
];

export function Compound() {
  const columnRef = useRef<HTMLOListElement | null>(null);
  const lastRowRef = useRef<HTMLLIElement | null>(null);

  return (
    <section id="compound" className="surface-navy relative text-cream">
      {/* Section eyebrow + etymology caption introduce the illustration */}
      <div className="mx-auto max-w-[1200px] px-6 pt-16 md:px-16 md:pt-24">
        <Reveal>
          <p className="text-center font-mono text-[12px] tracking-[0.04em] text-cream/70 md:text-[13px]">
            /how we compound
          </p>
        </Reveal>
        <Reveal>
          <figcaption className="mx-auto mt-6 max-w-[60ch] text-center md:mt-8">
            <p className="font-mono text-[12px] tracking-[0.04em] text-coral md:text-[13px]">
              vectis · lever
            </p>
            <p className="mt-2 font-italic text-[16px] leading-[1.4] text-cream md:text-[18px]">
              compounding force from one applied point
            </p>
          </figcaption>
        </Reveal>
      </div>

      {/* Lever illustration anchors the spread, beneath the caption */}
      <div className="mx-auto mt-8 max-w-[1400px] md:mt-12 md:px-12">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/lever-illustration-1.jpg"
              alt="A lever — mechanical advantage from a single applied point."
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-20 md:px-16 md:pt-32 md:pb-36">
        <Reveal>
          <h2 className="font-sans font-bold leading-[1.1] tracking-tight text-cream text-[32px] md:text-[clamp(36px,5.4vw,52px)]">
            Four states. One <Highlight>trajectory</Highlight>
          </h2>
        </Reveal>

        {/* T-state journey — magazine spread: counter right, label/body left */}
        <ol ref={columnRef} className="relative mt-12 md:mt-20">
          <span
            aria-hidden="true"
            className="absolute left-[4px] top-2 bottom-2 w-px bg-coral/15"
          />
          <CompoundProgressBar
            targetRef={columnRef}
            endAnchorRef={lastRowRef}
            className="left-[4px] top-2 bottom-2 w-px"
          />

          {STATES.map((s, i) => {
            const isLast = i === STATES.length - 1;
            return (
              <Reveal
                key={s.label}
                as="li"
                delay={i * 80}
                className="relative pl-8 md:pl-12"
                threshold={0.25}
                domRef={isLast ? lastRowRef : undefined}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[12px] block bg-coral phosphor-coral md:top-[18px]"
                  style={{ width: 10, height: 1 }}
                />

                <div className="grid grid-cols-12 items-center gap-3 md:gap-6">
                  <div className="col-span-8 md:col-span-9">
                    <p className="font-mono text-[22px] font-medium uppercase leading-[1] tracking-[0.04em] text-coral md:text-[32px]">
                      {s.label}
                    </p>
                    <p className="mt-3 max-w-[60ch] font-mono text-[14px] leading-[1.5] text-cream/90 md:mt-4 md:text-[16px]">
                      {s.body}
                    </p>
                  </div>
                  <div className="col-span-4 flex items-center justify-end md:col-span-3">
                    <Reveal
                      as="span"
                      variant="counter-reveal"
                      threshold={0.4}
                      className="font-mono font-light leading-none text-[56px] md:text-[96px]"
                    >
                      {s.counter}
                    </Reveal>
                  </div>
                </div>
                {!isLast && <div className="h-16 md:h-20" aria-hidden="true" />}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
