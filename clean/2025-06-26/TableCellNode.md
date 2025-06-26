---
title: TableCellNode
slug: TableCellNode
source_file: plugin-api-TableCellNode.html
source_url: https://www.figma.com/plugin-docs/api/TableCellNode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: a4310fbd9a27bf4e
token_count: 523
---
# TableCellNode

Table cells are elements within a [TableNode](/plugin-docs/api/TableNode/).

## Table cell properties

### type: 'TABLE_CELL' [readonly]

The type of this node, represented by the string literal "TABLE_CELL"

### text: TextSublayerNode [readonly]

Text sublayer of the TableCellNode

### rowIndex: number [readonly]

The row index of this cell relative to its parent table.

### columnIndex: number [readonly]

The column index of this cell relative to its parent table.

## Basic properties

### toString(): string

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)### parent: (BaseNode & ChildrenMixin) | null [readonly]

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

[View more →](/plugin-docs/api/properties/nodes-parent/)### height: number [readonly]

The height of the node. Use a resizing method to change this value.

### width: number [readonly]

The width of the node. Use a resizing method to change this value.

## Fill-related properties

### fills: ReadonlyArray | figma.mixed

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

[View more →](/plugin-docs/api/properties/nodes-fills/)### fillStyleId: string | figma.mixed

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)### setFillStyleIdAsync(styleId: string): Promise

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.