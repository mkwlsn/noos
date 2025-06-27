---
title: findOne
slug: nodes-findone
source_file: plugin-api-nodes-findone.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findone/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 0ca14da70171d4fe
token_count: 381
---
# findOne

Searches this entire subtree (this node's children, its children's children, etc). Returns the first node for which `callback` returns true.

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

### findOne(callback: (node: SceneNode) => boolean): SceneNode | null

## Parameters

### callback

A function that evaluates whether to return the provided `node`.

## Remarks

This function returns `null` if no matching node is found. The traversal order is the same as in [`findAll`](/plugin-docs/api/properties/nodes-findall/)
.

Note that the node this method is called on is not included.

Example: find one node whose name is "Template":

```
const template = figma.currentPage.findOne(n => n.name === "Template")
```

##### caution

⚠ Large documents in Figma can have tens of thousands of nodes. Be careful using this function as it could be very slow.
If you only need to search immediate children, it is much faster to call `node.children.find(callback)` or `node.findChild(callback)`.
Please refer to our [recommendations](/plugin-docs/accessing-document/#optimizing-traversals)
 for how to optimize document traversals.