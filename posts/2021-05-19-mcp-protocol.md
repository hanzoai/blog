---
title: "MCP: Model Context Protocol"
date: "2021-05-19"
author: "Zach Kelling"
tags: ["mcp", "protocol", "ai", "context", "infrastructure"]
description: "Introducing MCP, a protocol for managing context across AI models and applications."
---

# MCP: Model Context Protocol

AI models are powerful but stateless. Every request starts fresh. Today we are introducing MCP (Model Context Protocol), a standard for managing context across AI models and applications.

## The Context Problem

Modern AI applications face a challenge:

1. User interacts with AI assistant
2. Assistant queries multiple models (language, vision, retrieval)
3. Each model needs relevant context
4. Context must be consistent across models
5. Context must persist across sessions

Without a standard protocol, every application reinvents context management. Poorly.

## What is MCP

MCP is a protocol specification for:

- **Context representation**: How to structure context data
- **Context transmission**: How to send context between systems
- **Context storage**: How to persist context
- **Context retrieval**: How to fetch relevant context

## Protocol Design

### Context Structure

```json
{
  "mcp_version": "1.0",
  "context_id": "ctx_abc123",
  "created_at": "2021-05-19T10:00:00Z",
  "entries": [
    {
      "type": "message",
      "role": "user",
      "content": "What were my last orders?",
      "timestamp": "2021-05-19T10:00:00Z"
    },
    {
      "type": "data",
      "source": "orders_api",
      "content": { "orders": [...] },
      "timestamp": "2021-05-19T10:00:01Z"
    }
  ],
  "metadata": {
    "user_id": "user_123",
    "session_id": "sess_456"
  }
}
```

### Context Operations

**Append**: Add entries to context

```
POST /context/{context_id}/entries
```

**Retrieve**: Get context for model input

```
GET /context/{context_id}?limit=10&types=message,data
```

**Fork**: Create derived context

```
POST /context/{context_id}/fork
```

**Merge**: Combine contexts

```
POST /context/merge
```

### Context Windows

Models have limited context windows. MCP handles this:

```json
{
  "window_strategy": "relevance",
  "max_tokens": 4096,
  "prioritize": ["recent", "user_messages", "tool_results"]
}
```

The protocol compresses context intelligently.

## Reference Implementation

We are releasing a reference implementation:

```bash
pip install mcp-protocol
```

```python
from mcp import ContextManager, Context

manager = ContextManager(storage="redis://localhost")

# Create context
ctx = manager.create_context(user_id="user_123")

# Add entries
ctx.add_message(role="user", content="What were my orders?")
ctx.add_data(source="orders_api", content=orders)

# Retrieve for model
model_input = ctx.to_model_input(
    max_tokens=4096,
    strategy="relevance"
)
```

## Integration with Hanzo

MCP powers context management across Hanzo AI features:

- **Recommendations**: Context includes browsing history, purchases, preferences
- **Support agents**: Context includes order history, previous conversations
- **Analytics queries**: Context includes previous questions and results

## Why a Protocol

Protocols enable ecosystems:

- **Interoperability**: Different systems share context
- **Portability**: Context moves between providers
- **Tooling**: Shared infrastructure benefits everyone
- **Standards**: Best practices become conventions

## Specification

The full MCP specification is published at:

[mcp.hanzo.ai/spec](https://mcp.hanzo.ai/spec)

We invite feedback and contributions.

## What's Next

- MCP 1.1: Streaming context updates
- Multi-modal context (images, audio)
- Context compression standards
- Privacy-preserving context sharing

Context is the missing layer in AI infrastructure. MCP provides it.

---

*Zach Kelling is the founder of Hanzo Industries.*
