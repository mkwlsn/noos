---
title: Complete Section
slug: MeasurementOffset-complete-section
source_file: plugin-api-MeasurementOffset.html
source_url: 'https://www.figma.com/plugin-docs/api/MeasurementOffset/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 65d1d648226d6f95
token_count: 183
chunk_title: Complete Section
chunk_slug: MeasurementOffset-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: MeasurementOffset.md
parent_slug: MeasurementOffset
char_count: 639
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# MeasurementOffset

```
type MeasurementOffset = | { type: 'INNER'; relative: number } | { type: 'OUTER'; fixed: number }
```The offset of a [Measurement](/plugin-docs/api/Measurement/). The offset field is relative to the start node’s center. It can either be:

- type `'INNER'` where the field `relative` is between -1 and 1, indicating where along the node’s edge the measurement starts.
- type `'OUTER'` where the node field `fixed` is the space between the measurement and the edge of the start node. The sign of the number determines which side it sticks out of. Its value must be non-zero (use type `'INNER'` for an offset of `0`).
