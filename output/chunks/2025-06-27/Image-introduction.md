---
title: Introduction
slug: Image-introduction
source_file: plugin-api-Image.html
source_url: 'https://www.figma.com/plugin-docs/api/Image/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9a1523ac76c81df6
token_count: 258
chunk_title: Introduction
chunk_slug: Image-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: Image.md
parent_slug: Image
char_count: 900
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Image-hash-string-readonly-getbytesasync-promi
compiler: noos-figma
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
