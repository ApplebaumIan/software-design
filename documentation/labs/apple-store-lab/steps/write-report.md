---
title: "7. Write the Lab Report"
description: "Turn captured requests, code traces, and experiment results into a reproducible explanation."
sidebar_position: 7
---

# Write the Lab Report

Your report should let another programmer reproduce your observations and follow your reasoning.

## Required sections

### 1. Baseline journey

Summarize the guest workflow and include the initial `make test` result.

### 2. HTTP evidence

Document one cart request and checkout. Include methods, paths, request data, statuses, relevant headers, response types, and browser behavior. Remove all token and cookie values.

### 3. Laravel request trace

Name the route, middleware, controller, validation, service or model, storage location, and response for the cart action. Cite file paths and class or method names.

### 4. State and data map

Include your data table and component diagram. Explain the difference between browser, visitor, instance-local, cached, and durable shared state.

### 5. Architecture experiments

For each experiment, separate:

- **Evidence:** commands, statuses, timing, instance markers, data, and log excerpts.
- **Interpretation:** what the evidence indicates.
- **Open questions:** what the experiment did not prove.

### 6. Testing analysis

Compare one unit test with one feature test. Identify one observed risk that needs a different or additional test.

## Evidence standards

- Include enough text and command output to reproduce a result; a screenshot alone is not sufficient.
- State the topology and time for architecture experiments.
- Cite code using repository-relative paths.
- State an invariant before recommending a mechanism.
- Explain tradeoffs instead of naming a technology as a universal fix.
- Remove secrets, environment values, cookies, CSRF tokens, and personal data.

## Finish

Run the suite once more and stop the environment:

```bash
make test
make stop
```

Follow the submission and formatting requirements provided by your instructor.
