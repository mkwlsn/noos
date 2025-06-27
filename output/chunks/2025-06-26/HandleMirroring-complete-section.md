---
title: Complete Section
slug: HandleMirroring-complete-section
source_file: plugin-api-HandleMirroring.html
source_url: 'https://www.figma.com/plugin-docs/api/HandleMirroring/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4be34fbf2b5eed8d
token_count: 116
chunk_title: Complete Section
chunk_slug: HandleMirroring-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: HandleMirroring.md
parent_slug: HandleMirroring
char_count: 403
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# HandleMirroring

```
type HandleMirroring = "NONE" | "ANGLE" | "ANGLE_AND_LENGTH"
```The possible values are:

- `"NONE"`: the two vector handles are independent from each other
- `"ANGLE"`: the two vector handles form a single tangent line, but the length of each handle is independent
- `"ANGLE_AND_LENGTH"`: the two vector handles form a single tangent line, equidistant on both sides of the vertex
