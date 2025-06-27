---
title: createEllipse
slug: figma-createellipse
source_file: plugin-api-figma-createellipse.html
source_url: https://www.figma.com/plugin-docs/api/figma-createellipse/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: df7e2b0b5ebc5647
token_count: 165
---
# createEllipse

Creates a new ellipse. The behavior is similar to using the `O` shortcut followed by a click.

## Signature

### createEllipse(): EllipseNode

## Remarks

By default, the new node has a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a red, U-shaped half donut```
const ellipse = figma.createEllipse()// Move to (50, 50)ellipse.x = 50ellipse.y = 50// Set size to 200 x 100ellipse.resize(200, 100)// Set solid red fillellipse.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]// Arc from 0° to 180° clockwiseellipse.arcData = {startingAngle: 0, endingAngle: Math.PI, innerRadius: 0.5}
```