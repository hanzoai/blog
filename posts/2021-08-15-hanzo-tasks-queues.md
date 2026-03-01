---
title: "Hanzo Tasks and Queues: Durable Background Execution"
date: "2021-08-15"
author: "Hanzo AI"
tags: ["queues", "tasks", "infrastructure", "background-jobs", "launch"]
description: "Launching Hanzo Tasks and Queues — durable workflow execution and message queues for reliable background processing."
---

# Hanzo Tasks and Queues: Durable Background Execution

The request-response cycle is the wrong abstraction for most business logic. Sending emails, processing payments, generating reports, syncing data — these are background tasks that should not block your API response. They need to be durable, retriable, and observable.

Today we are launching three background execution primitives: Tasks, Queues, and Cron.

## Hanzo Tasks

Durable workflow execution with guaranteed delivery.

Tasks are functions that run to completion, even across failures:

- **At-least-once execution**: Tasks retry automatically on failure
- **Durable state**: Task state persists across retries
- **Timeouts**: Configurable per-task timeout with dead letter handling
- **Observability**: Full execution history, timing, and error tracking
- **Fan-out**: Trigger multiple tasks from a single event

### Multi-Step Workflows

Chain tasks into workflows with dependency tracking:

```typescript
const orderWorkflow = tasks.workflow('process-order', [
  { name: 'validate', fn: validateOrder },
  { name: 'charge', fn: chargePayment, dependsOn: ['validate'] },
  { name: 'fulfill', fn: createFulfillment, dependsOn: ['charge'] },
  { name: 'notify', fn: sendConfirmation, dependsOn: ['fulfill'] },
])
```

If `charge` fails, the workflow pauses and retries. If it keeps failing, it moves to dead letter for manual review. No lost orders.

## Hanzo Queues

High-throughput distributed message queues:

- **FIFO guaranteed**: Messages processed in order
- **Exactly-once processing**: Deduplication built in
- **Backpressure**: Automatic rate limiting to protect downstream services
- **Dead letter queues**: Failed messages preserved for investigation

## Hanzo Cron

Scheduled jobs with timezone support:

- Standard cron expressions
- Per-timezone scheduling (your cron runs at 9 AM Tokyo time, not UTC)
- Overlap protection (skip if previous run still executing)
- Execution history and alerting

## Pricing

All three services share usage-based pricing:

- **Free**: 10K task executions/month
- **Pro**: $20/month — 1M executions, priority support
- **Enterprise**: Custom volume pricing

---

*Hanzo AI is Techstars '17.*
