---
title: "From Commerce AI to Frontier Models: Hanzo's Decade of Infrastructure"
date: "2026-02-28"
author: "Hanzo AI"
tags: ["hanzo", "retrospective", "history", "ai", "infrastructure", "zen", "lux", "techstars"]
description: "Twelve years of building AI infrastructure — from a real-time recommendation engine in 2014 to 94+ frontier models and a post-quantum blockchain in 2026. The technical story of how we got here."
featured: true
---

# From Commerce AI to Frontier Models: Hanzo's Decade of Infrastructure

Most AI companies began in 2022. We started in 2014.

That gap matters more than it sounds. Twelve years of infrastructure decisions, failed experiments, protocol designs, and hard-won production intuitions compound into something that can't be purchased or imitated: deep architectural knowledge. This is the technical story of how Hanzo got from an ecommerce recommendation engine to running 94+ frontier models at inference scale.

## 2014: The Foundation — Crowdstart and EARLE

Hanzo launched as Crowdstart, a commerce AI platform with a deceptively specific problem: predict which customers would buy, at what price, at what time — and act on that prediction automatically.

The first system of consequence was EARLE — the Entity-based Adaptive Recommendation Learning Engine. EARLE was not a simple collaborative filter. It maintained entity graphs across product hierarchies, customer segments, and behavioral sequences, updating edge weights in real time as transaction streams arrived. The underlying datastore was built on our own distributed key-value layer — a deliberate decision to control latency at the persistence tier rather than accept the tradeoffs of available managed databases.

What EARLE taught us: latency is a first-class design constraint, not an optimization pass. A recommendation that arrives 200ms too late is not delivered — it is abandoned.

## 2015: Real-Time Analytics at the Edge

By 2015, EARLE was insufficient. Customers needed not just recommendations but full behavioral analytics pipelines: funnel analysis, cohort tracking, revenue attribution across marketing channels. We built a streaming analytics engine with sub-50ms event ingestion and query latency in the single-digit millisecond range.

This work established a pattern we have held ever since: own the critical path. Every component on the hot path — serialization, indexing, query planning — was written to our specifications. External dependencies were tolerated only at the periphery.

The pub/sub event bus we built in 2015 to connect EARLE to the analytics layer is the direct ancestor of the event infrastructure underpinning Hanzo's current platform. The interface changed. The architecture did not.

## 2016: Genetic Algorithm Marketing Optimization

Genetic algorithms for marketing seem obvious in retrospect. In 2016, virtually no one was doing it in production.

The system maintained a population of campaign configurations — bid strategies, creative variations, audience segmentation trees — and evolved them through selection pressure applied by real conversion outcomes. Mutations were bounded: we needed reproducibility and auditability, which pure random mutation could not provide. The fitness function was multi-objective from the start, balancing revenue, margin, customer lifetime value, and brand exposure constraints.

This was our first experience managing the exploration-exploitation tradeoff at production scale. The lesson we internalized: the algorithm cannot be smarter than its fitness signal. Garbage in, garbage out is not a cliché in ML — it is an architectural law.

## 2017: Techstars and Platform Launch

Techstars '17. We used the program not for validation but for distribution — the connections to enterprise commerce customers whose scale would stress-test what we had built.

The Hanzo Platform launched in late 2017 as the first integrated Commerce AI suite: EARLE recommendations, the genetic optimization engine, real-time analytics, and a new campaign orchestration layer wired together through a unified API surface. The architecture was event-sourced from the beginning; every campaign state change was a durable event, giving us a complete audit trail and the ability to replay history for model retraining.

Techstars '17 taught us something we already suspected: distribution is not a product problem. It is an infrastructure problem. You cannot sell to enterprises if your systems go down.

## 2018: Checkout 2.0 and ML Fraud Detection

Payment fraud is a solved problem for large banks. For commerce platforms serving mid-market merchants, it was not solved in 2018.

Checkout 2.0 introduced ML-powered fraud detection as a first-class checkout component. The model architecture was an ensemble: gradient boosted trees for tabular features (cart composition, shipping/billing address match, device fingerprint) combined with a sequence model over recent order history. The ensemble was deliberately shallow — interpretability was a product requirement, not a research preference. Merchants needed to understand why a transaction was flagged.

The fraud system operated at sub-100ms latency per decision, including feature extraction, model inference, and rule application. This required co-locating the inference runtime with the checkout service rather than routing through a separate prediction API. The operational complexity was higher; the latency profile was non-negotiable.

