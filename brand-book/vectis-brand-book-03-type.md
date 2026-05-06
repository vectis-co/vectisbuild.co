# `/vectis · type`

> *Three faces, three jobs, one voice.*

## The three-face architecture

```
Primary:           IBM Plex Mono       body, captions, UI, file metadata,
                                       labels, code, T-state, forms, nav.
                                       Carries the system. Every long-form
                                       prose surface is set in Plex.

Header + Display:  Clash Grotesk       H1, H2, H3, hero promises, document
                                       titles, the wordmark itself.
                                       Provides visual contrast against the
                                       mono body.

Italic:            Newsreader Italic   editorial moments only — manifesto 
                                       lines, pull quotes, single-keyword 
                                       emphasis. Replaces Plex Mono's lack 
                                       of real italic.
```

Plex Mono carries the system. Clash Grotesk carries the headers. Newsreader Italic carries the manifesto.

This is a deliberate inversion of the typical brand stack. Most B2B brands use a sans face for body (default, easy, generic) and reserve mono as accent. Vectis flips it: the mono is the primary face, sans is the secondary. The result is a brand that reads "engineered editorial" by default — closer to U.S. Graphics and Metis than to a typical AI implementation firm.

## Type scale

```
Display              Engineered to compound. Designed to stand out.
                     Newsreader Italic 400-500 · 60-80px · 1.1 line-height
                     For hero promises, manifesto lines, document covers.
                     Final weight calibrated in sandbox per surface.

H1                   Build the systems that compound.
                     Clash Grotesk Bold · 48px · 1.15 line-height

H2                   How Vectis works
                     Clash Grotesk Medium · 32px · 1.2 line-height

H3                   The audit phase
                     Clash Grotesk Medium · 22px · 1.3 line-height

Body                 We build AI implementation systems for the operators
                     of $1M-$50M companies. The work is engineered to
                     compound. The deliverable is the system in production,
                     not the recommendation.
                     IBM Plex Mono Regular · 15-17px · 1.6 line-height

Caption              Note: assumes a Q3 baseline of 12 sales reps.
                     IBM Plex Mono Regular · 12-13px · 1.5 · deep ink 70%

Mono label           /vectis · proposal · shua · 2026-05-12
                     IBM Plex Mono Regular · 13px · 1.4

Code                 await fetch('/api/audit', { method: 'POST' })
                     IBM Plex Mono Regular · 15px · 1.6
                     (Inline mono in body — same face, same weight.
                     The body and code are typographically continuous.)
```

## How the three faces interact

```
Eyebrow (mono)      /vectis · t1 align · the audit phase

Display (italic)    Engineered to compound.
                    Designed to stand out.

Sub (mono body)     We build AI implementation systems for the operators
                    of $1M-$50M companies. The deliverable is the system
                    in production, not the recommendation.

CTA (mono)          [ / begin engagement → ]
```

This is the canonical hero pattern. The mono establishes context (eyebrow), the italic delivers the editorial moment (display), the mono carries the explanation (body), and the mono closes the action (CTA). The italic appears once. Everything else is mono.

For surfaces without a manifesto moment (most pages), Clash Grotesk Bold replaces the italic at H1 size. Same hierarchy, no italic, faster scan.

## Italic discipline

Newsreader Italic appears at most once per page or screen. It is reserved for editorial moments — content where the prose is making a claim, a positioning statement, or carrying emotional weight.

```
Use Newsreader Italic for:
─ Hero promise on the marketing page
─ The headline of a proposal cover
─ One pull-quote in a long-form journal post
─ Manifesto lines in case studies
─ The display moment on each brand book page (one per spread)

Don't use it for:
─ Body text emphasis (use Clash Grotesk Bold inline, or weight + 
  brass underline)
─ More than one moment per surface
─ UI labels, captions, navigation, or anything sub-display
─ Page titles where the page is functional, not editorial
  (use Clash Grotesk Bold instead)
```

The italic moment is rare on purpose. It works because it's not decoration.

## Weights

Lock the minimum weights per face. Don't introduce more without a specific use case.

```
IBM Plex Mono:       400 (Regular)    body, captions, UI, code, mono labels
                     500 (Medium)     when emphasis is needed in mono
                     No italic. Mono italics break the technical register.

Clash Grotesk:       500 (Medium)     H2, H3, mid-emphasis
                     700 (Bold)       H1, wordmark, hero non-italic display
                     No italic. Italic moments are Newsreader only.

Newsreader Italic:   400 (Regular Italic)  editorial moments at 60-80px
                     500 (Medium Italic)   when slightly heavier emphasis 
                                           is needed against Clash Bold
                     Variable font — final per-surface weight 
                     calibrated in sandbox.
```

## Where to get them

```
IBM Plex Mono       fonts.google.com/specimen/IBM+Plex+Mono
                    SIL Open Font License · free for commercial use

Clash Grotesk       fontshare.com/fonts/clash-grotesk
                    Indian Type Foundry · free for commercial use
                    Free Fontshare account required for download

Newsreader Italic   fonts.google.com/specimen/Newsreader
                    SIL Open Font License · free for commercial use
                    Variable font — italic axis included
```

All three embeddable in client sites built by Vectis. No license issues for self-hosting, web fonts, or distribution in deliverables.

## Don'ts

```
Never:
─ Substitute another typeface for any of the three slots
─ Use Plex Mono for headlines or hero promises (those are Clash + Newsreader)
─ Use Clash Grotesk for body copy or long-form prose (that's Plex's job)
─ Use Newsreader for anything except the editorial italic moment
─ Use Newsreader in upright (non-italic) weight — italic only
─ Apply more than one Newsreader Italic moment per surface
─ Add Clash Grotesk Italic — italic = Newsreader only
─ Add Plex Mono Italic — mono = upright only
─ Add a fourth face for any reason
─ Underline body text — use color, weight, or position for emphasis
─ Use ALL CAPS in body — mono labels and ASCII headers only
```

---

`vectis-brand-book · v1 · page 03 · 2026-05-06 · internal`
