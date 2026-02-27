---
title: "The Hanzo SDK Ecosystem"
date: "2019-07-22"
author: "Zach Kelling"
tags: ["sdk", "developer-tools", "open-source", "integration"]
description: "Announcing official SDKs for JavaScript, Python, Ruby, Go, and PHP, plus the new SDK development kit."
---

# The Hanzo SDK Ecosystem

Developers should not wrestle with HTTP details. Today we are releasing official SDKs for JavaScript, Python, Ruby, Go, and PHP, plus tools for building custom SDKs.

## Official SDKs

### JavaScript/TypeScript

```bash
npm install @hanzo/sdk
```

```typescript
import { Hanzo } from '@hanzo/sdk';

const hanzo = new Hanzo('sk_live_xxx');

// Fully typed
const product = await hanzo.products.create({
  name: 'Widget',
  price: 2999,
  currency: 'USD'
});
```

Features:
- Full TypeScript definitions
- Browser and Node.js support
- Tree-shakeable for minimal bundles
- Automatic retries

### Python

```bash
pip install hanzo
```

```python
from hanzo import Hanzo

hanzo = Hanzo('sk_live_xxx')

product = hanzo.products.create(
    name='Widget',
    price=2999,
    currency='USD'
)
```

Features:
- Type hints for IDE support
- Async support (hanzo.aio)
- Django and Flask integrations

### Ruby

```bash
gem install hanzo
```

```ruby
require 'hanzo'

Hanzo.api_key = 'sk_live_xxx'

product = Hanzo::Product.create(
  name: 'Widget',
  price: 2999,
  currency: 'USD'
)
```

Features:
- Rails integration gem
- ActiveRecord-style interface
- Webhook signature verification

### Go

```bash
go get github.com/hanzo.ai/hanzo-go
```

```go
import "github.com/hanzo.ai/hanzo-go"

client := hanzo.NewClient("sk_live_xxx")

product, err := client.Products.Create(&hanzo.ProductParams{
    Name:     hanzo.String("Widget"),
    Price:    hanzo.Int64(2999),
    Currency: hanzo.String("USD"),
})
```

Features:
- Idiomatic Go patterns
- Context support for cancellation
- Struct tags for serialization

### PHP

```bash
composer require hanzo/hanzo-php
```

```php
$hanzo = new \Hanzo\Client('sk_live_xxx');

$product = $hanzo->products->create([
    'name' => 'Widget',
    'price' => 2999,
    'currency' => 'USD'
]);
```

Features:
- Laravel and Symfony integrations
- PSR-18 HTTP client support
- Composer autoloading

## SDK Development Kit

Need an SDK for another language? Use our specification:

```bash
npx @hanzo/sdk-gen --spec openapi.yaml --lang rust
```

The generator produces:

- Type definitions from OpenAPI spec
- HTTP client with retries and error handling
- Authentication handling
- Pagination helpers

Community SDKs following our spec get official support.

## Consistency Guarantees

All SDKs share:

- Same method names and signatures
- Identical error types
- Consistent pagination patterns
- Unified webhook handling

Code samples translate between languages with minimal changes.

## Documentation

Each SDK includes:

- Quickstart guide
- Full API reference
- Code examples for common operations
- Migration guides from raw HTTP

## Open Source

All SDKs are MIT licensed:

- github.com/hanzo.ai/hanzo-js
- github.com/hanzo.ai/hanzo-python
- github.com/hanzo.ai/hanzo-ruby
- github.com/hanzo.ai/hanzo-go
- github.com/hanzo.ai/hanzo-php

Issues and pull requests welcome.

## What's Next

- Mobile SDKs (iOS, Android, React Native)
- Server framework integrations
- CLI tool for API exploration
- SDK usage analytics

Good SDKs are invisible. They let you focus on your product, not ours.

---

*Zach Kelling is the founder of Hanzo Industries.*
