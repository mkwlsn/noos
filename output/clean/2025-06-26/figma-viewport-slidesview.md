---
title: slidesView
slug: figma-viewport-slidesview
source_file: plugin-api-figma-viewport-slidesview.html
source_url: https://www.figma.com/plugin-docs/api/figma-viewport-slidesview/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 00d07f341d1ca6ab
token_count: 230
---
# slidesView

##### info

This API is only available in Figma Slides

## Signature

### slidesView: 'grid' | 'single-slide'

## Remarks

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