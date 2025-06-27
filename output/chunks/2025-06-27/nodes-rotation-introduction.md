---
title: Introduction
slug: nodes-rotation-introduction
source_file: plugin-api-nodes-rotation.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-rotation/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dbc6bd8d30aefde0
token_count: 168
chunk_title: Introduction
chunk_slug: nodes-rotation-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-rotation.md
parent_slug: nodes-rotation
char_count: 588
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-rotation-signature-remarks
compiler: noos-figma
---

# rotation

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/)
 matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
