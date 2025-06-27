---
title: createPolygon
slug: figma-createpolygon
source_file: plugin-api-figma-createpolygon.html
source_url: https://www.figma.com/plugin-docs/api/figma-createpolygon/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c92b1737748b0b85
token_count: 143
---
# createPolygon

Creates a new polygon (defaults to a triangle).

## Signature

### createPolygon(): PolygonNode

## Remarks

By default, the new node has three edges (i.e. a triangle), a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red octagon```
const polygon = figma.createPolygon()// Move to (50, 50)polygon.x = 50polygon.y = 50// Set size to 200 x 200polygon.resize(200, 200)// Make the polygon 8-sidedpolygon.pointCount = 8// Set solid red fillpolygon.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
```