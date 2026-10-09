---
title: "1. Explore the Apple Store"
description: "Start the store, explore its guest experience, and record observable behavior without reading the implementation."
sidebar_position: 1
---

# Explore the Apple Store

Treat the running store as a product you have been asked to understand. During this step, observe what a guest can do without explaining how the code works.

## 1. Accept the assignment

Open the [Apple Store assignment on Classroom50](https://classroom50.org/cis3296-F26-Applebaum-Nguyen/software-design/assignments/applebaums-apple-store/accept) and accept it before cloning any code.

Use the assignment repository Classroom50 creates for your team. 

## 2. Start the application

Copy your assignment repository's clone URL, then run:

```bash
git clone <your-assignment-repository-url>
cd <your-assignment-repository-directory>
make start
```

Docker builds the React frontend and starts Nginx, Laravel, and PostgreSQL. Open [http://localhost:8000](http://localhost:8000) in a private browser window.

If the page does not load, use the [troubleshooting guide](../../troubleshooting.md) before changing application code.

## 3. Explore as a guest

Explore the site before following a fixed path. Try to discover what the product allows a guest to do. Include at least these areas:

- Browse and inspect apples.
- Add, update, and remove basket items.
- Navigate away from the basket and return to it.
- Complete checkout with the prefilled demonstration details.
- Open an order confirmation and invoice.
- Refresh pages and use the browser's Back and Forward controls.

Record each action, the visible result, and any questions or surprises. Do not read the application code yet.

## 4. Record a baseline journey

Choose one complete guest journey and write it as numbered steps. For each step, capture:

- The user's goal and action.
- The page URL before and after the action.
- The visible state before and after the action.
- Any message, validation, or confirmation shown.

Use screenshots only as supporting evidence; your written steps must be reproducible without them.

## 5. Confirm the baseline

```bash
make test
```

Save the result in your lab notes. A passing suite establishes the supplied application's baseline; it does not prove that the product has no defects.

:::note Supported commands
Use `make help` to see the project interface. Use the provided Make targets instead of running host PHP or PHPUnit commands.
:::

Next, [turn your observations into requirements](./inspect-http.md).
