---
title: 'scrollAndZoomIntoView(nodes: ReadonlyArray): void + bounds: Rect [readonly]'
slug: figma-viewport-scrollandzoomintoviewnodes-readonlyarray
source_file: plugin-api-figma-viewport.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-viewport/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bce3713aa794b39e
token_count: 107
chunk_title: 'scrollAndZoomIntoView(nodes: ReadonlyArray): void + bounds: Rect [readonly]'
chunk_slug: figma-viewport-scrollandzoomintoviewnodes-readonlyarray
chunk_index: 1
chunk_of_total: 2
parent_file: figma-viewport.md
parent_slug: figma-viewport
char_count: 372
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-viewport-introduction
merged_titles:
  - 'scrollAndZoomIntoView(nodes: ReadonlyArray): void'
  - 'bounds: Rect [readonly]'
compiler: noos-figma
---

Automatically sets the viewport coordinates such that the nodes are visible on screen. It is the equivalent of pressing Shift-1.

The bounds of the viewport of the page that is currently visible on screen. The (x, y) corresponds to the top-left of the screen. User actions such as resizing the window or showing/hiding the rulers/UI will change the bounds of the viewport.
