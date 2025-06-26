---
title: setExplicitVariableModeForCollection
slug: ExplicitVariableModesMixin-setexplicitvariablemodeforcollection
source_file: plugin-api-ExplicitVariableModesMixin-setexplicitvariablemodeforcollection.html
source_url: https://www.figma.com/plugin-docs/api/ExplicitVariableModesMixin-setexplicitvariablemodeforcollection/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: ac5646cb978f9152
token_count: 229
---
# setExplicitVariableModeForCollection

Sets an explicit mode for the given collection on this node

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
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

### setExplicitVariableModeForCollection(collection: VariableCollection, modeId: string): void

## Parameters

### collection

A variable collection. Make sure to pass a collection object here; passing a variable collection ID is deprecated.

### modeId

A variable mode ID.