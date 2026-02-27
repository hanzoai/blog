---
title: "Zen Coder: Code Generation That Actually Works"
date: "2024-04-16"
author: "Zach Kelling"
tags: ["ai", "coding", "llm", "zen", "development"]
description: "Building Zen Coder - our code generation model trained on real software engineering workflows."
---

# Zen Coder: Code Generation That Actually Works

Most code generation models are trained on code. Zen Coder is trained on *software engineering* - the entire workflow from requirements to deployed software.

## Beyond Code Completion

Traditional code models complete syntax:

```python
# Traditional model
def calculate_total(items):
    # Model: "return sum(items)"
```

Zen Coder understands context:

```python
# Zen Coder
# Given: e-commerce codebase, tax calculation requirements, existing patterns
def calculate_total(items, shipping, customer):
    subtotal = sum(item.price * item.quantity for item in items)
    tax = calculate_tax(subtotal, customer.shipping_address)
    shipping_cost = get_shipping_cost(items, shipping.method)
    discount = apply_promotions(items, customer.loyalty_tier)
    return OrderTotal(
        subtotal=subtotal,
        tax=tax,
        shipping=shipping_cost,
        discount=discount,
        total=subtotal + tax + shipping_cost - discount
    )
```

The model understands the domain, not just the syntax.

## Training Data

We trained on:

**Commit History**: Not just final code, but the evolution of code over time.

**Pull Requests**: Complete context including discussion, review, iteration.

**Issue → Code**: How requirements become implementations.

**Test → Code**: How tests inform implementation.

**Documentation**: How engineers explain what code does.

This gives the model understanding of *why* code is written, not just *what* it looks like.

## Model Architecture

Zen Coder is a family of models:

| Model | Parameters | Context | Specialization |
|-------|------------|---------|----------------|
| Zen Coder Nano | 600M | 4K | Fast completion |
| Zen Coder | 7B | 32K | General purpose |
| Zen Coder Pro | 34B | 128K | Complex reasoning |
| Zen Coder Max | 72B | 256K | Architecture-level |

All models share the same training methodology, scaled to different capabilities.

## Key Capabilities

### Multi-File Understanding
```
User: Add authentication to the API

Zen Coder:
- Reads existing route structure
- Identifies authentication patterns in codebase
- Modifies routes.py, middleware.py, config.py
- Updates tests
- Adds migration for user tokens
```

### Test-Driven Generation
```
User: Write a function that passes these tests
[test_cases.py content]

Zen Coder:
- Analyzes test cases
- Infers function signature and behavior
- Generates implementation
- Runs tests to verify
```

### Codebase-Aware Refactoring
```
User: Refactor the payment module to use the new API

Zen Coder:
- Maps all usages of old API
- Generates refactored code for each
- Preserves behavior through tests
- Handles edge cases
```

## IDE Integration

Zen Coder integrates with your development environment:

**VS Code Extension**: Inline suggestions, chat, multi-file edits.

**JetBrains Plugin**: Full IDE integration for IntelliJ, PyCharm, etc.

**Vim/Neovim**: hanzo.vim plugin for terminal-native development.

**CLI**: Command-line interface for scripting and automation.

```bash
# Ask Zen Coder from terminal
zen-coder "Add rate limiting to all API endpoints"
```

## Benchmarks

| Benchmark | GPT-4 | Claude 3 | Zen Coder 34B |
|-----------|-------|----------|---------------|
| HumanEval | 87.1% | 84.9% | 89.3% |
| MBPP | 83.5% | 85.2% | 88.1% |
| SWE-bench | 33.2% | 37.8% | 42.6% |

SWE-bench tests real software engineering tasks - fixing actual GitHub issues. This is where training on workflows matters.

## What Makes It Different

1. **Context Length**: 256K tokens means entire codebases in context
2. **Multi-file**: Understands relationships across files
3. **Iteration**: Learns from feedback, improves over conversation
4. **Testing**: Generates and runs tests automatically
5. **Style Matching**: Follows existing code style in the project

## The Philosophy

Code generation isn't about typing faster. It's about **amplifying engineering judgment**.

Zen Coder handles the routine parts - boilerplate, standard patterns, mechanical changes - so engineers can focus on the interesting problems: architecture, algorithms, user experience.

The best code generator is one that makes you a better engineer, not one that replaces engineering.

---

*This post is part of our retrospective series exploring the technical foundations of Hanzo and Zen.*
