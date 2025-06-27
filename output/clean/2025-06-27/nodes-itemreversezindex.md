---
title: itemReverseZIndex
slug: nodes-itemreversezindex
source_file: plugin-api-nodes-itemreversezindex.html
source_url: https://www.figma.com/plugin-docs/api/nodes-itemreversezindex/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: dead00404db4da2e
token_count: 358
---
# itemReverseZIndex

Applicable only on auto-layout frames. Determines the [canvas stacking order](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#Canvas_stacking_order)
 of layers in this frame. When true, the first layer will be draw on top.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### itemReverseZIndex: boolean

## Remarks

Auto-layout frame with different canvas stacking```
const parentFrame = figma.createFrame()// Create red and green children so we can see the overlapconst child1 = figma.createFrame()child1.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }}]const child2 = figma.createFrame()child2.fills = [{ type: 'SOLID', color: { r: 0, g: 1, b: 0 }}]parentFrame.appendChild(child1)parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'// Negative horizontal gap between children so they overlapparentFrame.itemSpacing = -20// Parent frame (last child on top)// +---------------------+// |+-------+-----------+|// || | ||// ||Child 1| Child 2 ||// || | ||// |+-------+-----------+|// +---------------------+parentFrame.itemReverseZIndex = false// Parent frame (first child on top)// +---------------------+// |+-----------+-------+|// || | ||// || Child 1 |Child 2||// || | ||// |+-----------+-------+|// +---------------------+parentFrame.itemReverseZIndex = true
```