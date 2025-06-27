---
title: Introduction
slug: nodes-appendchild-introduction
source_file: plugin-api-nodes-appendchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-appendchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: cddc2a35910f558b
token_count: 167
chunk_title: Introduction
chunk_slug: nodes-appendchild-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: nodes-appendchild.md
parent_slug: nodes-appendchild
char_count: 584
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-appendchild-signature-remarks
  - nodes-appendchild-possible-error-cases
compiler: noos-figma
---

# appendChild

Adds a new child to the end of the [`children`](/plugin-docs/api/properties/nodes-children/) array. That is, visually on top of all other children.

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
