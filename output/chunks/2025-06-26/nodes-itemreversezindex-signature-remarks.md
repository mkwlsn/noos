---
title: Signature + Remarks
slug: nodes-itemreversezindex-signature-remarks
source_file: plugin-api-nodes-itemreversezindex.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-itemreversezindex/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 28a50c774a9935cf
token_count: 287
chunk_title: Signature + Remarks
chunk_slug: nodes-itemreversezindex-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-itemreversezindex.md
parent_slug: nodes-itemreversezindex
char_count: 1004
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-itemreversezindex-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### itemReverseZIndex: boolean

Auto-layout frame with different canvas stacking```
const parentFrame = figma.createFrame()// Create red and green children so we can see the overlapconst child1 = figma.createFrame()child1.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }}]const child2 = figma.createFrame()child2.fills = [{ type: 'SOLID', color: { r: 0, g: 1, b: 0 }}]parentFrame.appendChild(child1)parentFrame.appendChild(child2)parentFrame.layoutMode = 'HORIZONTAL'// Negative horizontal gap between children so they overlapparentFrame.itemSpacing = -20// Parent frame (last child on top)// +---------------------+// |+-------+-----------+|// || | ||// ||Child 1| Child 2 ||// || | ||// |+-------+-----------+|// +---------------------+parentFrame.itemReverseZIndex = false// Parent frame (first child on top)// +---------------------+// |+-----------+-------+|// || | ||// || Child 1 |Child 2||// || | ||// |+-----------+-------+|// +---------------------+parentFrame.itemReverseZIndex = true
```
