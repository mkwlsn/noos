---
title: targetAspectRatio
slug: nodes-targetaspectratio
source_file: plugin-api-nodes-targetaspectratio.html
source_url: https://www.figma.com/plugin-docs/api/nodes-targetaspectratio/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 438b5e915a59cfcc
token_count: 345
---
# targetAspectRatio

When toggled, causes the layer to keep its proportions when the user resizes it via auto layout, constraints, the properties panel, or on-canvas.
If not set, the node does NOT resize toward a specific targetAspectRatio.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SectionNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

## Signature

### targetAspectRatio: Vector | null [readonly]

## Remarks

Use `lockAspectRatio` and `unlockAspectRatio` to set targetAspectRatio.

```
const parentFrame = figma.createFrame()const image = await figma.createNodeFromJSXAsync( )parentFrame.appendChild(image)image.lockAspectRatio() // set to 2:3 ratio, implicit from the size// Add autolayout to parent, which defaults to Hug x HugparentFrame.layoutMode = 'HORIZONTAL'// Set child to fill-widthimage.layoutGrow = 1// Resize parent to be much largerparentFrame.resize(500, 1000)// Since the child is fill-width, it will expand to the available spaceimage.width == 500image.height == 750// Image maintains the 2:3 ratio even as it grew with auto layout!
```##### caution

⚠️ `targetAspectRatio` cannot be used with auto-resizing text (TextNodes where textAutoResize !== NONE).