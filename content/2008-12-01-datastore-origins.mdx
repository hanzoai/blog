---
title: "The Datastore: Where It All Began"
date: "2008-12-01"
author: "Zach Kelling"
tags: ["infrastructure", "database", "origins", "architecture"]
description: "The first building block of what would become Hanzo - a flexible datastore designed for the next generation of applications."
---

# The Datastore: Where It All Began

Long before Hanzo was a company, there was a problem: existing databases forced you to choose between flexibility and performance. Document stores were flexible but slow. Relational databases were fast but rigid. We needed both.

## The Problem with 2008

In 2008, the database landscape was polarized:

- **MySQL/PostgreSQL**: Great for structured data, terrible for evolving schemas
- **MongoDB**: Flexible documents, but query performance was unpredictable
- **Key-value stores**: Fast, but no query capabilities

Applications were changing faster than schemas could keep up. Every new feature meant migration scripts, downtime, and prayer.

## Our Approach

We built a datastore with a simple thesis: **schemas should be emergent, not prescribed**.

Instead of defining tables upfront, we let the data define itself. The system inferred structure from patterns, indexed automatically, and adapted as your application evolved.

```
# No schema definition needed
store.put("user:123", {
  name: "Zach",
  email: "zach@hanzo.ai",
  preferences: { theme: "dark" }
})

# Query works immediately
store.query({ "preferences.theme": "dark" })
```

## Key Innovations

**Automatic Indexing**: The system watched query patterns and built indexes automatically. No DBA required.

**Schema Inference**: Structure emerged from data. Add a new field? It just worked.

**Hybrid Storage**: Hot data stayed in memory, warm data on SSD, cold data compressed on disk. Transparent to the application.

**Atomic Batches**: Group operations that needed to succeed or fail together. Essential for financial operations.

## What Made It Cool

This was 2008. AWS had just launched DynamoDB. Google's Bigtable paper was only two years old. We were building distributed systems on commodity hardware when most people were still debating MySQL vs Oracle.

The datastore taught us that infrastructure should adapt to applications, not the other way around. This philosophy - **invisible complexity, obvious simplicity** - became the foundation of everything Hanzo built.

## Legacy

The datastore evolved into ClickHouse-compatible analytics, vector search backends, and the storage layer that powers Hanzo today. But the core insight remains: good infrastructure disappears. You should not have to think about where your data lives or how it's indexed. You should just build.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo.*
