---
title: Signature + Remarks
slug: nodes-targetaspectratio-signature-remarks
source_file: plugin-api-nodes-targetaspectratio.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-targetaspectratio/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: cd7047642dc4d55c
token_count: 232
chunk_title: Signature + Remarks
chunk_slug: nodes-targetaspectratio-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-targetaspectratio.md
parent_slug: nodes-targetaspectratio
char_count: 812
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-targetaspectratio-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### targetAspectRatio: Vector | null [readonly]

Use `lockAspectRatio` and `unlockAspectRatio` to set targetAspectRatio.

```
const parentFrame = figma.createFrame()const image = await figma.createNodeFromJSXAsync( )parentFrame.appendChild(image)image.lockAspectRatio() // set to 2:3 ratio, implicit from the size// Add autolayout to parent, which defaults to Hug x HugparentFrame.layoutMode = 'HORIZONTAL'// Set child to fill-widthimage.layoutGrow = 1// Resize parent to be much largerparentFrame.resize(500, 1000)// Since the child is fill-width, it will expand to the available spaceimage.width == 500image.height == 750// Image maintains the 2:3 ratio even as it grew with auto layout!
```##### caution

⚠️ `targetAspectRatio` cannot be used with auto-resizing text (TextNodes where textAutoResize !== NONE).
