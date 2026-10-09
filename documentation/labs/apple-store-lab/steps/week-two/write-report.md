---
title: "8. Write the Lab Report"
description: "Turn captured requests, code traces, and experiment results into a reproducible explanation."
sidebar_position: 8
---

# Write the Lab Report

Your report should let another programmer reproduce your observations and follow your reasoning.

## Required sections

### 1. Requirements and baseline journey

Summarize the guest goals and baseline journey. Include the current-behavior statements, expected-behavior acceptance criteria, open requirement questions, and initial `make test` result.

### 2. HTTP evidence

Document one cart request and checkout. Include methods, paths, request data, statuses, relevant headers, response types, and browser behavior. Remove all token and cookie values.

### 3. Guest cart bug report

Link to the bug issue and summarize its environment, minimal reproduction steps, expected result, actual result, frequency, evidence, and user impact.

### 4. As-is behavior model

Include your state map and as-is sequence diagram. Explain the difference between browser, visitor, instance-local, and durable shared state. Show how requests reaching different application instances produce the observed cart behavior, and distinguish observed interactions from inferred interactions.

### 5. Architecture experiments

For each experiment, separate:

- **Evidence:** commands, statuses, timing, instance markers, data, and log excerpts.
- **Interpretation:** what the evidence indicates.
- **Open questions:** what the experiment did not prove.

### 6. Testing analysis

Compare one unit test with one feature test. Identify one observed risk that needs a different or additional test.

### 7. Agile work record

Link to the GitHub Project and summarize how the team divided and reviewed the work. Reference the issues that produced each major experiment or report section. The board and closed issues should make each student's contributions visible.

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
