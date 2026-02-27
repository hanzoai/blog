---
title: "KV: Distributed State for the Real World"
date: "2009-03-22"
author: "Zach Kelling"
tags: ["infrastructure", "key-value", "distributed-systems", "state-management"]
description: "Building a key-value store that could handle the chaos of distributed systems - our second foundational project."
---

# KV: Distributed State for the Real World

After building the datastore, we faced a new challenge: state that needed to be everywhere, instantly. Session data. Cache. Feature flags. Configuration. The datastore was powerful, but overkill for simple key-value operations.

## The Challenge

Distributed state is deceptively hard:

- **Consistency**: What happens when two servers write the same key?
- **Availability**: What happens when a node goes down?
- **Partition tolerance**: What happens when the network splits?

The CAP theorem says you can only have two. We wanted all three (for different keys).

## Our Solution

We built KV with **tunable consistency**. Each key could specify its own trade-offs:

```
# Strong consistency for financial data
kv.set("balance:user123", 1000, consistency="strong")

# Eventual consistency for cache
kv.set("cache:homepage", html, consistency="eventual", ttl=60)

# Session affinity for user state
kv.set("session:abc123", data, affinity="sticky")
```

## Architecture

**Consistent Hashing**: Keys distributed across nodes with virtual nodes for balance.

**Vector Clocks**: Track causality for conflict resolution.

**Gossip Protocol**: Nodes learn about each other without central coordination.

**Read Repair**: Inconsistencies fixed lazily during reads.

## Why This Mattered

In 2009, Redis was brand new. Memcached was the standard, but it had no persistence and no replication. We needed something that could:

- Survive node failures without data loss
- Scale horizontally by adding machines
- Provide sub-millisecond reads for hot paths
- Persist data across restarts

## The Innovation

The key insight was **mixed consistency in a single system**. Most key-value stores forced you to choose one consistency model for everything. We let developers choose per-key based on their actual requirements.

Your payment state needs strong consistency? Done. Your user preferences can be eventually consistent? Done. Same API, same cluster, different guarantees.

## Evolution

KV became the backbone of:

- Session management across Hanzo services
- Feature flag distribution
- Configuration management
- Rate limiting and quotas
- Distributed locks

The Go version (kv-go) added channels and context for better concurrency. The principles remain unchanged: **let developers express their intent, handle the distributed complexity internally**.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo.*
