---
title: 'exportAsync(settings: ExportSettingsREST): Promise + settings'
slug: nodes-exportasync-exportasyncsettings-exportsettingsrest-p
source_file: plugin-api-nodes-exportasync.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-exportasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9279999b6dea623e
token_count: 408
chunk_title: 'exportAsync(settings: ExportSettingsREST): Promise + settings'
chunk_slug: nodes-exportasync-exportasyncsettings-exportsettingsrest-p
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-exportasync.md
parent_slug: nodes-exportasync
char_count: 1425
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-exportasync-introduction
merged_titles:
  - 'exportAsync(settings: ExportSettingsREST): Promise'
  - settings
compiler: noos-figma
---

## Parameters

When this parameter is absent, this function defaults to exporting as a PNG at 1x resolution.

Note that the result is a Uint8Array, representing the bytes of the image file (encoded in the specified format).

Create a hexagon, export as PNG, and place on canvas```
(async () => { const polygon = figma.createPolygon() polygon.pointCount = 6 polygon.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }] // Export a 2x resolution PNG of the node const bytes = await polygon.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 2 }, }) // Add the image onto the canvas as an image fill in a frame const image = figma.createImage(bytes) const frame = figma.createFrame() frame.x = 200 frame.resize(200, 230) frame.fills = [{ imageHash: image.hash, scaleMode: "FILL", scalingFactor: 1, type: "IMAGE", }]})()
```Export a VectorNode as an SVG string```
 (async () => { // Create a triangle using the VectorPath API const vector = figma.createVector() vector.vectorPaths = [{ windingRule: "EVENODD", data: "M 0 100 L 100 100 L 50 0 Z", }] // Export the vector to SVG const svg = await vector.exportAsync({ format: 'SVG_STRING' }) console.log(svg); })()
```Export a node as a JSON object```
(async () => { const json = await figma.currentPage.selection[0].exportAsync({format: 'JSON_REST_V1'}) // Return a JSON object in the same format as the Figma REST API response console.log(json.document)})()
```
