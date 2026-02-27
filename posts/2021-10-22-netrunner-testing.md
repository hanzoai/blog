---
title: "Netrunner: Testing Blockchains at Scale"
date: "2021-10-22"
author: "Zach Kelling"
tags: ["blockchain", "testing", "devops", "lux", "infrastructure"]
description: "How we built Netrunner to simulate blockchain networks and catch bugs before they hit production."
---

# Netrunner: Testing Blockchains at Scale

How do you test a blockchain? You can run unit tests, but they don't catch network-level bugs. You can deploy a testnet, but it's slow and expensive. We needed something better.

## The Testing Problem

Blockchain bugs are catastrophic:

- **Consensus bugs**: Network splits, double spends
- **Performance issues**: Throughput drops under load
- **Byzantine behavior**: Malicious validators attacking the network
- **Partition tolerance**: Network splits affecting consensus

Traditional testing catches maybe 10% of these. We needed to test the network as a network.

## What is Netrunner?

Netrunner spins up complete blockchain networks on demand:

```bash
# Start a 5-node network
netrunner network create --nodes 5 --config lux.yaml

# Add Byzantine validators
netrunner inject byzantine --type equivocate --nodes 2

# Simulate network partition
netrunner partition --groups "nodes[0-2],nodes[3-4]" --duration 30s

# Run load test
netrunner loadtest --tps 1000 --duration 5m

# Analyze results
netrunner report --output results.json
```

## Architecture

**Container Orchestration**: Each node runs in its own container with isolated networking.

**Traffic Control**: Linux tc for latency injection, bandwidth limiting, packet loss.

**Scenario Engine**: YAML-defined test scenarios with timing and assertions.

**Metrics Collection**: Prometheus metrics from every node, aggregated for analysis.

**Chaos Injection**: Kill nodes, corrupt messages, simulate byzantine behavior.

## Test Scenarios We Run

### Consensus Safety

1. Start 100-node network
2. Inject 20% byzantine validators (maximum allowed)
3. Run conflicting transactions
4. Verify no double spends

### Partition Recovery

1. Start network
2. Partition into two groups
3. Both groups continue operating
4. Heal partition
5. Verify convergence to single chain

### Performance Under Load

1. Start network
2. Ramp TPS from 100 to 10,000
3. Measure latency at each level
4. Identify throughput ceiling
5. Profile bottlenecks

### Long-Running Stability

1. Start network
2. Run for 7 days
3. Randomly kill/restart nodes
4. Inject various failures
5. Verify no state corruption

## What We Found

Netrunner caught bugs that would have been disasters in production:

- **Memory leak** in gossip layer under high message rate
- **Race condition** in block verification during rapid leader changes
- **Deadlock** when partition healed during block production
- **Integer overflow** in fee calculation at extreme values

Each of these would have cost millions in a production network.

## Integration with CI

Every pull request runs through Netrunner:

```yaml
# .github/workflows/netrunner.yml
- name: Consensus Safety Test
  run: netrunner test consensus-safety.yaml

- name: Performance Regression
  run: netrunner test performance.yaml --baseline main

- name: Chaos Tests
  run: netrunner test chaos-suite.yaml
```

PRs don't merge unless they pass 100+ network-level tests.

## The Philosophy

**If you can't test it, you can't trust it.**

Blockchains handle real money. "Works on my machine" isn't good enough. Netrunner gives us confidence that changes are safe before they touch production.

The same principle applies to all critical infrastructure: invest in testing proportional to the cost of failure.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Lux.*
