---
title: "Hanzo KMS: Secrets Management Done Right"
date: "2021-04-08"
author: "Zach Kelling"
tags: ["security", "kms", "secrets", "infrastructure", "launch"]
description: "Introducing Hanzo KMS — end-to-end encrypted secrets management with environment sync, rotation, and audit trails."
---

# Hanzo KMS: Secrets Management Done Right

Every engineering team has the same dirty secret: credentials scattered across `.env` files, Slack messages, shared notes, and deployment scripts. You know it is wrong. You do it anyway because proper secrets management is complicated.

Today we are launching Hanzo KMS: secrets management that is as easy as `.env` files and as secure as a hardware security module.

## The Problem

The current state of secrets management in most organizations:

- `.env` files committed to Git (even with `.gitignore`, they slip through)
- API keys shared in Slack DMs
- Production credentials in CI/CD environment variables with no rotation
- One person leaves the company, and nobody knows which keys to rotate

This is not a tooling problem. It is a workflow problem. The secure path needs to be the easy path.

## How Hanzo KMS Works

### Store

Secrets stored with AES-256-GCM encryption. Zero-knowledge architecture — we cannot read your secrets. The encryption key derives from your organization's master key, which you control.

### Sync

Sync secrets to any environment:

- **Local development**: `hanzo secrets pull` replaces `.env` files
- **Kubernetes**: Native K8s secret sync
- **Docker**: Injected at container start
- **CI/CD**: GitHub Actions, GitLab CI, CircleCI integrations
- **Cloud**: Vercel, Netlify, AWS Lambda integrations

One source of truth. Every environment pulls from it.

### Rotate

Automatic rotation with zero-downtime:

- Define rotation policies per secret
- KMS rotates credentials automatically
- Connected services pick up new values without restart
- Old credentials invalidated on configurable schedule

### Audit

Every access logged:

- Who accessed which secret, when
- Which environment pulled secrets
- Rotation events and policy changes
- Export audit logs to your SIEM

## CLI-First

```bash
# Initialize in your project
hanzo kms init

# Add a secret
hanzo kms set DATABASE_URL "postgres://..."

# Pull secrets to local env
hanzo kms pull --env development

# Sync to Kubernetes
hanzo kms sync --target k8s --namespace production
```

## Pricing

- **Free**: Up to 5 team members, 200 secrets
- **Team**: $8/member/month — unlimited secrets, rotation policies
- **Enterprise**: SSO, custom HSM, dedicated support

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
