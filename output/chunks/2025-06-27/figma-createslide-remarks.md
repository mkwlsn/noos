---
title: Remarks
slug: figma-createslide-remarks
source_file: plugin-api-figma-createslide.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createslide/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4ed5a5df2cbfea29
token_count: 93
chunk_title: Remarks
chunk_slug: figma-createslide-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createslide.md
parent_slug: figma-createslide
char_count: 323
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the slide gets appended to the end of the presentation (the last child in the last Slide Row).

Create a slide```
const slide = figma.createSlide()
```To specify a position in the Slide Grid, pass a row and column index to the function.

Create a slide at index 0, 0```
const slide = figma.createSlide(0, 0)
```
