---
title: parent
slug: nodes-parent
source_file: plugin-api-nodes-parent.html
source_url: https://www.figma.com/plugin-docs/api/nodes-parent/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f2e2ff9459fb5f49
token_count: 287
---
# parent

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

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

### parent: (BaseNode & ChildrenMixin) | null [readonly]

## Remarks

The root node (i.e. `figma.root`) doesn't have a parent.

Components accessed via [`instance.getMainComponentAsync()`](/plugin-docs/api/InstanceNode/#getmaincomponentasync) or [`instance.mainComponent`](/plugin-docs/api/InstanceNode/#maincomponent) do not always have a parent. They could be remote components or soft-deleted components.