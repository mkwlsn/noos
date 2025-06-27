---
title: 'scalingFactor?: number [readonly] + rotation?: number [readonly]'
slug: Paint-scalingfactor-number-readonly-rotation-n
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bbe76f9c2e173dd1
token_count: 94
chunk_title: 'scalingFactor?: number [readonly] + rotation?: number [readonly]'
chunk_slug: Paint-scalingfactor-number-readonly-rotation-n
chunk_index: 7
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 327
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
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
merged_titles:
  - 'scalingFactor?: number [readonly]'
  - 'rotation?: number [readonly]'
compiler: noos-figma
---

Applicable only for `scaleMode == "TILE"` (automatic for other modes). Determines the scaling (thus, repetition) of the image within the layer.

Applicable only for `scaleMode == "TILE" | "FILL" | "FIT"` (automatic for `scaleMode == "CROP"`). Determines the rotation of the image within the layer. Must be in increments of +90.
