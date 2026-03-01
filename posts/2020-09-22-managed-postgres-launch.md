---
title: "Hanzo SQL: Managed PostgreSQL with Zero Ops"
date: "2020-09-22"
author: "Hanzo AI"
tags: ["database", "postgresql", "sql", "infrastructure", "launch"]
description: "Launching Hanzo SQL — managed PostgreSQL with automatic scaling, high availability, and zero operational overhead."
---

# Hanzo SQL: Managed PostgreSQL with Zero Ops

PostgreSQL is the best general-purpose database. Running PostgreSQL in production is a full-time job: replication setup, backup management, failover configuration, version upgrades, connection pooling, performance tuning, security patching. Every operations team reinvents this wheel.

Today we are launching Hanzo SQL: managed PostgreSQL that handles all of this automatically.

## What You Get

### Automatic High Availability

- Primary with synchronous standby replica
- Automatic failover in under 30 seconds
- Zero data loss on failover (synchronous replication)
- Connection strings automatically update on failover

### Automatic Backups

- Continuous WAL archiving
- Point-in-time recovery to any second in the last 30 days
- Daily full snapshots retained for 90 days
- Cross-region backup storage

### Connection Pooling

Built-in PgBouncer for connection management:

- Thousands of application connections multiplexed to database connections
- Transaction-mode pooling for maximum efficiency
- No additional configuration required

### Auto-Scaling

- Storage grows automatically as data increases
- Read replicas added with one click
- Compute scaling with minimal downtime

### Extensions

Full PostgreSQL extension support:

- **pgvector**: Vector similarity search for AI/ML workloads
- **PostGIS**: Geospatial queries
- **pg_trgm**: Fuzzy text search
- **timescaledb**: Time-series data
- Plus 50+ additional extensions

## Pricing

- **Starter**: $15/month — 1 vCPU, 1GB RAM, 10GB storage
- **Standard**: $50/month — 2 vCPU, 4GB RAM, 50GB storage
- **Performance**: $200/month — 4 vCPU, 16GB RAM, 200GB storage
- **Enterprise**: Custom — dedicated instances, custom configurations

All plans include HA, backups, and connection pooling.

---

*Hanzo AI is Techstars '17.*
