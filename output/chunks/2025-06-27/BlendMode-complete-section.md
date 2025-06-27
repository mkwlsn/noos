---
title: Complete Section
slug: BlendMode-complete-section
source_file: plugin-api-BlendMode.html
source_url: 'https://www.figma.com/plugin-docs/api/BlendMode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1c9f70114b997a9c
token_count: 196
chunk_title: Complete Section
chunk_slug: BlendMode-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: BlendMode.md
parent_slug: BlendMode
char_count: 686
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# BlendMode

```
type BlendMode = "PASS_THROUGH" | "NORMAL" | "DARKEN" | "MULTIPLY" | "LINEAR_BURN" | // "Plus darker" in Figma "COLOR_BURN" | "LIGHTEN" | "SCREEN" | "LINEAR_DODGE" | // "Plus lighter" in Figma "COLOR_DODGE" | "OVERLAY" | "SOFT_LIGHT" | "HARD_LIGHT" | "DIFFERENCE" | "EXCLUSION" | "HUE" | "SATURATION" | "COLOR" | "LUMINOSITY"
```Blend mode describes how a color blends with what's underneath it. This property is typically set on a layer, fill or effect (e.g. blend mode of the shadow).

These blend modes are fairly standard and should match what you would find in other image processing tools. [[Examples]](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode)
