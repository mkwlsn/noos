---
title: Signature + Remarks
slug: nodes-layoutgrow-signature-remarks
source_file: plugin-api-nodes-layoutgrow.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutgrow/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bbb4fda7280a960f
token_count: 163
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutgrow-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutgrow.md
parent_slug: nodes-layoutgrow
char_count: 569
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutgrow-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutGrow: number

0 and 1 are currently the only supported values.

Note: If the current node is an auto-layout frame (e.g. an auto-layout frame inside a parent auto-layout frame) if you set `layoutGrow` to 1 you should set the corresponding axis – either [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/) or [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/) – to be `“FIXED”`. This is because an auto-layout frame cannot simultaneously stretch to fill its parent and shrink to hug its children.
