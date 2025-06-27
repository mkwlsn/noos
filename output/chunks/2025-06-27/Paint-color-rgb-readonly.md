---
title: 'color: RGB [readonly]'
slug: Paint-color-rgb-readonly
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 437238dbb5c77a65
token_count: 133
chunk_title: 'color: RGB [readonly]'
chunk_slug: Paint-color-rgb-readonly
chunk_index: 3
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 464
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Paint-introduction
  - Paint-visible-boolean-readonly-opacity-number-
  - Paint-blendmode-blendmode-readonly-type-solid-
  - Paint-gradienttransform-transform-readonly-gra
  - Paint-type-image-readonly-scalemode-fill-fit-c
  - Paint-imagehash-string-null-readonly-imagetran
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
compiler: noos-figma
---

The color of the paint. This does not have a alpha property, use `opacity` instead.

You can use the [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/)
 utility function to set both `color` and `opacity` using CSS color strings:

```
// Create a new SolidPaintconst paint = figma.util.solidPaint('#FF00FF88')// Modify an existing SolidPaintif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```
