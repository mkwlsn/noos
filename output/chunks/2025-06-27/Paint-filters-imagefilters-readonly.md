---
title: 'filters?: ImageFilters [readonly]'
slug: Paint-filters-imagefilters-readonly
source_file: plugin-api-Paint.html
source_url: 'https://www.figma.com/plugin-docs/api/Paint/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9e82e0d142a8e13b
token_count: 142
chunk_title: 'filters?: ImageFilters [readonly]'
chunk_slug: Paint-filters-imagefilters-readonly
chunk_index: 8
chunk_of_total: 11
parent_file: Paint.md
parent_slug: Paint
char_count: 496
heading_level: h3
chunk_type: guide
merge_type: atomic
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
  - Paint-videotransform-transform-readonly-scalin
  - Paint-rotation-number-readonly-filters-imagefi
compiler: noos-figma
---

The values for the image filter slides, equivalent to those in the paint picker. All values default to 0.0 and have range -1.0 to +1.0.

## ImageFilters

```
interface ImageFilters { exposure?: number contrast?: number saturation?: number temperature?: number tint?: number highlights?: number shadows?: number}
```

## ColorStop

```
interface ColorStop { readonly position: number readonly color: RGBA readonly boundVariables?: { [field in VariableBindableColorStopField]?: VariableAlias }}
```
