import type { ReactNode } from "react";

type Tone = "on-navy" | "on-cream";
type Size = "lg" | "md";

type Props = {
  href: string;
  children: ReactNode;
  tone?: Tone;
  /** lg = primary in-content CTA, md = inline with nav links */
  size?: Size;
  className?: string;
};

const SIZE_CLASS: Record<Size, string> = {
  lg: "text-[17px]",
  md: "text-[14px]",
};

/**
 * [/verb →] command CTA. Tight, terminal-key aesthetic — brackets sit flush
 * against the slash on the left and against the arrow on the right, no inner
 * padding. Coral brackets + slash; verb + arrow follow surface tone. Phosphor
 * glow on hover gives the action a soft analog screen feel.
 */
export function CommandCTA({
  href,
  children,
  tone = "on-navy",
  size = "lg",
  className = "",
}: Props) {
  const text = tone === "on-navy" ? "text-cream" : "text-navy";
  const translate = size === "lg" ? "group-hover:translate-x-[6px]" : "group-hover:translate-x-1";
  return (
    <a
      href={href}
      className={`group inline-flex cursor-pointer items-baseline font-mono leading-none tracking-[0.01em] transition-opacity duration-150 ease-out hover:opacity-90 ${SIZE_CLASS[size]} ${className}`}
    >
      <span className="text-coral phosphor-coral" aria-hidden="true">[</span>
      <span className="text-coral" aria-hidden="true">/</span>
      <span className={`${text} font-medium`}>{children}</span>
      <span
        aria-hidden="true"
        className={`ml-2 transition-transform duration-200 ease-out ${translate} ${text}`}
      >
        →
      </span>
      <span className="text-coral phosphor-coral" aria-hidden="true">]</span>
    </a>
  );
}
