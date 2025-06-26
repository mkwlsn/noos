---
title: createShapeWithText
slug: figma-createshapewithtext
source_file: plugin-api-figma-createshapewithtext.html
source_url: https://www.figma.com/plugin-docs/api/figma-createshapewithtext/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 20f1f5e580af1557
token_count: 139
---
# createShapeWithText

##### info

This API is only available in FigJam

Creates a new shape with text.

## Signature

### createShapeWithText(): ShapeWithTextNode

## Remarks

By default, the new node has a width and height of 208, and is parented under `figma.currentPage`.

Create a rounded rectangle shape with text```
(async () => { const shape = figma.createShapeWithText() shape.shapeType = 'ROUNDED_RECTANGLE' // Load the font before setting characters await figma.loadFontAsync(shape.text.fontName) shape.text.characters = 'Hello world!'})()
```