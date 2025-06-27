---
title: OverflowDirection
slug: OverflowDirection
source_file: plugin-api-OverflowDirection.html
source_url: https://www.figma.com/plugin-docs/api/OverflowDirection/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 9d35ef407130a1d4
token_count: 155
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