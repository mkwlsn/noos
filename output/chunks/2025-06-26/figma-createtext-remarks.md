---
title: Remarks
slug: figma-createtext-remarks
source_file: plugin-api-figma-createtext.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createtext/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: e74587585ad2af82
token_count: 191
chunk_title: Remarks
chunk_slug: figma-createtext-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createtext.md
parent_slug: figma-createtext
char_count: 667
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, parented under `figma.currentPage`. Without setting additional properties, the text has no characters. You can assign a string, to the [`characters`](/plugin-docs/api/properties/TextNode-characters/) property of the returned node to provide it with text.

Create a styled 'Hello world!' text node```
(async () => { const text = figma.createText() // Move to (50, 50) text.x = 50 text.y = 50 // Load the font in the text node before setting the characters await figma.loadFontAsync(text.fontName) text.characters = 'Hello world!' // Set bigger font size and red color text.fontSize = 18 text.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]})()
```
