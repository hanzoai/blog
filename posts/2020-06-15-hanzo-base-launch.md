---
title: "Hanzo Base: Backend-as-a-Service for Modern Applications"
date: "2020-06-15"
author: "Zach Kelling"
tags: ["baas", "backend", "database", "launch", "base"]
description: "Introducing Hanzo Base — a complete backend-as-a-service with database, auth, storage, and realtime capabilities."
---

# Hanzo Base: Backend-as-a-Service for Modern Applications

Every application needs the same five things: a database, authentication, file storage, real-time subscriptions, and an API layer. Every team builds these from scratch, makes the same mistakes, and spends months on infrastructure before writing a line of product code.

Today we are launching Hanzo Base: a complete backend-as-a-service.

## What Hanzo Base Provides

### Database

PostgreSQL with a real-time API layer:

- Full PostgreSQL — not a subset, not a proprietary query language
- Row-level security policies for fine-grained access control
- Auto-generated REST and GraphQL APIs from your schema
- Real-time subscriptions on any table
- Database branching for development and testing

### Authentication

Hanzo Identity integrated out of the box:

- Email/password, social login, magic links, MFA
- Row-level security policies tied to user identity
- Session management handled automatically
- No additional configuration required

### Storage

S3-compatible object storage with CDN:

- Upload files directly from client applications
- Access control tied to authentication
- Automatic image transformations (resize, crop, format)
- CDN delivery for optimal performance

### Edge Functions

Serverless compute powered by Hanzo Functions:

- Custom server-side logic without managing servers
- Access to database and storage from function context
- Triggered by HTTP requests, database events, or schedules

### Realtime

WebSocket-based real-time subscriptions:

- Subscribe to database changes
- Broadcast messages to connected clients
- Presence tracking (who is online)
- Channel-based communication

## Why Not Firebase

Firebase locks you into Google's proprietary stack. Your data lives in Firestore with a proprietary query language. Migration requires rewriting your entire data layer.

Hanzo Base is PostgreSQL. If you leave, take your database with you. Run it anywhere. No lock-in.

## Pricing

- **Free**: 500MB database, 1GB storage, 50K function invocations
- **Pro**: $25/month — 8GB database, 100GB storage, unlimited functions
- **Enterprise**: Dedicated infrastructure, custom limits

---

*Zach Kelling is the founder of Hanzo AI (Techstars '17).*
