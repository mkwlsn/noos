---
title: Possible error cases
slug: nodes-appendchild-possible-error-cases
source_file: plugin-api-nodes-appendchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-appendchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 696d1046fbb2b598
token_count: 279
chunk_title: Possible error cases
chunk_slug: nodes-appendchild-possible-error-cases
chunk_index: 2
chunk_of_total: 3
parent_file: nodes-appendchild.md
parent_slug: nodes-appendchild
char_count: 976
heading_level: h2
chunk_type: error
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-appendchild-introduction
  - nodes-appendchild-signature-remarks
compiler: noos-figma
---

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
