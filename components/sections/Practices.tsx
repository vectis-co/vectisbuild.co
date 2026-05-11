import { Highlight } from "../Highlight";
import { Reveal } from "../Reveal";

export function Practices() {
  return (
    <section id="practices" className="surface-cream relative text-navy">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-16 md:px-16 md:pt-36 md:pb-24">
        <Reveal>
          <p className="font-mono text-[13px] tracking-[0.04em] text-navy/70">
            /two practices
          </p>

          <h2 className="mt-6 font-italic text-[32px] leading-[1.1] text-navy md:text-[44px] lg:text-[48px]">
            A bundled engagement for <Highlight>businesses</Highlight>
            <br />
            A private cabinet for <Highlight>individuals</Highlight>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-6" delay={0}>
            <article id="audit">
              <p className="font-mono text-[13px] tracking-[0.04em] text-navy/70">
                /for businesses
              </p>
              <h3
                className="mt-4 font-sans text-[20px] font-medium leading-[1.25] text-navy md:text-[24px]"
                style={{ wordSpacing: "normal", fontFeatureSettings: "normal" }}
              >
                AI implementation, engineered to compound.
              </h3>
              <p className="mt-5 max-w-[52ch] font-mono text-[15px] leading-[1.65] text-navy/90">
                We bundle AI capacity, brand systems, and operational design
                into one engagement for $1M–$50M operators. Audit, build, and
                maintain — one team, three tiers.
              </p>
              <a
                href="#audit"
                className="hover-underline group mt-7 inline-flex min-h-[44px] items-center font-mono text-[16px] font-medium text-coral transition-opacity duration-150 hover:opacity-90 active:opacity-75"
              >
                <span>/audit</span>
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-150 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          </Reveal>

          <Reveal className="md:col-span-6" delay={120}>
            <article id="residency">
              <p className="font-mono text-[13px] tracking-[0.04em] text-navy/70">
                /for individuals
              </p>
              <h3
                className="mt-4 font-sans text-[20px] font-medium leading-[1.25] text-navy md:text-[24px]"
                style={{ wordSpacing: "normal", fontFeatureSettings: "normal" }}
              >
                A private AI cabinet for the next two years.
              </h3>
              <p className="mt-5 max-w-[52ch] font-mono text-[15px] leading-[1.65] text-navy/90">
                1:1 advisory for senior operators getting AI-fluent. Quiet,
                monthly, yours. Standard, Plus, and Cabinet tiers —
                invitation-only at the top.
              </p>
              <a
                href="#residency"
                className="hover-underline group mt-7 inline-flex min-h-[44px] items-center font-mono text-[16px] font-medium text-coral transition-opacity duration-150 hover:opacity-90 active:opacity-75"
              >
                <span>/residency</span>
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-150 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
