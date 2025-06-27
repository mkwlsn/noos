---
title: 'Introduction + rgb(color: string | RGB | RGBA): RGB'
slug: figma-util-introduction-rgbcolor-string-rgb-rgba-rg
source_file: plugin-api-figma-util.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2fe7799ec97cfd07
token_count: 253
chunk_title: 'Introduction + rgb(color: string | RGB | RGBA): RGB'
chunk_slug: figma-util-introduction-rgbcolor-string-rgb-rgba-rg
chunk_index: 0
chunk_of_total: 4
parent_file: figma-util.md
parent_slug: figma-util
char_count: 885
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-util-rgbacolor-string-rgb-rgba-rgba
  - figma-util-solidpaintcolor-string-rgb-rgba-override
  - figma-util-normalizemarkdownmarkdown-string-string
merged_titles:
  - Introduction
  - 'rgb(color: string | RGB | RGBA): RGB'
compiler: noos-figma
---

# figma.util

The `figma.util` global object provides a set of convenience functions for common operations.

Creates an `RGB` color object from a variety of common color encodings.

Note: since `RGB` colors are primarily used for creating `SolidPaint` objects, you might want to use [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/)
 instead.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha values in the input will be ignored. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const color1 = figma.util.rgb('#FF00FF')const color2 = figma.util.rgb('hsl(25% 50% 75%)')
```You can alias this function for more concise code:

```
const rgb = figma.util.rgbconst color = rgb('#FF00FF')
```[View more →](/plugin-docs/api/properties/figma-util-rgb/)
