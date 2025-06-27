---
title: addDevResourceAsync
slug: nodes-adddevresourceasync
source_file: plugin-api-nodes-adddevresourceasync.html
source_url: https://www.figma.com/plugin-docs/api/nodes-adddevresourceasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bcb89528e61a2df2
token_count: 223
---
# addDevResourceAsync

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

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

### addDevResourceAsync(url: string, name?: string): Promise

## Parameters

### url

The url of the dev resource.

### name

The name of the dev resource. If not provided, Figma will get the name from the url.