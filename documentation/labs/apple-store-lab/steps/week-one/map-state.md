---
title: "4. Model the Current Behavior"
description: "Map the current state ownership and draw an as-is sequence diagram for the guest cart interaction."
sidebar_position: 4
---

# Model the Current Behavior

Create an **as-is** model of the supplied application. The model must explain your observations, including the guest cart defect, without proposing the future design.

## 1. Identify participants

Use runtime evidence and focused inspection of routes, configuration, and code to identify the participants involved in a guest cart request. Include:

- Guest
- Browser and React storefront
- Nginx
- Laravel application instance
- Session storage
- PostgreSQL when relevant

Record evidence for each participant rather than reading every file in the repository.

## 2. Map current state

For each important value, record its owner, required lifetime, current storage location, and whether it is browser-local, instance-local, or shared. Include the guest identity reference, basket contents, product data, order data, and invoice.

A cookie and a session are not the same thing. State what the browser retains and what the server retains.

## 3. Draw the as-is sequence diagram

Create a Mermaid sequence diagram showing a guest adding an item and then reading the basket. Use separate participants for two Laravel instances so the defect condition is visible.

Your diagram must show:

- The user action and React request.
- The request passing through Nginx.
- The application instance handling each request.
- The session identifier crossing the boundary without exposing its value.
- Where basket state is read and written.
- The response that updates the interface.
- An alternate path in which the next request reaches another instance and the basket appears empty or stale.

Label observed behavior as observed. If any interaction is inferred from code or configuration, label it as inferred.

## 4. Validate the model

Compare the diagram with your bug report and HTTP evidence. Every important request, response, and state transition in the report should appear in the diagram. Record any contradiction as an open question instead of adjusting evidence to fit the model.

:::tip[Week 1 checkpoint]
Your team should now have an exploration log, testable requirements, a reproducible bug report, a state map, and an as-is sequence diagram reviewed by all three team members.
:::

Next, [plan the remaining team work](./plan-team-work.md).
