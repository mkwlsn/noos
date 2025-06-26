---
title: isMask
slug: nodes-ismask
source_file: plugin-api-nodes-ismask.html
source_url: https://www.figma.com/plugin-docs/api/nodes-ismask/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: b0767bf071cb082d
token_count: 457
---
# isMask

Whether this node is a mask. A mask node masks its subsequent siblings.

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
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

## Signature

### isMask: boolean

## Remarks

Since a mask node masks all of its subsequent siblings, enabling `isMask` on a node that is not in a group-like container designed to stop mask propagation can have unintented consequences — that is, it may "mask" (often in practice, hide) more siblings than you intend. When enabling `isMask`, ensure you have contained its propagation propertly. ("Subsequent siblings" are siblings listed after this node in a `children` array in the plugin API; this corresponds to layers shown above this node in the layers panel.)

Example:

```
const rect = figma.createRectangle()const circleToMask = figma.createEllipse()const otherCircle1 = figma.createEllipse()const otherCircle2 = figma.createEllipse()// In the layers panel, this would look something like:// - otherCircle2// - otherCircle1// - circleToMask// - rect//// So if I enable `rect.isMask`, the rect will mask ALL other nodes,// because they are all siblings.//// If I only want `rect` to mask `circleToMask`, I should group// them first.figma.group([rect, circleToMask], figma.currentPage, figma.currentPage.children.indexOf(circleToMask))rect.isMask = true// Now `rect` only masks its siblings above it in its group// (`circleToMask`) but not the circles outside of the group.// In the layers panel this would look like:// - otherCircle2// - otherCircle1// - Group// - circleToMask [this is the only node masked by rect]// - rect (isMask)
```