---
title: Introduction
slug: nodes-fillstyleid-introduction
source_file: plugin-api-nodes-fillstyleid.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-fillstyleid/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bbf3ea3b9018f6f2
token_count: 192
chunk_title: Introduction
chunk_slug: nodes-fillstyleid-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-fillstyleid.md
parent_slug: nodes-fillstyleid
char_count: 670
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-fillstyleid-signature-remarks
compiler: noos-figma
---

# fillStyleId

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableCellNode
- TableNode
- TextNode
- TextPathNode
- TextSublayerNode
- VectorNode
- WashiTapeNode
