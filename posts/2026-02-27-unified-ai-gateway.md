---
title: "One API for Every AI Model: Introducing the Hanzo AI Gateway"
date: "2026-02-27"
author: "Hanzo AI"
tags: ["ai", "gateway", "api", "zen4", "launch", "hanzo.ai"]
description: "Hanzo AI launches the industry's first zero-markup multi-provider AI gateway — one API key for 100+ models from every major provider, plus 14 proprietary Zen models."
featured: true
---

# One API for Every AI Model: Introducing the Hanzo AI Gateway

Most AI platforms force a choice: use their models or bring your own. We eliminated that choice.

Today we're launching the Hanzo AI Gateway — a single OpenAI-compatible endpoint that gives developers access to over 100 AI models from every major provider, plus 14 proprietary Zen models built on our Mixture of Diverse Experts (MoDE) architecture. One API key. One bill. Zero markup on third-party models.

## What Makes This Different

Every competing "unified API" adds a margin on top of provider pricing. We don't. When you call Claude Opus 4.6, GPT-5, Gemini 2.5 Pro, DeepSeek R1, or Llama 4 through Hanzo, you pay the same per-token rate you'd pay directly — but you get unified billing, automatic failover, request routing, and a single integration to maintain.

**Featured third-party models available at launch:**

| Provider | Models |
|----------|--------|
| Anthropic | Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5 |
| OpenAI | GPT-5, GPT-5 Mini |
| Google | Gemini 2.5 Pro |
| DeepSeek | DeepSeek R1, DeepSeek Chat |
| Meta | Llama 4 Maverick |
| Mistral | Mistral Large |
| Cohere | Command A |
| xAI | Grok 3 |

All models are accessible through a standard `/v1/chat/completions` endpoint. If your code works with OpenAI's SDK, it works with Hanzo. Change the base URL and you're done.

## The Zen4 Model Family

Alongside third-party access, the gateway serves our proprietary Zen4 models:

- **Zen4 Flagship** — 744B parameters (40B active), MoE architecture, 202K context window
- **Zen4 Ultra** — Extended chain-of-thought reasoning on MoE, 262K context
- **Zen4 Max** — 1M token context window for processing entire codebases or document corpora
- **Zen4 Coder** — 480B-parameter code specialist with 163K context
- **Zen4 Mini** — Free-tier model for prototyping at zero cost
- **Zen3 Omni** — Multimodal (text + vision + audio) in a single call

Every Zen model is priced from our own infrastructure — no middleman, no markup.

## Beyond Text: Full Multimodal Stack

The gateway isn't limited to chat completions:

| Capability | Endpoint | Starting Price |
|-----------|----------|---------------|
| Embeddings | `/v1/embeddings` | Token-based |
| Reranking | `/v1/rerank` | Token-based |
| Image generation | `/v1/images/generations` | $0.04/image |
| Speech-to-text | `/v1/audio/transcriptions` | $0.0009/minute |
| Content safety | `/v1/chat/completions` (zen3-guard) | Token-based |

Our speech-to-text pricing deserves special attention: Zen3 Audio Fast transcribes audio at **$0.0009 per minute** — that's 85% cheaper than OpenAI's Whisper API at $0.006/minute. For a startup transcribing 10,000 hours of audio monthly, that's $540 vs $3,600.

## Integrated Tools

The gateway also provides built-in tool capabilities for agent workflows:

| Tool | Price |
|------|-------|
| Web Search | $0.005/query |
| Code Interpreter | $0.03/session-minute |
| File Storage | $0.20/GB/month |
| Text-to-Speech | $15.00/1M characters |

## Getting Started

```bash
curl https://llm.hanzo.ai/v1/chat/completions \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "zen4",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

Sign up at [hanzo.ai](https://hanzo.ai) and get a $5 credit to start. No credit card required for free-tier models.

The gateway is live now. One API. Every model. No markup.
