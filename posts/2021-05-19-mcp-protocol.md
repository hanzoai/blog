---
title: "The Context Layer: Our Early Work on Multi-Model State Management"
date: "2021-05-19"
author: "Zach Kelling"
tags: ["mcp", "protocol", "ai", "context", "infrastructure"]
description: "How we built a context management protocol for multi-model AI pipelines — early research that shaped how we think about AI state."
---

# The Context Layer: Our Early Work on Multi-Model State Management

AI models are powerful but stateless. Every request starts fresh. In 2021, we started formalizing our internal protocol for managing context across AI models and applications — work that predated the broader industry's adoption of standardized model context protocols by several years.

## The Context Problem

By 2021, we were running AI pipelines that chained multiple models together:

1. User interacts with an AI assistant
2. Assistant queries multiple models (language, vision, retrieval)
3. Each model needs relevant context
4. Context must be consistent across models
5. Context must persist across sessions

Without a standard protocol, every application reinvents context management. Poorly.

## What We Built

Our internal context management system handled:

- **Context representation**: Structured context data as typed entries
- **Context transmission**: Moving context between models and services
- **Context storage**: Persisting context across sessions (Redis-backed)
- **Context retrieval**: Fetching relevant context with windowing strategies

### Context Structure

```json
{
  "version": "1.0",
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
      "content": { "orders": ["..."] },
      "timestamp": "2021-05-19T10:00:01Z"
    }
  ],
  "metadata": {
    "user_id": "user_123",
    "session_id": "sess_456"
  }
}
```

### Context Windows

Models have limited context windows. Our system handled this with relevance-based windowing:

```json
{
  "window_strategy": "relevance",
  "max_tokens": 4096,
  "prioritize": ["recent", "user_messages", "tool_results"]
}
```

## Integration with Hanzo

This system powered AI features across our commerce platform:

- **Recommendations**: Context included browsing history, purchases, preferences
- **Support agents**: Context included order history, previous conversations
- **Analytics queries**: Context included previous questions and results

## What We Learned

Managing context at scale is harder than it looks. The key insight: context isn't just a conversation history. It's a typed graph of information with relevance scores, expiry windows, and compression strategies.

We compressed context intelligently rather than truncating — preserving semantic meaning even when token limits forced us to drop raw content.

## The Broader Landscape

This work shaped how we think about AI infrastructure. When Anthropic published the Model Context Protocol (MCP) standard in 2024, we recognized the patterns we'd been working with independently — the industry had converged on similar conclusions about how AI systems should manage state and access tools.

Our current `@hanzo/mcp` implementation builds on Anthropic's MCP standard, extending it with 260+ tools for commerce, infrastructure, and AI workflows. The early internal work gave us strong intuitions about what the protocol needed to get right.

Context is the missing layer in AI infrastructure. The industry is finally building it properly.

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
