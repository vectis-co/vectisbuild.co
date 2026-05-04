# Vectis Visual Gravity Scan — Research Pass #3
**Briefing document for vectisbuild.co build phase. Audience: Tzvi (CEO, design-strong, building in Claude Code + Vercel). Goal: 9.5/10 first impression, top 5% of AI implementation category at launch.**

---

## Executive Summary — Three Things to Walk Away With

1. **The target register already exists in the wild — and it's narrower than you think.** The exact midpoint between Linear and Anthropic isn't a hypothetical: it's where Mercury, Replicate, Resend, and Cartesia already sit. The recipe is consistent: a single warm dark surface (never #000 black, always slightly warm like #0E1116 or #141413), one custom or proprietary-feeling type pairing (a grotesque/sans for UI + a serif or mono for moments of authority), and one — exactly one — chromatic accent held in extreme reserve. Vectis's brass (#A8896C) on Deep Ink (#0E1116) is structurally identical to Anthropic's terracotta-on-ivory and Mercury's near-black-with-a-single-warm-pop. **You are not inventing a register. You are joining one.**

2. **The "spec sheet" risk is real and the cure is editorial type, not less type.** The brand brief's worry — that Vectis could read as aerospace-defense — is solved by inserting one editorial serif moment per page (like Anthropic's display headlines or Cartesia's hero) rather than by softening the technical scaffolding. The construction marks, dimensional callouts, and T0/T1/T2/T3 tempo system are *good*. They become aerospace only when they're not interrupted by a human, editorial voice. **Lean harder into the serif manifesto moment, not lighter on the technical chrome.**

3. **Motion in 2025 is the new tell of a template site.** Linear and Anthropic both pulled back hard on motion in their 2024–25 redesigns. The current category-leading look uses motion almost invisibly: one hover state, one scroll-triggered fade, zero marquees, zero parallax. Cartesia, Stability, and the AI-website-trend listicles are *full* of motion — that's the trap to avoid. **Vectis should ship with maybe three motion behaviors total, all under 200ms.**

---

## SECTION A — Direct Aspiration References

### Summary table

| # | Site | URL | Score | Register |
|---|------|-----|-------|----------|
| 1 | Linear | linear.app | 9.5 | Restrained technical / dark-friendly |
| 2 | Anthropic | anthropic.com | 9.5 | Editorial / warm research-institute |
| 3 | Mercury | mercury.com | 9.5 | Cinematic dark fintech, custom type |
| 4 | Vercel (Geist) | vercel.com | 9.0 | Developer-tooling minimalism |
| 5 | Resend | resend.com | 9.0 | Dev-tools elegance, monospaced accents |
| 6 | Cartesia | cartesia.ai | 9.0 | AI research with editorial tension |
| 7 | Replicate | replicate.com | 9.0 | Developer-spec, monospace-forward |
| 8 | U.S. Graphics Co. | usgraphics.com | 9.5 | Industrial spec-sheet wildcard |
| 9 | Athletics NYC | athleticsnyc.com | 9.0 | Brand studio editorial craft |
| 10 | Koto | koto.studio | 9.0 | Optimistic editorial agency |
| 11 | Manual.is | manual.is | 9.0 | London studio quietude |
| 12 | Brunswick Group | brunswickgroup.com | 8.5 | Premium advisory restraint |
| 13 | Naval (nav.al) | nav.al | 9.0 | Solo-operator typographic minimalism |
| 14 | Visualize Value | visualizevalue.com | 8.5 | Personal-brand constraint discipline |
| 15 | Grand Seiko | grand-seiko.com | 9.5 | Wildcard — Japanese product reverence |

---

### 1. Linear — linear.app — 9.5/10

**Reasoning:** The de-facto template for technical-product marketing in 2024–25 — and notably stricter in its 2025 refresh than its 2024 version, having stripped most color and gradient noise. Inter (custom-tuned) at body, Söhne-adjacent grotesque at display, Berkeley Mono / Source Code Pro accents. Subtle desaturated blue is the only chromatic note.

**What Vectis should steal:**
- **Sectioned content strips with hard horizontal rules.** Each scroll-section is a self-contained band; no dramatic transitions between them. Steal this for SMB outcomes section.
- **Tiny mono labels above headings** (e.g., "01 / PLAN") — exact analog for Vectis's T0/T1/T2/T3 tempo system used as section eyebrows.
- **Hover states that change *one* property** (opacity, border color) rather than transforming. 150ms ease-out, nothing more.
- **CTA treatment:** primary button is a flat rectangle with subtle lighter-than-background border at rest, full-fill on hover. No shadows, no gradients.
- **The "feature card" pattern:** no corners > 8px radius, paired icon + 2-line copy + arrow link.

**Emblematic of register:** Linear feels like reading a spec written by someone who respects you. It's almost devoid of marketing language; the layout *is* the argument.

**Doesn't translate:** Linear's near-monochrome palette would erase what makes Vectis warm. Their slight purple/blue gradient hero — copy that and you become a Linear clone. The brass is your differentiation.

**Image references:**
- https://linear.app/brand
- https://fontofweb.com/tokens/linear.app

---

### 2. Anthropic — anthropic.com — 9.5/10

**Reasoning:** The single most important reference for Vectis's warm/editorial half. Built by Geist (formerly &Walsh) over 2.5 years. Surface: warm ivory parchment #FAF9F5 (light) or #141413 (dark feature cards, near-black with red shift). Type: Styrene B + Tiempos historically; the current site uses custom Anthropic Sans + Anthropic Serif. Single chromatic accent (Clay #D97757 / terracotta), held in extreme reserve.

**What Vectis should steal:**
- **The double-underline emphasis on keywords in headlines.** This is Anthropic's *signature* — emphasis without color, without bold, without italic. Pure typographic gesture. Drop this on your hero headline at one word maximum ("the operating tempo for **AI-native** SMBs").
- **Hard-edged surface inversion.** Light page → drop a dark card → return to light. Zero gradient softening, zero shadow. This solves the dual-vertical problem: SMB section runs dark cards on bone background; Residency section can run inverse.
- **Serif at display size only inside dark inversion cards.** The serif lives in the dark moment — that's the rule that makes it feel intentional rather than decorative.
- **Mono labels at 12–14px in card footers** (DATE / CATEGORY style) — exact analog for your T-state labels.
- **Zero box-shadows. Period.** All depth comes from surface contrast.

**Emblematic of register:** The aged-paper warmth + serif headlines reads as research institution, not startup. It's what "we take this seriously" looks like in pixels.

**Doesn't translate:** Anthropic's full ivory-on-light treatment is the *opposite* of Vectis's warm-dark default. Don't copy their primary surface — copy their *system* (one warm surface, one inverse, one accent).

**Image references:**
- https://geist.co/work/anthropic
- https://styles.refero.design/style/d469cba4-c448-4a43-a033-883f8bfcdc42

---

### 3. Mercury — mercury.com — 9.5/10

**Reasoning:** The single best proof point that "warm dark + editorial restraint + financial gravitas" works. Custom Arcadia + Arcadia Display typeface (with an unusual 480 weight calibrated to feel authoritative without heavy). Cinematic dark palette, art-directed (not stock) photography. Treats financial data as a first-class typographic element with its own scale, weight, and tracking.

**What Vectis should steal:**
- **Treat the price points (Residency: $650–$2,500/mo) as typography, not text.** Their own size, weight, and tracking. Mono digits at scale.
- **Cinematic photography over stock or illustration.** If Vectis ever uses photography, this is the register: real, art-directed, slightly desaturated, slightly warm. *Not* documentary — the original brand-guide call for "real operators at work" likely overshoots and reads as case-study filler. Mercury proves you can use *one or two* hero-grade photos and stop.
- **Custom or near-custom display weight.** GT Sectra Display Italic does this for you; treat it like Mercury treats Arcadia 480 — the "this is our voice" weight you don't see anywhere else.
- **Dark cards with extremely subtle 1px lighter-warm border** (not shadow) for elevation.
- **Numerical data treated semantically** — credits, debits, performance metrics — each gets its own color/weight rule.

**Emblematic:** Banking that feels like a luxury product — they signaled "founders who care about craft" by refusing every fintech default (no bright greens/blues, no stock images, no rounded everything).

**Doesn't translate:** Mercury's photography budget. They commissioned cinematic shoots — for V1 you cannot match this and shouldn't try. Use *one* hero photograph or none.

**Image references:**
- https://blakecrosley.com/guides/design/mercury
- https://siiimple.com/mercury-bank/

---

### 4. Vercel — vercel.com / vercel.com/geist — 9.0/10

**Reasoning:** The Geist design system is publicly documented and treats typography as a graded system (Display, Heading, Title, Label, Copy, Button, Mono) with explicit "Subtle/Strong" modifiers. Geist Sans + Geist Mono are the type pair — a near-direct cousin of the Söhne/Söhne Mono direction Vectis is targeting.

**What Vectis should steal:**
- **A documented type *system*, not just a stack.** Define Display 1, Display 2, Heading 1–4, Title 1–3, Copy XL/L/M/S, Mono S/M/L. Codify it before Claude Code touches a section.
- **The "Strong" and "Subtle" pattern** — instead of inventing variants, you have one bold and one muted version of each text style.
- **Geist's approach to mono labels.** Mono is for metadata and code, never for body. This keeps it precious.
- **Sharp 4px / 8px radii only.** No 12px or 16px softening.

**Emblematic:** Vercel's site reads as a developer's IDE made marketing-safe — every spacing decision is on a grid, every type token has a name.

**Doesn't translate:** Vercel's near-pure-black background and lack of warmth. Vercel is correctly cold; Vectis must be warm. Take the *system rigor*, not the temperature.

**Image references:**
- https://vercel.com/geist/typography
- https://vercel.com/design

---

### 5. Resend — resend.com — 9.0/10

**Reasoning:** Best-in-class developer tool marketing site. Black on near-black with slight warmth, monospaced eyebrows on every section, generous line-height, subtle hover-only animations. Code blocks treated as design objects, not afterthoughts.

**What Vectis should steal:**
- **Monospace eyebrow/section labels in uppercase tracked-out style** (e.g., `RESIDENCY · T2 ALIGN` rendered in Söhne Mono 12px, +60 tracking, uppercase). This is the perfect home for the T-state nomenclature.
- **Code-block-as-design-element treatment** for any "what we deliver" technical artifacts (audit reports, automation specs, prompt libraries).
- **Right-aligned mono metadata** in feature lists.
- **The "logos cloud" without logos** — Resend often signals credibility through specifics (deliverability percentages, sender count) rendered as stat blocks instead of logo grids. Use this for SMB outcomes.

**Emblematic:** Reads like documentation that happens to sell something — the highest-trust register for technical buyers.

**Doesn't translate:** Resend's all-mono approach to body copy. Vectis needs serif manifesto warmth on the Residency side; pure-mono would push it back to spec-sheet territory.

**Image references:**
- https://resend.com
- https://resend.com/changelog

---

### 6. Cartesia AI — cartesia.ai — 9.0/10

**Reasoning:** AI research lab that uses Berkeley Mono throughout to signal "industrial research + fundamental engineering + useful products" (their words). Hero feels alive — bold type, dynamic but restrained. Closest sibling to where Vectis sits between technical and editorial.

**What Vectis should steal:**
- **Berkeley Mono as a serious candidate** for your mono accent. It costs $75 for an individual license, looks more memorable than Söhne Mono, and Perplexity and Cartesia have both adopted it as a brand signature. Worth A/B-testing in mockups.
- **Tagline-as-statement at hero** with serif or distinctive display, not a marketing sentence.
- **One signature motion behavior** — Cartesia uses a single hero animation as their "we have product personality" tell. For Vectis: a subtle T0→T1→T2→T3 progression bar that animates once on load.

**Emblematic:** "Voice AI you can feel" — they made sure the marketing register matched the warmth of the product output.

**Doesn't translate:** Cartesia's playful gradients on smaller AI demo cards. Vectis is consulting/services; gradient demos would read as wrong-product.

---

### 7. Replicate — replicate.com — 9.0/10

**Reasoning:** Reference platform for "monospace-forward developer brand done right." Uses monospace for almost everything except headlines, with extreme generosity in whitespace. Reads like a research notebook.

**What Vectis should steal:**
- **The "everything is documentation" feel.** When in doubt, structure like a README.
- **The grayscale-with-one-accent restraint.** Single orange punch on otherwise nearly monochrome — same model as Vectis brass.
- **Dense data tables rendered beautifully** — borrow this for the Residency tier comparison ($650 / $1,500 / $2,500 monthly tiers).

**Doesn't translate:** Replicate is mono-heavy throughout. For Vectis, mono is a spice, not the sauce.

---

### 8. U.S. Graphics Company — usgraphics.com — 9.5/10

**Reasoning:** This is the wildcard that's actually a perfect direct reference. Neil Panchal's site for the Berkeley Mono typeface is a masterclass in industrial-spec-sheet aesthetics done with editorial care. Construction marks, dimensional callouts, ASCII tables, fake patient charts laid out by hand, subtle frame animations — exactly the design device language Vectis already wants. And it sells.

**What Vectis should steal:**
- **Construction-mark / leader-line annotation as a brand device.** Vectis already targets this; usgraphics.com is the proof it works at sale-conversion scale, not just as portfolio decoration.
- **ASCII-table data layouts.** For the SMB "what we deliver" or Residency tier comparison, render as a true monospaced table with corner glyphs (┌─┐).
- **The "control panel etched in black synthetic lacquer" aesthetic** — but applied with humor and humanity, never aerospace.
- **Captions in Berkeley Mono (or your mono) at 11px, slightly desaturated.** These do enormous work without competing with body copy.
- **Long-form blog posts treated as design artifacts** — every Berkeley Mono update post is a case study in how to lay out technical writing beautifully.

**Emblematic:** Old-school, understated, unfashionable — and yet unmistakable. "It is timeless" is the brand promise.

**Doesn't translate:** The literal aerospace/Cold-War references and font product-page conventions. Vectis isn't selling a font.

**Image references:**
- https://usgraphics.com/products/berkeley-mono
- https://neil.computer/notes/berkeley-mono-february-update/ (the blog post HN raved about — laid out by hand, 700 frames of animation)

---

### 9. Athletics NYC — athleticsnyc.com — 9.0/10

**Reasoning:** Brand studio whose own site nails the "useful design first, ornament second" register. Editorial pacing, restraint, confident type sizing, photography that's actually used (not stock). They state their philosophy as "tools, not rules" — exactly the operator/instrument register Vectis is going for.

**What Vectis should steal:**
- **Case-study format with one hero image, one paragraph of context, three or four crisp outcome bullets.** Steal this exactly for the SMB case-study page.
- **Type-led navigation** (no icons, no decoration — just words at the right size).
- **The "About" page as a values document, not a team grid.**

---

### 10. Koto — koto.studio / koto.com — 9.0/10

**Reasoning:** Global branding studio using GT Sectra (one of the typefaces on the Vectis shortlist) paired with Suisse Int'l. Their "Seasoned" project (cookbook-inspired branding guide) is a reference for warm + editorial in a tech-adjacent context.

**What Vectis should steal:**
- **GT Sectra in actual use** — see how they pair it with a clean grotesque. Confirms the GT Sectra direction is right; pairs even better with Söhne than with Suisse.
- **Optimism without cheerfulness.** The tone is confident, warm, slightly playful, never cute.
- **Long-scroll case-study format** with full-bleed imagery alternating with text columns.

**Doesn't translate:** Koto's playful illustration and bright accent palettes — that's their agency personality, not Vectis's.

---

### 11. Manual.is — manual.is — 9.0/10

**Reasoning:** London-based studio with one of the quietest, most editorially confident sites in the design industry. Rotating accent colors per project, almost no motion, type-led entirely.

**What Vectis should steal:**
- **The "quiet front door" approach.** Hero is one sentence. That's it.
- **Per-section accent rotation.** SMB section could have brass at 5% surface; Residency section could shift to a deeper bronze or cream-warm — keeping it within the brand but signaling vertical.
- **Project pages as long editorial scrolls** with very generous margins.

**Doesn't translate:** Manual is portfolio-driven; Vectis is service-driven. You need stronger CTAs than they ever do.

---

### 12. Brunswick Group — brunswickgroup.com — 8.5/10

**Reasoning:** Reference for the "premium advisory" register — included not because it's a 10/10 craft site but because it's a calibration point for what *boutique-but-serious* looks like in the consulting world. Quiet, type-led, deeply restrained color, lots of white space, almost zero illustration.

**What Vectis should steal:**
- **The whitespace-as-luxury treatment** for the Residency section. Less density signals more pricing power.
- **Person-led case studies** — partner photo + name + sector, not corporate logos.
- **Geographic / partnership signals** rendered as lists, not as map graphics.

**Doesn't translate:** Brunswick's overall stiffness. They look like a place where partners wear French cuffs. Vectis should look like a place where the founder wears a good t-shirt.

---

### 13. Naval — nav.al — 9.0/10

**Reasoning:** The exemplar of solo-operator-as-premium-brand. Single column. Serif body. No images. No nav decoration. Just essays and podcasts. Unmistakable register: "I am not selling you anything, but if you want what I have, it's here."

**What Vectis should steal:**
- **The single-column-essay layout** — exact pattern for the Vectis manifesto / "Why Vectis" page.
- **Confident long-form prose styled to be read** (line-length 65–75ch, generous leading, serif body for any 200+ word block).
- **The "no marketing chrome" hero.** Title. One line. Begin reading.

**Doesn't translate:** Naval's lack of CTAs. He's not converting anyone — he's broadcasting. Vectis needs to convert. So borrow the *typography*, not the funnel logic.

---

### 14. Visualize Value (Jack Butcher) — visualizevalue.com — 8.5/10

**Reasoning:** Reference for the "constraint produces premium" personal-brand model. Black/white only, single typeface, every visual reduced to its idea. Built a $1M+ business on this discipline. Currently visualizevalue.com is an evolved version with tools/products, but the underlying constraint-first principle is what to study.

**What Vectis should steal:**
- **The discipline of "make one decision to save 1,000 decisions."** Pick the brass usage rule, the type stack, and the section-rhythm pattern *once*. Stop revisiting them.
- **Diagrammatic explanation as content type.** Visualize Value's signature is the black-bg / white-line / single-idea diagram. Vectis's "T0 → T3" tempo system is begging to be rendered as a Visualize-Value-style diagram on the homepage.
- **Personal-brand voice applied to a productized service.** Tzvi as named founder/operator visible in the brand, not hidden behind "we."

**Doesn't translate:** The pure black-and-white. You have brass and bone — use them.

---

### 15. Grand Seiko — grand-seiko.com — 9.5/10

**Reasoning:** The non-tech wildcard. Japanese watchmaker whose site embodies "Takumi" (artisan) reverence. Design philosophy ("sparkle of quality" — flat surfaces, mirror polish, light/shadow contrast) maps almost perfectly onto Vectis's "instrument on your desk" aspiration. Whitespace is treated with religious care. Zero motion gimmickry. Photography is studio-grade product reverence.

**What Vectis should steal:**
- **Reverent product photography even when the "product" is intangible.** For Vectis: a single beautifully-shot still life of a desk + screen + notebook + the brand artifact (pen, card, slim engraved object) at the top of the Residency page. One image that says "this is for someone who values craft."
- **Negative space as luxury signal.** Grand Seiko leaves enormous breathing room around hero copy; nothing competes with the headline. Steal this for the homepage hero specifically — give the headline a full viewport before any other content appears on scroll.
- **Description in terms of *philosophy and method*, not features.** "The Grand Seiko Style is a design language centered on the idea of the sparkle with quality." Vectis equivalent: "The Vectis tempo is a method centered on the idea that AI implementation moves through four operating states." Method language, not feature lists.
- **Light/shadow contrast as the aesthetic principle.** Their entire brand rests on it. Vectis's warm-dark + bone + brass system is structurally similar — write that down as a principle and stop second-guessing it.

**Emblematic:** Object reverence. The site's job is to make you respect the object before you can buy it.

**Doesn't translate:** Their literal product-grid commerce structure. Vectis sells engagements, not SKUs.

---

## SECTION B — Anti-References (calibration tools)

### 1. Palantir — palantir.com — Anti-reference

**Looks right at first glance:** Dark background, technical aesthetic, "futuristic" UI quadrants instead of standard nav, white-paper-quality content. Heads-up-display vibe. The Fictive Kin redesign won awards.

**Specific failure mode:** It crosses fully into aerospace-defense / surveillance contractor territory. The HUD navigation is gimmicky on first visit. The interface feels designed to *intimidate* the visitor into trusting it. There is zero warmth, zero editorial humanity. Even the photography is military-coded.

**Lesson for Vectis:** This is exactly what Tzvi's brief said *not* to do — "spec sheet from an aerospace defense contractor." Palantir is the upper bound on technical theatre. Vectis must always check itself: *would a creative director or thoughtful operator find this welcoming?* If the answer is "they'd find it imposing," strip a layer of technical chrome and add a serif sentence.

---

### 2. Most "AI Website Listicle" sites (Taskade, Cohere, Deepgram, Synthesia, Stability) — Anti-reference cluster

**Looks right at first glance:** Dark mode, gradient backgrounds, animated product demos, custom illustration, "tech-forward" sans serifs. Listed across every "best AI website 2025/2026" roundup.

**Specific failure mode:** Indistinguishable from one another. They all reach for the same gradient-purple/blue, the same bento grids, the same animated-particle hero, the same Inter-at-400-weight subhead. The Anthropic team coined the term "AI slop" for exactly this aesthetic — and Anthropic's own frontend-design skill *explicitly* lists "Inter or Roboto on dark gradient" as the thing to refuse.

**Lesson for Vectis:** If a layout choice could appear unmodified on Cohere, Deepgram, *or* Stability, it's wrong. The brass + bone + warm dark + editorial serif combination is your entire moat against this category sameness. Resist the gravitational pull toward bento grids and animated product demos.

---

### 3. Scale AI — scale.com — Anti-reference

**Looks right at first glance:** Dark, technical, enterprise-coded, lots of stat blocks, defense contracts visible. Looks like a credible AI implementation reference.

**Specific failure mode:** Too cold, too enterprise. The voice is "we work with the DOD," not "we work with you." Scale's design treats the buyer as a procurement officer; Vectis's buyer is an SMB operator who chose this firm because they wanted craft over enterprise. Scale's typography is aggressively unornamented — no serif, no warmth, no editorial moment.

**Lesson for Vectis:** Enterprise-coded design *kills* the SMB tier. Even the SMB section needs warmth (the brass, the serif moment, an actual sentence in the founder's voice). If Vectis ever looks like Scale's little brother, it has lost both verticals — too small for enterprise, too cold for thoughtful SMBs.

---

### 4. Generic Webflow / Framer "AI consultancy" templates — Anti-reference cluster

**Looks right at first glance:** Dark mode, bold sans headline, gradient-blob hero, animated underline on hover, three-column "what we offer," logo cloud. They look "modern" at thumbnail size.

**Specific failure mode:** Recognizable as a template within 4 seconds. Designers in the buyer pool will spot Relume / Webflow component libraries instantly — the spacing rhythms, the icon library, the curve of the gradient blob. Once spotted, the site reads as "another AI consultant who couldn't be bothered."

**Lesson for Vectis:** Avoid stock component-library spacing rhythms. Specifically: avoid rounded-corner cards with icon-headline-paragraph structure repeated three across, avoid gradient blobs in the hero, avoid the "logos in faded gray strip" pattern. Replace each with a more editorial alternative: a single hero photograph or a single ASCII diagram instead of gradient; named case studies instead of logo cloud; ASCII or rule-line dividers instead of card grids.

---

## SECTION C — Synthesis: Visual Direction Decisions

### 1. Typography stack — confirmed and slightly refined

**Recommendation: Söhne (Buch + Kräftig) for body/UI, Söhne Mono for technical accents, GT Sectra Display Italic for editorial moments. Keep this exact stack — but consider Berkeley Mono as a stronger alternative to Söhne Mono.**

Why: Söhne is what Stripe migrated to in 2020 specifically because it reads as "geometric but warm" — exactly Vectis's target. GT Sectra is in active use by Koto and many top-tier brand studios; it's the editorial serif of the moment that doesn't feel overused (unlike Cormorant Garamond, which is the Cormorant-Garamond of cliché serif choices in 2025). Berkeley Mono is the brave swap: it's lightly more memorable than Söhne Mono and is becoming the signature mono of the AI category (Cartesia, Perplexity), but it has more personality, which is a feature for Vectis.

**The decision matrix:**
- If you want to look like a category insider but not a category clone → **Söhne + GT Sectra + Söhne Mono**
- If you want a stronger proprietary fingerprint → **Söhne + GT Sectra + Berkeley Mono**
- Reject: Inter (overused), Cormorant (cliché editorial), Tiempos (Anthropic's previous, would read as imitation).

**Type system to define before build:**
- Display 1: GT Sectra Italic, 64–88px, line-height 1.05, used 1–2× per page maximum, only inside warm-dark or inverse moments
- Display 2: Söhne Kräftig, 40–56px, line-height 1.1, default headline
- Heading 1–4: Söhne Buch / Kräftig, 32 / 24 / 20 / 16
- Body: Söhne Buch, 16–18px, line-height 1.5–1.65
- Mono Label: Söhne Mono or Berkeley Mono, 11–13px, uppercase, +60 tracking
- Mono Body: Söhne Mono / Berkeley Mono, 14–15px, line-height 1.5 (for code blocks, ASCII tables, T-state diagrams)

---

### 2. Color application — extreme restraint

**Surface area rules:**
- **Deep Ink #0E1116** — primary surface, ~70% of any given page
- **Bone #FAFAEA** — light alternative surface or inverse cards, ~25%
- **Mission White / off-white** — text only, never large surface
- **Brass #A8896C** — accent only, **≤2% of any visible surface area** at any time. Used for: one CTA per viewport, T-state active-step indicator, leader-line ink in technical diagrams, key-word emphasis underline (Anthropic-pattern), *that's it*.

**Background:** Flat dark, not gradient. The Linear 2025 refresh pulled gradients out for a reason. If you want subtle warmth, use a 1–2% noise texture overlay, not a gradient. Anthropic uses zero gradients on its dark cards.

**Bone/cream usage:** Reserve bone for the Residency section as the primary surface (inversion from SMB's deep ink default). This is your single most important visual decision — it makes the two verticals legible at a glance without requiring different domains or different navigation.

---

### 3. Layout patterns — both, in specific places

- **Single-column editorial flow:** manifesto, "Why Vectis" page, founder letter, Residency core page, blog/journal. 65–75 character line length, GT Sectra display moments, generous leading.
- **Two-column technical-spec:** SMB outcomes, T0/T1/T2/T3 explainer, deliverables list, pricing tiers comparison. Left column: Söhne label + serif description. Right column: mono spec / metric / number.
- **Card grids:** use sparingly and only with rule-line borders (no rounded corners > 4px, no shadows). Maximum two card-grid moments per page.
- **ASCII / leader-line diagrams:** primary visual element of the homepage. Replace stock illustrations entirely.

**The dominant rhythm should be prose flow, not card grids.** Most AI category sites are 80% cards / 20% prose. Vectis should be 30% cards / 70% prose. This is the single fastest way to look more premium than the category.

---

### 4. Motion language — minimal, deliberate

**Vectis should ship with three motion behaviors total:**

1. **Hover state on links and CTAs:** opacity or border color change, 150ms ease-out. Nothing more.
2. **Scroll-triggered fade-in for major section headings:** 250ms ease-out, opacity 0→1, translateY 8px→0. *Once* per section. Section bodies should not animate.
3. **One signature load animation:** the T0 → T1 → T2 → T3 progression bar fills once on hero load over ~600ms with mono-numeral counter — this is the brand's "we have personality" moment.

**Reject:**
- Marquees of any kind (overdone, currently the #1 tell of a Webflow template)
- Parallax scrolling
- Cursor-followers
- Type-by-type reveals
- Animated gradients
- Number counters that count up (clichéd)
- Hover transforms (scale, rotate, translate)

Linear and Anthropic both pulled motion *out* of their 2024–25 redesigns. The current top-tier register is restraint. Match it.

---

### 5. Image treatment — minimal, art-directed, *not documentary*

**Recommendation: Vectis uses photography sparingly (2–3 hero-grade images on the entire site at launch) and it is not documentary.**

The brand-guide call for "documentary-style photography of real operators at work" is the kind of move that *sounds* premium in a brief and *looks* generic in execution. None of the strongest references — Linear, Anthropic, Mercury, Resend, Vercel — use documentary photography. Anthropic uses Aaron Wojack-shot company-culture photography only on internal/about pages, never on home/marketing surfaces.

What the strongest references actually use:
- **Linear:** product UI screenshots, no people
- **Anthropic:** abstract editorial illustrations on marketing pages, photography only on About/blog
- **Mercury:** cinematic art-directed photography (very expensive, very few images)
- **Resend / Replicate / Cartesia:** zero photography, code/UI as visual

**What Vectis should do at V1:**
- **One hero still life** for the Residency page: a desk, a notebook, a brass-edged object, warm light. Studio-shot, not lifestyle. Mercury-register.
- **Founder portrait** for the About page: editorial, single source-light, on bone or deep-ink background. Not "team grid."
- **Zero stock photography. Zero "diverse team in office" photos. Zero AI-generated imagery.**
- For everything else: ASCII diagrams, leader-line annotations, and typography. The dimensional-callout aesthetic from the brand brief is *the* visual system. Lean into it.

---

### 6. Two-vertical site architecture

**Recommendation: One site, surface inversion, shared type system, slight palette shift.**

| | SMB Implementation | Vectis Residency |
|---|---|---|
| Primary surface | Deep Ink #0E1116 | Bone #FAFAEA |
| Headline type | Söhne Kräftig display | GT Sectra Italic display |
| Section labels | T-state mono labels (T0/T1/T2/T3) | Roman numerals (I / II / III) in mono |
| Density | Higher — outcomes, metrics, ROI tables | Lower — generous whitespace, prose flow |
| CTA tone | "Get the audit" / direct | "Apply for residency" / discreet |
| Brass usage | CTA + active T-state indicator | Underline on key words, divider rules |
| Imagery | Zero or one ASCII hero diagram | One still-life hero |

The two sections share navigation, footer, type stack, brass accent, and mono labels — but the dominant surface inversion (dark ↔ light) and the headline type choice (sans ↔ serif) does 90% of the work to make them feel like two products of one firm. Don't fragment into subpages on different domains; don't use radically different navigation. Surface + type = vertical.

---

### 7. The "9.5/10 first impression" recipe — first 10 seconds on vectisbuild.co

**Pull from the strongest references. Specifically:**

1. **Hero is one sentence in GT Sectra Italic, 64–80px, with one keyword underlined in brass** (Anthropic pattern). The sentence states a method, not a value prop. E.g., *"The operating tempo for AI-native SMBs."* The underline is on "tempo."

2. **A single mono eyebrow above it: `VECTIS · BUILD CO.`** in Söhne Mono / Berkeley Mono, 12px, +80 tracking, bone color at 60% opacity. (Linear pattern.)

3. **One sub-line in Söhne Buch 18px** explaining what that means in plain English — two clauses maximum. (Resend pattern.)

4. **A T0 → T1 → T2 → T3 progression bar that fills once on load** as the only motion element. Mono numerals count, brass fill, 600ms duration, never repeats. (Cartesia / Linear pattern.)

5. **Two CTAs: primary (brass border, deep-ink fill, "Book a calibration call") and secondary (text link with brass underline, "Read the manifesto")**. Sharp 4px corners, no shadow. (Linear / Vercel pattern.)

6. **A horizontal rule in brass at 1px** dividing the hero from the next section. No fade-out, no gradient — a literal line. (Brutalist / U.S. Graphics pattern.)

7. **Below the fold: a section that opens with a mono label `T0 / IDLE`** and a 2-line description in serif. The T-state nomenclature establishes itself immediately as proprietary noun system. (Resend / Anthropic pattern.)

If a visitor sees these seven things in the first viewport, the site reads as 9.5/10 craft *before* they read a single feature.

---

## SECTION D — Build Checklist (keep this open while building)

### Type
- [ ] Test Söhne + GT Sectra + Söhne Mono first; A/B with Berkeley Mono in mockups
- [ ] Display 1: GT Sectra Italic, 72px desktop / 44px mobile, line-height 1.05
- [ ] Display 2: Söhne Kräftig, 48px / 32px, line-height 1.1
- [ ] Body L: Söhne Buch, 18px, line-height 1.6
- [ ] Body M: Söhne Buch, 16px, line-height 1.55
- [ ] Mono Label: 12px uppercase, +80 tracking
- [ ] Mono Body: 14px, line-height 1.5
- [ ] Use serif Display 1 ONLY in dark/inverse moments and on Residency
- [ ] Underline emphasis on max ONE keyword per headline, in brass

### Color
- [ ] Deep Ink #0E1116 — never #000
- [ ] Bone #FAFAEA — never #FFF
- [ ] Mission White at 92% opacity for primary text on dark
- [ ] Brass #A8896C — never on body text, only CTA / 1px rules / underlines / T-state active
- [ ] Brass surface coverage ≤2% on any viewport
- [ ] Zero gradients. Zero box shadows. Zero glows.
- [ ] If depth needed: 1px lighter-warm border (#1A1D22 on Deep Ink), not shadow

### Spacing
- [ ] 8pt grid. Spacing tokens: 4, 8, 16, 24, 32, 48, 64, 96, 128
- [ ] Section vertical padding: 96px desktop / 64px mobile minimum
- [ ] Container max-width: 1200px; reading-column max-width: 680px
- [ ] Body line length: 65–75 characters

### Cursor / hover
- [ ] Default cursor only — no custom cursor
- [ ] Link hover: opacity 1 → 0.7, 150ms ease-out
- [ ] CTA hover: border color brass → fill brass, 150ms ease-out
- [ ] Card hover: 1px border lightens by ~8%, no transform, no shadow
- [ ] Zero scale or translate transforms on hover

### Section transitions
- [ ] 1px brass horizontal rule between major sections (not always — use selectively to mark transitions to/from manifesto moments)
- [ ] Heading scroll-fade: opacity 0→1 + translateY 8px→0, 250ms, once
- [ ] Section bodies do not animate
- [ ] No section dividers more elaborate than a 1px rule + mono label

### Mobile
- [ ] Type scales down ~60% on mobile (Display 1: 72px → 44px)
- [ ] Two-column technical-spec layouts collapse to single column with mono labels above each value
- [ ] T-state progression bar becomes vertical on mobile
- [ ] Reduce hero whitespace by ~40% on mobile
- [ ] Hover states converted to tap-active states only

### Imagery
- [ ] Maximum 3 photographs across the entire V1 site
- [ ] If using Tzvi portrait: editorial, single light source, on bone or deep-ink seamless
- [ ] Residency hero still-life: warm, desk, notebook, brass object, studio-shot
- [ ] Zero stock photography
- [ ] Zero AI-generated images
- [ ] Zero "diverse team in office" or "operator at laptop" photos
- [ ] Default to ASCII / leader-line / typographic diagrams instead of illustration

### Specific things to NOT do (anti-pattern reminders)
- [ ] **NO** gradient-blob hero
- [ ] **NO** bento grid layout
- [ ] **NO** logo cloud strip ("trusted by") — use named case studies instead
- [ ] **NO** marquee scrolling text
- [ ] **NO** parallax
- [ ] **NO** counter-up number animations
- [ ] **NO** animated underline on hover that draws from left to right
- [ ] **NO** cards with rounded corners > 4px
- [ ] **NO** drop shadows of any kind
- [ ] **NO** "What we offer" three-column icon grid
- [ ] **NO** Inter as the body typeface (signals AI-slop default)
- [ ] **NO** Cormorant Garamond as the serif (signals editorial cliché)
- [ ] **NO** documentary photography of "operators at work" at V1
- [ ] **NO** custom cursor
- [ ] **NO** dark-mode toggle (commit to one default surface per page; the dual-vertical inversion is the system)
- [ ] **NO** scroll-jacking
- [ ] **NO** loading screen with spinning logo
- [ ] **NO** chatbot widget

### Final pre-launch gut-check questions
- [ ] Could a reader mistake this for a Webflow template? (If yes, tighten.)
- [ ] Could a reader mistake this for Cohere / Deepgram / Stability? (If yes, lean further into brass + serif.)
- [ ] Does the first viewport contain a serif moment, a mono label, and a brass accent? (All three should appear above the fold.)
- [ ] Does the SMB section feel different from the Residency section without changing navigation? (Surface inversion + serif headline is the test.)
- [ ] Does the homepage have ≤3 motion behaviors total? (If more, cut.)
- [ ] If you removed all imagery, would the site still feel premium? (It should — type and layout do the work.)

---

*If everything above is honored, vectisbuild.co will land in the top 5% of the AI implementation category at launch — sitting confidently between the Linear/Anthropic poles, distinct from the Cohere/Deepgram cluster, and warm enough that a thoughtful operator will want this firm on their desk.*