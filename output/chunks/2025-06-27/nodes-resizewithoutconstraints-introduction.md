---
title: Introduction
slug: nodes-resizewithoutconstraints-introduction
source_file: plugin-api-nodes-resizewithoutconstraints.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resizewithoutconstraints/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 98f765cd40ceffc7
token_count: 153
chunk_title: Introduction
chunk_slug: nodes-resizewithoutconstraints-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: nodes-resizewithoutconstraints.md
parent_slug: nodes-resizewithoutconstraints
char_count: 534
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-resizewithoutconstraints-signature-parameters
  - nodes-resizewithoutconstraints-remarks
compiler: noos-figma
---

# resizeWithoutConstraints

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

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
