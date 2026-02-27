---
title: "Zen Guard: Multilingual AI Safety Classification"
date: "2025-03-20"
author: "Zach Kelling"
tags: ["ai", "models", "zen", "safety", "classification", "launch", "moderation"]
description: "Zen Guard is an 8B multilingual safety classifier covering 119 languages and 9 harm categories, with a three-tier severity system and 5ms/token streaming latency."
---

# Zen Guard: Multilingual AI Safety Classification

Zen Guard is a family of safety classification models built for production AI systems. The flagship is an 8B classifier covering 119 languages and 9 harm categories, with a three-tier severity system and 5ms/token latency suitable for real-time content streams.

Safety classification that only works in English is not safety classification -- it is a liability with a gap in it. Zen Guard was built to cover the full scope of deployed language.

## The Zen Guard Family

Three models designed for different deployment contexts:

| Model | Parameters | Languages | Use Case |
|-------|-----------|-----------|----------|
| **Zen Guard** | 8B | 119 | Batch and async classification |
| **Zen Guard Gen** | 8B | 119 | Generative explanations |
| **Zen Guard Stream** | 4B | 119 | Real-time streaming safety |

**Zen Guard** is the core classifier: binary and severity-graded outputs for API responses, dataset filtering, and human review queuing.

**Zen Guard Gen** produces natural-language explanations alongside classifications. When a safety system needs to surface reasoning to a human reviewer or generate policy-compliant refusal messages, Zen Guard Gen provides the generative layer.

**Zen Guard Stream** is 4B, optimized for 5ms/token latency. Deploy it inline in a streaming inference pipeline and classify tokens as they arrive. This enables real-time blocking without a separate moderation round-trip.

## Nine Harm Categories

Zen Guard classifies across nine categories:

1. **Violent content** -- Graphic violence, threats, incitement
2. **Sexual content** -- Explicit material, non-consensual content
3. **Hate speech** -- Bias, discrimination, dehumanization
4. **Self-harm** -- Instructions or encouragement for self-injury
5. **Dangerous information** -- Weapons, synthesis routes, harmful instructions
6. **Privacy violations** -- PII exposure, doxxing, surveillance content
7. **Deception** -- Fraud, impersonation, manipulation
8. **Illegal activity** -- Content facilitating or promoting illegal acts
9. **Child safety** -- CSAM and child exploitation content

Each category returns an independent confidence score. Multi-label output means a single message can trigger multiple categories simultaneously.

## Three-Tier Severity

| Tier | Label | Recommended Action |
|------|-------|--------------------|
| 0 | Safe | Pass through |
| 1 | Controversial | Log, flag for review, or soft-filter depending on policy |
| 2 | Unsafe | Block, quarantine, escalate |

The controversial tier is deliberate. Most real-world deployments need more granularity than a binary safe/unsafe gate. Tier 1 content includes political commentary, adult topics that may be contextually appropriate, and content that varies in acceptability by jurisdiction or use case. Tier 2 is unambiguous -- block it.

## Streaming Integration

At 5ms/token, Zen Guard Stream runs inline without materially impacting generation latency:

```python
import httpx

async def safe_stream(prompt: str):
    async with httpx.AsyncClient() as client:
        async with client.stream("POST", "https://api.hanzo.ai/v1/chat/completions",
            json={"model": "zen-guard-stream", "stream": True, "messages": [...]}) as r:
            async for chunk in r.aiter_text():
                safety = classify_chunk(chunk)
                if safety.tier == 2:
                    yield "[Content blocked by Zen Guard]"
                    return
                yield chunk
```

The 4B architecture fits on a single A10G alongside most inference workloads, making co-deployment straightforward.

## Language Coverage

119 languages including full coverage for all major world languages, regional variants, and commonly used low-resource languages. Training data includes native-language harmful content -- not machine-translated examples -- which is critical for accurate classification in non-English languages where harmful phrasing often does not map directly from English idioms.

## Get Zen Guard

- **HuggingFace**: [huggingface.co/zenlm](https://huggingface.co/zenlm)
- **Hanzo Cloud API**: `api.hanzo.ai/v1/moderations`
- **Zen LM**: [zenlm.org](https://zenlm.org) -- integration guides

---

*Zach Kelling is the founder of Hanzo AI, Techstars '17.*
