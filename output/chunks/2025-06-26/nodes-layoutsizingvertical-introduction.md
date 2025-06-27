---
title: Introduction
slug: nodes-layoutsizingvertical-introduction
source_file: plugin-api-nodes-layoutsizingvertical.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutsizingvertical/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b439c464777a6516
token_count: 232
chunk_title: Introduction
chunk_slug: nodes-layoutsizingvertical-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-layoutsizingvertical.md
parent_slug: nodes-layoutsizingvertical
char_count: 812
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-layoutsizingvertical-signature-remarks
compiler: noos-figma
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
