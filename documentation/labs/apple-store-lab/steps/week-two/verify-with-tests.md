---
title: "7. Implement and challenge the repair"
description: "Implement the reviewed design and build repeatable evidence of cross-instance cart continuity and guest isolation."
sidebar_position: 7
---

# Implement and challenge the repair
>**Can another team member repeat your experiment and show that the same guest sees the same basket when different application instances handle the requests?**

Applebaum's Apple Store needs more than a basket that worked once on a developer's machine. Your task is to demonstrate that the repair satisfies the requirement under the conditions that exposed the original defect.

Produce a repair pull request (PR), a repeatable HTTP acceptance check, and a before/after results table.

## Before you begin

- Obtain a teammate's review of your [diagnosis and decision note](./test-architecture.md).
- Identify the baseline commit and record the effective nonsecret configuration so you can distinguish the original setup from the repaired one.
- Confirm that the scaled environment starts and that the supplied session demonstration runs. Consult the [troubleshooting guide](../../troubleshooting.md) for tooling problems.

Use the diagnosis and decision note from the previous step as your implementation plan. If implementation reveals a mistaken assumption, update the note and explain the change.

## Define the evidence before making the change

Translate your Week 1 acceptance criteria into a small verification matrix. At minimum, cover these claims:

| Claim | Evidence required |
| --- | --- |
| Cart contents survive a change of instance | Write a distinctive quantity through one instance and read the same quantity through another using the same guest session. |
| Later changes remain visible | Modify the quantity through a different instance and read the updated result through a third instance. |
| Guests remain isolated | Use independent cookie jars or browser contexts with distinct baskets; neither guest sees the other's items. |
| Session protection remains functional | A legitimate cross-instance mutation succeeds; a mutation with a missing or invalid CSRF token is rejected without changing the basket. |
| Existing functionality is preserved | The provided regression suite passes and the normal guest workflow still works. |
| The experiment detects the original defect | The same continuity check fails against the original baseline and passes after the repair. |

For each check, state the starting conditions, action, expected result, and evidence that would count as failure. Verify the actual responding instance headers; merely requesting a particular instance does not prove that it served the response.

Keep the before and after experiments comparable. Record any differences in test data or setup. A fresh guest session after a storage change is acceptable, but do not claim that existing baskets were migrated unless you separately implemented and verified migration.

Use separate cookie jars for automated guest-isolation checks. For browser checks, use separate browser profiles or different browsers: two private windows in the same browser may share a cookie store.

Record the baseline continuity failure before applying the repair. A connection error, invalid CSRF token, or failed cart setup is not evidence of the disappearing-cart defect; verify that the initial write succeeded before comparing subsequent reads.

## Implement the reviewed design

Make the focused code or configuration changes on a branch and open a pull request linked to the bug issue. Include the application restart or container-recreation steps needed for the configuration to take effect. Do not treat a database reset as a required part of the repair.

Keep local secrets out of Git. If a change involves an ignored `.env` file (just like the last lab), the PR must still describe how a reviewer can reproduce the effective configuration, using the nonsecret setting name and value. Do not submit the complete environment file.

## Make verification repeatable

Add or extend an HTTP verification script. It must check returned quantities, confirm the responding instances, distinguish request errors from empty carts, and report failure when an acceptance condition is not met. Reuse the project's HTTP and cookie-handling helpers rather than building a new test framework.

The existing `scripts/demo/session.sh` is a starting point: it selects instances, retains a cookie jar, and reads cart JSON. Its printed observations alone are not a complete acceptance test. Extend the verification to cover your matrix and make failures machine-checkable. Use the demo-routing header only for controlled experiments, not as a fix in the React application.

Print a result for each check and return a nonzero exit status if a required condition fails. Successful verification returns exit status `0`. Against the baseline, expect the continuity check to fail with mismatched quantities across confirmed instances; after the repair, expect all required checks to pass. Record the actual results rather than substituting these predictions for evidence.

You may use AI to assist you in writing or debugging the shell script. You are responsible for understanding what each check verifies, reviewing the generated code before running it, and collecting evidence from actual execution. Do not submit AI-generated output as experimental evidence or include secrets, cookies, or tokens in prompts. The assessed work is the choice of checks and the validity of the evidence, not memorizing `curl` options.

## Use the PHP tests for the right purpose

Run the provided suite before and after the change:

```bash
make test
```

Use this target because it selects the isolated test database rather than replacing storefront data with fixtures. For a focused cart check, use:

```bash
make test TEST_ARGS=tests/Feature/CartFeatureTest.php
```

Inspect the session settings used by the test environment. Explain why a cart feature test can pass while requests to different deployed instances still disagree about the basket. Identify which acceptance claims are covered by the PHP suite and which require your deployed HTTP experiment.

You do not need to invent a unit test for a configuration-only repair. You do need a check at a boundary where the original defect can be observed.

## Deliverable: repair and verification PR

Your pull request must contain or link to:

- The diagnosis and decision note.
- The focused implementation/configuration change and reproducible setup instructions.
- The repeatable acceptance check and its invocation.
- A compact before/after table with expected and actual outcomes, statuses, instance markers, and quantities.
- The baseline and final PHP test results, plus an explanation of their coverage limits.
- Any unresolved acceptance condition or discrepancy.

Do not publish raw cookies, CSRF tokens, session identifiers, or customer data. Use labels such as "guest A" to connect observations without revealing credentials.

:::tip Checkpoint
A check that passes only because all requests reached the same instance has not tested the repair. A check that reports an empty cart when the server returned an error has not established a cart-state failure.
:::

Next, [review the repair and advise the client](./write-report.md).
