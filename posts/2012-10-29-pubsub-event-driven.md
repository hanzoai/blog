---
title: "PubSub: The Event-Driven Foundation"
date: "2012-10-29"
author: "Zach Kelling"
tags: ["infrastructure", "messaging", "events", "real-time"]
description: "How we built a publish-subscribe system that became the nervous system of our entire platform."
---

# PubSub: The Event-Driven Foundation

By 2012, we had storage (datastore) and state (KV). But our services were still talking to each other through HTTP calls - brittle, synchronous, and prone to cascading failures. We needed a better way.

## The Problem with Request-Response

Traditional architectures look like this:

```
User → API → Service A → Service B → Database
                ↓
            Service C
```

If Service B is slow, everything is slow. If Service C fails, do you retry? Roll back? The complexity explodes exponentially with each new service.

## Event-Driven Architecture

We flipped the model:

```
User → API → Event Bus
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
Service A  Service B  Service C
```

Services publish events. Other services subscribe to events they care about. No service knows who's listening. No service waits for others.

## PubSub Design Principles

**At-Least-Once Delivery**: Messages are never lost. Duplicates are possible (design for idempotency).

**Ordered Within Partition**: Events for the same entity arrive in order.

**Backpressure**: Slow consumers don't overwhelm the system.

**Dead Letter Queues**: Failed messages go somewhere for debugging.

```python
# Publishing is fire-and-forget
pubsub.publish("orders", {
    "event": "order.created",
    "order_id": "12345",
    "user_id": "user_789",
    "items": [...]
})

# Subscribers handle asynchronously
@pubsub.subscribe("orders", "inventory-service")
def handle_order(event):
    if event["event"] == "order.created":
        reserve_inventory(event["items"])
```

## Why This Was Revolutionary

In 2012, Kafka was only a year old and barely production-ready. RabbitMQ existed but was complex to operate. AWS SNS/SQS were primitive.

We built PubSub with:

- **Persistent storage**: Messages survived restarts
- **Consumer groups**: Multiple instances of a service shared load
- **Replay capability**: Debug by replaying historical events
- **Schema registry**: Events had versions, migrations were possible

## The Ripple Effect

Event-driven architecture changed how we built everything:

- **Analytics**: Every event flows to our data warehouse automatically
- **Audit logging**: Complete history of every action
- **Notifications**: Email, push, SMS triggered by events
- **Search indexing**: Elasticsearch updated via events
- **Billing**: Usage tracked by events, invoices generated asynchronously

## The Philosophy

The core insight: **services should tell the world what happened, not instruct other services what to do**.

`order.created` is better than `reserve_inventory` + `send_confirmation` + `update_analytics`. The first describes reality. The second couples systems together.

This philosophy - **publish facts, not commands** - became central to Hanzo's architecture and influenced the Model Context Protocol (MCP) we built years later.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo.*
