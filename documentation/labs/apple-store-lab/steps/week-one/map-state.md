---
title: "4. Map Application State"
description: "Classify the store's browser, session, cache, file, and database state."
sidebar_position: 4
---

# Map Application State

You will determine who owns each value, how long it must survive, and where the application stores it.

## 1. Map the data model

Read the files in `database/migrations` in timestamp order. For each domain table, record:

- Primary key
- Foreign keys
- Unique constraints
- Important columns and timestamps

Compare the schema with the relationships in `app/Models`. Identify which records checkout creates or changes.

## 2. Classify state

Complete this table in your notes with concrete examples from the store:

| Kind of state | Owner | Required lifetime | Storage location |
| --- | --- | --- | --- |
| Request data | One request | Until the response | Your finding |
| Cookie | One browser | Across matching requests | Your finding |
| Guest cart | One visitor | Browsing session | Your finding |
| Product and order data | Application | Across restarts | Your finding |
| Cached data | Application or instance | Until expiration | Your finding |
| Invoice | Order or instance | Determine from evidence | Your finding |

A cookie and a session are not the same thing. Determine what the browser stores and what its cookie identifies on the server.

## 3. Compare browser contexts

1. Add an item in one private browser window.
2. Open a second private browser window.
3. Compare the carts and cookie names.
4. Explain which state belongs to one visitor and which is shared by the application.

Do not record or share cookie values.

## 4. Draw the system

Create a component diagram containing:

```text
Browser -> Nginx -> Laravel -> PostgreSQL
```

Add sessions, cache, invoices, and external-service simulators. Mark each storage location as browser-local, instance-local, or shared.

Your week-one analysis is now complete. Next, [plan the remaining team work](./plan-team-work.md).
