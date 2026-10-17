---
artifact_id: P06-PROTOTYPE-ASSEMBLY
title: MoniFlow MVP Prototype Assembly and Verification
version: 2.5
owner: interaction-prototype-agent
lifecycle_stage: 06-interaction-prototype
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-06-interaction-prototype/prototype-assembly.md
source_fingerprints: Gate 06 REVISE; SRC-FLOW-REF; SRC-GOOD-AIR-REF; P03–P05 approved inputs
gate_05_direction_decision: DEC-P05-01
linked_strategy_architecture_system_decisions: P03-MVP; P04-FLOWS/STATES; P05-VISUAL-DIRECTION v2.2
linked_assumptions_questions: ASM-02, ASM-04, ASM-05; OQ-02–04
validation_status: controlled-return-corrections-revalidated-in-local-browser
required_next_action: Phase 07 Gate re-review
---

# MoniFlow MVP Prototype Assembly and Verification

## Assembly scope

[Open the browser-viewable MVP prototype](prototype/moniflow-mvp-prototype-v2.html). It is a self-contained HTML/CSS/JS reference implementation with no network calls, external dependencies, credentials, personal-financial-data collection, banking connection, or production AI integration.

It assembles the approved paths: Today orientation/details, Explore overview/transactions, local manual expense entry, bounded Ask, concept Settings, and visible loading/empty/error/recovery states. Use the small **Prototype state** selector to inspect the required non-default Explore states; it is a reviewer-only control, not product UI.

## Checked path checklist

| Path | Check | Result |
|---|---|---|
| Today → availability detail → close | Coherent availability comparison and return route | [x] direct route rendered; source reviewed |
| Dock → Explore → Overview / Transactions | Selected state and content switch | [x] direct routes rendered; source reviewed |
| Explore → Add expense → valid save | Browser-session row appears; no persistence claim | [x] entry sheet direct route rendered; source reviewed |
| Explore state selector → Loading / Empty / Error → recovery | Explicit state language and route | [x] direct state routes/source reviewed |
| Dock → Ask → suggested/custom question | Qualified sample response and basis | [x] direct route rendered; source reviewed |
| Dock → Settings → detail sheets / reduce motion | Explanations open; waves can pause | [x] direct route rendered; source reviewed |
| Platform reduced-motion preference | CSS disables wave/transition animation | [x] stylesheet reviewed |

## Supported versus unsupported

- Supported: the checked prototype paths above, 431 × 934 mobile rendering, keyboard-accessible semantic controls, labelled icons/fields, visual reduced-motion fallback.
- Unsupported: real financial calculations, login, account linking, sync, data persistence, correction workflow persistence, validation beyond required fields, actual AI, advice, save/goal features, notifications, analytics, or testing outcomes.
- Known limitations: no automated test suite; not evaluated on native mobile, assistive technologies, different browsers, or real user data. Screenshots show initial visual states only; interactive behavior must be reviewed in the browser prototype.

## Handoff

The prototype’s direct routes were rendered and the behavior source was reviewed. It is not approved, production-ready, user-tested, security-reviewed, interaction-tested, or accessibility-certified by its existence. Required human gate: `gates/gate-06-interaction-prototype-approval.md`.

## Gate 06 v2.0 functional check

The revised review target is [moniflow-mvp-prototype-v2.html](prototype/moniflow-mvp-prototype-v2.html). It was exercised in a fresh local headless-browser session on 2026-10-16. The following checks passed through rendered DOM controls rather than source inspection alone:

| Verified behavior | Result |
|---|---|
| Savings story load and automatic coordinated story change | Pass |
| Spending/Savings switch updates story and palette | Pass |
| Dining story arrow opens Explore with the matching week/category/transaction context | Pass |
| Overview/Transactions, period selector, and category route | Pass |
| Native invalid-number prevention; valid expense and income save into the browser session | Pass |
| Ask suggestion and bounded response | Pass |
| Reduce-motion setting pauses ambient motion | Pass |
| Loading, empty, error, and error recovery states | Pass |

Visual checks were re-rendered for Today, Explore Overview, Explore Transactions, entry, Ask, and Settings. See [v2 captures](screens/README.md) and the [comparison board](screens/v2/reference-comparison.html). The Good Air behavior implementation is based on Quick Look thumbnail inspection plus the supplied Gate 06 behavioral brief: an editorial statement, amount, label, and comparison change as one calm unit every 5.2 seconds; it does not claim frame-by-frame reproduction of the source video.

