---
title: strokeAlign
slug: nodes-strokealign
source_file: plugin-api-nodes-strokealign.html
source_url: https://www.figma.com/plugin-docs/api/nodes-strokealign/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 3c4cf931a56e8093
token_count: 236
---
# strokeAlign

The alignment of the stroke with respect to the boundaries of the shape.

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

### strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'

## Remarks

Center-aligned stroke means the center of the stroke falls exactly on the geometry. Inside-aligned stroke shifts the stroke so it lies completely inside the shape, and outside-aligned stroke is vice versa.

##### info

Inside and outside stroke are actually implemented by doubling the stroke weight and masking the stroke by the fill. This means inside-aligned stroke will never draw strokes outside the fill and outside-aligned stroke will never draw strokes inside the fill.