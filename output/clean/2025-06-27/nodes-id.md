---
title: id
slug: nodes-id
source_file: plugin-api-nodes-id.html
source_url: https://www.figma.com/plugin-docs/api/nodes-id/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: a2681be72871351e
token_count: 339
---
# id

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

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

### id: string [readonly]

## Remarks

One possible use case for using the `id` is to have a serializable representation of a Figma node. To "deserialize" an id back into a node, pass it to [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
. This will return null if the node is no longer present in the document.

In the URLs for Figma files, node ids are hyphenated. However, for use with the API, node ids must use colons. For example, if a Figma file URL has the node id `1-3`, you must convert it to `1:3`.