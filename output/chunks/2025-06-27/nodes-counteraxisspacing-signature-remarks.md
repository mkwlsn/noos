---
title: Signature + Remarks
slug: nodes-counteraxisspacing-signature-remarks
source_file: plugin-api-nodes-counteraxisspacing.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-counteraxisspacing/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0fe5f4e23657b0d3
token_count: 381
chunk_title: Signature + Remarks
chunk_slug: nodes-counteraxisspacing-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-counteraxisspacing.md
parent_slug: nodes-counteraxisspacing
char_count: 1331
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-counteraxisspacing-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### counterAxisSpacing: number | null

Set this propety to `null` to have it sync with [`itemSpacing`](/plugin-docs/api/properties/nodes-itemspacing/)
. This will never return `null`. Once set to `null`, it will start returning the value of [`itemSpacing`](/plugin-docs/api/properties/nodes-itemspacing/)
.

Auto-layout frame with children wrapping to the next line```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())// Make children flow horizontally and wrapparentFrame.layoutMode = 'HORIZONTAL'parentFrame.layoutWrap = 'WRAP'// Set a fixed width so when we set itemSpacing below, the children will wrapparentFrame.primaryAxisSizingMode = 'FIXED'// Let the height of the parent frame resize to fit the childrenparentFrame.counterAxisSizingMode = 'AUTO'// Horizontal gap between childrenparentFrame.itemSpacing = 10// Parent frame// +------------------------------------------+// |+-----------+ +-----------+ |// || | | | |// || Child 1 | -- 10 -- | Child 2 | |// || | | | |// |+-----------+ +-----------+ |// | | |// | | |// | 20 |// | | |// | | |// |+-----------+ |// || | |// || Child 3 | |// || | |// |+-----------+ |// +------------------------------------------+parentFrame.counterAxisSpacing = 20
```
