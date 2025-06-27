---
title: Introduction
slug: nodes-exportasync-introduction
source_file: plugin-api-nodes-exportasync.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-exportasync/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4c457834cce79aae
token_count: 232
chunk_title: Introduction
chunk_slug: nodes-exportasync-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-exportasync.md
parent_slug: nodes-exportasync
char_count: 810
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-exportasync-exportasyncsettings-exportsettingsrest-p
compiler: noos-figma
---

# exportAsync

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

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

## Signature
