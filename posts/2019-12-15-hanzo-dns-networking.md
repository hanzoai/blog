---
title: "Hanzo DNS and Networking: Programmable Infrastructure"
date: "2019-12-15"
author: "Hanzo AI"
tags: ["dns", "networking", "infrastructure", "launch"]
description: "Launching Hanzo DNS and Networking — programmable DNS with service discovery and zero-trust virtual networks."
---

# Hanzo DNS and Networking: Programmable Infrastructure

As the Hanzo platform grew from a commerce API to a full infrastructure suite, two capabilities became unavoidable: DNS management and network isolation. Today we are launching both.

## Hanzo DNS

Programmable DNS with service discovery built in.

### Features

- **API-managed records**: Create, update, and delete DNS records programmatically
- **Service discovery**: Automatic DNS registration for Hanzo services
- **Health checks**: DNS records that automatically remove unhealthy endpoints
- **Geo-routing**: Route traffic based on client geography
- **Weighted routing**: Distribute traffic across endpoints by weight
- **Fast propagation**: Changes propagate globally in under 30 seconds

### Why Not Just Use Route 53

You can. But if your infrastructure runs on Hanzo, DNS managed through the same API and dashboard eliminates a configuration layer. Your deploy pipeline updates DNS automatically. Your service discovery is built in. Your monitoring sees DNS alongside everything else.

## Hanzo Networking

Zero-trust virtual networks for service-to-service communication.

### Features

- **Private networks**: Isolated network spaces per project
- **Service mesh**: Automatic mTLS between services
- **Network policies**: Define allowed communication paths
- **Secure tunnels**: Connect on-premises infrastructure to Hanzo services
- **Load balancing**: L4 and L7 load balancing with health checks

### Security Model

Zero trust means every connection is authenticated and authorized, regardless of network position. No "trusted internal network" assumption. Every service presents credentials. Every connection is encrypted. Every policy is enforced.

## Pricing

- **DNS**: Free for up to 1M queries/month, $0.50 per million after
- **Networking**: Included with Hanzo Cloud. Standalone pricing based on data transfer.

---

*Hanzo AI is Techstars '17.*
