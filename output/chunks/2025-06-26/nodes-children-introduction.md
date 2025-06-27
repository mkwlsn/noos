---
title: Introduction
slug: nodes-children-introduction
source_file: plugin-api-nodes-children.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-children/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f06d633aa042bce1
token_count: 174
chunk_title: Introduction
chunk_slug: nodes-children-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: nodes-children.md
parent_slug: nodes-children
char_count: 608
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-children-signature-remarks
compiler: noos-figma
---

# children

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this property.

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
