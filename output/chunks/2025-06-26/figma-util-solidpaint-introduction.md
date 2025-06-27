---
title: Introduction
slug: figma-util-solidpaint-introduction
source_file: plugin-api-figma-util-solidpaint.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util-solidpaint/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 02b11498aadf35a3
token_count: 376
chunk_title: Introduction
chunk_slug: figma-util-solidpaint-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-util-solidpaint.md
parent_slug: figma-util-solidpaint
char_count: 1315
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# solidPaint

Creates a `SolidPaint` object, assigning color and opacity from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. The resulting alpha value will be applied to the `SolidPaint`'s `opacity` property, which defaults to 1 (opaque) if not specified. If a string encoding cannot be parsed, an error will be thrown.

Optionally, you can provide a set of overrides for any of the non-color properties of the `SolidPaint` object. This is useful for modifying the color of an existing `SolidPaint` while preserving its other properties.

Examples:

```
// Set the current page background to redfigma.currentPage.backgrounds = [figma.util.solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```You can alias this function for more concise code:

```
const solidPaint = figma.util.solidPaint// Set the current page background to redfigma.currentPage.backgrounds = [solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = solidPaint('#FF00FF88', node.fills[0])}
```## Signature
