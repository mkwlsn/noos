---
title: deleteDevResourceAsync
slug: nodes-deletedevresourceasync
source_file: plugin-api-nodes-deletedevresourceasync.html
source_url: https://www.figma.com/plugin-docs/api/nodes-deletedevresourceasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 5e9749bd17eda208
token_count: 198
---
# deleteDevResourceAsync

Deletes a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

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

### deleteDevResourceAsync(url: string): Promise

## Parameters

### url

The url of the dev resource.