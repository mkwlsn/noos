---
title: findWidgetNodesByWidgetId
slug: nodes-findwidgetnodesbywidgetid
source_file: plugin-api-nodes-findwidgetnodesbywidgetid.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findwidgetnodesbywidgetid/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 8710ce8455ff74e5
token_count: 254
---
# findWidgetNodesByWidgetId

Searches this entire subtree (this node's children, its children's children, etc). Returns all widget nodes that match the provided `widgetId`.

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

### findWidgetNodesByWidgetId(widgetId: string): Array

## Parameters

### widgetId

The widget ID to search for, which represents unique identifier for the widget.

## Remarks

`node.widgetId` is not to be confused with `node.id`, which is the unique identifier for the node on the canvas. In other words, if you clone a widget, the cloned widget will have a matching `widgetId` but a different `id`.