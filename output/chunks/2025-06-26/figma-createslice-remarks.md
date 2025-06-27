---
title: Remarks
slug: figma-createslice-remarks
source_file: plugin-api-figma-createslice.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createslice/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: ae345cd3124afd09
token_count: 168
chunk_title: Remarks
chunk_slug: figma-createslice-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createslice.md
parent_slug: figma-createslice
char_count: 588
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node is parented under `figma.currentPage`.

Create a slice and export as PNG```
(async () => { const slice = figma.createSlice() // Move to (50, 50) slice.x = 50 slice.y = 50 // Set size to 500 x 500 slice.resize(500, 500) // Export a PNG of this region of the canvas const bytes = await slice.exportAsync() // Add the image onto the canvas as an image fill in a frame const image = figma.createImage(bytes) const frame = figma.createFrame() frame.resize(500, 500) frame.fills = [{ imageHash: image.hash, scaleMode: "FILL", scalingFactor: 1, type: "IMAGE", }]})()
```
