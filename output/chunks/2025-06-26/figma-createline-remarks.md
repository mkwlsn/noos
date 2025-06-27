---
title: Remarks
slug: figma-createline-remarks
source_file: plugin-api-figma-createline.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createline/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 06b2f615dabf2599
token_count: 125
chunk_title: Remarks
chunk_slug: figma-createline-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createline.md
parent_slug: figma-createline
char_count: 436
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node is 100 in width, has a black stroke, with weight 1, and is parented under `figma.currentPage`.

Create a line and set basic styles```
const line = figma.createLine()// Move to (50, 50)line.x = 50line.y = 50// Make line 200px longline.resize(200, 0)// 4px thick red line with arrows at each endline.strokeWeight = 4line.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]line.strokeCap = 'ARROW_LINES'
```
