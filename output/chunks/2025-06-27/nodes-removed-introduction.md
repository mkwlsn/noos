---
title: Introduction
slug: nodes-removed-introduction
source_file: plugin-api-nodes-removed.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-removed/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 01d0e50911b559a4
token_count: 226
chunk_title: Introduction
chunk_slug: nodes-removed-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-removed.md
parent_slug: nodes-removed
char_count: 790
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-removed-signature-remarks
compiler: noos-figma
---

# removed

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
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
- PageNode
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
