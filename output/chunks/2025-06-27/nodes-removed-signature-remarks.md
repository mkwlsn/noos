---
title: Signature + Remarks
slug: nodes-removed-signature-remarks
source_file: plugin-api-nodes-removed.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-removed/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: cdfdbd60f5959d2b
token_count: 104
chunk_title: Signature + Remarks
chunk_slug: nodes-removed-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-removed.md
parent_slug: nodes-removed
char_count: 361
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-removed-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### removed: boolean [readonly]

A node can be removed for any number of reasons. Some examples:

- Your plugin called node.remove() on it
- Someone else deleted the node using multiplayer
- The user triggered an undo action and the node was removed
- The user simply deleted the node
- You removed all children out of a group, and the group auto-deleted itself
