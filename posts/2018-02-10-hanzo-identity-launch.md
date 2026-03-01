---
title: "Hanzo Identity: Authentication That Scales with Your Business"
date: "2018-02-10"
author: "Zach Kelling"
tags: ["identity", "authentication", "security", "launch", "iam"]
description: "Introducing Hanzo Identity — enterprise-grade authentication and access management built for commerce platforms."
---

# Hanzo Identity: Authentication That Scales with Your Business

Authentication is the first thing every user touches and the last thing most teams want to build. Today we are launching Hanzo Identity: enterprise-grade authentication and access management built for commerce.

## Why We Built This

Our commerce customers kept asking for the same features:

- Social login (customers do not want another password)
- Multi-factor authentication (enterprises require it)
- Role-based access for their teams (admin vs. editor vs. viewer)
- Single sign-on across their properties
- API key management for integrations

Every team was building this from scratch or stitching together three different services. That is wasted engineering time on a solved problem.

## What Hanzo Identity Provides

### Authentication

Multiple authentication methods, one integration:

- **Email/password** with configurable password policies
- **Social login**: Google, GitHub, Apple, Facebook, Twitter
- **Magic links**: Passwordless email authentication
- **MFA**: TOTP, SMS, and hardware key support
- **SSO**: SAML 2.0 and OIDC for enterprise customers

### Authorization

Fine-grained access control:

- **RBAC**: Define roles with specific permissions
- **Organization support**: Multi-tenant by default
- **API keys**: Scoped keys for programmatic access
- **OAuth 2.0**: Full provider implementation for third-party integrations

### User Management

Complete user lifecycle:

- Registration flows with customizable fields
- Email verification and password reset
- User profiles and metadata
- Session management and device tracking
- Audit logging for compliance

## Integration

Single SDK integration for any framework:

```javascript
import { HanzoAuth } from '@hanzo/identity'

const auth = new HanzoAuth({
  clientId: 'your-client-id',
  redirectUri: 'https://yourapp.com/callback'
})

// Social login
auth.loginWith('google')

// Email/password
auth.login(email, password)

// Check permissions
auth.can('orders:write')
```

## Security

Security is not a feature — it is the foundation:

- Passwords hashed with bcrypt (cost factor 12)
- All tokens are JWTs with RS256 signatures
- Rate limiting on all authentication endpoints
- Brute force protection with exponential backoff
- IP-based anomaly detection
- Full audit trail of every authentication event

## Pricing

- **Free**: Up to 1,000 monthly active users
- **Pro**: $0.01 per MAU beyond free tier
- **Enterprise**: Custom pricing with dedicated support and SLA

No per-seat licensing. You pay for users, not team members.

## Available Now

Hanzo Identity is live for all platform customers. Existing authentication migrates automatically — your users will not notice the change. They will notice the improvement.

---

*Zach Kelling is the founder of Hanzo Industries (Techstars '17).*
