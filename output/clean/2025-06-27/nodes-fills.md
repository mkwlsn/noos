---
title: fills
slug: nodes-fills
source_file: plugin-api-nodes-fills.html
source_url: https://www.figma.com/plugin-docs/api/nodes-fills/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: b01a26f019943ab0
token_count: 261
---
# fills

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

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

### fills: ReadonlyArray | figma.mixed

## Remarks

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
 if the node has multiple sets of fills. Text nodes can have multiple sets of fills if some characters are colored differently than others.

Use [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/)
 to create solid paint fills with CSS color strings.

Page nodes have a [`backgrounds`](/plugin-docs/api/PageNode/#backgrounds)
 property instead of a `fills` property.