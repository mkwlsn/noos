---
title: HandleMirroring
slug: HandleMirroring
source_file: plugin-api-HandleMirroring.html
source_url: https://www.figma.com/plugin-docs/api/HandleMirroring/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 4be34fbf2b5eed8d
token_count: 101
---
# HandleMirroring

```
type HandleMirroring = "NONE" | "ANGLE" | "ANGLE_AND_LENGTH"
```The possible values are:

- `"NONE"`: the two vector handles are independent from each other
- `"ANGLE"`: the two vector handles form a single tangent line, but the length of each handle is independent
- `"ANGLE_AND_LENGTH"`: the two vector handles form a single tangent line, equidistant on both sides of the vertex