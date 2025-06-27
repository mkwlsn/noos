---
title: Usage Examples
slug: figma-showui-usage-examples
source_file: plugin-api-figma-showui.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-showui/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6d718f39e41a134a
token_count: 68
chunk_title: Usage Examples
chunk_slug: figma-showui-usage-examples
chunk_index: 3
chunk_of_total: 4
parent_file: figma-showui.md
parent_slug: figma-showui
char_count: 235
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-showui-introduction-signature
  - figma-showui-parameters
  - figma-showui-remarks
compiler: noos-figma
---

Example usage```
figma.showUI( "Hello from Figma", { width: 400, height: 200, title: "My title" })figma.showUI( "Hello from Figma", { width: 400, height: 200, title: "My title", position: { x: 100, y: 100 } })figma.showUI(__html__)
```
