---
artifact_id: P03-CONCEPT
title: MoniFlow Concept Direction — Explainable Financial Orientation
version: 1.0
owner: ux-strategy-agent
lifecycle_stage: 03-strategy
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-03-strategy/concept-direction.md
status: current
source_fingerprints: Approved Phase 02 through P02-READY v4.0; SRC-MF01–SRC-MF05 current; EXT-01–EXT-10 accessed 2026-10-15
evidence_references: E-EXT-01, E-EXT-02, E-EXT-04, E-EXT-05, E-EXT-06, E-MF01-02, E-MF02-01
linked_assumptions: ASM-01, ASM-02, ASM-04, ASM-05
linked_open_questions: OQ-01, OQ-02, OQ-03, OQ-04
constraints_and_dependencies: Simulated/authorized sample data only; validation of value, comprehension, trust, and data boundaries required
validation_status: passed
required_next_action: Gate 03 review
approval_status: awaiting-human
---

# MoniFlow Concept Direction — Explainable Financial Orientation

## Strategy Content

**Concept hypothesis:** Start with a concise, time-bounded financial orientation around a question or change; let the person progressively inspect the records, coverage, comparison, assumptions, and corrections behind it. The experience should support an informed next step without requiring continuous bookkeeping, a fixed budgeting method, or reliance on an unqualified AI answer.

**Core value to test:** “Can a person understand what changed and why, with enough evidence and control to decide whether to investigate or act?”

**Included concept scope:** orientation on a defined sample-data period; an understandable comparison; drill-down to underlying records; coverage/freshness/uncertainty disclosure; visible correction paths; and a bounded, explainable question/scenario pattern.

**Explicit exclusions:** live account connection, production categorization, personalized financial advice, investment management, automated action, guaranteed affordability prediction, and a prescribed dashboard, navigation, visual style, or AI implementation.

**Testable hypotheses:** low-effort orientation will be more useful than raw records alone (ASM-01/02); inspectability/correction will support appropriately calibrated confidence (ASM-05); conversational access may add value only when its basis and limits are visible (ASM-04).

## Basis, Constraints, and Uncertainty

| Basis ID | Type | Locator | Permitted claim | Limitation/dependency |
|---|---|---|---|---|
| E-EXT-01 | Qualified research | P02 synthesis | Timely, low-effort feedback is worth testing. | U.S. context only. |
| E-EXT-02 | Survey context | P02 synthesis | Comprehension should be an outcome. | Not a concept preference finding. |
| E-EXT-04–05 | Guidance/experiment | P02 synthesis | Provenance, control, uncertainty, and recovery are valid test dimensions. | Not legal/production guidance. |
| E-EXT-06 | Comparable patterns | P02 competitor review | Overview-to-record/correction patterns are observable. | Not requirements or effectiveness proof. |
| E-MF01-02 / E-MF02-01 | Scope/requirements | P01 artifacts | Bounded decision support and inspectability are stated constraints. | Feasibility and priority unvalidated. |

- Assumptions: ASM-01, ASM-02, ASM-04, ASM-05.
- Open questions: OQ-01 through OQ-04.
- Contradictions: None resolved; this direction intentionally defers the prominence of AI and proactive prompts.
- Risks: Implied completeness, certainty, or advice; overload from excessive explanation; mistaking sample data for live coverage.
- Exclusions: Any architecture, visual direction, or feature commitment beyond the testable concept boundary.

## Validation and Handoff

- Validation status: passed.
- Required next action: Gate 03 review.
- Required human gate: `gates/gate-03-ux-strategy-approval.md`

This artifact is not approval and cannot authorize Phase 04.
