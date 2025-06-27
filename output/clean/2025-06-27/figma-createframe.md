---
title: createFrame
slug: figma-createframe
source_file: plugin-api-figma-createframe.html
source_url: https://www.figma.com/plugin-docs/api/figma-createframe/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bedc38d3dbe680cc
token_count: 109
---
# createFrame

Creates a new frame. The behavior is similar to using the `F` shortcut followed by a click.

## Signature

### createFrame(): FrameNode

## Remarks

By default, the new node has a white background, width and height both at 100, and is parented under `figma.currentPage`.

Create a frame```
const frame = figma.createFrame()// Move to (50, 50)frame.x = 50frame.y = 50// Set size to 1280 x 720frame.resize(1280, 720)
```