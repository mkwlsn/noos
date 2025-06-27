---
title: cornerRadius
slug: nodes-cornerradius
source_file: plugin-api-nodes-cornerradius.html
source_url: https://www.figma.com/plugin-docs/api/nodes-cornerradius/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2ec81ef24119ff7d
token_count: 206
---
# cornerRadius

The number of pixels to round the corners of the object by.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SlideNode
- StarNode
- VectorNode

## Signature

### cornerRadius: number | figma.mixed

## Remarks

This value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/) if different vertices have different values.properties. Vector nodes can have individual corner radii on each vertex. Rectangle nodes can also have different corner radii on each of the four corners.