---
title: strokeCap
slug: nodes-strokecap
source_file: plugin-api-nodes-strokecap.html
source_url: https://www.figma.com/plugin-docs/api/nodes-strokecap/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 7feefa2f879f8024
token_count: 171
---
# strokeCap

The decoration applied to vertices which have only one connected segment.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

## Signature

### strokeCap: StrokeCap | figma.mixed

## Remarks

On a vector network, the value is set on the whole vector network. Use the vector network API to set it on individual vertices.

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/) if different vertices have different values.properties.