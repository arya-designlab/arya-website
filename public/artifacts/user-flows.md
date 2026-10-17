---
artifact_id: P04-FLOWS
title: MoniFlow Product User Flows
version: 2.0
owner: ux-architecture-agent
lifecycle_stage: 04-architecture
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-04-architecture/user-flows.md
status: current
source_fingerprints: Gate 03 APPROVE 2026-10-15; P03 package v1.0; P04-IA v1.0
evidence_references: E-MF02-01, E-EXT-01, E-EXT-04, E-EXT-05
linked_strategy_decisions: P03-CONCEPT v1.0, P03-MVP v1.0
linked_assumptions: ASM-01, ASM-02, ASM-04, ASM-05
linked_open_questions: OQ-01, OQ-02, OQ-03
dependencies_and_constraints: Flow logic is sample-data concept behavior, not implementation or UI specification
validation_status: passed
required_next_action: Gate 04 review
---

# MoniFlow Product User Flows

## Architecture Content

| Flow | Scope | Entry and goal | Core route | Decisions / alternate route | Completion / return |
|---|---|---|---|---|---|
| F01: Everyday check-in | MVP | Open MoniFlow simply to understand the current picture. | Home overview → current period/change → coverage cue → inspect or exit. | If nothing is notably represented, show a calm neutral/limited-coverage orientation—not a forced task. | Person leaves with a bounded understanding of what is represented and what is not. |
| F02: Explore spending | MVP where sample data represents spending | From Home or an insight, understand spending over a relevant period. | Money activity → spending comparison/category → records → return to overview. | If partial/ambiguous data, qualify the comparison; correction route remains available. | Person can inspect the represented basis of a spending story. |
| F03: Inspect and correct | MVP | From spending, an insight, or a record, verify/correct a representation. | Detail → underlying record → correction/gap action → requalified result. | If correction is unsupported, explain the limit and preserve a return route. | Confirmation that the change is represented or needs follow-up; return to affected context. |
| F04: Explore an insight or bounded question | MVP/P1 | From an overview or activity context, ask why a change occurred or explore one assumption-based scenario. | Insight/question → available basis + assumptions → qualified response or boundary → inspect evidence. | If data, scope, confidence, or safety is insufficient, state why and offer a safe next step. | Person can distinguish observation, interpretation, and assumption; return to context. |
| F05: Review savings / progress | Broader vision; not MVP commitment | From overview or Money activity, understand represented saving capacity/progress. | Savings view → basis/period → goal/progress detail. | If savings definition/coverage is unclear, qualify rather than compute a definitive value. | Future capability; requires evidence, definitions, and scope approval. |
| F06: Explore a goal | Broader vision; not MVP commitment | From savings or Home, inspect a goal and an optional scenario. | Goal → progress/assumption → scenario → bounded next step. | If assumptions or data are missing, boundary/refusal state. | Future capability; no commitment to goal creation or automation. |
| F07: Understand data/control | MVP concept; broader settings vision | From a coverage/control cue, understand represented data and manage a simulated preference. | Control explanation → purpose/scope/limitation → simulated management action. | If unavailable, show non-live boundary and return. | Person understands this is a concept representation, not a live connection. |

## Basis and Uncertainty

| Basis ID | Type | Locator | Architectural implication | Constraint/dependency |
|---|---|---|---|---|
| P04-IA | Architecture | Information architecture v2.0 | Everyday and exploration flows are situated in a broader product model while retaining cross-cutting evidence/control. | No screen/path pattern defined. |
| P03-CONCEPT / P03-MVP | Strategy | Phase 03 | Limit flows to testable concept scope. | AI and control routes are bounded P1 concept paths. |
| E-MF02-01 | Requirement | P01 requirements | Detail, correction, uncertainty, and safe boundary must be reachable. | Business/data rules unknown. |

- Assumptions: ASM-01, ASM-02, ASM-04, ASM-05.
- Open questions: OQ-01, OQ-02, OQ-03.
- Accessibility considerations: Each flow needs a keyboard/assistive-technology-equivalent route, understandable headings/statuses, and a non-color signal for changes/gaps; later design must adapt this model across screen sizes.
- Risks: A flow completion statement must not be mistaken for actual comprehension or consent.

## Validation and Handoff

- Validation status: passed; v1.0 preserved as `user-flows-v1.0.md`.
- Required next action: Gate 04 review.
- Required human gate: `gates/gate-04-ux-architecture-approval.md`

This artifact is not approval and cannot authorize Phase 05.
