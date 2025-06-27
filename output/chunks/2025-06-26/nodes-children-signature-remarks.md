---
title: Signature + Remarks
slug: nodes-children-signature-remarks
source_file: plugin-api-nodes-children.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-children/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c6bc254f730a91d0
token_count: 248
chunk_title: Signature + Remarks
chunk_slug: nodes-children-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-children.md
parent_slug: nodes-children
char_count: 865
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-children-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### children: ReadonlyArray [readonly]

This array can be read like and iterated like a regular array. However, calling this property always returns a new array, and both the property and the new array are read-only.

As such, this property cannot be assigned to, and the array cannot be modified directly (it wouldn't do anything). Instead, use [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/), [`insertChild`](/plugin-docs/api/properties/nodes-insertchild/) or [`remove`](/plugin-docs/api/properties/nodes-remove/).

##### info

If you are curious, the reason why inserting children has to be done via API calls is because our internal representation for the layer tree uses [fractional indexing](https://www.figma.com/blog/multiplayer-editing-in-figma/) and [`insertChild`](/plugin-docs/api/properties/nodes-insertchild/) performs that conversion.
