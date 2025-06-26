---
title: LetterSpacing
slug: LetterSpacing
source_file: plugin-api-LetterSpacing.html
source_url: https://www.figma.com/plugin-docs/api/LetterSpacing/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 563f334304cdb375
token_count: 60
---
# LetterSpacing

```
type LetterSpacing = { readonly value: number readonly unit: "PIXELS" | "PERCENT"}
```An object representing a number with a unit. This is similar to how you can set either `100%` or `100px` in a lot of CSS properties.