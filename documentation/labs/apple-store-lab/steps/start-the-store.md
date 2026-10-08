---
title: "1. Start the Apple Store"
description: "Clone the lab, start its containers, and complete a baseline guest checkout."
sidebar_position: 1
---

# Start the Apple Store

You will start the application and record its behavior before examining its implementation.

## 1. Clone the repository

```bash
git clone https://github.com/ApplebaumIan/applebaums-apple-store.git
cd applebaums-apple-store
```

Run the supported setup command from the repository root:

```bash
make start
```

Docker builds the React frontend and starts Nginx, Laravel, and PostgreSQL. You do not need to install PHP, Composer, or Node.js on your computer.

## 2. Open the storefront

Open [http://localhost:8000](http://localhost:8000) in a private browser window. You should see the apple catalog.

If the page does not load, use the [troubleshooting guide](../troubleshooting.md) before changing application code.

## 3. Complete the baseline journey

1. Browse the available apples.
2. Add an apple to your basket.
3. Change its quantity.
4. Complete guest checkout with the prefilled demonstration details.
5. Open the order confirmation and invoice.

Record the URLs you visit and each visible state change. Do not explain the implementation yet.

## 4. Confirm the baseline

Run the test suite:

```bash
make test
```

The suite should pass before you begin the experiments. Save the result in your lab notes.

:::note Supported commands
Use `make help` to see the project interface. Use the provided Make targets instead of running host PHP or PHPUnit commands.
:::

Next, [inspect the HTTP exchanges behind the storefront](./inspect-http.md).
