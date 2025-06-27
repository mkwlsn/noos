---
title: rotation
slug: nodes-rotation
source_file: plugin-api-nodes-rotation.html
source_url: https://www.figma.com/plugin-docs/api/nodes-rotation/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 9f8f731071afe529
token_count: 239
---
# rotation

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/) matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

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

### rotation: number

## Remarks

The rotation is with respect to the top-left of the object. Therefore, it is independent from the position of the object. If you want to rotate with respect to the center (or any arbitrary point), you can do so via matrix transformations and [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/).