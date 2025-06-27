---
title: Introduction
slug: Paint-introduction
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3ffa9cd1a0b773e9
token_count: 63
chunk_title: Introduction
chunk_slug: Paint-introduction
chunk_index: 0
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 219
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Paint-visible-boolean-readonly-opacity-number-
  - Paint-blendmode-blendmode-readonly-type-solid-
  - Paint-color-rgb-readonly
  - Paint-gradienttransform-transform-readonly-gra
  - Paint-type-image-readonly-scalemode-fill-fit-c
  - Paint-imagehash-string-null-readonly-imagetran
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
compiler: noos-figma
---

# Paint

Figma has five types of paints: solid colors, gradients, images, videos, and patterns (in beta).

```
type Paint = | SolidPaint | GradientPaint | ImagePaint | VideoPaint | PatternPaint
```

## Common properties
