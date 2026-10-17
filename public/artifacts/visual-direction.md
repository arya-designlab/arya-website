---
artifact_id: P05-VISUAL-DIRECTION
title: MoniFlow Approved Visual System Direction
version: 2.2
owner: content-ui-design-system-agent
lifecycle_stage: 05-content-ui-system
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-05-content-ui-system/visual-direction.md
visual_board_path: Projects/MoniFlow/outputs/phase-05-content-ui-system/visual-reference/today-reference.html
status: approved-gate-05
source_fingerprints: G04 APPROVE 2026-10-15; MONIFLOW-DESIGN sha256:252588bf; MONIFLOW-IMPLEMENTATION-PROMPT sha256:49d7c6b0; moniflow-home-reference sha256:690b1487; P04-IA sha256:a209c3a2; P04-STATES sha256:d4ddc55d
evidence_references: E-MF02-01, E-MF04-01, E-MONI-DESIGN-01, E-MONI-PROMPT-01, E-MONI-REF-01
linked_strategy_and_architecture_decisions: P03-CONCEPT v1.0, P03-MVP v1.0, P04-IA v2.0, P04-STATES v2.0
linked_assumptions: ASM-02, ASM-03, ASM-05
linked_open_questions: OQ-02, OQ-03, OQ-04
accessibility_requirements: WCAG 2.2 AA target stated by supplied design system; text-safe wave regions; redundant state signals; reduced-motion static fallback
dependencies_and_constraints: Architecture governs function; supplied reference governs appearance; this Phase 05 reference is not Phase 06 interaction approval
validation_status: approved-after-final-content-correction
required_next_action: Phase 06 implementation input
---

# MoniFlow Approved Visual System Direction

## System Content

### Authority and intent

This revision replaces the prior three Phase 05 visual explorations. The authoritative visual target is the supplied [MoniFlow Home reference](../../input/references/moniflow-home-reference.png), governed by [MONIFLOW-DESIGN.md](../../input/references/MONIFLOW-DESIGN.md) and [MONIFLOW-IMPLEMENTATION-PROMPT.md](../../input/references/MONIFLOW-IMPLEMENTATION-PROMPT.md).

When inputs conflict: approved UX architecture and human gates decide **what** MoniFlow does; the supplied Home reference decides **how it looks**; Apple-derived discipline in `MONIFLOW-DESIGN.md` provides structure; Arc-derived principles provide only purposeful motion and atmospheric relationships. The previously generated Direction 01–03 boards, textures, and comparison are **superseded**, retained only as historical Phase 05 v1.0 records.

MoniFlow is an immersive, light, mobile-first financial canvas—not a dashboard. Each primary screen introduces one financial story, allows generous quiet space, and uses data as an understandable consequence of that story.

### Visual grammar

| Aspect | System rule |
|---|---|
| Canvas | Near-white, warm full-bleed field with broad connected mint, aqua, lemon, and peach contours. Layers resemble softly lit paper or landscape forms—not blobs, aurora, neon, stock illustration, or a decorative data chart. |
| Hierarchy | One editorial statement or one principal money value per viewport; display copy naturally wraps in sentence case. |
| Emphasis | Deep green (`#17795D` / `#075C49`) for selected state, primary money result/action, and qualified positive progress. Neutral ink carries most copy. |
| Surfaces | Low-elevation, exceptional utility surfaces only. Cards do not form the default page structure. Frosting is reserved for bottom navigation and quiet overlays. |
| Navigation | Four-item frosted bottom navigation: Today, Explore, Ask, Settings. It is wide, floating, thumb-reachable, and visually recessive. |
| Financial clarity | Period, basis, source/coverage, uncertainty, and correction route remain explicit. Ambient color never communicates financial state. |

### Motion principles

The background is a live atmospheric field: three to five oversized clipped wave layers may translate by at most 3% of the viewport and scale at most 2% over 18–32 seconds, alternating direction with `ease-in-out`. Motion uses transforms only. It never represents a value, status, data freshness, or a financial result.

