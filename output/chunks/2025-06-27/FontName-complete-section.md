---
title: Complete Section
slug: FontName-complete-section
source_file: plugin-api-FontName.html
source_url: 'https://www.figma.com/plugin-docs/api/FontName/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c8318ec1c0f53966
token_count: 68
chunk_title: Complete Section
chunk_slug: FontName-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: FontName.md
parent_slug: FontName
char_count: 235
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# FontName

```
interface Font { fontName: FontName}interface FontName { readonly family: string readonly style: string}
```Describes a font used by a text node. For example, the default font is `{ family: "Inter", style: "Regular" }`.
