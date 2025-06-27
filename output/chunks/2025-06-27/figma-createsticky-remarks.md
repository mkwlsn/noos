---
title: Remarks
slug: figma-createsticky-remarks
source_file: plugin-api-figma-createsticky.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createsticky/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: cb64a108c106f107
token_count: 95
chunk_title: Remarks
chunk_slug: figma-createsticky-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createsticky.md
parent_slug: figma-createsticky
char_count: 330
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has constant width and height both at 240, and is parented under `figma.currentPage`.

Create a sticky with text```
(async () => { const sticky = figma.createSticky() // Load the font before setting characters await figma.loadFontAsync(sticky.text.fontName) sticky.text.characters = 'Hello world!'})()
```
