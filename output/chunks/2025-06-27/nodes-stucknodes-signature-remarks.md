---
title: Signature + Remarks
slug: nodes-stucknodes-signature-remarks
source_file: plugin-api-nodes-stucknodes.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-stucknodes/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9b5fd1151e96cbe6
token_count: 83
chunk_title: Signature + Remarks
chunk_slug: nodes-stucknodes-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-stucknodes.md
parent_slug: nodes-stucknodes
char_count: 289
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-stucknodes-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### stuckNodes: SceneNode[] [readonly]

This property is only available in FigJam.

In FigJam a stickable host that means that stickables, like `'STAMP'` nodes, are allowed to attach themselves to the node. If the stickable host moves all nodes that are in `stuckNodes` move along with it.
