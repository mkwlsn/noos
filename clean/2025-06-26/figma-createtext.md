---
title: createText
slug: figma-createtext
source_file: plugin-api-figma-createtext.html
source_url: https://www.figma.com/plugin-docs/api/figma-createtext/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 756dcaf818153121
token_count: 192
---
# createText

Creates a new, empty text node.

## Signature

### createText(): TextNode

## Remarks

By default, parented under `figma.currentPage`. Without setting additional properties, the text has no characters. You can assign a string, to the [`characters`](/plugin-docs/api/properties/TextNode-characters/) property of the returned node to provide it with text.

Create a styled 'Hello world!' text node```
(async () => { const text = figma.createText() // Move to (50, 50) text.x = 50 text.y = 50 // Load the font in the text node before setting the characters await figma.loadFontAsync(text.fontName) text.characters = 'Hello world!' // Set bigger font size and red color text.fontSize = 18 text.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]})()
```