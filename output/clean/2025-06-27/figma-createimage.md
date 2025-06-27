---
title: createImage
slug: figma-createimage
source_file: plugin-api-figma-createimage.html
source_url: https://www.figma.com/plugin-docs/api/figma-createimage/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7e33f6d43924cdf8
token_count: 161
---
# createImage

Creates an `Image` object from the raw bytes of a file content. Note that `Image` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain images.
[Example: how to work with images](/plugin-docs/working-with-images/)
.

## Signature

### createImage(data: Uint8Array): Image

## Remarks

The `data` passed in must be encoded as a PNG, JPEG, or GIF. Images have a maximum size of 4096 pixels (4K) in width and height. Invalid images will throw an error.

## Possible error cases

`Image is too small`

`Image is too large`

`Image type is unsupported`