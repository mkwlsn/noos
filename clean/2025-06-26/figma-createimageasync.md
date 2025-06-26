---
title: createImageAsync
slug: figma-createimageasync
source_file: plugin-api-figma-createimageasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-createimageasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 8a2f8f3f5a831729
token_count: 273
---
# createImageAsync

Creates an `Image` object from a src URL. Note that `Image` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain images.

## Signature

### createImageAsync(src: string): Promise

## Remarks

The `src` passed in must be a URL to a PNG, JPEG, or GIF. Images have a maximum size of 4096 pixels (4K) in width and height. Invalid images will reject and log the reason in the console.

Example usage of createImageAsync```
 figma.createImageAsync( 'https://picsum.photos/200' ).then(async (image: Image) => { // Create node const node = figma.createRectangle() // Resize the node to match the image's width and height const { width, height } = await image.getSizeAsync() node.resize(width, height) // Set the fill on the node node.fills = [ { type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' } ] figma.closePlugin() }).catch((error: any) => { console.log(error) figma.closePlugin() })
```## Possible error cases

`Image is too small`

`Image is too large`

`Image type is unsupported`