---
title: Image
slug: Image
source_file: plugin-api-Image.html
source_url: https://www.figma.com/plugin-docs/api/Image/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: b428e3985a6de59d
token_count: 364
---
# Image

This object is handle to an image stored in Figma.

A common misconception is that Figma has image layers. What we have instead is image fills [`ImagePaint`](/plugin-docs/api/Paint/)
. In fact, dragging an image into Figma creates a rectangle with an image fill. This allows assigning images as strokes too, but it means that creating an image on the canvas requires creating a rectangle (or other shape), following by adding an image fill to it.

New images can be created via [`figma.createImage`](/plugin-docs/api/properties/figma-createimage/)
 from a `Uint8Array` containing the bytes of the image file. Existing images can be read via [`figma.getImageByHash`](/plugin-docs/api/figma/#getimagebyhash)
.

Figma supports PNG, JPEG, and GIF. Images can be up to 4096 pixels (4K) in width and height.

See this [example of working with images](/plugin-docs/working-with-images/)
.

## Image

### hash: string [readonly]

A unique hash of the contents of the image file.

### getBytesAsync(): Promise

The contents of the corresponding image file. This returns a promise because the image may still need to be downloaded (images in Figma are loaded separately from the rest of the document).

### getSizeAsync(): Promise<{ width: number; height: number }>

The width and height of the image in pixels. This returns a promise because the image may still need to be downloaded (images in Figma are loaded separately from the rest of the document).