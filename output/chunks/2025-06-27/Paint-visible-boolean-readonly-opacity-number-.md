---
title: 'visible?: boolean [readonly] + opacity?: number [readonly]'
slug: Paint-visible-boolean-readonly-opacity-number-
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2cc5fa6d88cc0e52
token_count: 144
chunk_title: 'visible?: boolean [readonly] + opacity?: number [readonly]'
chunk_slug: Paint-visible-boolean-readonly-opacity-number-
chunk_index: 1
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 503
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - Paint-introduction
  - Paint-blendmode-blendmode-readonly-type-solid-
  - Paint-color-rgb-readonly
  - Paint-gradienttransform-transform-readonly-gra
  - Paint-type-image-readonly-scalemode-fill-fit-c
  - Paint-imagehash-string-null-readonly-imagetran
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
merged_titles:
  - 'visible?: boolean [readonly]'
  - 'opacity?: number [readonly]'
compiler: noos-figma
---

Whether the paint is visible. Defaults to true.

The opacity of the paint. Must be a value between 0 and 1. Defaults to 1.

You can use the [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/)
 utility function to set both `color` and `opacity` using CSS color strings:

```
// Create a new SolidPaintconst paint = figma.util.solidPaint('#FF00FF88')// Modify an existing SolidPaintif (node.fills[0].type === 'SOLID') { const updated = figma.util.solidPaint('#FF00FF88', node.fills[0])}
```
