---
title: "Hanzo Edge: High-Performance API Gateway"
date: "2023-07-20"
author: "Hanzo AI"
tags: ["edge", "gateway", "api", "infrastructure", "launch"]
description: "Introducing Hanzo Edge — a high-performance API gateway with sub-millisecond routing, rate limiting, and authentication at the edge."
---

# Hanzo Edge: High-Performance API Gateway

API gateways sit on the critical path of every request. Latency added by the gateway is latency added to every API call. Most gateways add 5-50ms of overhead. For high-frequency APIs, that is unacceptable.

Today we are launching Hanzo Edge: an API gateway with sub-millisecond routing overhead.

## Performance

- **Routing latency**: < 1ms p99
- **Throughput**: 100K+ requests per second per instance
- **TLS termination**: Hardware-accelerated, adds < 0.5ms

The gateway is written in Rust for predictable performance without garbage collection pauses.

## Features

### Request Routing

- Path-based and header-based routing
- Weighted traffic splitting for canary deployments
- URL rewriting and path manipulation
- WebSocket support

### Rate Limiting

- Per-consumer, per-route, and global rate limits
- Sliding window algorithm for smooth limiting
- Rate limit headers in responses
- Custom response codes and messages

### Authentication

- API key validation at the edge
- JWT verification without hitting your backend
- OAuth 2.0 token introspection
- mTLS for service-to-service communication

### Transformation

- Request/response header manipulation
- Body transformation (JSON to XML and back)
- GraphQL to REST translation
- Response caching with configurable TTL

### Observability

- Request logging with configurable verbosity
- Latency histograms per route
- Error rate tracking
- Integration with Hanzo Observability

## Configuration

Declarative configuration:

```yaml
routes:
  - path: /api/v1/users
    upstream: user-service:8080
    rate_limit:
      requests: 1000
      window: 60s
    auth:
      type: jwt
      issuer: https://hanzo.id

  - path: /api/v1/public
    upstream: public-service:8080
    cache:
      ttl: 300s
```

## Pricing

- **Free**: 1M requests/month
- **Pro**: $49/month — 100M requests, all features
- **Enterprise**: Unlimited requests, dedicated instances

---

*Hanzo AI is Techstars '17.*
