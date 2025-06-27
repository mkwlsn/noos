---
title: Remarks
slug: figma-viewport-slidesview-remarks
source_file: plugin-api-figma-viewport-slidesview.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-viewport-slidesview/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 76fb4d6e9e2ad7e1
token_count: 223
chunk_title: Remarks
chunk_slug: figma-viewport-slidesview-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-viewport-slidesview.md
parent_slug: figma-viewport-slidesview
char_count: 780
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

The viewport mode within the Slides UI: In Single Slide View, the viewport is zoomed into the current slide, and we only render that
one slide. In Grid View, the viewport is zoomed out to show the entire slide grid.

You can access the current view:

```
const currentView = figma.viewport.slidesView
```And you can set the view:

```
figma.viewport.slidesView = 'single-slide'
```### A Note About Single Slide View:

We have updated all of the create methods (`figma.createRectangle()`, `figma.createLine()`, etc) so that when the Figma Slides file is in Single Slide View,
they append that node to the focused slide instead of to the canvas. This is to ensure that the node you are creating is viewable by the current user and
not hidden off to the side of the larger grid view.
