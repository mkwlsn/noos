---
title: 'rotation?: number [readonly] + filters?: ImageFilters [readonly]'
slug: Paint-rotation-number-readonly-filters-imagefi
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2a22fc978508b0b8
token_count: 117
chunk_title: 'rotation?: number [readonly] + filters?: ImageFilters [readonly]'
chunk_slug: Paint-rotation-number-readonly-filters-imagefi
chunk_index: 10
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 409
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - Paint-introduction
  - Paint-visible-boolean-readonly-opacity-number-
  - Paint-blendmode-blendmode-readonly-type-solid-
  - Paint-color-rgb-readonly
  - Paint-gradienttransform-transform-readonly-gra
  - Paint-type-image-readonly-scalemode-fill-fit-c
  - Paint-imagehash-string-null-readonly-imagetran
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
merged_titles:
  - 'rotation?: number [readonly]'
  - 'filters?: ImageFilters [readonly]'
compiler: noos-figma
---

Applicable only for `scaleMode == "TILE" | "FILL" | "FIT"` (automatic for `scaleMode == "CROP"`). Determines the rotation of the video within the layer. Must be in increments of +90.

The values for the video filter slides, equivalent to those in the paint picker. All values default to 0.0 and have range -1.0 to +1.0.

## PatternPaint

Pattern paints are available in beta, and the API is subject to change.
