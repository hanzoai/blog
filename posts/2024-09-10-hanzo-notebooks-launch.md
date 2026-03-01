---
title: "Hanzo Notebooks: Managed Jupyter with GPU Access"
date: "2024-09-10"
author: "Hanzo AI"
tags: ["notebooks", "jupyter", "gpu", "ml", "launch"]
description: "Introducing Hanzo Notebooks — managed Jupyter workspaces with on-demand GPU access and pre-installed ML frameworks."
---

# Hanzo Notebooks: Managed Jupyter with GPU Access

Setting up a machine learning development environment is a two-day project: install CUDA drivers, resolve version conflicts between PyTorch and CUDA, configure Jupyter, set up remote access, attach storage for datasets. And then do it again when you need a different GPU.

Today we are launching Hanzo Notebooks: managed Jupyter workspaces that start in 30 seconds with the GPU you need.

## How It Works

### Instant Workspaces

Click a button, get a Jupyter environment:

- Pre-installed: PyTorch, TensorFlow, JAX, Hugging Face Transformers
- CUDA 12.x configured and ready
- Python 3.11+ with common ML libraries
- Terminal access for custom installations

### GPU Selection

Choose the GPU that matches your workload:

| GPU | VRAM | Use Case | Price |
|-----|------|----------|-------|
| T4 | 16GB | Inference, small fine-tunes | $0.50/hr |
| A10G | 24GB | Medium training, inference | $1.00/hr |
| A100 40GB | 40GB | Large model training | $3.00/hr |
| A100 80GB | 80GB | Multi-billion parameter models | $5.00/hr |
| H100 | 80GB | Frontier model training | $8.00/hr |

Switch GPUs without recreating your environment. Your files persist across GPU changes.

### Persistent Storage

- Home directory persists across sessions
- Shared team storage for datasets
- S3-compatible access to Hanzo Storage
- Git integration for version control

### Collaboration

- Share notebooks with team members
- Real-time collaborative editing
- Comment and review workflows
- Version history for every notebook

## Integration with Hanzo ML Platform

Notebooks integrate natively with the broader Hanzo ML infrastructure:

- Submit training jobs to Hanzo Training from a notebook
- Access models in Hanzo Registry
- Query features from Hanzo Feature Store
- Log experiments to Hanzo Console

## Pricing

- **Free**: 20 GPU-hours/month (T4)
- **Pro**: $49/month — 100 GPU-hours, all GPU types
- **Team**: $99/month per seat — shared storage, collaboration
- **Enterprise**: Reserved GPU capacity, custom images

---

*Hanzo AI is Techstars '17.*
