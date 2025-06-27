---
title: Signature + Remarks
slug: nodes-visible-signature-remarks
source_file: plugin-api-nodes-visible.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-visible/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 513bb2cbda4093fa
token_count: 92
chunk_title: Signature + Remarks
chunk_slug: nodes-visible-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-visible.md
parent_slug: nodes-visible
char_count: 321
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-visible-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### visible: boolean

The value that this property returns is independent from the node's parent. i.e.

- The node isn't necessarily visible if this is `.visible === true`.
- The node isn't necessarily invisible if this is `.visible === false`.
- An object is visible if `.visible == true` for itself and all its parents.
