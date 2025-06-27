---
title: Remarks
slug: figma-createstar-remarks
source_file: plugin-api-figma-createstar.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createstar/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 291ae57733627db2
token_count: 145
chunk_title: Remarks
chunk_slug: figma-createstar-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createstar.md
parent_slug: figma-createstar
char_count: 507
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has five points edges (i.e. a canonical star), a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red, 7-pointed star```
const star = figma.createStar()// Move to (50, 50)star.x = 50star.y = 50// Set size to 200 x 200star.resize(200, 200)// Make the star 7-pointedstar.pointCount = 7// Set solid red fillstar.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]// Make the angles of each point less acutestar.innerRadius = 0.6
```
