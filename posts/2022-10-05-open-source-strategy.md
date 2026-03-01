---
title: "Open Source at Hanzo: Building in Public"
date: "2022-10-05"
author: "Zach Kelling"
tags: ["open-source", "community", "strategy", "announcement"]
description: "Announcing Hanzo's open-source strategy — why we're open-sourcing our core infrastructure and introducing revenue sharing for contributors."
---

# Open Source at Hanzo: Building in Public

Today we are open-sourcing significant portions of the Hanzo infrastructure and introducing a revenue sharing model for open-source contributors.

## Why Open Source

Three reasons, in order of importance:

### 1. Trust

We ask customers to run their businesses on our infrastructure. They should be able to read the code that powers it. Not a sanitized sample — the actual code.

Open source is the ultimate transparency. If you want to know how we handle your data, read the source.

### 2. Quality

External contributors find bugs we miss. External reviewers catch design flaws we are blind to. The collective intelligence of an open community exceeds any internal team.

### 3. Ecosystem

Proprietary platforms create vendor lock-in. Open-source platforms create ecosystems. We want to be the hub of an ecosystem, not the walls of a prison.

## What We Are Open-Sourcing

The following projects are now public on [github.com/hanzoai](https://github.com/hanzoai):

- **Hanzo Base**: Backend-as-a-service framework
- **Hanzo Identity**: Authentication and authorization
- **Hanzo MCP**: Model Context Protocol tools
- **Hanzo SDK**: Client libraries (TypeScript, Python, Go, Rust)
- **Lux Node**: Post-quantum blockchain node
- **Candle**: Rust ML framework (our fork with optimizations)

Additional projects will open-source on a rolling basis.

## Revenue Sharing

Open source should benefit contributors financially, not just reputationally.

Our model:

- Contributors who submit merged PRs are eligible for revenue sharing
- Revenue share is proportional to contribution significance
- Paid quarterly based on the revenue of features their code supports
- No minimum threshold — every contribution counts

Details are in the `CONTRIBUTING.md` of each repository.

## Licensing

All projects use permissive licenses (MIT or Apache 2.0). Use the code however you want. Build products on it. Compete with us if you like. The license is not a trap.

## Get Involved

Browse the repositories. Read the code. Open issues. Submit PRs. Join the community Discord for discussion.

The best infrastructure is built in public.

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
