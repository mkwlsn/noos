---
title: Remarks
slug: figma-createrectangle-remarks
source_file: plugin-api-figma-createrectangle.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createrectangle/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 7a8fea7f5a12b85e
token_count: 106
chunk_title: Remarks
chunk_slug: figma-createrectangle-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createrectangle.md
parent_slug: figma-createrectangle
char_count: 370
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a rectangle and set basic styles```
const rect = figma.createRectangle()// Move to (50, 50)rect.x = 50rect.y = 50// Set size to 200 x 100rect.resize(200, 100)// Set solid red fillrect.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
```
