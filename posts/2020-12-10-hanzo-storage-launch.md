---
title: "Hanzo Storage: S3-Compatible Object Storage"
date: "2020-12-10"
author: "Hanzo AI"
tags: ["storage", "s3", "infrastructure", "launch"]
description: "Launching Hanzo Storage — S3-compatible object storage with integrated CDN and no egress fees."
---

# Hanzo Storage: S3-Compatible Object Storage

Object storage should be simple: put objects in, get objects out, serve them fast. AWS S3 defined the API. Then they defined the egress bill.

Today we are launching Hanzo Storage: S3-compatible object storage with integrated CDN and zero egress fees.

## S3 Compatible

The S3 API is the standard. Hanzo Storage implements it fully:

- All standard S3 operations (GET, PUT, DELETE, LIST, multipart upload)
- Existing S3 SDKs work without modification
- Bucket policies and ACLs
- Pre-signed URLs for secure temporary access
- Versioning and lifecycle policies

Switch your endpoint URL. Everything else stays the same.

## Integrated CDN

Objects served through our global edge network automatically:

- 200+ edge locations worldwide
- Automatic cache invalidation on object update
- Custom domain support with automatic TLS
- Image transformation at the edge (resize, crop, format conversion)

No separate CDN configuration. Upload an object, it is globally distributed.

## Zero Egress Fees

We do not charge for data transfer out. The object storage pricing model should be: pay for what you store, not for serving it.

- **Storage**: $0.02 per GB/month
- **Requests**: $0.004 per 10K requests
- **Egress**: $0.00

Compare that to S3 standard: $0.023/GB storage + $0.09/GB egress. On a 1TB bucket with 10TB monthly egress, you save over $900/month.

## Use Cases

- **Static assets**: Images, CSS, JavaScript for web applications
- **Media storage**: User-uploaded photos, videos, documents
- **Backup and archive**: Application backups and data archives
- **Data lakes**: Large-scale data storage for analytics

---

*Hanzo AI is Techstars '17.*
