---
title: Signature + Remarks
slug: nodes-itemspacing-signature-remarks
source_file: plugin-api-nodes-itemspacing.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-itemspacing/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b28c233f6c6f1c9d
token_count: 371
chunk_title: Signature + Remarks
chunk_slug: nodes-itemspacing-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-itemspacing.md
parent_slug: nodes-itemspacing
char_count: 1296
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-itemspacing-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### itemSpacing: number

For auto-layout frames with [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/) set to `"HORIZONTAL"`, this is the horizontal gap between children. For auto-layout frames with [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/) set to `"VERTICAL"`, this is the vertical gap between children.

Auto-layout frame with a horizontal gap between children```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Parent frame// +------------------------------------+// |+-----------+ +-----------+|// || | | ||// || Child 1 | -- 20 -- | Child 2 ||// || | | ||// |+-----------+ +-----------+|// +------------------------------------+parentFrame.itemSpacing = 20
```Auto-layout frame with a vertical gap between children```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'VERTICAL'// Parent frame// +-------------+// |+-----------+|// || ||// || Child 1 ||// || ||// |+-----------+|// | | |// | | |// | 20 |// | | |// | | |// |+-----------+|// || ||// || Child 2 ||// || ||// |+-----------+|// +-------------+parentFrame.itemSpacing = 20
```
