---
title: counterAxisSpacing
slug: nodes-counteraxisspacing
source_file: plugin-api-nodes-counteraxisspacing.html
source_url: https://www.figma.com/plugin-docs/api/nodes-counteraxisspacing/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: cf92ff4f10c85ccc
token_count: 424
---
# counterAxisSpacing

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/) set to `"WRAP"`. Determines the distance between wrapped tracks. The value must be positive.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### counterAxisSpacing: number | null

## Remarks

Set this propety to `null` to have it sync with [`itemSpacing`](/plugin-docs/api/properties/nodes-itemspacing/). This will never return `null`. Once set to `null`, it will start returning the value of [`itemSpacing`](/plugin-docs/api/properties/nodes-itemspacing/).

Auto-layout frame with children wrapping to the next line```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())// Make children flow horizontally and wrapparentFrame.layoutMode = 'HORIZONTAL'parentFrame.layoutWrap = 'WRAP'// Set a fixed width so when we set itemSpacing below, the children will wrapparentFrame.primaryAxisSizingMode = 'FIXED'// Let the height of the parent frame resize to fit the childrenparentFrame.counterAxisSizingMode = 'AUTO'// Horizontal gap between childrenparentFrame.itemSpacing = 10// Parent frame// +------------------------------------------+// |+-----------+ +-----------+ |// || | | | |// || Child 1 | -- 10 -- | Child 2 | |// || | | | |// |+-----------+ +-----------+ |// | | |// | | |// | 20 |// | | |// | | |// |+-----------+ |// || | |// || Child 3 | |// || | |// |+-----------+ |// +------------------------------------------+parentFrame.counterAxisSpacing = 20
```