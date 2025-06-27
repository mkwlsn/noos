---
title: Complete Section
slug: ArcData-complete-section
source_file: plugin-api-ArcData.html
source_url: 'https://www.figma.com/plugin-docs/api/ArcData/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f9716202cdf5f2fa
token_count: 156
chunk_title: Complete Section
chunk_slug: ArcData-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: ArcData.md
parent_slug: ArcData
char_count: 544
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# ArcData

```
interface ArcData { readonly startingAngle: number readonly endingAngle: number readonly innerRadius: number}
```This data controls the "arc" properties of the circle shape:

The angles are in radians and the inner radius value is from 0 to 1. For the angles, 0° is the x axis and increasing angles rotate clockwise.

Examples:

```
// Make a half-circlenode.arcData = {startingAngle: 0, endingAngle: Math.PI, innerRadius: 0}
``````
// Make a donutnode.arcData = {startingAngle: 0, endingAngle: 2 * Math.PI, innerRadius: 0.5}
```
