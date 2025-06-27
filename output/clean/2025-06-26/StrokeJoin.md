---
title: StrokeJoin
slug: StrokeJoin
source_file: plugin-api-StrokeJoin.html
source_url: https://www.figma.com/plugin-docs/api/StrokeJoin/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: b41850b50ac351f1
token_count: 115
---
# StrokeJoin

```
type StrokeJoin = "MITER" | "BEVEL" | "ROUND"
```The possible values are:

- `"MITER"`: the junction between two strokes will be sharp and pointy, unless the angle is below the "Miter Angle" in which case it the pointy bit will be cut off to "BEVEL" (this is necessary because extremely sharp angles would have an extremely long sharp edge)
- `"BEVEL"`: the sharp bit at the corner of the join is cut off
- `"ROUND"`: the corner is rounded