---
title: "6. Diagnose and propose a repair"
description: "Explain the guest-cart defect and defend a narrowly scoped repair using your Week 1 evidence."
sidebar_position: 6
---

# Diagnose and propose a repair

>**What explains both the successful single-instance journey and the defective scaled journey, and what must change to satisfy the customer's requirement?**

:::note A request from Applebaum's Apple Store
We have reviewed your guest-cart issue. A customer who selects apples should not have to wonder whether their basket will survive the next page visit. Before we continue preparing for launch, explain this defect, recommend a repair, and show that a guest's basket remains available while requests continue reaching different application instances.
:::

Produce a reviewed diagnosis and decision note that explains the guest-cart defect and predicts how a focused repair will change the observed behavior.

This week your team needs to explain why the defect occurs, make a focused change, and defend the result. Begin with your existing requirements, bug issue, and as-is model rather than starting a new report.

## Before you begin

- Complete the [Week 1 bug report](../week-one/trace-laravel.md) and preserve its reproduction evidence.
- Bring your [requirements](../week-one/inspect-http.md), [as-is model](../week-one/map-state.md), and [team project board](../week-one/plan-team-work.md).
- Confirm that the [required tools](../../getting-started.mdx) are available and the store starts. Use the [troubleshooting guide](../../troubleshooting.md) for setup problems.

:::tip
A successful demonstration on one server is not sufficient. Neither is a passing test suite without evidence that it exercises the reported failure.
:::

## Build a causal explanation

Revisit the basket-continuity requirement you wrote in Week 1. Refine any ambiguous acceptance criteria before changing the implementation. Preserve the original observations and record why you revised the requirement.

Use focused inspection of the application's routes, session configuration, cart service, and deployment configuration to explain your observations. Address these questions:

- What identifies a returning guest, and where are that guest's basket contents stored?
- What does each application instance need to read or write when handling a cart request?
- Which assumption holds with one instance but fails when the next request reaches another?
- What evidence distinguishes a basket that is unavailable on another instance from one that has been deleted?
- What plausible alternative explanation did you consider, and what observation distinguishes it from your diagnosis?

Connect every important claim to HTTP evidence or a repository-relative code/configuration reference. Distinguish direct observations from inferences. If the evidence contradicts your Week 1 diagram, revise the explanation rather than discarding the evidence.

## Recommend a bounded change

Propose the smallest repair that satisfies the requirement. Describe where state will live afterward, how the application instances will access it, and what dependency or limitation the design introduces. Explain why your proposal addresses the cause rather than hiding the symptom.

:::important[ **Your repair must respect these boundaries:**]


- Requests must continue reaching different instances. **Do not change** Nginx, add sticky sessions, or pin normal browser requests to one server.
- Keep authoritative cart contents on the server. **Do not replace the cart** with React state or browser-local storage.
- **Do not share the application storage volumes** to make local files appear common to every instance.
- Preserve guest isolation, CSRF protection, and the existing cart and checkout interface.
- Use the supplied infrastructure; **do not add a new service** or redesign authentication.
:::

**This week concerns guest-cart continuity.**

## Available tools

Use `make single`, `make scaled`, `make demo-session`, and `make logs` when they help answer a specific question. The session demonstration provides controlled requests to different instances; browser observations show the customer-visible effect. Neither replaces your explanation.

Document the starting topology, relevant nonsecret settings, and test data. Choose each experiment to answer a specific uncertainty in your diagnosis.

:::danger Preserve evidence before resetting
`make reset` deletes local workshop data. Do not reset automatically before each experiment. Preserve evidence first and reset only when the experiment requires a clean state.
:::

## Deliverable: diagnosis and decision note

Attach a concise note to your existing guest-cart issue containing:

- The requirement being violated and a link to the baseline reproduction.
- Your causal explanation, supporting evidence, and code/configuration references.
- One alternative explanation and how you checked it.
- The proposed repair, its scope, and its tradeoff.
- A prediction of the result when the same acceptance experiment runs after the repair.

Have a teammate review the note before implementation. Their review should answer: **Does this change address the observed cause, or only make the symptom harder to see?** Record the feedback and resolve substantive questions on the issue.

:::tip Checkpoint
Your team should be able to explain the proposed repair without reading out a command or naming a technology as the entire explanation. A short configuration change can be an excellent repair when the reasoning and verification are sound.
:::

Next, [implement and challenge the repair](./verify-with-tests.md).
