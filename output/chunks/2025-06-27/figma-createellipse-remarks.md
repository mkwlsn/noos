---
title: Remarks
slug: figma-createellipse-remarks
source_file: plugin-api-figma-createellipse.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createellipse/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 79e143d69eb0dc2c
token_count: 139
chunk_title: Remarks
chunk_slug: figma-createellipse-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createellipse.md
parent_slug: figma-createellipse
char_count: 485
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red, U-shaped half donut```
const ellipse = figma.createEllipse()// Move to (50, 50)ellipse.x = 50ellipse.y = 50// Set size to 200 x 100ellipse.resize(200, 100)// Set solid red fillellipse.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]// Arc from 0° to 180° clockwiseellipse.arcData = {startingAngle: 0, endingAngle: Math.PI, innerRadius: 0.5}
```
