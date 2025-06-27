---
title: y
slug: nodes-y
source_file: plugin-api-nodes-y.html
source_url: https://www.figma.com/plugin-docs/api/nodes-y/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 900515ca38a66d30
token_count: 191
---
# y

The position of the node. Identical to `relativeTransform[1][2]`.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

## Signature

### y: number

## Remarks

This value is automatically computed in children of auto-layout frames. Setting this property for these auto-layout children will no-op.