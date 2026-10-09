---
title: "Investigate Applebaum's Apple Store"
description: "Trace a storefront action through HTTP, Laravel, storage, and a scaled deployment."
sidebar_position: 1
---

# Welcome to Applebaum's *Apple* Store

## Motivation

Web applications cross several boundaries: browser, network, server code, storage, and deployment. A page can appear to work while hiding problems with state, failure, or multiple server instances.

In this lab, you will investigate a working Laravel apple store. You will collect evidence from the browser, application code, tests, logs, and controlled experiments instead of guessing how the system behaves.

![Applebaum's Apple Store orchard showing the catalog introduction and HTTP teaching panel](/img/apple-store-catalog.png)


## Goals

By the end of the lab, you will be able to:

- Connect browser activity to HTTP requests and responses.
- Trace a request through a Laravel route, controller, service, and model.
- Distinguish cookies, sessions, cache entries, local files, and database records.
- Use tests, logs, and repeatable experiments as evidence.
- Explain how scaling, latency, failure, and concurrency affect a web application.
- Plan and track team work with GitHub Projects and Issues.

## Teams

Complete this lab in a group of three. During week one, everyone investigates the application together. After the analysis, your team will create a project board, divide the remaining work into issues, and assign work to one another.

:::warning Use demonstration data
The checkout form contains safe placeholder information and does not collect payment. Do not enter real customer, payment, cookie, CSRF token, or environment data in the application or your report.
:::

Continue to [What You'll Need](./getting-started.mdx). Record evidence first; interpret it second as you work through the lab.
