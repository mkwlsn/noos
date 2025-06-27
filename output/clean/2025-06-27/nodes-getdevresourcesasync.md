---
title: getDevResourcesAsync
slug: nodes-getdevresourcesasync
source_file: plugin-api-nodes-getdevresourcesasync.html
source_url: https://www.figma.com/plugin-docs/api/nodes-getdevresourcesasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: b2212995431d360b
token_count: 229
---
# getDevResourcesAsync

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

## Signature

### getDevResourcesAsync(options?: { includeChildren: boolean }): Promise

## Parameters

### options

An optional parameter to include getting all of the dev resources on the children of the node. Defaults to false.