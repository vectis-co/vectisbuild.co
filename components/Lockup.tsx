type Tone = "on-navy" | "on-cream";

type Props = {
  tone?: Tone;
  className?: string;
};

/**
 * /vectis lockup — Plex Mono wordmark, command-line as identity.
 *
 * Slash + square-on-i are coral on every surface. Wordmark inverts with tone:
 *   - tone='on-navy'  → cream wordmark
 *   - tone='on-cream' → navy wordmark
 *
 * Mono carries the chrome/identity. Clash retreats to big section displays
 * only. Newsreader stays on editorial italic moments.
 */
export function Lockup({ tone = "on-navy", className = "" }: Props) {
  const word = tone === "on-navy" ? "text-cream" : "text-navy";
  return (
    <span
      className={`inline-flex items-baseline font-mono font-medium leading-none ${className}`}
      aria-label="vectis"
    >
      <span className="text-coral load-slash" aria-hidden="true">/</span>
      <span className={`relative load-wordmark ${word}`}>
        vect
        <span className="relative inline-block">
          <span aria-hidden="true">ı</span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 bg-coral"
            style={{ width: "0.18em", height: "0.18em", top: "0.05em" }}
          />
        </span>
        s
      </span>
    </span>
  );
}
