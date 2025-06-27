---
title: Introduction
slug: nodes-layoutsizinghorizontal-introduction
source_file: plugin-api-nodes-layoutsizinghorizontal.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutsizinghorizontal/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 11db3235e4e895a7
token_count: 235
chunk_title: Introduction
chunk_slug: nodes-layoutsizinghorizontal-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-layoutsizinghorizontal.md
parent_slug: nodes-layoutsizinghorizontal
char_count: 820
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-layoutsizinghorizontal-signature-remarks
compiler: noos-figma
---

# layoutSizingHorizontal

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
, [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
, [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)
, and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/)
. This field maps directly to the "Horizontal sizing" dropdown in the Figma UI.

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
