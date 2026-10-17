---
artifact_id: P07-EVIDENCE
title: MoniFlow Phase 07 Test Evidence Register
version: 1.1
owner: ux-testing-design-qa-agent
lifecycle_stage: 07-testing-design-qa
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-07-testing-design-qa/test-evidence-register.md
gate_06_approval: APR-15 / Phase 06 v2.3
evidence_status: available-limited
source_fingerprints: P06 prototype v2.4; APR-15; APR-16; user-supplied preliminary review
linked_issues_returns: QA-01–QA-09
validation_status: controlled-return-revalidation-complete
required_next_action: Gate 07 re-review
---

# Test Evidence Register

| Evidence ID | Type / provenance | Scope and location | What it supports | Limitation |
|---|---|---|---|---|
| TE-01 | Reported preliminary review, supplied by requesting product decision maker | Seven listed findings in Gate 06 approval message | Intake priority only; not treated as conclusive until independently checked. | No test protocol, participant data, or recording supplied. |
| TE-02 | Local browser runtime audit, 2026-10-16 | `moniflow-mvp-prototype-v2.html`, local CDP audit | Current Ask output, filters, totals, dates, focus, active-nav state, and startup behavior. | Browser prototype only; no user or device claim. |
| TE-03 | Source inspection of approved prototype v2.3 | Current HTML/CSS/JS | Flow implementation, event handling, semantic attributes, and absence of a focus trap. | Code inspection is not a usability or compliance assessment. |
| TE-04 | Rendered 431 × 934 Phase 06 captures | `phase-06-interaction-prototype/screens/v2/` | Static visual review of key screens and icon consistency. | Still images cannot demonstrate motion, keyboard, or dynamic layout over time. |
| TE-05 | No primary usability evidence | No sessions, analytics, or personal data authorized | Explicitly records the gap for P07-TEST-PLAN. | No participant outcomes may be inferred. |
| TE-06 | Local browser controlled-return revalidation, 2026-10-16 | P06 v2.4 runtime and DOM paths | QA-01, QA-02, QA-03, QA-05, QA-07, and QA-08 corrections; session data, route recovery, totals, date routing, and keyboard behavior. | Browser prototype only; no participant, device, or screen-reader claim. |
| TE-07 | Local browser fresh-load / emulated reduced-motion audit, 2026-10-16 | P06 v2.4 startup and Settings control | No initialization exception; OS motion preference synchronizes visible toggle and programmatic pressed state. | Emulated browser preference; not a physical-device or assistive-technology test. |

## Runtime audit observations

- With Explore set to `Today`, the generic Ask answer said **“spending this month is ₹2,184”**.
- After a ₹450 sample-session entry, calculated monthly spending was **₹31,710** while the comparison response remained **₹31,260**.
- Year category values totaled **₹304,900** against the year summary **₹286,400** (difference ₹18,500).
- Empty date routed to `{ p: "year", g: "/" }`; future `2027-01-02` routed to `year / 01/2027`.
- The app emitted `TypeError: Cannot set properties of null (setting 'onchange')` at the removed category-control handler.
- Under an emulated reduced-motion preference, logic began enabled while the visible Settings toggle began off.
- Opening Add Entry moved focus inside; Escape hid the sheet but left focus on the hidden `#expense-kind` button.

## Boundary

These are reproducible prototype observations, not evidence of participant behavior, financial calculation accuracy in production, accessibility conformance, or performance on physical devices.

## Controlled-return revalidation observations

- Generic Ask correctly says **“spending today is ₹2,184”** when Today is selected. After a `₹450` session expense, monthly comparison reports **₹31,710**, matching the calculated total.
- A Dining story route visibly supplies **Clear filter**, while the period is retained. The removed category selector remains absent by design.
- Year non-income categories and the summary both total **₹286,400**. Empty, future, and pre-range dates return no entry route; valid 2 Jan 2026 routes to the valid Jan 2026 year group.
- Add Entry receives focus on open, wraps focus from the final control to the first with Tab, and returns focus to Add Entry on Escape. After routing, exactly one dock target exposes `aria-current="page"`.
- Fresh startup has no uncaught exception. Under the emulated reduced-motion preference, logic is enabled and the Settings button is visibly on and exposes `aria-pressed="true"`.
