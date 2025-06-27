---
title: fillStyleId
slug: nodes-fillstyleid
source_file: plugin-api-nodes-fillstyleid.html
source_url: https://www.figma.com/plugin-docs/api/nodes-fillstyleid/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ade6eb77d0e2c3b7
token_count: 239
---
# fillStyleId

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 object that the [`fills`](/plugin-docs/api/properties/nodes-fills/)
 property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

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
- SectionNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableCellNode
- TableNode
- TextNode
- TextPathNode
- TextSublayerNode
- VectorNode
- WashiTapeNode

## Signature

### fillStyleId: string | figma.mixed

## Remarks

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
 if the node has multiple fills.properties. Text nodes can have multiple fills if some characters are colored differently than others.