## 2019: API Gateway V1, Lattice Cryptography, and SDK Ecosystem

Three concurrent threads in 2019 that only converged years later.

**API Gateway V1** was born from a practical problem: we had ten internal services and forty external integrations. Every service had its own authentication, rate limiting, and observability story. We built a unified gateway layer — not yet the AI gateway we ship today, but the same foundational architecture: request routing, authentication middleware, per-consumer rate limiting, structured logging. The 2026 Hanzo AI Gateway is the seventh major iteration of this system.

**Lattice cryptography research** began as background work. The NIST Post-Quantum Cryptography standardization process was underway and we were watching it. The question we asked: if we are building durable infrastructure, what is the cryptographic threat model on a 15-year horizon? The answer pointed clearly toward quantum resistance. We began integrating CRYSTALS-Dilithium and CRYSTALS-Kyber into our experimental signing infrastructure — work that fed directly into Lux's post-quantum architecture the following year.

**SDK ecosystem**: the first Hanzo SDKs shipped in 2019, covering Python, TypeScript, and Go. The design principle was minimal surface area with maximum composability. We have shipped six SDK generations since. The principle has not changed.

## 2020: Lux Node — Post-Quantum Blockchain

Lux launched in 2020 as a direct consequence of our cryptography research. The design premises were sharp: sub-second finality, post-quantum security from genesis, flexible VM architecture that could host application logic as a first-class concern.

The consensus engine — what became the Quasar consensus family — drew from Snow protocol research but deviated from it in key ways. Where Snow relies on repeated sampling to achieve probabilistic finality, Quasar introduced threshold-based commitment rounds that provide deterministic finality guarantees within bounded time. The practical outcome: Lux nodes reach finality in under one second under normal network conditions, with predictable degradation characteristics under adversarial load.

Every validator key on Lux is CRYSTALS-Dilithium from the beginning. Not as an optional upgrade path — as a genesis requirement. The performance overhead of post-quantum signatures is real but manageable; we published our benchmarks, including the batched signature verification optimizations that brought per-transaction overhead below 0.3ms.

## 2021: Multimodal Research and the First MCP Drafts

The transformer architecture's demonstrated ability to unify text, image, and audio representations became clear to us in 2021. We began a multimodal research program that eventually became the Jin architecture — a unified encoder-decoder framework for cross-modal understanding.

The first Model Context Protocol drafts emerged from a parallel thread: we were building agent frameworks and confronting the fundamental problem of managing state across multi-turn interactions with models that had no persistent memory. The MCP protocol defines a structured interface for context windowing, memory retrieval, and cross-model state transfer. The 2021 drafts were crude. The 2026 production implementation has processed over a billion context operations.

## 2022: ASO Protocol and First Transformer Fine-Tuning

Two technical contributions from 2022 that shaped the next four years.

**Adaptive Swarm Optimization (ASO)** is a distributed optimization protocol inspired by biological swarm behavior. Where genetic algorithms maintain discrete population members, ASO maintains a continuous density field over the parameter space, with update rules that balance local gradient information against global density constraints. The protocol was designed for settings where the objective function is expensive to evaluate and evaluations are distributed across heterogeneous compute — a natural fit for multi-agent AI systems. The first ASO publication appeared in late 2022.

**First transformer fine-tuning production run**: we fine-tuned a 7B parameter open-weight transformer for commerce-specific document understanding. The run cost $6,200 in compute and took 48 hours. The resulting model was 11% better than the base on our evaluation suite and considerably better on our production task distribution. More importantly, the operational experience — data pipelines, distributed training setup, checkpoint management, evaluation harness — became the template for every subsequent training run. Process quality scales; ad hoc runs do not.

## 2023: HMM, Agent Frameworks, and PoAI Research

**Hierarchical Model Merging (HMM)** was the answer to a problem we kept encountering: we had multiple fine-tuned models, each excellent on its narrow domain, and we wanted a unified model that inherited the best of all of them. Naive weight averaging degrades all specialists. HMM applies a hierarchical merge strategy that identifies domain-specific representations in the weight space and preserves them during merging, rather than averaging them away. The technique demonstrated 4-7% improvement over naive merging on held-out domain evaluations.

**Agent frameworks**: the first Hanzo agent runtime shipped in 2023, built on the MCP protocol with tool-use, memory retrieval, and multi-step planning. The design was deliberate: agents are stateful processes, not stateless request handlers. The runtime manages the full agent lifecycle — initialization, tool dispatch, state persistence, error recovery. Building this at a protocol level rather than as application code made subsequent integrations straightforward.

