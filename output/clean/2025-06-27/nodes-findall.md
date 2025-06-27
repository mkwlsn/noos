---
title: findAll
slug: nodes-findall
source_file: plugin-api-nodes-findall.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findall/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 2e0fbb89a62f017f
token_count: 457
---
# findAll

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes for which `callback` returns true.

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

### findAll(callback?: (node: SceneNode) => boolean): SceneNode[]

## Parameters

### callback

A function that evaluates whether to return the provided `node`. If this argument is omitted, `findAll` returns all nodes in the subtree.

## Remarks

Nodes are included in back-to-front order. Parents always appear before their children, and children appear in same relative order before their children, and children appear in same relative order as in the [`children`](/plugin-docs/api/properties/nodes-children/)
 array.

This traversal method is known as ["pre-order traversal"](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
.

Note that the node this method is called on is not included.

Example: find all nodes whose name is "Color":

```
const colors = figma.currentPage.findAll(n => n.name === "Color")
```

##### caution

⚠ Large documents in Figma can have tens of thousands of nodes. Be careful using this function as it could be very slow.
If you only need to search immediate children, it is much faster to call `node.children.filter(callback)` or `node.findChildren(callback)`.
Please refer to our [recommendations](/plugin-docs/accessing-document/#optimizing-traversals)
 for how to optimize document traversals.