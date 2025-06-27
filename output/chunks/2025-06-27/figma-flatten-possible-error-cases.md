---
title: Possible error cases
slug: figma-flatten-possible-error-cases
source_file: plugin-api-figma-flatten.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-flatten/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ac8e0a0fb513e605
token_count: 333
chunk_title: Possible error cases
chunk_slug: figma-flatten-possible-error-cases
chunk_index: 2
chunk_of_total: 3
parent_file: figma-flatten.md
parent_slug: figma-flatten
char_count: 1164
heading_level: h2
chunk_type: error
merge_type: atomic
tags: []
sibling_chunks:
  - figma-flatten-parameters
  - figma-flatten-remarks
compiler: noos-figma
---

`First argument must be an array of at least one node`

`Cannot insert node at index greater than the number of existing siblings`

`Grouped nodes must be in the same page as the parent`

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
