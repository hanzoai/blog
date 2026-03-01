---
title: "Hanzo Functions: Serverless Compute with Zero Cold Starts"
date: "2019-05-08"
author: "Zach Kelling"
tags: ["serverless", "compute", "infrastructure", "launch", "functions"]
description: "Introducing Hanzo Functions — serverless compute with zero cold starts, built for event-driven commerce workloads."
---

# Hanzo Functions: Serverless Compute with Zero Cold Starts

Cold starts are serverless computing's original sin. Your function sits idle, a request arrives, and the user waits 500ms to 3 seconds while the runtime boots. For commerce — where every millisecond of checkout latency costs revenue — this is unacceptable.

Today we are launching Hanzo Functions: serverless compute with zero cold starts.

## How We Eliminated Cold Starts

The traditional serverless model: spin up a container per invocation, execute, tear down. The cold start is the container boot time.

Our approach: V8 isolates. Each function runs in a lightweight V8 isolate that starts in under 5 milliseconds. Isolates share the V8 engine but have completely isolated memory spaces. The security model is equivalent to containers; the startup time is three orders of magnitude faster.

## Use Cases

### Webhooks and Event Processing

Process incoming webhooks from payment providers, shipping carriers, and third-party services:

```javascript
export default async function handler(event) {
  const { type, data } = event.body

  if (type === 'payment.completed') {
    await updateOrderStatus(data.orderId, 'paid')
    await sendConfirmationEmail(data.customerEmail)
    await notifyWarehouse(data.orderId)
  }

  return { status: 200 }
}
```

### API Endpoints

Build custom API endpoints without managing servers:

- Custom pricing logic
- Inventory checks against external systems
- Personalization logic
- A/B test routing

### Scheduled Jobs

Run recurring tasks on a schedule:

- Inventory sync with suppliers
- Report generation
- Data cleanup
- Cache warming

## Runtime Support

- **JavaScript/TypeScript**: Full Node.js API compatibility
- **Python**: CPython runtime with pip packages
- **Go**: Compiled binary execution

## Pricing

- **Free tier**: 100K invocations/month
- **Standard**: $0.20 per million invocations
- **Compute time**: $0.000016 per GB-second

No idle charges. No minimum commitments.

---

*Zach Kelling is the founder of Hanzo Industries (Techstars '17).*
