---
title: resizeWithoutConstraints
slug: nodes-resizewithoutconstraints
source_file: plugin-api-nodes-resizewithoutconstraints.html
source_url: https://www.figma.com/plugin-docs/api/nodes-resizewithoutconstraints/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 21676117c265d0bc
token_count: 387
---
# resizeWithoutConstraints

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

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

### resizeWithoutConstraints(width: number, height: number): void

## Parameters

### width

New width of the node. Must be >= 0.01

### height

New height of the node. Must be >= 0.01, except for [`LineNode`](/plugin-docs/api/LineNode/)
 which must always be given a height of exactly 0.

## Remarks

This function will not cause its children to resize. Use [`resize`](/plugin-docs/api/properties/nodes-resize/)
 if you need to apply constraints.

##### caution

⚠️ If this node is a text node with a missing font, the text node will be resized but the text will not re-layout until the next time the text node is opened on a machine that has the font. This can cause the text node to re-layout immediately and be surprising to your user. Consider checking the text node property [`hasMissingFont`](/plugin-docs/api/TextNode/#hasmissingfont)
 before using this function.

Ignores `targetAspectRatio`. If `targetAspectRatio` has been set, it will be updated to correspond to the post-resize value.