Not tested: native mobile keyboard/safe-area behavior on physical hardware, screen-reader output, contrast over every animated frame, real banking/AI integrations (intentionally absent), or user outcomes.

## Final targeted-correction validation

After the last Gate 06 correction, a fresh local headless-browser run passed 17 checks: data-supported Savings stories, timed coordinated change, Spending semantics, contextual evidence route, absence of the category dropdown, quiet Explore surface, period control, category route, native invalid-number prevention, selected-date entry routing, Today update after entry, income entry, Ask, reduced motion, and error/loading/empty recovery states. Primary screens were re-rendered at 431 × 934. This is browser-prototype verification only; it does not certify physical-device contrast, assistive technology, or user comprehension.

## Today-only ambient-motion verification

The existing Today background layers now animate their gradient focal points at staggered 84–104 second cycles in addition to their existing slow shape motion. The change is scoped to `.app:not(.quiet)`, so non-Today routes retain their quiet surfaces. A fresh local browser run passed 18 checks, including an assertion that the new gradient-drift animations are active on Today, the existing quiet Explore assertion, and the existing reduced-motion control assertion. Savings and Spending captures were refreshed at 431 × 934. No interaction behavior, story copy, geometry, or non-Today screen was changed.

## Final Gate 06 UI-refinement validation

A fresh local browser run passed 20 checks. It asserted the approved 59 px headline rhythm, data-supported availability copy, ambient drift, in-place coordinated story fade, headline reveal, Spending palette/state, contextual evidence route, absence of the Explore context-box element, period/category routes, selected-date entry behavior, SVG-backed entry categories, Ask continuity, reduced motion, and error/loading/empty recovery. Savings, Spending, Explore Overview, Explore Transactions, entry, and Settings were rendered at 431 × 934 and visually inspected. This remains browser-prototype verification only; it does not certify physical-device behavior, assistive technology, or user comprehension.

## Gate 07 controlled-return correction and validation

Gate 07 returned the prototype only for QA-01 through QA-09. The active runtime is now a single self-contained implementation; the retired v2.3 runtime is deliberately inert and no removed-control handler executes. The correction does not change the approved Today composition, animation, visual direction, navigation, MVP boundary, or deferred refinements.

| QA item | Correction | Revalidation result |
|---|---|---|
| QA-01 | Ask labels the actual selected period and uses current session totals for comparison. | Today response names `today` and `₹2,184`; month comparison after a `₹450` entry reports `₹31,710`. |
| QA-02 | Contextual category routes include a visible **Clear filter** control. | Dining route retains the selected period; clearing returns all categories. |
| QA-03 | Year `Home` fixture reconciled to the `₹286,400` summary. | Visible non-income categories sum to `₹286,400`. |
| QA-04 / QA-09 | Motion button exposes `aria-pressed`, synchronizes initial OS preference, and updates visual state. | Emulated reduced-motion startup has logic enabled, visual toggle on, and `aria-pressed="true"`. |
| QA-05 | Dates are required and limited to 1 Jan–31 Oct 2026; invalid values are rejected before save. | Empty, future, and pre-range values return no routing metadata; valid 2 Jan routes to Jan 2026. |
| QA-06 | Retired duplicate runtime cannot run; active runtime has no removed selector dependency. | Fresh initialization audit reports no uncaught exceptions. |
| QA-07 | Sheets retain an invoking control, trap Tab/Shift+Tab, and restore focus on Escape/close. | Add Entry wraps focus and Escape returns focus to Add Entry. |
| QA-08 | Active dock target explicitly receives `aria-current="page"`; all others remove it. | Exactly one valid current-page value observed after routing. |

This is a local browser-prototype check, not a physical-device, screen-reader, or accessibility-conformance claim. DFR-01 (storytelling), DFR-02 (typing reveal), and DFR-03 (ambient movement) remain intentionally deferred.

## Gate 07 targeted visual-regression correction

The Gate 07 visual review confirmed that Today’s active semantic indicator classes remain outcome-based and retain their approved muted green, muted dark-red, and charcoal treatments; no Today change was needed. It identified a narrow Explore Top Categories rhythm regression: names and percentage comparisons were inline and the header began too tightly. The implementation now adds only category-card top/header spacing and a stacked name/comparison treatment. It does not change data, routes, interactions, cards, visual direction, or the three deferred refinements. See the [targeted visual review](../phase-07-testing-design-qa/visual-regression-review.md).
