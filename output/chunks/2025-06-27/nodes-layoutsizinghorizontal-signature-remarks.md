---
title: Signature + Remarks
slug: nodes-layoutsizinghorizontal-signature-remarks
source_file: plugin-api-nodes-layoutsizinghorizontal.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutsizinghorizontal/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f2b0f7845379f2da
token_count: 542
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutsizinghorizontal-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutsizinghorizontal.md
parent_slug: nodes-layoutsizinghorizontal
char_count: 1897
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutsizinghorizontal-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL'

`"HUG"` is only valid on auto-layout frames and text nodes. `"FILL"` is only valid on auto-layout children. Setting these values when they don't apply will throw an error.

Setting layoutSizingHorizontal on an auto-layout frame```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'VERTICAL'// Make the second child twice as wide as the firstchild2.resize(200, 100)// Parent frame (child 2 is clipped)// +-------------+// |+-----------+|// || ||// || Child 1 ||// || ||// |+-----------+|// |+------------|// || |// || Child 2 |// || |// |+------------|// +-------------+parentFrame.layoutSizingHorizontal = 'FIXED'// Parent frame (child 2 is not clipped)// +------------------------+// |+-----------+ |// || | |// || Child 1 | |// || | |// |+-----------+ |// |+----------------------+|// || ||// || Child 2 ||// || ||// |+----------------------+|// +------------------------+parentFrame.layoutSizingHorizontal = 'HUG'
```Setting layoutSizingHorizontal on an auto-layout child```
const parentFrame = figma.createFrame()const child2 = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'parentFrame.resize(300, 100)// Parent frame// +-------------------------------------+// |+-----------++-----------+ |// || || | |// || Child 1 || Child 2 | |// || || | |// |+-----------++-----------+ |// +-------------------------------------+child2.layoutSizingHorizontal = 'FIXED'// Parent frame// +-------------------------------------+// |+-----------++----------------------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------++----------------------+|// +-------------------------------------+child2.layoutSizingHorizontal = 'FILL'
```
