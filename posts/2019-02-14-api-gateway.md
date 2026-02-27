---
title: "The Hanzo API Gateway"
date: "2019-02-14"
author: "Zach Kelling"
tags: ["api", "infrastructure", "developer-experience", "gateway"]
description: "Introducing the Hanzo API Gateway: unified access, better security, and improved developer experience."
---

# The Hanzo API Gateway

As Hanzo has grown, so has our API surface. Today we are launching the Hanzo API Gateway, a unified layer that improves security, reliability, and developer experience.

## Why a Gateway

Over five years, Hanzo accumulated:

- 47 API endpoints across 8 services
- 3 authentication methods
- Inconsistent rate limiting
- Varying response formats

Developers needed expertise in Hanzo internals to use our APIs effectively. That is unacceptable.

## Gateway Capabilities

### Unified Authentication

One authentication method for all APIs:

```bash
curl -H "Authorization: Bearer sk_live_xxx" \
  https://api.hanzo.ai/v1/products
```

API keys are scoped: read-only, write, or admin. Rotate keys without downtime.

### Consistent Rate Limiting

Predictable limits across all endpoints:

- **Standard**: 1000 requests/minute
- **Burst**: 100 requests/second (short bursts allowed)
- **Enterprise**: Custom limits

Rate limit headers on every response:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1550167200
```

### Request Validation

Invalid requests rejected at the gateway with clear errors:

```json
{
  "error": {
    "type": "validation_error",
    "message": "Invalid request body",
    "details": [
      {
        "field": "price",
        "message": "must be a positive number"
      }
    ]
  }
}
```

### Response Normalization

All responses follow consistent structure:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2019-02-14T10:30:00Z"
  }
}
```

### Versioning

API versions in the URL path:

```
https://api.hanzo.ai/v1/products
https://api.hanzo.ai/v2/products
```

Old versions supported for 24 months after deprecation announcement.

## Developer Experience

### Interactive Documentation

New API documentation with:

- Try-it-now functionality
- Code examples in 8 languages
- Response schema explorer
- Authentication helper

### SDKs Updated

All SDKs updated to use the gateway:

```javascript
import { Hanzo } from '@hanzo/sdk';

const hanzo = new Hanzo('sk_live_xxx');
const products = await hanzo.products.list();
```

### Webhooks

Gateway-managed webhooks with:

- Automatic retries
- Signature verification
- Event filtering
- Delivery logs

## Performance

The gateway adds minimal overhead:

- p50 latency: +2ms
- p99 latency: +8ms

Benefits outweigh the cost:

- Caching reduces origin load
- Connection pooling improves throughput
- Geographic routing reduces round trips

## Migration

Existing API endpoints continue working. New gateway endpoints available immediately. Migration deadline: December 2019.

Migration tool checks your integration:

```bash
npx @hanzo/migrate check
```

## What's Next

Gateway foundation enables future capabilities:

- GraphQL API (coming Q3)
- Real-time subscriptions
- API analytics dashboard
- Custom rate limit rules

The gateway is infrastructure you do not need to think about. It just makes everything work better.

---

*Zach Kelling is the founder of Hanzo Industries.*
