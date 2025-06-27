---
title: Introduction
slug: nodes-findchild-introduction
source_file: plugin-api-nodes-findchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b017c1f3aed27e8e
token_count: 167
chunk_title: Introduction
chunk_slug: nodes-findchild-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-findchild.md
parent_slug: nodes-findchild
char_count: 583
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findchild-remarks
compiler: noos-figma
---

# findChild

Searches the immediate children of this node (i.e. not including the children's children). Returns the first node for which `callback` returns true.

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
