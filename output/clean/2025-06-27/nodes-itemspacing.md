---
title: itemSpacing
slug: nodes-itemspacing
source_file: plugin-api-nodes-itemspacing.html
source_url: https://www.figma.com/plugin-docs/api/nodes-itemspacing/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 6453b281f9b96d70
token_count: 387
---
# itemSpacing

Applicable only on auto-layout frames. Determines distance between children of the frame.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### itemSpacing: number

## Remarks

For auto-layout frames with [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/)
 set to `"HORIZONTAL"`, this is the horizontal gap between children. For auto-layout frames with [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/)
 set to `"VERTICAL"`, this is the vertical gap between children.

Auto-layout frame with a horizontal gap between children```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Parent frame// +------------------------------------+// |+-----------+ +-----------+|// || | | ||// || Child 1 | -- 20 -- | Child 2 ||// || | | ||// |+-----------+ +-----------+|// +------------------------------------+parentFrame.itemSpacing = 20
```Auto-layout frame with a vertical gap between children```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'VERTICAL'// Parent frame// +-------------+// |+-----------+|// || ||// || Child 1 ||// || ||// |+-----------+|// | | |// | | |// | 20 |// | | |// | | |// |+-----------+|// || ||// || Child 2 ||// || ||// |+-----------+|// +-------------+parentFrame.itemSpacing = 20
```