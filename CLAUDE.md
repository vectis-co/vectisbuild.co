# CLAUDE.md — vectisbuild.co

This is the repo for **Vectis** — a four-partner firm building AI implementation systems for SMBs and 1:1 AI fluency for individuals. This file orients Claude Code for every session in this codebase.

## Read first

Before touching any code or copy, read these files in `/docs`:

1. **`docs/vectis.md`** — the spine. Full positioning, verticals, brand direction, workstreams, open questions. Source of truth.
2. **`docs/vectis-summary.md`** — short backbone if you only need quick orientation.
3. **`docs/about-tzvi.md`** — operator profile and voice preferences. Always match this voice when drafting copy.

When the work is specifically about competitive positioning, premium-coaching market, or design references, pull the corresponding research file from `/docs`. Don't load all three by default.

## Operating principle

Everything in `/docs` is **directional, not immutable.** Vectis is launching, not planning. Push back, suggest improvements, and flag when something written in project knowledge is no longer the best call. Critical thinking over deference. If you have a strong reason to deviate from what's in the spine, say so before deviating — don't just override it silently.

## Voice

Match Tzvi's voice in all copy and code comments:

- Direct, short sentences
- No corporate buzzwords (especially "strategic," "spearheaded," "all in," "unlock," "transform")
- No hedging or sycophancy
- TLDRs after long outputs
- Fast editorial calls — surface only what genuinely needs Tzvi's input

Read `docs/about-tzvi.md` for full preferences.

## Build conventions

- **Framework:** [decide and document — likely Next.js or Astro on Vercel]
- **Type stack:** Söhne (body + UI), GT Sectra Display Italic (manifesto moments), Söhne Mono or Berkeley Mono (technical accents). Berkeley Mono decision pending mockups.
- **Color tokens:**
  - `--deep-ink: #0E1116` (primary surface, ~70% of viewport)
  - `--bone: #FAFAEA` (inverse surface, Residency primary, ~25%)
  - `--mission-white: #FAFAEA` (text only)
  - `--brass: #A8896C` (accent only, ≤2% surface area)
- **Spacing:** 8pt grid — tokens 4, 8, 16, 24, 32, 48, 64, 96, 128
- **Container max-width:** 1200px
- **Reading column max-width:** 680px
- **Border radii:** never above 8px. Cards stay at 4px.
- **Motion:** three behaviors total — hover state (150ms ease-out), section heading scroll-fade (250ms once), single T0 → T3 progression bar load animation (~600ms once). No marquees, no parallax, no scroll-jacking.

Full pre-launch build checklist in `docs/research-3-visual-gravity-scan.md` — keep that file open during build sessions.

## Anti-patterns (do NOT ship)

- Gradient blobs, bento grids, logo clouds, marquee scrolling, parallax
- Inter as body typeface, Cormorant Garamond as serif
- Documentary "operators at work" photography
- Chatbot widget, dark-mode toggle, custom cursor
- Rounded corners over 8px, drop shadows, animated counters
- Box shadows of any kind — depth comes from surface contrast (1px lighter-warm border on Deep Ink: `#1A1D22`)

## Brand language — /vectis as system

The forward slash is locked as official chrome. Use it across:

- **Product voice:** `/vectis deploy`, `/vectis audit`, `/vectis align`
- **URL architecture:** `/audit`, `/residency`, `/journal`, etc.
- **Mono labeling:** `/VECTIS · T2 ALIGN`, `/VECTIS · CASE 003` — slash + dot separator pattern, used as section eyebrows and metadata.

The `.co` suffix is malleable — Vectis Co. on letterhead, Vectis Command in product copy, Vectis Collective for community/Cabinet language. Same root, different register per context.

## Two-vertical site architecture

One site, surface inversion to distinguish verticals:

| | SMB Implementation | Vectis Residency |
|---|---|---|
| Primary surface | Deep Ink #0E1116 | Bone #FAFAEA |
| Headline type | Söhne Kräftig display | GT Sectra Italic display |
| Section labels | T-state mono labels (T0/T1/T2/T3) | Roman numerals (I / II / III) in mono |
| Density | Higher — outcomes, metrics | Lower — generous whitespace, prose flow |
| CTA tone | Direct ("Get the audit") | Discreet ("Apply for residency") |

Shared nav, type stack, brass accent, footer.

## What this repo is for

- Site code for `vectisbuild.co`
- Site copy (committed alongside code so it's reviewable/diffable)
- Brand assets in `/brand`
- Spine docs in `/docs`

## What this repo is NOT for

- The Operator Brief artifact (lives separately, owned by Sam + Tzvi as a Residency deliverable)
- Internal partner agreements or legal docs (separate workstream)
- Outbound automation code (Isaac-owned, separate Cowork stack)

## Update protocol

The `/docs` files in this repo are the canonical version. When a doc changes:

1. Edit in this repo, commit with a clear message ("Update Residency tier dollars after partner sync 5/15")
2. Drag the updated file into the Vectis project knowledge on Claude.ai so chat sessions stay current
3. The Claude.ai project is the synced copy; this repo is the source of truth

## Tzvi's W2 constraint

Tzvi is currently W2 at Faropoint and **cannot be public-facing as Vectis CEO until end of year**. Do not draft content that names him publicly. Internal docs and partner-facing material are fine. Sam fronts publicly through year-end.

## When uncertain

`docs/vectis.md` is the source of truth. If something in this CLAUDE.md conflicts with the spine, the spine wins.
