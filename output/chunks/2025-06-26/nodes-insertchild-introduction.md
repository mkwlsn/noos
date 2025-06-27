---
title: Introduction
slug: nodes-insertchild-introduction
source_file: plugin-api-nodes-insertchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-insertchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: baabd0fc7b250c22
token_count: 157
chunk_title: Introduction
chunk_slug: nodes-insertchild-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: nodes-insertchild.md
parent_slug: nodes-insertchild
char_count: 548
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-insertchild-signature-parameters
  - nodes-insertchild-remarks
  - nodes-insertchild-possible-error-cases
compiler: noos-figma
---

# insertChild

Adds a new child at the specified index in the [`children`](/plugin-docs/api/properties/nodes-children/) array.

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
