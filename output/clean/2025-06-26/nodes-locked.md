---
title: locked
slug: nodes-locked
source_file: plugin-api-nodes-locked.html
source_url: https://www.figma.com/plugin-docs/api/nodes-locked/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: b69f5b03d201ea8d
token_count: 263
---
# locked

Whether the node is locked or not, preventing certain user interactions on the canvas such as selecting and dragging. Does not affect a plugin's ability to write to those properties.

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

### locked: boolean

## Remarks

The value that this property returns is independent from the node's parent. i.e.

- The node isn't necessarily locked if this is `.locked === true`.
- The node isn't necessarily unlocked if this is `.locked === false`.
- An object is locked if `.locked == true` for itself or any of its parents.