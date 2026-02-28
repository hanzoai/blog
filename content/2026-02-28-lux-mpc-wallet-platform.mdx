---
title: "Lux MPC: Enterprise Wallet Infrastructure, Self-Hosted"
date: "2026-02-28"
author: "Hanzo AI"
tags: ["lux", "mpc", "wallet", "infrastructure", "enterprise", "security", "threshold-signatures"]
description: "Introducing Lux MPC — a self-hosted multi-party computation wallet platform with threshold ECDSA/EdDSA, policy engine, team management, and a full management dashboard. No third-party signing service required."
---

# Lux MPC: Enterprise Wallet Infrastructure, Self-Hosted

Today we're shipping Lux MPC — a production-grade multi-party computation wallet platform that gives you Fireblocks-class wallet infrastructure without the vendor lock-in.

Live now at [mpc.lux.network](https://mpc.lux.network) and [cloud.lux.network](https://cloud.lux.network).

## Why This Exists

Every company that touches crypto keys faces the same choice: build key management from scratch, or pay a custody provider per wallet, per signature, per API call. The providers (Fireblocks, Utila, Fordefi) charge premium pricing for what is fundamentally well-understood cryptography wrapped in infrastructure.

Lux MPC is the infrastructure layer, open and self-hostable. You run the nodes. You control the keys. You define the policies.

## What's Included

### MPC Wallet Engine

- **CGGMP21** threshold ECDSA (secp256k1) — Bitcoin, Ethereum, all EVM chains, Lux
- **FROST** threshold EdDSA (Ed25519) — Solana, TON, Polkadot
- **2-of-3 threshold** (configurable) — no single point of key compromise
- **LSS resharing** — rotate participants, change thresholds, without changing wallet addresses
- **~18 second keygen** — distributed key generation across the MPC cluster

### Dashboard & API

- **60+ REST API endpoints** — auth, vaults, wallets, transactions, policies, teams, webhooks, audit
- **Next.js dashboard** — dark monochrome theme, responsive, white-label ready
- **Multi-tenant** — organizations, team roles (owner/admin/signer/viewer), API keys
- **White-label** — hostname-based branding, single deployment serves multiple domains

### Policy Engine

Every transaction passes through the policy engine before reaching MPC signing:

- **Spending limits** — per-transaction and time-window caps
- **Address whitelists** — restrict destinations to approved addresses
- **Approval workflows** — require N approvers before signing
- **Chain restrictions** — limit wallets to specific chains
- **Role-based access** — signers, viewers, admins with different permissions

A transaction that violates policy is rejected before it touches the signing cluster. Deterministic, auditable, configurable.

### Security Architecture

- **Threshold cryptography** — private key never exists in any single location
- **AES-256-GCM encryption** — key shares encrypted at rest with Argon2 key derivation
- **KMS envelope encryption** — additional encryption layer for key material
- **S3 backup** — periodic encrypted snapshots to S3-compatible storage
- **Audit log** — every action recorded (user, IP, resource, timestamp)
- **JWT + bcrypt + TOTP MFA** — standard auth with optional multi-factor
- **Zero external dependencies** — consensus-embedded transport, no NATS/Consul/Redis

### Deployment

Three-node Kubernetes StatefulSet. Parallel pod management, headless service for peer discovery, persistent volumes for encrypted key storage. CI/CD pipeline builds and deploys on every push. Full production deployment in under 3 minutes.

```
Pods:
  mpc-node-0   1/1 Running  (MPC + Dashboard API)
  mpc-node-1   1/1 Running  (MPC)
  mpc-node-2   1/1 Running  (MPC)
  mpc-dashboard 1/1 Running (Next.js frontend)
  mpc-postgres  1/1 Running (PostgreSQL)
```

### API Examples

**Create a wallet:**
```bash
curl -X POST https://mpc.lux.network/api/v1/vaults/$VAULT_ID/wallets \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"name":"Treasury","key_type":"secp256k1","threshold":2}'
```

**Sign a transaction:**
```bash
curl -X POST https://mpc.lux.network/api/v1/transactions \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"wallet_id":"...","chain":"ethereum","to":"0x...","amount":"1.0"}'
```

**Check cluster health:**
```bash
curl https://mpc.lux.network/healthz
# {"status":"ok"}
```

## Comparison

| Feature | Fireblocks | Utila | Fordefi | Lux MPC |
|---------|-----------|-------|---------|---------|
| Self-hosted | No | No | No | Yes |
| Open source | No | No | No | Yes |
| Per-wallet pricing | Yes | Yes | Yes | No |
| ECDSA (secp256k1) | Yes | Yes | Yes | Yes |
| EdDSA (Ed25519) | Yes | Yes | Yes | Yes |
| Policy engine | Yes | Yes | Yes | Yes |
| Key resharing | Yes | Limited | No | Yes (LSS) |
| Audit log | Yes | Yes | Yes | Yes |
| API keys | Yes | Yes | Yes | Yes |
| Webhooks | Yes | Yes | Yes | Yes |
| White-label | No | No | No | Yes |
| Hardware backup | HSM | HSM | HSM | KMS + S3 |

## Roadmap

- **Safe/ERC-4337** — smart contract wallets with MPC as a signer, for gasless transactions and session keys
- **Recurring payments** — subscription scheduler with automatic MPC signing
- **Payment requests** — inbound payment links with public pay pages
- **HSM integration** — hardware-backed share storage
- **On-chain portfolio** — live balance tracking across all chains
- **Gas optimization** — fee estimation and batching

## Get Started

The platform is live at [mpc.lux.network](https://mpc.lux.network). Register an organization, create a vault, generate an MPC wallet, and start signing — all from the dashboard or API.

For self-hosting, the full source is at [github.com/luxfi/mpc](https://github.com/luxfi/mpc). Three-node deployment on any Kubernetes cluster.

---

*Lux MPC is built by [Lux Network](https://lux.network) with infrastructure support from [Hanzo AI](https://hanzo.ai). The MPC engine uses CGGMP21 and FROST protocols with consensus-embedded transport — no external dependencies required.*
