---
title: "3. Reproduce the Guest Cart Bug"
description: "Reproduce the disappearing guest cart, isolate its conditions, and write an evidence-based bug report."
sidebar_position: 3
---

# Reproduce the Guest Cart Bug
:::danger[bug report]
The reported defect is that a guest's basket can appear to lose items. Your task is to turn that vague report into a reproducible description of current and expected behavior.
:::

## 1. State the requirement

Before experimenting, write the expected behavior as acceptance criteria. Address what should happen when a guest adds an item, moves between pages, refreshes, and sends later requests during the same browsing session.

Define what "the same guest" and "the same browsing session" mean from the user's perspective. Keep this definition independent of a proposed technical solution.

## 2. Establish a control

Run the store with one application instance:

```bash
make single
```

In a new private browser window, add a distinctive quantity to the basket. Navigate and refresh several times. Record whether the quantity remains stable.

## 3. Reproduce the defect

Switch to the scaled environment:

```bash
make scaled
make demo-load-balancing
make demo-session
```

Repeat the same browser actions. Record each request's time, path, status, instance marker, and visible basket quantity. Repeat enough times to show both the expected and defective outcomes.

Do not explain the root cause yet. First establish exactly which conditions make the symptom appear or disappear.

## 4. Write the bug report

Create a GitHub issue containing:

- A concise title describing the user-visible failure.
- Environment and topology.
- Preconditions.
- Minimal numbered reproduction steps.
- Expected result.
- Actual result.
- Reproduction frequency.
- HTTP, interface, and log evidence.
- Impact on a guest and the business.
- Questions that remain unanswered.

Remove cookie values, CSRF tokens, environment values, and personal data from all evidence.

## Checkpoint

A teammate who did not run your experiment should be able to follow the issue and reproduce the cart defect. Return to one instance with `make single` after collecting the evidence.

Next, [model how the current application handles the guest journey](./map-state.md).
