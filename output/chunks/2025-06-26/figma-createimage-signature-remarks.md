---
title: Signature + Remarks
slug: figma-createimage-signature-remarks
source_file: plugin-api-figma-createimage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createimage/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: be91cae7dcf5542a
token_count: 59
chunk_title: Signature + Remarks
chunk_slug: figma-createimage-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createimage.md
parent_slug: figma-createimage
char_count: 206
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-createimage-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### createImage(data: Uint8Array): Image

The `data` passed in must be encoded as a PNG, JPEG, or GIF. Images have a maximum size of 4096 pixels (4K) in width and height. Invalid images will throw an error.
