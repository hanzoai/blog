---
title: "Quasar Mainnet: Lux Network Production Launch"
date: "2025-01-20"
author: "Hanzo AI"
tags: ["lux", "quasar", "mainnet", "launch", "blockchain"]
description: "Lux Network launches Quasar mainnet — 15 validators, sub-second finality, post-quantum security, and full DeFi ecosystem live in production."
---

# Quasar Mainnet: Lux Network Production Launch

After four years of development, testing, and security auditing, the Lux Network Quasar mainnet is live.

## What's Running

### Validator Network

15 validators operating on production Kubernetes infrastructure:

- Hosted on DOKS (DigitalOcean Kubernetes Service) at `24.144.69.101`
- Automated validator management with Helm charts
- Prometheus monitoring and Grafana dashboards
- Automated alerting for consensus anomalies

### Three Chains

All three chains operational:

- **X-Chain**: Asset creation and high-throughput transfers
- **P-Chain**: Staking, delegation, and validator coordination
- **C-Chain**: EVM-compatible smart contracts (Chain ID: 96369)

### DeFi Ecosystem

Full DeFi stack live from day one:

- **Exchange**: Uniswap V3/V4 compatible DEX at markets.lux.network
- **Lending**: Morpho Blue-based isolated lending markets
- **Bridge**: Warp V2 cross-chain messaging
- **NFT marketplace**: Genesis NFTs with governance rights

### Infrastructure

- **API Gateway**: KrakenD at api.lux.network
- **Explorer**: Block explorer with contract verification
- **Faucet**: Testnet token distribution (Chain ID: 96370)
- **Cloud**: Lux Cloud management at cloud.lux.network
- **Documentation**: docs.lux.network

## Performance

Production metrics from the first week:

| Metric | Target | Actual |
|--------|--------|--------|
| Finality | < 1 second | 0.7s median |
| Throughput | 4,500 TPS | 4,800 TPS (peak) |
| Uptime | 99.9% | 100% (first week) |
| Block time | 2 seconds | 2.0s average |

## Security

- Every validator key: CRYSTALS-Dilithium (post-quantum)
- Consensus: Quasar with deterministic finality
- Smart contracts: Audited by independent firms
- Infrastructure: mTLS between all services, RBAC policies

## Testnet

The Lux testnet remains available for development:

- Chain ID: 96370
- RPC: `https://api.lux.network/ext/bc/C/rpc` (testnet)
- Faucet: faucet.lux.network
- Explorer: Available alongside mainnet explorer

## What's Next

- Additional validator onboarding (target: 100+ validators)
- Subnet deployment capability
- Hardware wallet integration (Ledger)
- Mobile wallet launch
- Additional DEX pairs and lending markets

---

*Hanzo AI is Techstars '17. Lux Network: [lux.network](https://lux.network)*
