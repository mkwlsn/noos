---
title: Signature + Remarks
slug: nodes-strokesincludedinlayout-signature-remarks
source_file: plugin-api-nodes-strokesincludedinlayout.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-strokesincludedinlayout/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d21a470278c292a1
token_count: 314
chunk_title: Signature + Remarks
chunk_slug: nodes-strokesincludedinlayout-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-strokesincludedinlayout.md
parent_slug: nodes-strokesincludedinlayout
char_count: 1097
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-strokesincludedinlayout-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### strokesIncludedInLayout: boolean

Auto-layout frame with strokes included in layout```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Let the height of the parent frame resize to fit the childrenparentFrame.counterAxisSizingMode = 'AUTO'// Thick stroke around parent frame to illustrate layout differencesparentFrame.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }}]parentFrame.strokeWeight = 10// Parent frame (strokes overlap with children)// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------++-----------+|// +--------------------------+parentFrame.strokesIncludedInLayout = false// Parent frame (strokes do not overlap with children)// +--------------------------------+// | |// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// | |// +--------------------------------+parentFrame.strokesIncludedInLayout = true
```
