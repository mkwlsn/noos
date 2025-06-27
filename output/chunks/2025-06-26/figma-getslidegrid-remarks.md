---
title: Remarks
slug: figma-getslidegrid-remarks
source_file: plugin-api-figma-getslidegrid.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-getslidegrid/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 28d1c248f082a9ba
token_count: 149
chunk_title: Remarks
chunk_slug: figma-getslidegrid-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-getslidegrid.md
parent_slug: figma-getslidegrid
char_count: 521
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

The slide grid provides structure to both single slide view and grid view.
The order of Slides within a presentation is a key part of updating and editing a deck.
To visualize the slide nodes in a 2D array, you can call this function.

```
const grid = figma.getSlideGrid()
```The returned grid is a 2D array of SlideNodes. For example:

```
[ [SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode, SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode, SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode],]
```
