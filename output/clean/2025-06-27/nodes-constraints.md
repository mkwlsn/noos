---
title: constraints
slug: nodes-constraints
source_file: plugin-api-nodes-constraints.html
source_url: https://www.figma.com/plugin-docs/api/nodes-constraints/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 88ea8325c7edf04e
token_count: 156
---
# constraints

Constraints of this node relative to its containing [`FrameNode`](/plugin-docs/api/FrameNode/)
, if any.

 Supported on:

- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode

## Signature

### constraints: Constraints

## Remarks

Not all node types have a constraint property. In particular, Group and BooleanOperation nodes do not have a constraint property themselves. Instead, resizing a frame applies the constraints on the children of those nodes.