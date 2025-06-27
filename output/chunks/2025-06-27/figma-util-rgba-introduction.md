---
title: Introduction
slug: figma-util-rgba-introduction
source_file: plugin-api-figma-util-rgba.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util-rgba/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 23e387bba1c032b5
token_count: 171
chunk_title: Introduction
chunk_slug: figma-util-rgba-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-util-rgba.md
parent_slug: figma-util-rgba
char_count: 596
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# rgba

Creates an `RGBA` color object from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. Alpha defaults to 1 (opaque) if not provided in the input. If a string encoding cannot be parsed, an error will be thrown.

Examples:

```
const layoutGrid = { pattern: 'GRID', sectionSize: 1, color: figma.util.rgba('rgb(25% 25% 25% / 0.5)')}
```You can alias this function for more concise code:

```
const rgba = figma.util.rgbaconst color = rgba('rgb(25% 25% 25% / 0.5)')
```
