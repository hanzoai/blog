---
title: "Hanzo Browser Extension: AI in Every Tab"
date: "2026-01-22"
author: "Zach Kelling"
tags: ["ai", "browser", "extension", "productivity"]
description: "Bringing AI capabilities to your browser - summarize pages, answer questions, and automate workflows."
---

# Hanzo Browser Extension: AI in Every Tab

The browser is where we spend our digital lives. Hanzo Browser Extension brings AI capabilities to every website, every search, every workflow.

## Core Features

### Page Understanding

Select any text, right-click, and:

- **Summarize**: Get key points from long articles
- **Explain**: Break down complex topics
- **Translate**: Instant translation to any language
- **Answer**: Ask questions about the content

```
[Selected: 5000-word technical paper]
→ "Summarize this"
→ 5-bullet summary in seconds
```

### Smart Search

Enhanced search results with AI summaries:

```
Search: "how to implement rate limiting"

Standard results: 10 blue links

With Hanzo:
📝 Summary: Rate limiting controls request frequency...
📚 Key approaches: Token bucket, sliding window, leaky bucket
🔗 Best resources: [1], [2], [3]
💬 Follow-up: "Show me a Python implementation"
```

### Form Assistant

Intelligent form filling:

- **Job applications**: Tailor responses to job descriptions
- **Support tickets**: Structure bug reports clearly
- **Emails**: Draft professional responses
- **Reviews**: Generate thoughtful feedback

### Web Automation

Record and replay web workflows:

```javascript
// Recorded workflow: "Download all invoices"
1. Navigate to billing.example.com
2. Click "Invoices" tab
3. For each invoice:
   - Click download
   - Wait for completion
4. Organize in folder by date
```

Run with one click or schedule recurring.

## Privacy Architecture

Your data stays yours:

```
┌─────────────────────────────────────────┐
│              Browser                     │
│  ┌─────────────────────────────────┐    │
│  │      Hanzo Extension            │    │
│  │  ┌────────┐  ┌────────┐        │    │
│  │  │ Local  │  │ Cloud  │        │    │
│  │  │ Model  │  │  API   │        │    │
│  │  └────────┘  └────────┘        │    │
│  │       ↑           ↑            │    │
│  │       └─────┬─────┘            │    │
│  │             │                  │    │
│  │    [Privacy Toggle]            │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

- **Local mode**: All processing on-device
- **Cloud mode**: More powerful, data encrypted in transit
- **Hybrid**: Sensitive content local, general content cloud

## Integration Points

### With Hanzo Ecosystem

- **Hanzo Chat**: Continue conversations from browser
- **Hanzo Search**: Enhanced search integration
- **Hanzo Agent**: Trigger agent workflows from browser
- **Hanzo Storage**: Save and sync findings

### With Other Services

- **Notion**: Save summaries directly
- **Slack**: Share insights to channels
- **Google Docs**: Insert AI-generated content
- **GitHub**: Create issues from pages

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+H` | Open Hanzo sidebar |
| `Ctrl+Shift+S` | Summarize selection |
| `Ctrl+Shift+Q` | Quick question |
| `Ctrl+Shift+T` | Translate selection |
| `Ctrl+Shift+A` | Automate current page |

## Site-Specific Features

### GitHub
- PR summary generation
- Code review assistance
- Issue triage suggestions

### LinkedIn
- Profile analysis
- Message drafting
- Job fit scoring

### Google Docs
- Writing assistance
- Document summarization
- Research integration

### YouTube
- Video summarization
- Transcript search
- Key moment extraction

## Performance

| Metric | Value |
|--------|-------|
| Memory usage | <50MB |
| Startup impact | <100ms |
| Query latency (local) | 200-500ms |
| Query latency (cloud) | 300-800ms |

Optimized for minimal impact on browsing.

## Installation

```
1. Chrome Web Store → Search "Hanzo AI"
2. Click "Add to Chrome"
3. Sign in with Hanzo account (optional for local mode)
4. Start using in any tab
```

## Open Source

The extension is open source:

```bash
git clone https://github.com/hanzoai/browser-extension
cd browser-extension
pnpm install
pnpm dev  # Development mode
pnpm build  # Production build
```

Contribute features, report bugs, or fork for your own use.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo.*
