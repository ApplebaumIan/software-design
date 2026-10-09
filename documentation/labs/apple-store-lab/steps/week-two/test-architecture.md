---
title: "6. Test Architecture Pressures"
description: "Use repeatable experiments to observe scaling, state, latency, failure, and concurrency."
sidebar_position: 6
---

# Test Architecture Pressures

You will run controlled experiments against workshop data. Run one experiment at a time and capture evidence before discussing causes.

## Prepare each experiment

```bash
make reset
make test
```

:::danger Reset deletes local lab data
`make reset` rebuilds a clean workshop environment. Do not use it if you need to preserve local observations or data.
:::

For every experiment, record the topology, command, time, request status and duration, instance marker, visible result, durable result, and relevant log lines.

## 1. Load balancing and sessions

```bash
make scaled
make demo-load-balancing
make demo-session
```

Determine whether repeated requests reach the same Laravel instance. Compare the session cookie with the cart visible to each instance.

Questions:

- Which address remains stable as instances change?
- Which state is in the browser, instance-local, or shared?
- Which behavior differs from single-instance mode?

## 2. Cache and invoices

```bash
make demo-cache
make demo-invoice
```

Compare the first and later cache reads. Then compare the shared order JSON with the invoice requested through different instances.

Questions:

- What evidence distinguishes a cache hit from a miss?
- Is the returned business data equivalent?
- Which order information can every instance access?

## 3. Latency and partial failure

```bash
make demo-latency
make demo-failure
```

Measure the full response time and locate dependency waits in the logs. For the failure experiment, inspect persisted state before retrying checkout.

Questions:

- Which operations add to the response time?
- Did the failed request leave any durable changes?
- Could a blind retry duplicate an effect?

## 4. Concurrency

Reset to a clean baseline, then run:

```bash
make demo-concurrency
```

Record how many overlapping requests succeeded and compare that result with final inventory and order data. Running two requests sequentially is not a concurrency experiment.

State the inventory invariant that should hold. Describe the observed outcome without proposing a redesign yet.

## Finish the experiments

Return to one application instance:

```bash
make single
```

Next, [use automated tests to verify behavior](./verify-with-tests.md).
