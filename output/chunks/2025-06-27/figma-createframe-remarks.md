---
title: Remarks
slug: figma-createframe-remarks
source_file: plugin-api-figma-createframe.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createframe/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0c2f64bc3555e944
token_count: 77
chunk_title: Remarks
chunk_slug: figma-createframe-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createframe.md
parent_slug: figma-createframe
char_count: 269
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has a white background, width and height both at 100, and is parented under `figma.currentPage`.

Create a frame```
const frame = figma.createFrame()// Move to (50, 50)frame.x = 50frame.y = 50// Set size to 1280 x 720frame.resize(1280, 720)
```
