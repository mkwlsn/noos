---
title: Complete Section
slug: LineHeight-complete-section
source_file: plugin-api-LineHeight.html
source_url: 'https://www.figma.com/plugin-docs/api/LineHeight/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 943e11d9c1bb7db3
token_count: 83
chunk_title: Complete Section
chunk_slug: LineHeight-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: LineHeight.md
parent_slug: LineHeight
char_count: 290
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# LineHeight

```
type LineHeight = { readonly value: number readonly unit: "PIXELS" | "PERCENT"} | { readonly unit: "AUTO"}
```An object representing a number with a unit. This is similar to how you can set either `100%` or `100px` in a lot of CSS properties. It can also be set to `AUTO`.
