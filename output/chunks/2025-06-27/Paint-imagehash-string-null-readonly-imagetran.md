---
title: 'imageHash: string | null [readonly] + imageTransform?: Transform [readonly]'
slug: Paint-imagehash-string-null-readonly-imagetran
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 47997574d329f29e
token_count: 81
chunk_title: 'imageHash: string | null [readonly] + imageTransform?: Transform [readonly]'
chunk_slug: Paint-imagehash-string-null-readonly-imagetran
chunk_index: 6
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 281
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
  - Paint-scalingfactor-number-readonly-rotation-n
  - Paint-filters-imagefilters-readonly
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
merged_titles:
  - 'imageHash: string | null [readonly]'
  - 'imageTransform?: Transform [readonly]'
compiler: noos-figma
---

The hash (id) of the image used for this paint, if any. Use [`figma.getImageByHash`](/plugin-docs/api/figma/#getimagebyhash)
 to get the corresponding image object.

Applicable only for `scaleMode == "CROP"`. Determines how the image is positioned (thus, cropped) within the layer.
