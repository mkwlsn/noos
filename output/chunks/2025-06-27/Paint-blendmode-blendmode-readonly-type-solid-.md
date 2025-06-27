---
title: 'blendMode?: BlendMode [readonly] + type: ''SOLID'' [readonly]'
slug: Paint-blendmode-blendmode-readonly-type-solid-
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e97e0bada66bad26
token_count: 68
chunk_title: 'blendMode?: BlendMode [readonly] + type: ''SOLID'' [readonly]'
chunk_slug: Paint-blendmode-blendmode-readonly-type-solid-
chunk_index: 2
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 238
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - Paint-introduction
  - Paint-visible-boolean-readonly-opacity-number-
  - Paint-color-rgb-readonly
  - Paint-gradienttransform-transform-readonly-gra
  - Paint-type-image-readonly-scalemode-fill-fit-c
  - Paint-imagehash-string-null-readonly-imagetran
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
merged_titles:
  - 'blendMode?: BlendMode [readonly]'
  - 'type: ''SOLID'' [readonly]'
compiler: noos-figma
---

Determines how the color of this paint blends with the colors underneath it. Defaults to "NORMAL".

## SolidPaint

The string literal "SOLID" representing the type of paint this is. Always check the `type` before reading other properties.
