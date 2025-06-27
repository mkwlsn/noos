---
title: findChildren
slug: nodes-findchildren
source_file: plugin-api-nodes-findchildren.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findchildren/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9650de2a518e5002
token_count: 251
---
# findChildren

Searches the immediate children of this node (i.e. not including the children's children). Returns all nodes for which `callback` returns true.

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

### findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]

## Parameters

### callback

A function that evaluates whether to return the provided `node`. If this argument is omitted, `findChildren` returns `node.children`.

## Remarks

Example: find all frames that are immediate child of the current page.

```
const childFrames = figma.currentPage.findChildren(n => n.type === "FRAME")
```