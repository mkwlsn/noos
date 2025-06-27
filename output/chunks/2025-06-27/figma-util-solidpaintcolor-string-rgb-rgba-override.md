---
title: 'solidPaint(color: string | RGB | RGBA, overrides?: Partial): SolidPaint'
slug: figma-util-solidpaintcolor-string-rgb-rgba-override
source_file: plugin-api-figma-util.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 616182533c96b00a
token_count: 387
chunk_title: 'solidPaint(color: string | RGB | RGBA, overrides?: Partial): SolidPaint'
chunk_slug: figma-util-solidpaintcolor-string-rgb-rgba-override
chunk_index: 2
chunk_of_total: 4
parent_file: figma-util.md
parent_slug: figma-util
char_count: 1354
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-util-introduction-rgbcolor-string-rgb-rgba-rg
  - figma-util-rgbacolor-string-rgb-rgba-rgba
  - figma-util-normalizemarkdownmarkdown-string-string
compiler: noos-figma
---

Creates a `SolidPaint` object, assigning color and opacity from a variety of common color encodings.

Accepted color formats include CSS color strings with hex, `rgb()`, `hsl()`, or `lab()` encodings, as well as `RGB` and `RGBA` objects. The resulting alpha value will be applied to the `SolidPaint`'s `opacity` property, which defaults to 1 (opaque) if not specified. If a string encoding cannot be parsed, an error will be thrown.

Optionally, you can provide a set of overrides for any of the non-color properties of the `SolidPaint` object. This is useful for modifying the color of an existing `SolidPaint` while preserving its other properties.

Examples:

```
// Set the current page background to redfigma.currentPage.backgrounds = [figma.util.solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```You can alias this function for more concise code:

```
const solidPaint = figma.util.solidPaint// Set the current page background to redfigma.currentPage.backgrounds = [solidPaint("#FF0000")]// Modify an existing SolidPaint with new color and opacityif (node.fills[0].type === 'SOLID') { const updated = solidPaint('#FF00FF88', node.fills[0])}
```[View more →](/plugin-docs/api/properties/figma-util-solidpaint/)
