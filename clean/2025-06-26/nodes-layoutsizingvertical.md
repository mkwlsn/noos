---
title: layoutSizingVertical
slug: nodes-layoutsizingvertical
source_file: plugin-api-nodes-layoutsizingvertical.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutsizingvertical/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2df56f950f04b4af
token_count: 266
---
# layoutSizingVertical

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/), [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/), [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/). This field maps directly to the "Vertical sizing" dropdown in the Figma UI.

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

### layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL'

## Remarks

`"HUG"` is only valid on auto-layout frames and text nodes. `"FILL"` is only valid on auto-layout children. Setting these values when they don't apply will throw an error.