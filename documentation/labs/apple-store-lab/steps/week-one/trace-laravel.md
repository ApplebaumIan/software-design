---
title: "3. Trace a Request Through Laravel"
description: "Follow a captured cart request from its route to the code that produces its response."
sidebar_position: 3
---

# Trace a Request Through Laravel

You will use the request captured in the previous step to navigate the codebase. Do not read every file.

## 1. Find the route

Start in `routes/web.php` and find the route matching the cart request's method and path. The cart and checkout JSON routes live here because they use browser sessions and CSRF protection.

Product and order reads are in `routes/api.php`. An `/api` URL prefix does not make an endpoint stateless.

Record the route's middleware and controller action.

## 2. Follow the request

Trace the code in this order:

```text
Browser -> Route -> Middleware -> Controller -> Service or Model -> Response
```

For the Honeycrisp cart action, identify:

1. The controller method receiving the request.
2. Where input is validated.
3. The service that changes the cart.
4. Where the cart is stored.
5. The code that creates the JSON response.

Use `make logs` in a second terminal to connect the request to its runtime log entry:

```bash
make logs
```

## 3. Locate the presentation code

Open these files:

- `resources/views/store.blade.php`: the server-rendered HTML shell and React mount point.
- `resources/js/app.jsx`: the React storefront and its JSON requests.

Identify the code that sends the cart request and updates the basket from the response.

## 4. Trace checkout

Fill in concrete class and method names for this path:

```text
Browser -> Route -> Controller -> Checkout service -> Database and services -> Response
```

Record which work must finish before Laravel returns `201 Created`.

## Checkpoint

Create a short request trace containing the HTTP method and path, route, middleware, controller, service or model, storage location, and response.

Next, [map where the application keeps state](./map-state.md).
