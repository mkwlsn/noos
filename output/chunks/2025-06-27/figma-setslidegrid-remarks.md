---
title: Remarks
slug: figma-setslidegrid-remarks
source_file: plugin-api-figma-setslidegrid.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-setslidegrid/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 80b678a18d0feb0f
token_count: 163
chunk_title: Remarks
chunk_slug: figma-setslidegrid-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-setslidegrid.md
parent_slug: figma-setslidegrid
char_count: 568
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

The order of Slides within a presentation is a key part of updating and editing a deck.
Using this method you can manipulate and reorder the grid.

For example:

```
const grid = figma.getSlideGrid()const [firstRow, ...rest] = grid// move the first row to the endfigma.setSlideGrid([...rest, firstRow])
```So long as all the Slides in the current grid are passed back to `setSlideGrid` the update will succeed.
Meaning, you can change the amount of rows as you please - flatten all to one row, explode to many rows, etc, and the method will handle all updates for you.