**Proof of AI (PoAI) consensus research**: can AI compute be made verifiable and used as a consensus primitive? The research question is nontrivial — AI computations are inherently non-deterministic at the floating-point level. Our PoAI research addressed this through deterministic quantization schemes that make forward passes reproducible across hardware, enabling threshold-based consensus over model outputs. The research fed into the Zoo network's zLLM architecture.

## 2024: Zen LM Begins, Jin Architecture, Hanzo MCP Tools

The Zen LM project began in 2024 with a simple thesis: the best open-weight models should be built by the people with the most production experience running them. We had that experience.

The first Zen models were fine-tunes of Qwen3-series base models, targeting specific capability profiles: code generation, long-context reasoning, instruction following. The training pipeline built in 2022 scaled to support 70B+ parameter runs without fundamental redesign — the investment in process paid out.

The **Jin architecture** formalized our multimodal research into a production system. Jin uses a unified token space for text, image patches, and audio spectrograms — no modality-specific encoders that require separate training and inference paths. The architecture simplification eliminated an entire class of serving complexity: one model, one inference runtime, multiple modalities.

**Hanzo MCP tools** shipped as the first public implementation of the Model Context Protocol. The tool suite covers web search, code execution, file operations, memory retrieval, and cross-agent communication. Over ten thousand developers integrated MCP tools within the first quarter of availability.

## 2025: Zen Family at Scale, MoDE Architecture, and zenlm.org

Ninety-four models. That is what the Zen family comprised by end of 2025.

The scale required a serving architecture that could not have been designed without the BitDelta research (arXiv:2402.10193): fine-tuned model deltas compressed to 1-bit sign representations, reducing per-variant GPU memory from tens of gigabytes to single-digit gigabytes. With a shared base weight in GPU memory and per-model behavioral deltas in a cache layer, we can serve 14 Zen variants from an infrastructure footprint previously sufficient for two or three.

**Zen MoDE** — Mixture of Diverse Experts — is the architectural breakthrough that defined 2025. Traditional MoE models train experts from scratch. MoDE combines three techniques: expert initialization from distillation (rather than random), Drop-Upcycling (arXiv:2502.19261) to break weight correlation between experts, and our HMM merging protocol to specialize experts post-hoc without full retraining. The result: Zen4 Max achieves 13B-class quality with 30B total parameters and only 3B active per forward pass.

**Abliterated variants**: the refusal removal work — applied carefully and deliberately to models designated for research and professional use — demonstrated that behavioral properties are localizable in the weight space. Understanding where behavior lives in a model is fundamental knowledge, not a bypass. The zen4-abliterated series is the first model family to ship with documented behavioral localization coordinates.

## 2026: Hanzo AI Gateway and What Comes Next

The gateway launch in February 2026 represents the culmination of the API gateway work begun in 2019: a single endpoint for 100+ models, OpenAI-compatible, zero markup on third-party providers, with Zen models as the proprietary tier.

Current active research threads:

**GT-QLoRA**: gate-thawed quantized low-rank adaptation for MoE behavioral tuning. Standard LoRA applied to MoE models leaves routing gates frozen, preventing the fine-tuning from affecting expert selection. GT-QLoRA unfreezes gate parameters with constrained updates — the routing structure can adapt while expert specialization is preserved.

**DSO (Decentralized Semantic Optimization)**: the protocol underlying Zoo's zLLM architecture. Zero-compute adaptation through experience injection, governed by DAO mechanisms. The gap between fine-tuning cost ($15K+) and DSO cost ($18) is real. The architecture is production on the Zoo network.

**Quantum-safe MPC**: multi-party computation protocols for model weights using post-quantum primitives. If model weights are the most valuable IP in AI infrastructure, they deserve cryptographic protection equivalent to the best financial assets.

Twelve years is a long time in AI. Long enough to see hype cycles come and go, see entire paradigms replace each other, see companies built on last year's SOTA collapse when SOTA moves. What survives is infrastructure: the data pipelines, serving systems, protocol implementations, and hard-won operational knowledge that make it possible to actually ship and run AI at scale.

We have been building that infrastructure since 2014. We are not finished.

---

*Hanzo AI is Techstars '17. We build frontier AI and the infrastructure to run it. [hanzo.ai](https://hanzo.ai)*
