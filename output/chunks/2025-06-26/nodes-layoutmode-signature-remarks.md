---
title: Signature + Remarks
slug: nodes-layoutmode-signature-remarks
source_file: plugin-api-nodes-layoutmode.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutmode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4626b95ea31b62bb
token_count: 718
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutmode-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutmode.md
parent_slug: nodes-layoutmode
char_count: 2510
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutmode-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'

Changing this property will cause the position of the children of this layer to change as a side-effect. It also causes the size of this layer to change, since at least one dimension of auto-layout frames is automatically calculated.

As a consequence, note that if a frame has `layoutMode === "NONE"`, calling `layoutMode = "VERTICAL"; layoutMode = "NONE"` does not leave the document unchanged. Removing auto-layout from a frame does not restore the children to their original positions.

This property must be set to `"HORIZONTAL"` or `"VERTICAL"` in order for the [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/), [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/), [`primaryAxisAlignItems`](/plugin-docs/api/properties/nodes-primaryaxisalignitems/), [`counterAxisAlignItems`](/plugin-docs/api/properties/nodes-counteraxisalignitems/), [`counterAxisAlignContent`](/plugin-docs/api/properties/nodes-counteraxisaligncontent/), [`paddingTop`](/plugin-docs/api/node-properties/#paddingtop), [`paddingBottom`](/plugin-docs/api/node-properties/#paddingbottom), [`paddingLeft`](/plugin-docs/api/node-properties/#paddingleft), [`paddingRight`](/plugin-docs/api/node-properties/#paddingright), [`itemSpacing`](/plugin-docs/api/properties/nodes-itemspacing/), [`counterAxisSpacing`](/plugin-docs/api/properties/nodes-counteraxisspacing/), [`itemReverseZIndex`](/plugin-docs/api/properties/nodes-itemreversezindex/), and [`strokesIncludedInLayout`](/plugin-docs/api/properties/nodes-strokesincludedinlayout/) properties to be applicable.

Auto-layout frame with horizontal layout```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())// Parent frame// +--------------------------+// |+-----------++-----------+|// || || ||// || Child 1 || Child 2 ||// || || ||// |+-----------++-----------+|// +--------------------------+parentFrame.layoutMode = 'HORIZONTAL'
```Auto-layout frame with vertical layout```
const parentFrame = figma.createFrame()parentFrame.appendChild(figma.createFrame())parentFrame.appendChild(figma.createFrame())// Parent frame// +-------------+// |+-----------+|// || ||// || Child 1 ||// || ||// |+-----------+|// |+-----------+|// || ||// || Child 2 ||// || ||// |+-----------+|// +-------------+parentFrame.layoutMode = 'VERTICAL'
```
