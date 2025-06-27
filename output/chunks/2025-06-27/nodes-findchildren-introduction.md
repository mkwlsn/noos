---
title: Introduction
slug: nodes-findchildren-introduction
source_file: plugin-api-nodes-findchildren.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findchildren/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a2b01d9c8aba7a46
token_count: 167
chunk_title: Introduction
chunk_slug: nodes-findchildren-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-findchildren.md
parent_slug: nodes-findchildren
char_count: 583
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findchildren-signature-parameters
compiler: noos-figma
---

# findChildren

Searches the immediate children of this node (i.e. not including the children's children). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

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
