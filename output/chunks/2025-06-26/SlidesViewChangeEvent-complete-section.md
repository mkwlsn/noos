---
title: Complete Section
slug: SlidesViewChangeEvent-complete-section
source_file: plugin-api-SlidesViewChangeEvent.html
source_url: 'https://www.figma.com/plugin-docs/api/SlidesViewChangeEvent/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 5f2f6eaaefbe9613
token_count: 95
chunk_title: Complete Section
chunk_slug: SlidesViewChangeEvent-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: SlidesViewChangeEvent.md
parent_slug: SlidesViewChangeEvent
char_count: 330
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# SlidesViewChangeEvent

This event is triggered when the user toggles between grid view and single slide view in Figma Slides.

```
interface SlidesViewChangeEvent { view: 'GRID' | 'SINGLE_SLIDE'}
```To read the current view, use the [`figma.viewport.slidesView`](/plugin-docs/api/properties/figma-viewport-slidesview/) property.
