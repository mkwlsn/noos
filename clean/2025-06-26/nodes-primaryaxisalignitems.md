---
title: primaryAxisAlignItems
slug: nodes-primaryaxisalignitems
source_file: plugin-api-nodes-primaryaxisalignitems.html
source_url: https://www.figma.com/plugin-docs/api/nodes-primaryaxisalignitems/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 6c1cba0cedaa98d9
token_count: 593
---
# primaryAxisAlignItems

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the primary axis direction.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

## Remarks

Changing this property will cause all the children to update their `x` and `y` values.

- In horizontal auto-layout frames, `“MIN”` and `“MAX”` correspond to left and right respectively.
- In vertical auto-layout frames, `“MIN”` and `“MAX”` correspond to top and bottom respectively.
- `“SPACE_BETWEEN”` will cause the children to space themselves evenly along the primary axis, only putting the extra space between the children.

The corresponding property for the counter axis direction is [`counterAxisAlignItems`](/plugin-docs/api/properties/nodes-counteraxisalignitems/).

Horizontal auto-layout frame with different primaryAxisAlignItems values```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Make the parent frame wider so we can see the effects of// the different primaryAxisAlignItems valuesparentFrame.resize(300, 100)// Parent frame// +------------------------------------+// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// +------------------------------------+parentFrame.primaryAxisAlignItems = 'MIN'// Parent frame// +------------------------------------+// | +-----------++-----------+|// | | || ||// | | Child 1 || Child 2 ||// | | || ||// | +-----------++-----------+|// +------------------------------------+parentFrame.primaryAxisAlignItems = 'MAX'// Parent frame// +------------------------------------+// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// +------------------------------------+parentFrame.primaryAxisAlignItems = 'CENTER'// Parent frame// +------------------------------------+// |+-----------+ +-----------+|// || | | ||// || Child 1 | | Child 2 ||// || | | ||// |+-----------+ +-----------+|// +------------------------------------+parentFrame.primaryAxisAlignItems = 'SPACE_BETWEEN'
```