---
title: 'rgba(color: string | RGB | RGBA): RGBA'
slug: figma-util-rgbacolor-string-rgb-rgba-rgba
source_file: plugin-api-figma-util.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 13e90a26b1847abe
token_count: 185
chunk_title: 'rgba(color: string | RGB | RGBA): RGBA'
chunk_slug: figma-util-rgbacolor-string-rgb-rgba-rgba
chunk_index: 1
chunk_of_total: 4
parent_file: figma-util.md
parent_slug: figma-util
char_count: 647
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-util-introduction-rgbcolor-string-rgb-rgba-rg
  - figma-util-solidpaintcolor-string-rgb-rgba-override
  - figma-util-normalizemarkdownmarkdown-string-string
compiler: noos-figma
---

Creates an `RGBA` color object from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha defaults to 1 (opaque) if not provided in the input. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const layoutGrid = { pattern: 'GRID', sectionSize: 1, color: figma.util.rgba('rgb(25% 25% 25% / 0.5)')}
```You can alias this function for more concise code:

```
const rgba = figma.util.rgbaconst color = rgba('rgb(25% 25% 25% / 0.5)')
```[View more →](/plugin-docs/api/properties/figma-util-rgba/)
