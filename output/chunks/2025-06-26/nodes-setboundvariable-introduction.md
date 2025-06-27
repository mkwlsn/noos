---
title: Introduction
slug: nodes-setboundvariable-introduction
source_file: plugin-api-nodes-setboundvariable.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-setboundvariable/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 0b28ca9ce96e952e
token_count: 238
chunk_title: Introduction
chunk_slug: nodes-setboundvariable-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: nodes-setboundvariable.md
parent_slug: nodes-setboundvariable
char_count: 830
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# setBoundVariable

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

## Signature
