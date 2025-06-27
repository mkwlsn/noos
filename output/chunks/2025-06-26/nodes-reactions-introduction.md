---
title: Introduction
slug: nodes-reactions-introduction
source_file: plugin-api-nodes-reactions.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-reactions/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 244f101f49596fd7
token_count: 196
chunk_title: Introduction
chunk_slug: nodes-reactions-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-reactions.md
parent_slug: nodes-reactions
char_count: 686
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-reactions-signature-remarks
compiler: noos-figma
---

# reactions

List of [Reactions](/plugin-docs/api/Reaction/) on this node, which includes both the method of interaction with this node in a prototype, and the behavior of that interaction. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setReactionsAsync` to update the value.

 Supported on:

- BooleanOperationNode
- ComponentNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
