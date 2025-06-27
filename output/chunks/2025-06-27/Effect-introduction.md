---
title: Introduction
slug: Effect-introduction
source_file: plugin-api-Effect.html
source_url: 'https://www.figma.com/plugin-docs/api/Effect/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 91f1aa757a787514
token_count: 94
chunk_title: Introduction
chunk_slug: Effect-introduction
chunk_index: 0
chunk_of_total: 8
parent_file: Effect.md
parent_slug: Effect
char_count: 328
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Effect-spread-number-readonly
  - Effect-showshadowbehindnode-boolean-readonly-bo
  - Effect-spread-number-readonly
  - Effect-boundvariables-field-in-variablebindable
  - Effect-type-layerblur-backgroundblur-readonly-r
  - Effect-startoffset-vector-readonly-endoffset-ve
  - Effect-noisetype-multitone-readonly-opacity-num
compiler: noos-figma
---

# Effect

Effects can be grouped into five categories of properties: `DropShadowEffect`, `InnerShadowEffect`, `BlurEffect`, `NoiseEffect`, and `TextureEffect`. The `Effect` type is then one of the five:

```
type Effect = | DropShadowEffect | InnerShadowEffect | BlurEffect | NoiseEffect | TextureEffect
```

## DropShadowEffect
