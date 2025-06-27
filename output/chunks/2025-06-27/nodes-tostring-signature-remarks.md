---
title: Signature + Remarks
slug: nodes-tostring-signature-remarks
source_file: plugin-api-nodes-tostring.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-tostring/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e78c0bdf6270a7a5
token_count: 107
chunk_title: Signature + Remarks
chunk_slug: nodes-tostring-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-tostring.md
parent_slug: nodes-tostring
char_count: 374
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-tostring-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### toString(): string

This currently returns a string of the form `[Node ID]` where `ID` is the id of the node. This is just for debugging convenience so the node displays something useful when converted to a string. We recommend not relying on this in production.

Example:

```
// e.g. [Node 0:5]console.log(`Current selected node ${figma.currentPage.selection[0]}`)
```
