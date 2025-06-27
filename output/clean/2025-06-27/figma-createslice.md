---
title: createSlice
slug: figma-createslice
source_file: plugin-api-figma-createslice.html
source_url: https://www.figma.com/plugin-docs/api/figma-createslice/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 62c8beb74743595d
token_count: 172
---
# createSlice

Creates a new slice object.

## Signature

### createSlice(): SliceNode

## Remarks

By default, the new node is parented under `figma.currentPage`.

Create a slice and export as PNG```
(async () => { const slice = figma.createSlice() // Move to (50, 50) slice.x = 50 slice.y = 50 // Set size to 500 x 500 slice.resize(500, 500) // Export a PNG of this region of the canvas const bytes = await slice.exportAsync() // Add the image onto the canvas as an image fill in a frame const image = figma.createImage(bytes) const frame = figma.createFrame() frame.resize(500, 500) frame.fills = [{ imageHash: image.hash, scaleMode: "FILL", scalingFactor: 1, type: "IMAGE", }]})()
```