Route transitions are 220–280 ms opacity plus 4–8 px translation; sheets use 280 ms bottom translation plus opacity; presses use 120–160 ms `scale(.97)`; data reveals once in 180–240 ms. No bounce, rolling totals, or visually urgent movement. Under `prefers-reduced-motion: reduce`, all ambient animation stops and the composed static field remains.

### Screen application rules

| Area | Application of the system | Functional boundary |
|---|---|---|
| Today | Closest reference match: immersive story, wide whitespace, primary amount, qualified change chip, optional labelled detail action, frosted dock. | MVP orientation; no functional goal requirement. |
| Explore | Calmer field, stronger data contrast; title, Add expense, Overview/Transactions segmented control, one restrained visual when it answers a question. | Spending evidence/exploration only as approved. |
| Ask | Calm field, concise answer first, supporting basis/uncertainty second, bottom composer above dock. | One bounded question pathway; not advice. |
| Settings | Plain grouped list on a calm field; no immersive hero. | Only approved preferences, data/control concepts, and boundaries. |
| Savings/goals | May borrow the positive story format only when a later strategy decision permits it. | Broader vision—not MVP functionality. |

### Visual-fidelity refinement — 16 October 2026

The Today reference was refined directly against the supplied Home image. The editorial copy now uses lighter 300-weight system display styling with reduced scale/tracking; top controls and dock icons use a consistent restrained stroke; unnecessary visible metadata was removed from the hero; the dock gained a layered translucent blur, border highlight, and restrained separation shadow; and wave contours were shaped into clearer connected forms. The ambient transform-only animation and `prefers-reduced-motion` static fallback are unchanged.

### Final Today content correction — 16 October 2026

The approved reference now tells one visible illustrative story: “You have a little more room this month.” with **₹43,200 available this month** and **↑ 24% vs. last month**. The comparison is programmatically described as an increase in the *available amount*; period, coverage, and calculation context remain in the approved detail flow. This changes no layout, motion, visual hierarchy, feature scope, or data claim.

### Browser-viewable reference

[Open the animated Today reference](visual-reference/today-reference.html). [Open the reference comparison](visual-reference/today-reference-comparison.html). The rendered comparison uses the reference’s 431 × 934 CSS-pixel viewport (3× output: 1293 × 2802) beside the supplied image. The implementation preserves the approved MVP through an orientation story and “available this month” result; it does not imply a working goal or bank connection.

## Basis and Uncertainty

| Basis ID | Type | Locator | Rule | Limitation/dependency |
|---|---|---|---|---|
| MONI-DESIGN | Authoritative design system | `input/references/MONIFLOW-DESIGN.md` | Defines visual tokens, wave behavior, component treatment, motion, accessibility target. | Does not override architecture. |
| MONI-REF | Authoritative visual reference | `input/references/moniflow-home-reference.png` | Defines visual language and Today composition. | A visual source, not evidence of usability or functional scope. |
| P04-IA / P04-STATES | Approved architecture | Phase 04 v2.0 | Preserve MVP structure, data uncertainty, correction and control states. | No interaction redesign. |
| E-MF04-01 | Brand input | MF-04 | Calm, personal, intelligent, reassuring, contemporary, quietly pleasurable. | No user preference validation. |

- Accessibility: target WCAG 2.2 AA as supplied; measurement and implementation validation remain Phase 06/engineering work.
- Assumptions/questions: ASM-02, ASM-03, ASM-05; OQ-02–04.
- Risks: moving waves can reduce contrast; use text-safe zones/local veil and static fallback. An immersive field must not hide data coverage or material changes.
- Visual-reference provenance: user-supplied MoniFlow Home reference; no new generated image used.
- Visual selection status: `SUPPLIED DESIGN SYSTEM — APPROVED AT GATE 05`.

## Validation and Handoff

- Validation status: refined animated Today implementation and reference-viewport comparison present; final coherent content correction applied; original exploration superseded.
- Required next action: Phase 06 implementation within approved architecture and MVP scope.
- Required human gate: `gates/gate-05-content-ui-design-system-approval.md`

Gate 05 approval authorizes Phase 06 only; Gate 06 remains required before Phase 07.
