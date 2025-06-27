---
title: Complete Section
slug: OverflowDirection-complete-section
source_file: plugin-api-OverflowDirection.html
source_url: 'https://www.figma.com/plugin-docs/api/OverflowDirection/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9d35ef407130a1d4
token_count: 178
chunk_title: Complete Section
chunk_slug: OverflowDirection-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: OverflowDirection.md
parent_slug: OverflowDirection
char_count: 620
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# OverflowDirection

```
type OverflowDirection = "NONE" | "HORIZONTAL" | "VERTICAL" | "BOTH"
```The possible values are:

- `"NONE"`: the frame does not explicitly scroll
- `"HORIZONTAL"`: the frame can scroll in the horizontal direction if its content exceeds the frame's bounds horizontally
- `"VERTICAL"`: the frame can in the vertical direction if its content exceeds the frame's bounds vertically
- `"BOTH"`: the frame can scroll in either direction if the content exceeds the frame's bounds

Note that top-level frames (parented directly under the canvas) can still scroll even when `OverflowDirection` is `NONE`.
