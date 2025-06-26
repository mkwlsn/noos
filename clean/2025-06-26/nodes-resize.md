---
title: resize
slug: nodes-resize
source_file: plugin-api-nodes-resize.html
source_url: https://www.figma.com/plugin-docs/api/nodes-resize/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 8a6ef0265b845373
token_count: 420
---
# resize

Resizes the node. If the node contains children with constraints, it applies those constraints during resizing. If the parent has auto-layout, causes the parent to be resized.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

## Signature

### resize(width: number, height: number): void

## Parameters

### width

New width of the node. Must be >= 0.01

### height

New height of the node. Must be >= 0.01, except for [`LineNode`](/plugin-docs/api/LineNode/) which must always be given a height of exactly 0.

## Remarks

Since this function applies constraints recursively (when there are multiple levels of nested frames with constraints), calls to this function could be expensive. Use [`resizeWithoutConstraints`](/plugin-docs/api/properties/nodes-resizewithoutconstraints/) if you don't need to apply constraints.

##### caution

⚠️ If this node is a text node with a missing font or contains a text node with a missing font, the text node will be resized but the text will not re-layout until the next time the text node is opened on a machine that has the font. This can cause the text node to re-layout immediately and be surprising to your user. Consider checking if the document [`figma.hasMissingFont`](/plugin-docs/api/figma/#hasmissingfont) before using this function.

Ignores `targetAspectRatio`. If `targetAspectRatio` has been set, it will be updated to correspond to the post-resize value.