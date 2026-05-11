import { Lockup } from "./Lockup";

export function Footer() {
  return (
    <footer className="surface-navy text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-16 md:flex-row md:flex-wrap md:items-baseline md:gap-x-3 md:gap-y-2 md:px-16 md:py-24">
        <a
          href="#top"
          aria-label="vectis home"
          className="inline-flex min-h-[44px] items-center opacity-95 transition-opacity duration-150 hover:opacity-100 active:opacity-80"
        >
          <Lockup tone="on-navy" className="text-[15px]" />
        </a>
        <span aria-hidden="true" className="hidden text-cream/40 md:inline">
          ·
        </span>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[13px] tracking-[0.02em] leading-[1.8] text-cream/80 md:contents">
          <span>ai implementation</span>
          <span aria-hidden="true" className="text-cream/40">·</span>
          <span>advisory</span>
          <span aria-hidden="true" className="text-cream/40">·</span>
          <span>vectisbuild.co</span>
        </p>
      </div>
    </footer>
  );
}
