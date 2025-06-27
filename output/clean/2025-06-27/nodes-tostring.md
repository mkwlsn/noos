---
title: toString
slug: nodes-tostring
source_file: plugin-api-nodes-tostring.html
source_url: https://www.figma.com/plugin-docs/api/nodes-tostring/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9404e990bc6c2a09
token_count: 274
---
# toString

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
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
- PageNode
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

### toString(): string

## Remarks

This currently returns a string of the form `[Node ID]` where `ID` is the id of the node. This is just for debugging convenience so the node displays something useful when converted to a string. We recommend not relying on this in production.

Example:

```
// e.g. [Node 0:5]console.log(`Current selected node ${figma.currentPage.selection[0]}`)
```