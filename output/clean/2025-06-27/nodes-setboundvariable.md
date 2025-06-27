---
title: setBoundVariable
slug: nodes-setboundvariable
source_file: plugin-api-nodes-setboundvariable.html
source_url: https://www.figma.com/plugin-docs/api/nodes-setboundvariable/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 683c2132a22715f1
token_count: 303
---
# setBoundVariable

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

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

### setBoundVariable(field: VariableBindableNodeField | VariableBindableTextField, variable: Variable | null): void

## Parameters

### field

The field to bind the variable to.

### variable

The variable to bind to the field. If `null` is provided, the field will be unbound from any variables. Make sure to pass a Variable object or null; passing a variable ID is deprecated.