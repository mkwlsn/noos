---
title: children
slug: nodes-children
source_file: plugin-api-nodes-children.html
source_url: https://www.figma.com/plugin-docs/api/nodes-children/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 24189d3c0747f14e
token_count: 376
---
# children

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this property.

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

### children: ReadonlyArray [readonly]

## Remarks

This array can be read like and iterated like a regular array. However, calling this property always returns a new array, and both the property and the new array are read-only.

As such, this property cannot be assigned to, and the array cannot be modified directly (it wouldn't do anything). Instead, use [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/), [`insertChild`](/plugin-docs/api/properties/nodes-insertchild/) or [`remove`](/plugin-docs/api/properties/nodes-remove/).

##### info

If you are curious, the reason why inserting children has to be done via API calls is because our internal representation for the layer tree uses [fractional indexing](https://www.figma.com/blog/multiplayer-editing-in-figma/) and [`insertChild`](/plugin-docs/api/properties/nodes-insertchild/) performs that conversion.