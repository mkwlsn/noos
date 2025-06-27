---
title: Signature + Remarks
slug: nodes-layoutpositioning-signature-remarks
source_file: plugin-api-nodes-layoutpositioning.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutpositioning/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 070439c41f1e129d
token_count: 371
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutpositioning-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutpositioning.md
parent_slug: nodes-layoutpositioning
char_count: 1296
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutpositioning-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutPositioning: 'AUTO' | 'ABSOLUTE'

Changing this property may cause the parent layer's size to change, since it will recalculate as if this child did not exist. It will also change this node's `x`, `y`, and `relativeTransform` properties.

- The default value of `"AUTO"` will layout this child according to auto-layout rules.
- Setting `"ABSOLUTE"` will take this child out of auto-layout flow, while still nesting inside the auto-layout frame. This allows explicitly setting `x`, `y`, `width`, and `height`. `"ABSOLUTE"` positioned nodes respect constraint settings.

Auto-layout frame absolutely positioned red circle at the top-right corner```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())// Create a small red circleconst ellipse = figma.createEllipse()ellipse.resize(20, 20)ellipse.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }}]parentFrame.appendChild(ellipse)parentFrame.clipsContent = falseparentFrame.layoutMode = 'HORIZONTAL'// Enable absolute positioning so we can move the circleellipse.layoutPositioning = 'ABSOLUTE'// Center the circle on the top-right corner of the frameellipse.x = 90ellipse.y = -10// Make the circle stick to the top-right corner of the frameellipse.constraints = { horizontal: 'MAX', vertical: 'MIN' }
```
