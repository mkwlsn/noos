---
title: createLine
slug: figma-createline
source_file: plugin-api-figma-createline.html
source_url: https://www.figma.com/plugin-docs/api/figma-createline/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 178718bda1595b63
token_count: 132
---
# createLine

Creates a new line.

## Signature

### createLine(): LineNode

## Remarks

By default, the new node is 100 in width, has a black stroke, with weight 1, and is parented under `figma.currentPage`.

Create a line and set basic styles```
const line = figma.createLine()// Move to (50, 50)line.x = 50line.y = 50// Make line 200px longline.resize(200, 0)// 4px thick red line with arrows at each endline.strokeWeight = 4line.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]line.strokeCap = 'ARROW_LINES'
```