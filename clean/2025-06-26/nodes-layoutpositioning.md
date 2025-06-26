---
title: layoutPositioning
slug: nodes-layoutpositioning
source_file: plugin-api-nodes-layoutpositioning.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutpositioning/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: d4cd02fd59e83846
token_count: 468
---
# layoutPositioning

This property is applicable only for direct children of auto-layout frames. Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
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

### layoutPositioning: 'AUTO' | 'ABSOLUTE'

## Remarks

Changing this property may cause the parent layer's size to change, since it will recalculate as if this child did not exist. It will also change this node's `x`, `y`, and `relativeTransform` properties.

- The default value of `"AUTO"` will layout this child according to auto-layout rules.
- Setting `"ABSOLUTE"` will take this child out of auto-layout flow, while still nesting inside the auto-layout frame. This allows explicitly setting `x`, `y`, `width`, and `height`. `"ABSOLUTE"` positioned nodes respect constraint settings.

Auto-layout frame absolutely positioned red circle at the top-right corner```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())// Create a small red circleconst ellipse = figma.createEllipse()ellipse.resize(20, 20)ellipse.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }}]parentFrame.appendChild(ellipse)parentFrame.clipsContent = falseparentFrame.layoutMode = 'HORIZONTAL'// Enable absolute positioning so we can move the circleellipse.layoutPositioning = 'ABSOLUTE'// Center the circle on the top-right corner of the frameellipse.x = 90ellipse.y = -10// Make the circle stick to the top-right corner of the frameellipse.constraints = { horizontal: 'MAX', vertical: 'MIN' }
```