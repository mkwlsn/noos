---
title: Signature + Remarks
slug: nodes-ismask-signature-remarks
source_file: plugin-api-nodes-ismask.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-ismask/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 023c9c29dac9793e
token_count: 406
chunk_title: Signature + Remarks
chunk_slug: nodes-ismask-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-ismask.md
parent_slug: nodes-ismask
char_count: 1420
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-ismask-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### isMask: boolean

Since a mask node masks all of its subsequent siblings, enabling `isMask` on a node that is not in a group-like container designed to stop mask propagation can have unintented consequences — that is, it may "mask" (often in practice, hide) more siblings than you intend. When enabling `isMask`, ensure you have contained its propagation propertly. ("Subsequent siblings" are siblings listed after this node in a `children` array in the plugin API; this corresponds to layers shown above this node in the layers panel.)

Example:

```
const rect = figma.createRectangle()const circleToMask = figma.createEllipse()const otherCircle1 = figma.createEllipse()const otherCircle2 = figma.createEllipse()// In the layers panel, this would look something like:// - otherCircle2// - otherCircle1// - circleToMask// - rect//// So if I enable `rect.isMask`, the rect will mask ALL other nodes,// because they are all siblings.//// If I only want `rect` to mask `circleToMask`, I should group// them first.figma.group([rect, circleToMask], figma.currentPage, figma.currentPage.children.indexOf(circleToMask))rect.isMask = true// Now `rect` only masks its siblings above it in its group// (`circleToMask`) but not the circles outside of the group.// In the layers panel this would look like:// - otherCircle2// - otherCircle1// - Group// - circleToMask [this is the only node masked by rect]// - rect (isMask)
```
