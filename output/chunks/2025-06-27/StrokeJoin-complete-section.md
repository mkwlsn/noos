---
title: Complete Section
slug: StrokeJoin-complete-section
source_file: plugin-api-StrokeJoin.html
source_url: 'https://www.figma.com/plugin-docs/api/StrokeJoin/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b41850b50ac351f1
token_count: 131
chunk_title: Complete Section
chunk_slug: StrokeJoin-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: StrokeJoin.md
parent_slug: StrokeJoin
char_count: 457
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# StrokeJoin

```
type StrokeJoin = "MITER" | "BEVEL" | "ROUND"
```The possible values are:

- `"MITER"`: the junction between two strokes will be sharp and pointy, unless the angle is below the "Miter Angle" in which case it the pointy bit will be cut off to "BEVEL" (this is necessary because extremely sharp angles would have an extremely long sharp edge)
- `"BEVEL"`: the sharp bit at the corner of the join is cut off
- `"ROUND"`: the corner is rounded
