---
title: name
slug: nodes-name
source_file: plugin-api-nodes-name.html
source_url: https://www.figma.com/plugin-docs/api/nodes-name/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 89fec979196540a8
token_count: 315
---
# name

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

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

### name: string

## Remarks

If the node is a [`TextNode`](/plugin-docs/api/TextNode/)
, the name will update automatically by default based on the `characters` property (`autoRename` is true). If you manually override the text node's name, it will set `autoRename` to false. This matches the behavior in the editor.

If the node is a [`PageNode`](/plugin-docs/api/PageNode/)
 with no children and the name is a page divider name, it will set `isPageDivider` to true. A page divider name consists of all asterisks, all en dashes, all em dashes, or all spaces.