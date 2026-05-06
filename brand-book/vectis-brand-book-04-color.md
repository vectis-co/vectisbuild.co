# `/vectis · color`

> *Three colors. One accent. Discipline as palette.*

## The palette

```
Bone           #FAFAEA       primary surface — sales, educational, warm
                             RGB 250 · 250 · 234

Deep Ink       #0E1116       primary surface — technical, operator, cinematic
                             RGB 14 · 17 · 22

Brass          #A8896C       single accent — ≤2% surface area on either ground
                             RGB 168 · 137 · 108

Mission White  #FFFFFF       reserved — only for Bone-on-white inversion edge
                             RGB 255 · 255 · 255       cases (favicons, app icons)
```

Three colors carry the entire system. Brass is the only chromatic accent. White is reserved — never used as a primary surface, only as a technical edge case.

## Surface usage

```
Bone-dominant       sales / educational / warm surfaces
                    → website hero, proposal cover, letterhead,
                      business card front, teaching content,
                      brand book pages, long-form editorial

Deep Ink-dominant   technical / operator / cinematic surfaces
                    → business card back, founder portraits,
                      code blocks, product/launch announcements,
                      dashboards, dark-mode product UI

Brass               ≤2% surface area on either ground
                    → slash chrome (/vectis), square-on-i,
                      bracket frame, single keyword underline,
                      one CTA per viewport, T-state active indicator,
                      leader-line ink in technical diagrams

White               favicon background, app icon edges,
                    print bleeds where Bone reads too warm
```

Surface choice is contextual, not arbitrary. A proposal cover is Bone because it's a sales surface that needs warmth. A code block is Deep Ink because it's a technical surface that needs precision. The rule is the rule across all artifacts.

## The ≤2% rule

Brass is the only chromatic note in the system. At more than 2% of any surface, it stops being an accent and becomes a brand color — the category tell of an AI startup using a Webflow template. At ≤2%, it carries weight precisely because it's rare.

```
Allowed Brass surfaces per viewport:

─ /vectis slash + square-on-i + brackets in the lockup
─ One CTA per viewport (button border + slash + arrow)
─ Active T-state indicator (T2 ALIGN underline, etc.)
─ Single keyword underline in one Display or H1
─ Leader-line ink in a single technical diagram
─ Optional: one mono label segment in a footer

Never:
─ Body text (Brass on Bone fails accessibility contrast)
─ Background fills, gradients, or large color blocks
─ Multiple CTAs on the same screen
─ Hover states (use opacity or weight shifts instead)
─ Decorative use without a structural function
```

If a partner finds themselves adding "just a little more Brass" to a layout, the answer is no. Restraint is the brand.

## Pairings + contrast

```
Bone surface (#FAFAEA)
  Body text:        Deep Ink #0E1116        21.0:1 contrast  AAA
  Caption:          Deep Ink at 70%         14.7:1 contrast  AAA
  Accent:           Brass #A8896C            3.5:1 contrast  AA Large only
                    Brass for body fails AA — never use Brass for paragraph text

Deep Ink surface (#0E1116)
  Body text:        Bone #FAFAEA            21.0:1 contrast  AAA
  Caption:          Bone at 70%             14.7:1 contrast  AAA
  Accent:           Brass #A8896C            6.0:1 contrast  AA
                    Brass on Deep Ink reads stronger than on Bone — usable for
                    short labels and CTAs, not for body
```

When inverting a layout (Bone → Deep Ink or vice versa), all three colors swap proportionally. The palette is symmetric: nothing in the system requires one ground over the other.

## What's not in the palette

The system does not include:

```
─ Secondary or tertiary brand colors
─ Tints, shades, or tonal ranges of Brass
─ Status colors (success green, error red, warning yellow)
   → use Brass for active state, neutral for inactive, no color coding
─ Gradient stops, gradient backgrounds, or transitional fills
─ Off-brand neutrals (grays, beiges, taupes other than Bone/Deep Ink)
```

When something needs visual differentiation that the palette doesn't provide, use typography weight, scale, or position — not color. Color is for hierarchy, not categorization.

## Don'ts

```
Never:
─ Add a fourth color to the palette
─ Use Brass for body copy, hover states, or decorative emphasis
─ Render Brass at less than 100% opacity (no faded Brass)
─ Use White as a primary surface (Bone is the warm surface, not white)
─ Apply gradients, glows, or color overlays anywhere in the system
─ Recolor the slash chrome, square-on-i, or bracket frame
─ Introduce status colors — use type, position, or T-state instead
─ Mix Bone and Deep Ink in the same surface (pick one ground per artifact)
```

---

`vectis-brand-book · v1 · page 04 · 2026-05-05 · internal`
