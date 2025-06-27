---
title: LabelSublayer
slug: LabelSublayer
source_file: plugin-api-LabelSublayer.html
source_url: https://www.figma.com/plugin-docs/api/LabelSublayer/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: fee8ea4c9e66102f
token_count: 555
---
# LabelSublayer

LabelSublayer (on [ConnectorNodes](/plugin-docs/api/ConnectorNode/)) acts like pared-back version of a rectangle node. It is used to provide a background on text.

## Basic traits

### toString(): string

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)### parent: (BaseNode & ChildrenMixin) | null [readonly]

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

[View more →](/plugin-docs/api/properties/nodes-parent/)Tip: `parent` will always return a [ConnectorNode](/plugin-docs/api/ConnectorNode/)

## Geometry-related properties

### fills: ReadonlyArray | figma.mixed

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

[View more →](/plugin-docs/api/properties/nodes-fills/)### fillStyleId: string | figma.mixed

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)### cornerRadius: number | figma.mixed

The number of pixels to round the corners of the object by.

[View more →](/plugin-docs/api/properties/nodes-cornerradius/)### topLeftRadius: number

### topRightRadius: number

### bottomLeftRadius: number

### bottomRightRadius: number

You can set individual corner radius of each of the four corners of a rectangle node or frame-like node. Similar to `cornerRadius`, these value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

Setting `cornerRadius` sets the property for all four corners. Setting these corners to different values makes `cornerRadius` return `mixed`.