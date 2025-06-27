---
title: SlidesViewChangeEvent
slug: SlidesViewChangeEvent
source_file: plugin-api-SlidesViewChangeEvent.html
source_url: https://www.figma.com/plugin-docs/api/SlidesViewChangeEvent/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 5f2f6eaaefbe9613
token_count: 83
---
# SlidesViewChangeEvent

This event is triggered when the user toggles between grid view and single slide view in Figma Slides.

```
interface SlidesViewChangeEvent { view: 'GRID' | 'SINGLE_SLIDE'}
```To read the current view, use the [`figma.viewport.slidesView`](/plugin-docs/api/properties/figma-viewport-slidesview/) property.