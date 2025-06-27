---
title: findChild
slug: nodes-findchild
source_file: plugin-api-nodes-findchild.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findchild/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 835eb41dd6629cd3
token_count: 251
---
# findChild

Searches the immediate children of this node (i.e. not including the children's children). Returns the first node for which `callback` returns true.

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

### findChild(callback: (node: SceneNode) => boolean): SceneNode | null

## Parameters

### callback

A function that evaluates whether to return the provided `node`.

## Remarks

This function returns `null` if no matching node is found.

Example: find the first frame that is an immediate child of the current page.

```
const firstChildFrame = figma.currentPage.findChild(n => n.type === "FRAME")
```