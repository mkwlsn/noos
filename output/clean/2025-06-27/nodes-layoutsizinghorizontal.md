---
title: layoutSizingHorizontal
slug: nodes-layoutsizinghorizontal
source_file: plugin-api-nodes-layoutsizinghorizontal.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutsizinghorizontal/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9a7bd5469bd72225
token_count: 687
---
# layoutSizingHorizontal

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
, [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
, [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)
, and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/)
. This field maps directly to the "Horizontal sizing" dropdown in the Figma UI.

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

### layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL'

## Remarks

`"HUG"` is only valid on auto-layout frames and text nodes. `"FILL"` is only valid on auto-layout children. Setting these values when they don't apply will throw an error.

Setting layoutSizingHorizontal on an auto-layout frame```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'VERTICAL'// Make the second child twice as wide as the firstchild2.resize(200, 100)// Parent frame (child 2 is clipped)// +-------------+// |+-----------+|// || ||// || Child 1 ||// || ||// |+-----------+|// |+------------|// || |// || Child 2 |// || |// |+------------|// +-------------+parentFrame.layoutSizingHorizontal = 'FIXED'// Parent frame (child 2 is not clipped)// +------------------------+// |+-----------+ |// || | |// || Child 1 | |// || | |// |+-----------+ |// |+----------------------+|// || ||// || Child 2 ||// || ||// |+----------------------+|// +------------------------+parentFrame.layoutSizingHorizontal = 'HUG'
```Setting layoutSizingHorizontal on an auto-layout child```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'parentFrame.resize(300, 100)// Parent frame// +-------------------------------------+// |+-----------++-----------+ |// || || | |// || Child 1 || Child 2 | |// || || | |// |+-----------++-----------+ |// +-------------------------------------+child2.layoutSizingHorizontal = 'FIXED'// Parent frame// +-------------------------------------+// |+-----------++----------------------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------++----------------------+|// +-------------------------------------+child2.layoutSizingHorizontal = 'FILL'
```