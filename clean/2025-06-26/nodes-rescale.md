---
title: rescale
slug: nodes-rescale
source_file: plugin-api-nodes-rescale.html
source_url: https://www.figma.com/plugin-docs/api/nodes-rescale/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 27052699f550140e
token_count: 150
---
# rescale

Rescales the node. This API function is the equivalent of using the Scale Tool from the toolbar.

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

## Signature

### rescale(scale: number): void

## Parameters

### scale

The scale by which to resize the node from the top-left corner.

## Remarks

The scale factor must be >= 0.01