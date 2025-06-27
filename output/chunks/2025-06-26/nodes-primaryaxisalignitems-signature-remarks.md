---
title: Signature + Remarks
slug: nodes-primaryaxisalignitems-signature-remarks
source_file: plugin-api-nodes-primaryaxisalignitems.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-primaryaxisalignitems/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 678be2545c60dad0
token_count: 590
chunk_title: Signature + Remarks
chunk_slug: nodes-primaryaxisalignitems-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-primaryaxisalignitems.md
parent_slug: nodes-primaryaxisalignitems
char_count: 2064
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-primaryaxisalignitems-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

Changing this property will cause all the children to update their `x` and `y` values.

- In horizontal auto-layout frames, `“MIN”` and `“MAX”` correspond to left and right respectively.
- In vertical auto-layout frames, `“MIN”` and `“MAX”` correspond to top and bottom respectively.
- `“SPACE_BETWEEN”` will cause the children to space themselves evenly along the primary axis, only putting the extra space between the children.

The corresponding property for the counter axis direction is [`counterAxisAlignItems`](/plugin-docs/api/properties/nodes-counteraxisalignitems/).

Horizontal auto-layout frame with different primaryAxisAlignItems values```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Make the parent frame wider so we can see the effects of// the different primaryAxisAlignItems valuesparentFrame.resize(300, 100)// Parent frame// +------------------------------------+// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// +------------------------------------+parentFrame.primaryAxisAlignItems = 'MIN'// Parent frame// +------------------------------------+// | +-----------++-----------+|// | | || ||// | | Child 1 || Child 2 ||// | | || ||// | +-----------++-----------+|// +------------------------------------+parentFrame.primaryAxisAlignItems = 'MAX'// Parent frame// +------------------------------------+// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// +------------------------------------+parentFrame.primaryAxisAlignItems = 'CENTER'// Parent frame// +------------------------------------+// |+-----------+ +-----------+|// || | | ||// || Child 1 | | Child 2 ||// || | | ||// |+-----------+ +-----------+|// +------------------------------------+parentFrame.primaryAxisAlignItems = 'SPACE_BETWEEN'
```
