---
title: Overlay
slug: Overlay
source_file: plugin-api-Overlay.html
source_url: https://www.figma.com/plugin-docs/api/Overlay/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: dc878668db6a4a36
token_count: 152
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