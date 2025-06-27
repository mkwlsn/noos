---
title: overflowDirection
slug: nodes-overflowdirection
source_file: plugin-api-nodes-overflowdirection.html
source_url: https://www.figma.com/plugin-docs/api/nodes-overflowdirection/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: d48a3f25104c011f
token_count: 150
---
# overflowDirection

Determines whether a frame will scroll in presentation mode when the frame contains content that exceed the frame's bounds. Reflects the value shown in "Overflow Behavior" in the Prototype tab.

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

## Signature

### overflowDirection: OverflowDirection

## Remarks

Frames directly parented under the canvas don't need this property to be set or for content to exceed the frame's bounds in order to scroll in presentation mode. They just need the frame to be bigger than the device or screen and will scroll automatically.