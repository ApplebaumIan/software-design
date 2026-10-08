---
title: "6. Verify Behavior With Tests"
description: "Read and run focused tests that describe the store's HTTP and domain behavior."
sidebar_position: 6
---

# Verify Behavior With Tests

Experiments reveal behavior; automated tests make selected expectations repeatable.

## 1. Run the complete suite

```bash
make test
```

Use this target rather than invoking PHPUnit directly. It selects the isolated test database instead of replacing storefront data with test fixtures.

## 2. Read representative tests

Open:

- `tests/Feature/CheckoutTest.php` for behavior across Laravel, HTTP, sessions, and the database.
- `tests/Unit/CartTest.php` for isolated quantity and price calculations.

For one test in each file, label the three phases:

1. **Arrange:** create known input and dependency behavior.
2. **Act:** call the public interface.
3. **Assert:** verify the response and important effects.

## 3. Run focused tests

Run one feature-test file:

```bash
make test TEST_ARGS=tests/Feature/CheckoutTest.php
```

Run one named test by replacing the sample name with a method you found:

```bash
make test TEST_ARGS=--filter=test_invoice_failure
```

Record the command, exit status, and behavior protected by the test.

## 4. Identify the testing gap

Choose one observation from the architecture experiments and answer:

- Is it protected by a unit, feature, or system-level test?
- What invariant should a new test assert?
- Does the test require overlapping requests or multiple instances?

Do not confuse a successful demonstration with regression protection. Choose the narrowest test layer that can prove the behavior.

Next, [organize your findings into an evidence report](./write-report.md).
