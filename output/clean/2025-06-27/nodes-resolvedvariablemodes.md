---
title: resolvedVariableModes
slug: nodes-resolvedvariablemodes
source_file: plugin-api-nodes-resolvedvariablemodes.html
source_url: https://www.figma.com/plugin-docs/api/nodes-resolvedvariablemodes/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 2ec6bf4404d49360
token_count: 515
---
# resolvedVariableModes

The resolved mode for this node for each variable collection in this file.

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

### resolvedVariableModes: { [collectionId: string]: string }

## Remarks

The set of resolved modes on a node includes the explicitly set modes on the node, as well as the explicitly set modes on ancestors of the node. By default, nodes [automatically inherit](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables#Auto_mode)
 the modes of their parents.

explicitVariableModes vs resolvedVariableModes```
// Create two collections with two modes eachconst collection1 = figma.variables.createVariableCollection("Collection 1")const collection1Mode1Id = collection1.modes[0].modeIdconst collection1Mode2Id = collection1.addMode('Mode 2')const collection2 = figma.variables.createVariableCollection("Collection 2")const collection2Mode1Id = collection2.modes[0].modeIdconst collection2Mode2Id = collection2.addMode('Mode 2')const parentFrame = figma.createFrame()const childFrame = figma.createFrame()parentFrame.appendChild(childFrame)parentFrame.setExplicitVariableModeForCollection( collection1, collection1Mode2Id)childFrame.setExplicitVariableModeForCollection( collection2, collection2Mode1Id)// Example output (only collection2 is present):// { 'VariableCollectionId:1:3': '1:2' }console.log(childFrame.explicitVariableModes);// Example output (both collections are present):// { 'VariableCollectionId:1:2': '1:1', 'VariableCollectionId:1:3': '1:2' }console.log(childFrame.resolvedVariableModes);
```