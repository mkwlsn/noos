---
title: Possible error cases
slug: nodes-insertchild-possible-error-cases
source_file: plugin-api-nodes-insertchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-insertchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1e15b806cb4c9cc0
token_count: 301
chunk_title: Possible error cases
chunk_slug: nodes-insertchild-possible-error-cases
chunk_index: 3
chunk_of_total: 4
parent_file: nodes-insertchild.md
parent_slug: nodes-insertchild
char_count: 1052
heading_level: h2
chunk_type: error
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-insertchild-introduction
  - nodes-insertchild-signature-parameters
  - nodes-insertchild-remarks
compiler: noos-figma
---

`Cannot insert node at index greater than the number of existing siblings`

`Cannot move node. Node is the scene root, which cannot be reparented`

`Cannot move node. Doing so would create a parenting cycle`

`Cannot move node. The root node cannot have children of type other than PAGE`

`Cannot move node. Nodes other than the root node cannot have children of type PAGE`

`Cannot move node. New parent is of a type that cannot have children`

`Cannot move node. New parent is a internal, readonly-only node`

`Cannot move node. Node is an internal, readonly-only node`

`Cannot move node. New parent is an instance or is inside of an instance`

`Cannot move node. Node is inside of an instance`

`Cannot move node. Reparenting would create a component cycle`

`Cannot move node. Reparenting would create a component inside a component`

`Cannot move node. Reparenting would create a component set cycle`

`Cannot move node. A COMPONENT_SET node cannot have children of type other than COMPONENT`

`Cannot move node. PageDivider cannot have children`
