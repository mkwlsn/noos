---
title: Introduction
slug: figma-util-rgb-introduction
source_file: plugin-api-figma-util-rgb.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util-rgb/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c981c37c8cbc2d06
token_count: 208
chunk_title: Introduction
chunk_slug: figma-util-rgb-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-util-rgb.md
parent_slug: figma-util-rgb
char_count: 725
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# rgb

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
```
