---
title: Remarks
slug: figma-createpolygon-remarks
source_file: plugin-api-figma-createpolygon.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createpolygon/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: eb01347c34ba3c36
token_count: 127
chunk_title: Remarks
chunk_slug: figma-createpolygon-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createpolygon.md
parent_slug: figma-createpolygon
char_count: 444
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has three edges (i.e. a triangle), a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red octagon```
const polygon = figma.createPolygon()// Move to (50, 50)polygon.x = 50polygon.y = 50// Set size to 200 x 200polygon.resize(200, 200)// Make the polygon 8-sidedpolygon.pointCount = 8// Set solid red fillpolygon.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
```
