---
title: "HKE: Hanzo Kubernetes Engine"
date: "2022-08-22"
author: "Zach Kelling"
tags: ["kubernetes", "infrastructure", "containers", "launch", "hke"]
description: "Launching HKE — managed Kubernetes that eliminates the operational burden without limiting what you can do."
---

# HKE: Hanzo Kubernetes Engine

Kubernetes won. The orchestration debate is over. But "use Kubernetes" and "operate Kubernetes" are very different activities.

Operating Kubernetes in production means: control plane upgrades, etcd maintenance, node auto-scaling, CNI networking, ingress configuration, certificate rotation, RBAC policy management, resource quota enforcement, PV provisioning, and monitoring all of it. That is a team, not a tool.

Today we are launching HKE: Hanzo Kubernetes Engine. Managed Kubernetes that eliminates the operational burden without limiting what you can do.

## What HKE Manages

### Control Plane

- Fully managed, highly available control plane
- Automatic version upgrades (configurable maintenance windows)
- etcd backup and recovery
- API server scaling based on cluster size

### Node Management

- Auto-scaling node pools (scale to zero supported)
- Mixed instance types per pool (CPU, GPU, high-memory)
- Automatic OS patching and security updates
- Spot/preemptible instance support for cost optimization

### Networking

- CNI networking with network policies
- Automatic ingress with TLS termination
- Service mesh integration (optional)
- Private clusters with no public endpoints

### Storage

- Automatic persistent volume provisioning
- Storage class management
- Volume snapshots and backup
- CSI driver support

### Security

- RBAC preconfigured with sensible defaults
- Pod security policies enforced
- Image vulnerability scanning
- Secrets encryption at rest
- Audit logging

## GPU Support

First-class GPU node pools for AI/ML workloads:

- NVIDIA A10G, A100, and H100 instances
- Automatic GPU driver installation
- GPU sharing and time-slicing
- CUDA toolkit pre-installed

## Pricing

- **Control plane**: Free (we do not charge for management)
- **Nodes**: Pay for compute at standard instance rates
- **Support**: Included in Hanzo Cloud subscription

No markup on compute. No hidden management fees.

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
