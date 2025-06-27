---
title: Introduction
slug: nodes-findwidgetnodesbywidgetid-introduction
source_file: plugin-api-nodes-findwidgetnodesbywidgetid.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findwidgetnodesbywidgetid/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bb249d3cc98ded48
token_count: 170
chunk_title: Introduction
chunk_slug: nodes-findwidgetnodesbywidgetid-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-findwidgetnodesbywidgetid.md
parent_slug: nodes-findwidgetnodesbywidgetid
char_count: 594
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findwidgetnodesbywidgetid-remarks
compiler: noos-figma
---

# findWidgetNodesByWidgetId

Searches this entire subtree (this node's children, its children's children, etc). Returns all widget nodes that match the provided `widgetId`.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode
