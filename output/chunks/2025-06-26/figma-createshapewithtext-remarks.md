---
title: Remarks
slug: figma-createshapewithtext-remarks
source_file: plugin-api-figma-createshapewithtext.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createshapewithtext/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bbedd3a41d1a6ce6
token_count: 108
chunk_title: Remarks
chunk_slug: figma-createshapewithtext-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createshapewithtext.md
parent_slug: figma-createshapewithtext
char_count: 377
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has a width and height of 208, and is parented under `figma.currentPage`.

Create a rounded rectangle shape with text```
(async () => { const shape = figma.createShapeWithText() shape.shapeType = 'ROUNDED_RECTANGLE' // Load the font before setting characters await figma.loadFontAsync(shape.text.fontName) shape.text.characters = 'Hello world!'})()
```
