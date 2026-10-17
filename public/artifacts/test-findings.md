---
artifact_id: P07-FINDINGS
title: MoniFlow Phase 07 Test Findings
version: 1.1
owner: ux-testing-design-qa-agent
lifecycle_stage: 07-testing-design-qa
project_root: Projects/MoniFlow/
output_path: Projects/MoniFlow/outputs/phase-07-testing-design-qa/test-findings.md
gate_06_approval: APR-15 / Phase 06 v2.3
evidence_status: available-limited
source_fingerprints: TE-01–TE-05
linked_issues_returns: QA-01–QA-09; DFR-01–DFR-03
validation_status: controlled-return-findings-revalidated
required_next_action: Gate 07 re-review
---

# Test Findings

## Evidence-backed prototype findings

| Finding | Classification | Evidence | Interpretation | Recommendation |
|---|---|---|---|---|
| Ask changes its calculation with Explore’s selected period but keeps “this month” wording; comparison ignores session entries. | Observed runtime defect | TE-02 | The answer can state a wrong time scope and stale total. | QA-01 / return Phase 06. |
| A contextual category route has no visible clear-filter control after the category selector was removed. | Observed runtime defect | TE-02, TE-03 | People may be unable to return to all transactions for the same period. | QA-02 / return Phase 06. |
| Year summary and listed categories do not reconcile. | Observed data-fixture defect | TE-02 | The prototype can undermine confidence in its financial orientation. | QA-03 / return Phase 06. |
| Reduced-motion preference does not initialize the visible control state. | Observed accessibility defect | TE-02, TE-03 | The screen can misrepresent its active motion state. | QA-04 / return Phase 06. |
| Out-of-range or empty entry dates can create invalid year grouping. | Observed validation defect | TE-02 | The displayed range and saved grouping disagree. | QA-05 / return Phase 06. |
| Removed-element handler throws at startup. | Observed technical defect | TE-02 | Duplicate scripts make later behavior fragile. | QA-06 / return Phase 06. |
| Sheet close leaves focus on hidden content and no focus trap is implemented. | Observed accessibility defect | TE-02, TE-03 | Keyboard users can lose their place or reach inactive content. | QA-07 / return Phase 06. |
| Active dock target uses empty `aria-current` after navigation. | Observed accessibility defect | TE-02, TE-03 | Assistive technology may not receive the current-page state. | QA-08 / return Phase 06. |
| Reduced-motion control lacks an exposed pressed/checked state. | Observed accessibility defect | TE-03 | The control’s state is not programmatically clear. | QA-09 / return Phase 06. |

## Evidence gap

No usability sessions were run; there are no findings about real-user comprehension, trust, task success, or emotional response. Those remain planned validation work, not a conclusion from this QA pass.

## Controlled-return result

QA-01 through QA-09 are **resolved in the browser-prototype scope** based on TE-06 and TE-07. The corrections address the observed failure modes without reopening earlier design decisions. This does not validate production financial calculations, live data coverage, real-user understanding, screen-reader output, or device-specific accessibility.

DFR-01 (financial-storytelling specificity), DFR-02 (typing-style reveal completeness), and DFR-03 (ambient-movement perceptibility) remain deferred, as directed; they are not represented as resolved defects.
