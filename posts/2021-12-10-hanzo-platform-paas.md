---
title: "Hanzo Platform: Git Push to Production"
date: "2021-12-10"
author: "Zach Kelling"
tags: ["platform", "paas", "deployment", "infrastructure", "launch"]
description: "Launching Hanzo Platform — a PaaS that deploys your code from git push to production with zero DevOps configuration."
---

# Hanzo Platform: Git Push to Production

Heroku showed the world that deployment could be simple. Then Heroku stopped innovating and started charging enterprise prices for hobby infrastructure. The gap between "git push heroku main" simplicity and "manage your own Kubernetes cluster" complexity has become a canyon.

Today we are launching Hanzo Platform: PaaS-grade developer experience on infrastructure-grade foundations.

## How It Works

```bash
git push hanzo main
```

That is the deployment workflow. Everything else is automatic:

1. **Build**: Detect your framework, install dependencies, build artifacts
2. **Container**: Package into an optimized container image
3. **Deploy**: Rolling deployment with health checks
4. **Route**: DNS and TLS configured automatically
5. **Scale**: Auto-scale based on traffic

## Supported Frameworks

Automatic detection and optimized builds:

- **Node.js**: Next.js, Express, Fastify, NestJS
- **Python**: Django, FastAPI, Flask
- **Go**: Any Go application with `go.mod`
- **Rust**: Cargo-based projects
- **Ruby**: Rails, Sinatra
- **Static**: React, Vue, Svelte, Astro

## What Sets It Apart

### Preview Deployments

Every pull request gets its own deployment:

- Unique URL for each PR
- Isolated database (optional)
- Automatic cleanup on merge or close
- Comment on PR with deployment URL

### Databases Included

Managed databases provisioned alongside your app:

- PostgreSQL, MongoDB, Redis
- Automatic backups
- Connection strings injected as environment variables
- Database branching for preview deployments

### Built on Kubernetes

Under the hood, Hanzo Platform runs on HKE. When your needs outgrow PaaS conventions, eject to full Kubernetes access without migrating. Your containers, networking, and storage configuration carry over.

## Pricing

- **Free**: 1 app, 512MB RAM, shared CPU
- **Pro**: $5/month per app — 1GB RAM, dedicated CPU
- **Team**: $20/month — 5 apps, preview deployments, team access
- **Enterprise**: Custom — dedicated infrastructure, SLA

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
