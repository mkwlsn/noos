---
title: Signature + Remarks
slug: figma-createimageasync-signature-remarks
source_file: plugin-api-figma-createimageasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createimageasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b193406844f75435
token_count: 212
chunk_title: Signature + Remarks
chunk_slug: figma-createimageasync-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createimageasync.md
parent_slug: figma-createimageasync
char_count: 742
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-createimageasync-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### createImageAsync(src: string): Promise

The `src` passed in must be a URL to a PNG, JPEG, or GIF. Images have a maximum size of 4096 pixels (4K) in width and height. Invalid images will reject and log the reason in the console.

Example usage of createImageAsync```
 figma.createImageAsync( 'https://picsum.photos/200' ).then(async (image: Image) => { // Create node const node = figma.createRectangle() // Resize the node to match the image's width and height const { width, height } = await image.getSizeAsync() node.resize(width, height) // Set the fill on the node node.fills = [ { type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' } ] figma.closePlugin() }).catch((error: any) => { console.log(error) figma.closePlugin() })
```
