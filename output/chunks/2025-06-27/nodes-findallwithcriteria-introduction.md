---
title: Introduction
slug: nodes-findallwithcriteria-introduction
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1a0f23465b8d0c19
token_count: 172
chunk_title: Introduction
chunk_slug: nodes-findallwithcriteria-introduction
chunk_index: 0
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 601
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
  - nodes-findallwithcriteria-find-by-node-type
  - nodes-findallwithcriteria-find-by-plugin-data
  - nodes-findallwithcriteria-find-by-shared-plugin-data
  - nodes-findallwithcriteria-combining-criterias
compiler: noos-figma
---

# findAllWithCriteria

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes that satisfy all of specified criteria.

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

## Signature
