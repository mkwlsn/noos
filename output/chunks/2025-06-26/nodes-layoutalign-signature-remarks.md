---
title: Signature + Remarks
slug: nodes-layoutalign-signature-remarks
source_file: plugin-api-nodes-layoutalign.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutalign/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d6e95b525fef4e1a
token_count: 378
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutalign-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutalign.md
parent_slug: nodes-layoutalign
char_count: 1320
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutalign-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

Changing this property will cause the `x`, `y`, `size`, and `relativeTransform` properties on this node to change, if applicable (inside an auto-layout frame).

- Setting `"STRETCH"` will make the node "stretch" to fill the width of the parent vertical auto-layout frame, or the height of the parent horizontal auto-layout frame excluding the frame's padding.
- If the current node is an auto layout frame (e.g. an auto layout frame inside a parent auto layout frame) if you set layoutAlign to `“STRETCH”` you should set the corresponding axis – either `primaryAxisSizingMode` or `counterAxisSizingMode` – to be`“FIXED”`. This is because an auto-layout frame cannot simultaneously stretch to fill its parent and shrink to hug its children.
- Setting `"INHERIT"` does not "stretch" the node.

##### caution

⚠️ Previously, layoutAlign also determined counter axis alignment of auto-layout frame children. Counter axis alignment is now set on the auto-layout frame itself through [`counterAxisAlignItems`](/plugin-docs/api/properties/nodes-counteraxisalignitems/). Note that this means all layers in an auto-layout frame must now have the same counter axis alignment. This means `"MIN"`, `"CENTER"`, and `"MAX"` are now deprecated values of `layoutAlign`.
