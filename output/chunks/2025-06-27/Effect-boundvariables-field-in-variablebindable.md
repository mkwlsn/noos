---
title: >-
  boundVariables?: { [field in VariableBindableEffectField]?: VariableAlias}
  [readonly]
slug: Effect-boundvariables-field-in-variablebindable
source_file: plugin-api-Effect.html
source_url: 'https://www.figma.com/plugin-docs/api/Effect/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4d3ca0d243c01137
token_count: 66
chunk_title: >-
  boundVariables?: { [field in VariableBindableEffectField]?: VariableAlias}
  [readonly]
chunk_slug: Effect-boundvariables-field-in-variablebindable
chunk_index: 4
chunk_of_total: 8
parent_file: Effect.md
parent_slug: Effect
char_count: 231
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Effect-introduction
  - Effect-spread-number-readonly
  - Effect-showshadowbehindnode-boolean-readonly-bo
  - Effect-spread-number-readonly
  - Effect-type-layerblur-backgroundblur-readonly-r
  - Effect-startoffset-vector-readonly-endoffset-ve
  - Effect-noisetype-multitone-readonly-opacity-num
compiler: noos-figma
---

The variables bound to a particular field on this shadow effect

## BlurEffect

A blur effect can either normal or progressive (in beta, API is subject to change):

```
type BlurEffect = BlurEffectNormal | BlurEffectProgressive
```
