---
title: insertChild
slug: nodes-insertchild
source_file: plugin-api-nodes-insertchild.html
source_url: https://www.figma.com/plugin-docs/api/nodes-insertchild/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 92af0107af8ee505
token_count: 641
---
# insertChild

Adds a new child at the specified index in the [`children`](/plugin-docs/api/properties/nodes-children/)
 array.

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

### insertChild(index: number, child: SceneNode): void

## Parameters

### index

Determines where the new layer gets inserted. For example, suppose a group has layers A, B, C, where C is the top-most layer.

- `insertChild(0, D)` gives a group with layers D, A, B, C
- `insertChild(1, D)` gives a group with layers A, D, B, C
- `insertChild(2, D)` gives a group with layers A, B, D, C
- `insertChild(3, D)` gives a group with layers A, B, C, D
- `insertChild(4, D)` throws an error since the group originally only has 3 children

### child

The node to be inserted.

## Remarks

Reparenting nodes is subject to many restrictions. For example, some nodes cannot be moved, others would break the document if moved. Below are possible exceptions that can be thrown if the operation is invalid.

If this is called on an auto-layout frame, calling this function can cause this layer to be resized and children to be moved.

## Possible error cases

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