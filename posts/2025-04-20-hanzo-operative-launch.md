---
title: "Hanzo Operative: Computer Use for AI Agents"
date: "2025-04-20"
author: "Hanzo AI"
tags: ["operative", "computer-use", "agents", "ai", "launch"]
description: "Introducing Hanzo Operative — enabling AI agents to use computers like humans: screen capture, mouse, keyboard, and application interaction."
---

# Hanzo Operative: Computer Use for AI Agents

AI agents can write code, search the web, and process documents. But most software was built for humans using screens, mice, and keyboards. Until agents can interact with arbitrary software through its UI, they are limited to API-accessible tools.

Today we are launching Hanzo Operative: computer use infrastructure for AI agents.

## What Operative Does

Operative gives AI agents the ability to interact with any computer application:

- **Screen capture**: Real-time screen observation with element detection
- **Mouse control**: Click, drag, scroll, hover with pixel precision
- **Keyboard input**: Type text, use keyboard shortcuts, fill forms
- **Application interaction**: Navigate menus, switch windows, manage tabs

The agent sees the screen, reasons about what to do, and takes action — the same loop a human follows.

## Architecture

Operative runs in a sandboxed environment:

- Isolated virtual display per agent session
- Network policies to control what the agent can access
- Action logging and audit trail
- Session recording for review and debugging
- Timeout and resource limits

## Use Cases

### Legacy System Integration

Connect AI workflows to software that has no API:

- Enterprise applications with only a GUI
- Desktop software (accounting, design, proprietary tools)
- Government portals and forms
- Legacy web applications

### Testing and QA

AI-powered end-to-end testing:

- Visual regression testing
- User flow validation
- Cross-browser testing
- Accessibility auditing

### Data Entry and Processing

Automate repetitive UI tasks:

- Form filling across multiple systems
- Data migration between applications
- Report generation from multiple sources
- Document processing workflows

## Safety

Computer use requires careful safety boundaries:

- Configurable action allowlists (which applications, which actions)
- Human-in-the-loop confirmation for sensitive actions
- Network isolation to prevent unintended external access
- Complete audit log of every action taken

## Pricing

- **Free**: 100 minutes/month
- **Pro**: $49/month — 1,000 minutes, all features
- **Enterprise**: Custom minutes, dedicated infrastructure

---

*Hanzo AI is Techstars '17.*
