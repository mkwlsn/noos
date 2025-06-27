---
title: Signature + Remarks
slug: nodes-locked-signature-remarks
source_file: plugin-api-nodes-locked.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-locked/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 89a46af6d7c29039
token_count: 91
chunk_title: Signature + Remarks
chunk_slug: nodes-locked-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-locked.md
parent_slug: nodes-locked
char_count: 316
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-locked-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### locked: boolean

The value that this property returns is independent from the node's parent. i.e.

- The node isn't necessarily locked if this is `.locked === true`.
- The node isn't necessarily unlocked if this is `.locked === false`.
- An object is locked if `.locked == true` for itself or any of its parents.
