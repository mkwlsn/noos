---
title: layoutGrow
slug: nodes-layoutgrow
source_file: plugin-api-nodes-layoutgrow.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutgrow/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7522339047152b63
token_count: 290
---
# layoutGrow

This property is applicable only for direct children of auto-layout frames. Determines whether a layer should stretch along the parent’s primary axis. 0 corresponds to a fixed size and 1 corresponds to stretch.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
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

## Signature

### layoutGrow: number

## Remarks

0 and 1 are currently the only supported values.

Note: If the current node is an auto-layout frame (e.g. an auto-layout frame inside a parent auto-layout frame) if you set `layoutGrow` to 1 you should set the corresponding axis – either [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)
 or [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/)
 – to be `“FIXED”`. This is because an auto-layout frame cannot simultaneously stretch to fill its parent and shrink to hug its children.