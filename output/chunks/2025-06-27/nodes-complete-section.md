---
title: Complete Section
slug: nodes-complete-section
source_file: plugin-api-nodes.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a3bdd0265ecc2b8f
token_count: 763
chunk_title: Complete Section
chunk_slug: nodes-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: nodes.md
parent_slug: nodes
char_count: 2669
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Node Types

In Figma, the Node is the basis for representing layers. There are many different types of nodes, each with their own set of properties.

- `BooleanOperationNode`
- `CodeBlockNode`
- `ComponentNode`
- `ComponentSetNode`
- `ConnectorNode`
- `DocumentNode`
- `EllipseNode`
- `EmbedNode`
- `FrameNode`
- `GroupNode`
- `InstanceNode`
- `LineNode`
- `LinkUnfurlNode`
- `MediaNode`
- `PageNode`
- `PolygonNode`
- `RectangleNode`
- `SectionNode`
- `ShapeWithTextNode`
- `SliceNode`
- `StampNode`
- `StarNode`
- `StickyNode`
- `TableNode`
- `TableCellNode`
- `TextNode`
- `TextPathNode`
- `TransformGroupNode`
- `VectorNode`
- `WidgetNode`

In the [Typings File](/plugin-docs/api/typings/)
, each node type is represented with an interface. The most general `BaseNode` is always one of those interfaces:

```
type BaseNode = DocumentNode | PageNode | SceneNode
```Most often, you will work with nodes contained within a page, also referred to as "scene nodes".

```
type SceneNode = BooleanOperationNode | CodeBlockNode | ComponentNode | ComponentSetNode | ConnectorNode | EllipseNode | EmbedNode | FrameNode | GroupNode | InstanceNode | LineNode | LinkUnfurlNode | MediaNode | PolygonNode | RectangleNode | SectionNode | ShapeWithTextNode | SliceNode | StampNode | StarNode | StickyNode | TableNode | TableCellNode | TextNode | TextPathNode | TransformGroup | VectorNode | WidgetNode | MediaNode
```Each node has a type property that tells you the type of the node. The list of node types is declared in NodeType. You will typically use `node.type` when examining a node.

```
type NodeType = "BOOLEAN_OPERATION" | "CODE_BLOCK" | "COMPONENT" | "COMPONENT_SET" | "CONNECTOR" | "DOCUMENT" | "ELLIPSE" | "EMBED" | "FRAME" | "GROUP" | "INSTANCE" | "LINE" | "LINK_UNFURL" | "MEDIA" | "PAGE" | "POLYGON" | "RECTANGLE" | "SHAPE_WITH_TEXT" | "SLICE" | "STAMP" | "STAR" | "STICKY" | "TABLE" | "TABLE_CELL" | "TEXT" | "TEXT_PATH" | "TRANSFORM_GROUP" | "VECTOR" | "WIDGET"
```In the [Typings File](/plugin-docs/api/typings/)
, you will also find references to "mixin" interfaces. This is just a way to group related properties together. For example: pages, frames and groups can all have children, so they all have children-related properties such as `.children`, `.appendChild`.

Our node properties can't be modeled using traditional object-oriented class hierarchy which is why we use the concept of mixins. The `ChildrenMixin` define the properties that all nodes with children have (e.g. append, insert) and `FrameNode`s, `PageNode`s, etc all compose `ChildrenMixin`. However, a `RectangleNode` cannot have children and therefore does not inherit from `ChildrenMixin`.
