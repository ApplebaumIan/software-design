---
title: "2. Document Current Behavior"
description: "Turn storefront observations into user scenarios, business rules, and testable acceptance criteria."
sidebar_position: 2
---

# Document Current Behavior

Requirements gathering separates what users need from assumptions about the implementation. Use your exploration evidence to describe the store from a guest's perspective.

## 1. Identify user goals

Write a short user scenario for each major goal you observed:

- Find an apple to purchase.
- Maintain a basket.
- Complete a guest checkout.
- Review an order and invoice.

For each scenario, record the actor, starting condition, trigger, successful outcome, and alternate or failure outcomes.

## 2. Write behavior statements

Document the current behavior using this structure:

```text
Given [starting state]
When [user action]
Then [observable result]
```

Include successful behavior and edge cases. At minimum, cover adding an item, changing quantity, removing an item, refreshing the page, opening another private browser context, submitting invalid checkout data, and completing checkout.

Do not write implementation details such as class names, database tables, or framework mechanisms in these statements.

## 3. Separate observations from requirements

Create two lists:

- **Observed behavior:** what the supplied application demonstrably does.
- **Expected behavior:** what a guest reasonably needs the product to do.

Mark disagreements between these lists as candidate defects or unanswered requirement questions. Do not silently convert an assumption into a requirement.

## 4. Capture interface evidence

Use the browser Network panel to connect important actions to system responses. For the cart and checkout, record the method, path, status, response type, visible result, and duration. Do not record cookie or token values.

The HTTP evidence should help another team reproduce your observation; it should not replace the user-facing requirement.

## Checkpoint

Before continuing, your team should have a shared requirements draft containing user scenarios, current-behavior statements, expected-behavior statements, edge cases, and open questions.

Next, [reproduce and define the guest cart defect](./trace-laravel.md).
