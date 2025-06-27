---
title: Introduction
slug: figma-createimage-introduction
source_file: plugin-api-figma-createimage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createimage/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: fce1115ff2147eaa
token_count: 89
chunk_title: Introduction
chunk_slug: figma-createimage-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-createimage.md
parent_slug: figma-createimage
char_count: 311
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-createimage-signature-remarks
compiler: noos-figma
---

# createImage

Creates an `Image` object from the raw bytes of a file content. Note that `Image` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain images.
[Example: how to work with images](/plugin-docs/working-with-images/).
