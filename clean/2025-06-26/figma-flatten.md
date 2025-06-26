---
title: flatten
slug: figma-flatten
source_file: plugin-api-figma-flatten.html
source_url: https://www.figma.com/plugin-docs/api/figma-flatten/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 0e782817c5aa2e9b
token_count: 624
---
# flatten

Flattens every node in nodes into a new vector network.

## Signature

### flatten(nodes: ReadonlyArray, parent?: BaseNode & ChildrenMixin, index?: number): VectorNode

## Parameters

### nodes

The list of nodes in the new group. This list must be non-empty and cannot include any node that cannot be reparented, such as children of instances. Make a copy of those nodes first if necessary.

### parent

The node under which the new vector will be created. This is similar to `parent.appendChild(group)` and defaults to `figma.currentPage` if left unspecified.

### index

An optional index argument that specifies where inside `parent` the new vector will be created. When this argument is not provided, it will default to appending the vector as the last (topmost) child. This is similar to the index argument in `parent.insertChild(index, group)`.

## Remarks

This API is roughly the equivalent of pressing Ctrl-E/⌘E in the editor, but flattens the specified list of nodes rather than the current selection. You may still, of course, flatten the current selection by passing it as an argument:

Flatten nodes```
figma.flatten(figma.currentPage.selection, parent)
```Since flattening involves moving nodes to a different parent, this operation is subject to many reparenting restrictions:

## Possible error cases

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