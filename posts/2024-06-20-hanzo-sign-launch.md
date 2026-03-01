---
title: "Hanzo Sign: Electronic Signatures Without the Enterprise Tax"
date: "2024-06-20"
author: "Hanzo AI"
tags: ["sign", "esignature", "launch", "applications"]
description: "Introducing Hanzo Sign — legally binding electronic signatures with audit trails, templates, and API access at a fraction of DocuSign's price."
---

# Hanzo Sign: Electronic Signatures Without the Enterprise Tax

DocuSign charges $25/month per user for the privilege of sending a PDF and collecting a signature. For a feature that should cost pennies per document, the industry has normalized absurd per-seat pricing.

Today we are launching Hanzo Sign: electronic signatures priced per document, not per seat.

## Features

### Document Signing

- Upload PDF, Word, or create from template
- Drag-and-drop signature, initial, and date fields
- Multiple signers with defined signing order
- In-person and remote signing
- Mobile-optimized signing experience

### Templates

- Create reusable templates for common documents
- Pre-defined fields and signing order
- Bulk send from templates
- Template analytics (completion rates, average time to sign)

### Audit Trail

Every document includes a complete audit trail:

- Timestamp of every action (sent, opened, signed)
- IP address and device information
- Authentication method used
- Tamper-evident certificate of completion

### Legal Compliance

- ESIGN Act compliant
- eIDAS compliant (EU)
- UETA compliant
- Court-admissible audit trails

### API

Embed signing into your application:

```python
from hanzo import Sign

sign = Sign(api_key="your-key")

envelope = sign.create_envelope(
    document="contract.pdf",
    signers=[
        {"email": "client@example.com", "name": "Client Name"}
    ],
    fields=[
        {"type": "signature", "page": 3, "x": 100, "y": 500}
    ]
)

# Send for signature
envelope.send()
```

## Pricing

- **Free**: 5 documents/month
- **Standard**: $0.50 per document — unlimited users
- **Enterprise**: Volume discounts, custom branding, SSO

No per-seat fees. Add your entire team at no additional cost.

---

*Hanzo AI is Techstars '17.*
