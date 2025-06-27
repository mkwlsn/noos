---
title: LineHeight
slug: LineHeight
source_file: plugin-api-LineHeight.html
source_url: https://www.figma.com/plugin-docs/api/LineHeight/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 943e11d9c1bb7db3
token_count: 73
---
# LineHeight

```
type LineHeight = { readonly value: number readonly unit: "PIXELS" | "PERCENT"} | { readonly unit: "AUTO"}
```An object representing a number with a unit. This is similar to how you can set either `100%` or `100px` in a lot of CSS properties. It can also be set to `AUTO`.