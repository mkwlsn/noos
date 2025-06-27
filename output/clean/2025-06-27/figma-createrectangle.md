---
title: createRectangle
slug: figma-createrectangle
source_file: plugin-api-figma-createrectangle.html
source_url: https://www.figma.com/plugin-docs/api/figma-createrectangle/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9cfe0a0b852a7672
token_count: 138
---
# createRectangle

Creates a new rectangle. The behavior is similar to using the `R` shortcut followed by a click.

## Signature

### createRectangle(): RectangleNode

## Remarks

By default, the new node has a default fill, width and height both at 100, and is parented under `figma.currentPage`.

Create a rectangle and set basic styles```
const rect = figma.createRectangle()// Move to (50, 50)rect.x = 50rect.y = 50// Set size to 200 x 100rect.resize(200, 100)// Set solid red fillrect.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
```