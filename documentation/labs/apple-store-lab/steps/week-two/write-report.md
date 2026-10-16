---
title: "8. Review the repair and advise the client"
description: "Have a teammate reproduce the result and give Applebaum's Apple Store a bounded, evidence-based repair recommendation."
sidebar_position: 8
---

# Review the repair and advise the client

Applebaum's Apple Store needs to know what your team has established, not how many commands you ran. Submit a focused repair review that builds on Week 1 rather than copying its artifacts into a second full report.

Finish this step with an independently reviewed result, a to-be diagram, and a recommendation that states whether the guest-cart issue meets its acceptance criteria.

## Before you begin

- Make the [repair PR and verification evidence](./verify-with-tests.md) available to your reviewer.
- Retain the [Week 1 as-is model](../week-one/map-state.md) for comparison.
- Assign a reviewer who did not author the repair and can follow the documented setup.

## Arrange an independent review

A teammate who did not author the repair must follow the PR's setup and verification instructions from a documented starting state. They should not depend on undocumented settings on the author's machine.

The reviewer must record:

- Whether the instructions were sufficient to reproduce the results.
- Whether the responding instance headers confirm cross-instance behavior.
- Whether both continuity and guest isolation satisfy the acceptance criteria.
- Any difference between the claimed result and their observation.
- The disposition of substantive feedback: a change, further evidence, or a justified limitation.

Do not close the bug merely because the author reports success. Resolve discrepancies or explicitly leave the affected acceptance criteria open.

## Update the design model

Preserve the Week 1 as-is diagram and add a to-be Mermaid sequence diagram. Show a cart write and a later read handled by different application instances, the guest identity reference crossing the relevant boundaries, and the storage accessed by each instance.

Explain what changed in state ownership or accessibility and what stayed the same. The diagram should make the repair understandable without displaying a configuration command. Link the modeled interactions to your verification evidence.

## Deliverable: stakeholder repair review

Create a short review with these sections:

### 1. Customer impact and decision

Summarize the original customer-visible problem, your diagnosis, and the chosen repair. Explain why it is appropriate for the supplied deployment and identify its principal tradeoff.

### 2. Verification and model

Link the original issue, decision note, repair PR, acceptance script, before/after results, and to-be diagram. Summarize the evidence rather than repeating all of Week 1. State any failed or incomplete checks.

### 3. Recommendation and limits

State whether the guest-cart issue can be closed against its acceptance criteria. Identify at least one limitation of your evidence and distinguish a demonstrated guarantee from an assumption.

Verifying basket continuity across three local instances does **not** establish capacity for millions of customers. Do not claim overall launch readiness, inventory correctness, or resilience to database failure from this experiment. Those are separate questions.

### 4. Review and contribution record

Link the reviewer feedback and the GitHub Project issues that produced the diagnosis, repair, and verification. Each student must contribute substantive investigation or implementation work and review another student's contribution. Rotate responsibilities; do not assign one student exclusively to assembling the report.

## How the work will be assessed

| Criterion | Strong evidence |
| --- | --- |
| Diagnosis | Explains successful and defective behavior using observations and implementation references, rather than guessing a mechanism. |
| Design judgment | Addresses the cause within the assignment constraints and explains the tradeoff. |
| Verification | Detects the original defect, demonstrates the repaired cross-instance behavior, and checks guest isolation. |
| Reproducibility | A reviewer can repeat the experiment without undocumented setup or access to the author's secrets. |
| Communication | Separates evidence from inference, links artifacts clearly, and makes appropriately limited claims. |
| Collaboration | Shows substantive contributions, review feedback, and resolution across all three teammates. |

:::important
The size of your code change is not the measure of this assignment. A small repair supported by a sound diagnosis and convincing verification is stronger than a large rewrite with weak evidence.
:::

## Week 2 checkpoint

Your team should have a reviewed diagnosis, a focused repair, a repeatable cross-instance check, a to-be model, and a bounded recommendation to Applebaum's Apple Store. Post the stakeholder repair review as a summary comment on the existing bug issue, linking each artifact and the review feedback. Keep that issue linked from your [project board](../week-one/plan-team-work.md), and close it only when the acceptance criteria and independent review are complete.

