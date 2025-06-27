---
title: createStar
slug: figma-createstar
source_file: plugin-api-figma-createstar.html
source_url: https://www.figma.com/plugin-docs/api/figma-createstar/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: c594da52a949469b
token_count: 149
---
# createStar

Creates a new star.

## Signature

### createStar(): StarNode

## Remarks

By default, the new node has five points edges (i.e. a canonical star), a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red, 7-pointed star```
const star = figma.createStar()// Move to (50, 50)star.x = 50star.y = 50// Set size to 200 x 200star.resize(200, 200)// Make the star 7-pointedstar.pointCount = 7// Set solid red fillstar.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]// Make the angles of each point less acutestar.innerRadius = 0.6
```