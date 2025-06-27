---
title: strokeJoin
slug: nodes-strokejoin
source_file: plugin-api-nodes-strokejoin.html
source_url: https://www.figma.com/plugin-docs/api/nodes-strokejoin/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: a7cf57be375a9084
token_count: 182
---
# strokeJoin

The decoration applied to vertices which have two or more connected segments.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

## Signature

### strokeJoin: StrokeJoin | figma.mixed

## Remarks

On a vector network, the value is set on the whole vector network. Use the vector network API to set it on individual vertices.

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
 if different vertices have different values.properties.