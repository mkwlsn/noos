---
title: Signature + Remarks
slug: nodes-counteraxissizingmode-signature-remarks
source_file: plugin-api-nodes-counteraxissizingmode.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-counteraxissizingmode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 543445f726f545ad
token_count: 530
chunk_title: Signature + Remarks
chunk_slug: nodes-counteraxissizingmode-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-counteraxissizingmode.md
parent_slug: nodes-counteraxissizingmode
char_count: 1853
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - nodes-counteraxissizingmode-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### counterAxisSizingMode: 'FIXED' | 'AUTO'

Auto-layout frames have a primary axis, which is the axis that resizes when you add new items into the frame. For example, frames with "VERTICAL" [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/)
 resize in the y-axis.

The other axis is called the counter axis.

- `"FIXED"`: The counter axis length is determined by the user or plugins, unless the `layoutAlign` is set to “STRETCH” or `layoutGrow` is 1.
- `"AUTO"`: The counter axis length is determined by the size of the children. If set, the auto-layout frame will automatically resize along the counter axis to fit its children.

Note: `“AUTO”` cannot be used in any axes where [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
 = “STRETCH” or [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
 = 1. Either use `“FIXED”` or disable [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
/[`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
.

Horizontal auto-layout frame with different counterAxisSizingMode values```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()// Make the second child 200px high instead of the default 100pxchild2.resize(100, 200)parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'// Parent frame// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------+| ||// +--------------------------+parentFrame.counterAxisSizingMode = 'FIXED' // Child 2 is clipped// Parent frame// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------+| ||// | | ||// | | ||// | +-----------+|// +--------------------------+parentFrame.counterAxisSizingMode = 'AUTO'
```
