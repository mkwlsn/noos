---
title: Introduction
slug: nodes-findone-introduction
source_file: plugin-api-nodes-findone.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findone/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9b3961d8cd722345
token_count: 165
chunk_title: Introduction
chunk_slug: nodes-findone-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-findone.md
parent_slug: nodes-findone
char_count: 575
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findone-remarks
compiler: noos-figma
---

# findOne

Searches this entire subtree (this node's children, its children's children, etc). Returns the first node for which `callback` returns true.

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
