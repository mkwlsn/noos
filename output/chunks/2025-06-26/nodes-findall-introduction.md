---
title: Introduction
slug: nodes-findall-introduction
source_file: plugin-api-nodes-findall.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findall/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 73124a2ae7a4f959
token_count: 163
chunk_title: Introduction
chunk_slug: nodes-findall-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: nodes-findall.md
parent_slug: nodes-findall
char_count: 568
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findall-signature-parameters
  - nodes-findall-remarks
compiler: noos-figma
---

# findAll

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes for which `callback` returns true.

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
