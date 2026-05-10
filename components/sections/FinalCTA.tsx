import { CommandCTA } from "../CommandCTA";
import { Highlight } from "../Highlight";
import { Reveal } from "../Reveal";

export function FinalCTA() {
  return (
    <section id="begin" className="surface-cream relative text-navy">
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-16 md:py-40">
        <Reveal>
          <p className="font-mono text-[13px] tracking-[0.04em] text-navy/70">
            /t1 align
          </p>
          <h2 className="mt-6 font-italic text-[40px] leading-[1.05] text-navy md:text-[56px] lg:text-[64px]">
            Begin with an <Highlight>audit</Highlight>
          </h2>
          <p className="mt-10 max-w-[60ch] font-mono text-[15px] leading-[1.65] text-navy/85 md:text-[16px]">
            Two weeks. Paid. Scoped. Walk away with the highest-leverage AI
            integration points for your business — and the option to build
            them with us.
          </p>
          <div className="mt-12">
            <CommandCTA href="mailto:hello@vectisbuild.co" tone="on-cream" size="lg">
              begin engagement
            </CommandCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
