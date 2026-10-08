---
title: "Troubleshoot the Apple Store Lab"
description: "Diagnose startup, HTTP, session, asset, and test failures without hiding the lab behavior."
sidebar_position: 5
---

# Troubleshoot the Apple Store Lab

Diagnose from the outside inward: host port, containers, HTTP response, Laravel logs, then storage or dependencies.

## Run the confidence checks

```bash
make start
make logs
curl -i http://localhost:8000/apples
make test
```

Use `make shell` for inspection inside the application container.

## The storefront does not open

- Confirm Docker is running.
- Read the first service error from `make start`.
- Check whether another program uses port `8000`.
- Use `http://localhost:8000`, not HTTPS.

## A request returns `419`

Reload the page, confirm cookies are enabled, and inspect the request's `X-CSRF-TOKEN` header. Do not disable CSRF protection. In scaled mode, a changing or missing cart may be part of the session experiment; record the instance and cookie name before changing anything.

## A request returns `422`

Inspect the JSON `errors` object and compare its field names with the submitted JSON. Use only placeholder guest information.

## A request returns `500`

Record the request time and identifier, then inspect `make logs`. Start with the first relevant application exception. Before resubmitting checkout, determine whether the failed request left an order or inventory change.

## Assets are missing

Inspect failed JavaScript and CSS requests and browser console errors. `make start` builds the containerized frontend assets; do not install host Node dependencies as a workaround.

## A demonstration behaves differently

- Confirm `curl` and `jq` are installed.
- Run one demonstration at a time.
- Confirm whether it requires `make single` or `make scaled`.
- Capture exact statuses, duration, instance markers, and logs.
- Repeat timing-sensitive experiments before treating the result as deterministic.

## Tests fail

Run `make test` and investigate the first meaningful failure. Confirm no demonstration still injects latency or failure. Use `make reset` only when discarding local workshop data is acceptable.

When asking for help, provide the command, timestamp, expected result, actual status or body, topology, and the smallest relevant log excerpt. Never publish `.env` contents, cookies, or tokens.
