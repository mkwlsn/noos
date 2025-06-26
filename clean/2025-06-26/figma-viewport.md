---
title: figma.viewport
slug: figma-viewport
source_file: plugin-api-figma-viewport.html
source_url: https://www.figma.com/plugin-docs/api/figma-viewport/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 70a5fde08c9ae683
token_count: 290
---
# figma.viewport

These are methods and properties available on the `figma.viewport` global object. It represents the area of the canvas that is currently visible on-screen, commonly referred to as the viewport. The position of the viewport is represented via its center coordinate and zoom level.

### center: Vector

Center of the the current page that is currently visible on screen.

### zoom: number

Zoom level. A value of 1.0 means 100% zoom, 0.5 means 50% zoom.

[View more →](/plugin-docs/api/properties/figma-viewport-zoom/)### scrollAndZoomIntoView(nodes: ReadonlyArray): void

Automatically sets the viewport coordinates such that the nodes are visible on screen. It is the equivalent of pressing Shift-1.

### bounds: Rect [readonly]

The bounds of the viewport of the page that is currently visible on screen. The (x, y) corresponds to the top-left of the screen. User actions such as resizing the window or showing/hiding the rulers/UI will change the bounds of the viewport.

### slidesView: 'grid' | 'single-slide'

##### info

This API is only available in Figma Slides

[View more →](/plugin-docs/api/properties/figma-viewport-slidesview/)