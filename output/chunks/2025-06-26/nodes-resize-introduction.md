---
title: Introduction
slug: nodes-resize-introduction
source_file: plugin-api-nodes-resize.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resize/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: a409343a51de6109
token_count: 141
chunk_title: Introduction
chunk_slug: nodes-resize-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: nodes-resize.md
parent_slug: nodes-resize
char_count: 493
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-resize-signature-parameters
  - nodes-resize-remarks
compiler: noos-figma
---

# resize

Resizes the node. If the node contains children with constraints, it applies those constraints during resizing. If the parent has auto-layout, causes the parent to be resized.

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
