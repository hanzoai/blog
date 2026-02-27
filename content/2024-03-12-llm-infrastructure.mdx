---
title: "LLM Infrastructure: Running AI at Scale"
date: "2024-03-12"
author: "Zach Kelling"
tags: ["llm", "infrastructure", "scale", "ai", "engineering"]
description: "How we built infrastructure to serve billions of LLM requests for commerce applications."
---

# LLM Infrastructure: Running AI at Scale

Hanzo processes over 2 billion AI requests monthly. Today we are sharing how we built infrastructure to serve LLMs at this scale.

## The Scale Challenge

Our requirements:

- **Throughput**: 50,000+ requests per second at peak
- **Latency**: p99 under 500ms for interactive use
- **Cost**: Sustainable unit economics
- **Reliability**: 99.99% availability
- **Flexibility**: Multiple models, rapid iteration

No single vendor solution met all requirements.

## Architecture Overview

```
                    ┌─────────────┐
                    │   Global    │
                    │   Router    │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ↓                  ↓                  ↓
   ┌─────────┐       ┌─────────┐       ┌─────────┐
   │Region A │       │Region B │       │Region C │
   └────┬────┘       └────┬────┘       └────┬────┘
        │                 │                 │
   ┌────┴────┐       ┌────┴────┐       ┌────┴────┐
   │Inference│       │Inference│       │Inference│
   │ Cluster │       │ Cluster │       │ Cluster │
   └─────────┘       └─────────┘       └─────────┘
```

## Key Components

### Global Router

Routes requests based on:

- **Geography**: Closest region for latency
- **Load**: Balance across regions
- **Model**: Route to clusters with specific models
- **Priority**: Premium customers get dedicated capacity

```go
func route(request *Request) *Endpoint {
    // Geographic affinity
    candidates := regionsNear(request.Origin)

    // Filter by model availability
    candidates = filterByModel(candidates, request.Model)

    // Select by load
    selected := selectByLoad(candidates)

    // Premium routing
    if request.Priority == Premium {
        selected = dedicatedEndpoint(request.Customer)
    }

    return selected
}
```

### Inference Clusters

Each cluster runs:

- **Model servers**: vLLM for efficient serving
- **Request queue**: Batching for throughput
- **KV cache**: Shared cache for common prefixes
- **Health monitors**: Automatic failover

### Model Serving with vLLM

We use vLLM for its:

- **Continuous batching**: Dynamic batch sizes
- **PagedAttention**: Efficient memory management
- **Prefix caching**: Reuse computation for common prefixes

Configuration:

```yaml
model_server:
  engine: vllm
  model: hanzo/jin-70b
  tensor_parallel: 8
  max_batch_size: 256
  max_seq_len: 8192
  prefix_cache_size: 10GB
```

### Request Batching

Dynamic batching maximizes GPU utilization:

```python
class BatchScheduler:
    def __init__(self, max_batch=256, max_wait_ms=10):
        self.queue = []
        self.max_batch = max_batch
        self.max_wait_ms = max_wait_ms

    async def add(self, request):
        self.queue.append(request)

        # Batch full or timeout
        if len(self.queue) >= self.max_batch:
            return await self.process_batch()

        await asyncio.sleep(self.max_wait_ms / 1000)
        return await self.process_batch()
```

### Prefix Caching

Common prompt prefixes cached:

```
System: You are a helpful shopping assistant...
[CACHED - 500 tokens]

User: What are the best running shoes?
[NEW - 10 tokens]
```

Cache hit rates: 40-60% for commerce applications.

## GPU Infrastructure

### Hardware

- NVIDIA H100 GPUs for large models
- A100 GPUs for medium models
- Mix of cloud and dedicated hardware

### Optimization

1. **Quantization**: INT8 inference where quality permits
2. **Flash Attention**: Memory-efficient attention
3. **Speculative decoding**: Draft models for faster generation

### Cost Management

GPU cost optimization:

```
Cost per 1M tokens (input/output):
- Full precision H100: $0.80 / $2.40
- INT8 quantized: $0.50 / $1.50
- With caching: $0.30 / $1.50
- Spot instances: $0.20 / $1.00
```

## Reliability

### Health Checking

Continuous health monitoring:

```python
async def health_check(server):
    try:
        response = await server.generate(
            prompt="test",
            max_tokens=1,
            timeout=5.0
        )
        return response.latency < 1000
    except:
        return False
```

### Failover

Automatic failover on:

- Server health check failure
- Latency spike (2x baseline)
- Error rate spike (>1%)

### Graceful Degradation

When capacity constrained:

1. Shed lowest priority traffic
2. Reduce max tokens
3. Switch to smaller models
4. Queue non-interactive requests

## Observability

### Metrics

Key metrics tracked:

- Request latency (p50, p95, p99)
- Throughput (requests/sec, tokens/sec)
- GPU utilization
- Cache hit rates
- Error rates by type

### Tracing

Distributed tracing across components:

```
Request -> Router -> Queue -> Inference -> Response
   │          │         │          │           │
   └──────────┴─────────┴──────────┴───────────┘
                    Trace ID: abc123
```

## Results

Current production metrics:

- **p50 latency**: 180ms
- **p99 latency**: 450ms
- **Availability**: 99.995%
- **Cost per request**: $0.0008 average
- **GPU utilization**: 78% average

## What's Next

- Custom silicon evaluation
- Edge inference for latency-sensitive use
- Multi-model orchestration
- Automatic model selection

LLM infrastructure is the foundation of AI products. Build it right.

---

*Zach Kelling is the founder of Hanzo Industries.*
