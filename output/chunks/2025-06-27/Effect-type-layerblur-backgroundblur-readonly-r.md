---
title: 'type: ''LAYER_BLUR'' | ''BACKGROUND_BLUR'' [readonly] + radius: number [readonly]'
slug: Effect-type-layerblur-backgroundblur-readonly-r
source_file: plugin-api-Effect.html
source_url: 'https://www.figma.com/plugin-docs/api/Effect/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d263bea84cf535ec
token_count: 73
chunk_title: 'type: ''LAYER_BLUR'' | ''BACKGROUND_BLUR'' [readonly] + radius: number [readonly]'
chunk_slug: Effect-type-layerblur-backgroundblur-readonly-r
chunk_index: 5
chunk_of_total: 8
parent_file: Effect.md
parent_slug: Effect
char_count: 253
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
  - Effect-startoffset-vector-readonly-endoffset-ve
  - Effect-noisetype-multitone-readonly-opacity-num
merged_titles:
  - 'type: ''LAYER_BLUR'' | ''BACKGROUND_BLUR'' [readonly]'
  - 'radius: number [readonly]'
compiler: noos-figma
---

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

The radius of the blur. Must be >= 0. A lower radius creates a sharper blur. For progressive blurs, this is the end radius of the blur.
