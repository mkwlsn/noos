---
title: inferredVariables
slug: nodes-inferredvariables
source_file: plugin-api-nodes-inferredvariables.html
source_url: https://www.figma.com/plugin-docs/api/nodes-inferredvariables/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 721aaec4d314b112
token_count: 488
---
# inferredVariables

An object, keyed by field, returning any variables that match the raw value of that field for the mode of the node (or the default variable value if no mode is set)

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

### inferredVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias[]} & { fills: VariableAlias[][]; strokes: VariableAlias[][] } [readonly]

## Remarks

Inferred variables are only returned for a field when it is not using a [bound variable](/plugin-docs/api/node-properties/#boundvariables).

Variables can be inferred from:

- The collections of variables used in the file
- Variables from subscribed libraries, provided the variable is used in the file

Variables can only be inferred when there is a single variable that matches the raw value used for the scope of the variable.

- i.e. For a property set to width: 100px, where there are two variables set to a value of 100 with the default scope, a value cannot be inferred as there are two matches.
- i.e. For a property set to width: 100px, where there is a variable set to 100 with a scope of "Width and height" and a variable set to 100 with a scope of "Corner radius", a value can be inferred as there is a single match for the given scope.

Inferred variables for fills and strokes return a list of results where the index matches that of node.fills and node.strokes.

- i.e. node.inferredVariables.fills[0] holds the inferred variables for node.fills[0]