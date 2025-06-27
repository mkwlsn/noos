---
title: strokesIncludedInLayout
slug: nodes-strokesincludedinlayout
source_file: plugin-api-nodes-strokesincludedinlayout.html
source_url: https://www.figma.com/plugin-docs/api/nodes-strokesincludedinlayout/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 00e1e4f3fad9a494
token_count: 388
---
# strokesIncludedInLayout

Applicable only on auto-layout frames. Determines whether strokes are included in [layout calculations](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#strokes-in-layout)
. When true, auto-layout frames behave like css `box-sizing: border-box`.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### strokesIncludedInLayout: boolean

## Remarks

Auto-layout frame with strokes included in layout```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.layoutMode = 'HORIZONTAL'// Let the height of the parent frame resize to fit the childrenparentFrame.counterAxisSizingMode = 'AUTO'// Thick stroke around parent frame to illustrate layout differencesparentFrame.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }}]parentFrame.strokeWeight = 10// Parent frame (strokes overlap with children)// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------++-----------+|// +--------------------------+parentFrame.strokesIncludedInLayout = false// Parent frame (strokes do not overlap with children)// +--------------------------------+// | |// | +-----------++-----------+ |// | | || | |// | | Child 1 || Child 2 | |// | | || | |// | +-----------++-----------+ |// | |// +--------------------------------+parentFrame.strokesIncludedInLayout = true
```