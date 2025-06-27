---
title: 'startOffset: Vector [readonly] + endOffset: Vector [readonly]'
slug: Effect-startoffset-vector-readonly-endoffset-ve
source_file: plugin-api-Effect.html
source_url: 'https://www.figma.com/plugin-docs/api/Effect/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 078b6429b834022c
token_count: 173
chunk_title: 'startOffset: Vector [readonly] + endOffset: Vector [readonly]'
chunk_slug: Effect-startoffset-vector-readonly-endoffset-ve
chunk_index: 6
chunk_of_total: 8
parent_file: Effect.md
parent_slug: Effect
char_count: 603
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - Effect-introduction
  - Effect-spread-number-readonly
  - Effect-showshadowbehindnode-boolean-readonly-bo
  - Effect-spread-number-readonly
  - Effect-boundvariables-field-in-variablebindable
  - Effect-type-layerblur-backgroundblur-readonly-r
  - Effect-noisetype-multitone-readonly-opacity-num
merged_titles:
  - 'startOffset: Vector [readonly]'
  - 'endOffset: Vector [readonly]'
compiler: noos-figma
---

Position of the starting point of the progressive blur. The position is in normalized object space (top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)).

Position of the ending point of the progressive blur. The position is in normalized object space (top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)).

## NoiseEffect

Noise effect is available in beta, and the API is subject to change.

There are three types of noise effects:

```
type NoiseEffect = | NoiseEffectMonotone | NoiseEffectDuotone | NoiseEffectMultitone
```
