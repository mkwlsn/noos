---
title: Complete Section
slug: Overlay-complete-section
source_file: plugin-api-Overlay.html
source_url: 'https://www.figma.com/plugin-docs/api/Overlay/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dc878668db6a4a36
token_count: 174
chunk_title: Complete Section
chunk_slug: Overlay-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: Overlay.md
parent_slug: Overlay
char_count: 606
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Overlay

```
type OverlayBackground = { readonly type: "NONE" } | { readonly type: "SOLID_COLOR", readonly color: RGBA }
```An overlay either has no background or a single colored background (usually transparent).

```
type OverlayPositionType = "CENTER" | "TOP_LEFT" | "TOP_CENTER" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_CENTER" | "BOTTOM_RIGHT" | "MANUAL"
```Describes where the overlay is located with respect to the device screen. The exception is `"MANUAL"`, which is relative to the element that triggered the overlay.

```
type OverlayBackgroundInteraction = "NONE" | "CLOSE_ON_CLICK_OUTSIDE"
```
