---
title: 'hash: string [readonly] + getBytesAsync(): Promise'
slug: Image-hash-string-readonly-getbytesasync-promi
source_file: plugin-api-Image.html
source_url: 'https://www.figma.com/plugin-docs/api/Image/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 46e57aa3413997da
token_count: 69
chunk_title: 'hash: string [readonly] + getBytesAsync(): Promise'
chunk_slug: Image-hash-string-readonly-getbytesasync-promi
chunk_index: 1
chunk_of_total: 2
parent_file: Image.md
parent_slug: Image
char_count: 239
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - Image-introduction
merged_titles:
  - 'hash: string [readonly]'
  - 'getBytesAsync(): Promise'
compiler: noos-figma
---

A unique hash of the contents of the image file.

The contents of the corresponding image file. This returns a promise because the image may still need to be downloaded (images in Figma are loaded separately from the rest of the document).
