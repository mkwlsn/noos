---
title: counterAxisSizingMode
slug: nodes-counteraxissizingmode
source_file: plugin-api-nodes-counteraxissizingmode.html
source_url: https://www.figma.com/plugin-docs/api/nodes-counteraxissizingmode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: b77733f99ad4797a
token_count: 549
---
# counterAxisSizingMode

Applicable only on auto-layout frames. Determines whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### counterAxisSizingMode: 'FIXED' | 'AUTO'

## Remarks

Auto-layout frames have a primary axis, which is the axis that resizes when you add new items into the frame. For example, frames with "VERTICAL" [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/) resize in the y-axis.

The other axis is called the counter axis.

- `"FIXED"`: The counter axis length is determined by the user or plugins, unless the `layoutAlign` is set to “STRETCH” or `layoutGrow` is 1.
- `"AUTO"`: The counter axis length is determined by the size of the children. If set, the auto-layout frame will automatically resize along the counter axis to fit its children.

Note: `“AUTO”` cannot be used in any axes where [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/) = “STRETCH” or [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/) = 1. Either use `“FIXED”` or disable [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)/[`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/).

Horizontal auto-layout frame with different counterAxisSizingMode values```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()// Make the second child 200px high instead of the default 100pxchild2.resize(100, 200)parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'// Parent frame// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------+| ||// +--------------------------+parentFrame.counterAxisSizingMode = 'FIXED' // Child 2 is clipped// Parent frame// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------+| ||// | | ||// | | ||// | +-----------+|// +--------------------------+parentFrame.counterAxisSizingMode = 'AUTO'
```