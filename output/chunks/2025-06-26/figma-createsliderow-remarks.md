---
title: Remarks
slug: figma-createsliderow-remarks
source_file: plugin-api-figma-createsliderow.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createsliderow/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: da08755e8f916afe
token_count: 81
chunk_title: Remarks
chunk_slug: figma-createsliderow-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createsliderow.md
parent_slug: figma-createsliderow
char_count: 283
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the row gets appended to the end of the Slide Grid.

Create a slide row```
const slideRow = figma.createSlideRow()
```To specify a position in the Slide Grid, pass a row index to the function.

Create a slide row at index 0```
const slideRow = figma.createSlideRow(0)
```
