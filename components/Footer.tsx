import { Lockup } from "./Lockup";

export function Footer() {
  return (
    <footer className="surface-navy text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-baseline gap-x-3 gap-y-2 px-6 py-20 md:px-16 md:py-24">
        <a
          href="#top"
          aria-label="vectis home"
          className="inline-block opacity-95 transition-opacity duration-150 hover:opacity-100"
        >
          <Lockup tone="on-navy" className="text-[15px]" />
        </a>
        <span className="text-cream/40">·</span>
        <span className="font-mono text-[13px] tracking-[0.02em] text-cream/80">
          ai implementation
        </span>
        <span className="text-cream/40">·</span>
        <span className="font-mono text-[13px] tracking-[0.02em] text-cream/80">
          advisory
        </span>
        <span className="text-cream/40">·</span>
        <span className="font-mono text-[13px] tracking-[0.02em] text-cream/80">
          vectisbuild.co
        </span>
      </div>
    </footer>
  );
}
