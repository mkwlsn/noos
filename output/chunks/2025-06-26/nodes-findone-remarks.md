---
title: Remarks
slug: nodes-findone-remarks
source_file: plugin-api-nodes-findone.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findone/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d64e9462b0e9d118
token_count: 215
chunk_title: Remarks
chunk_slug: nodes-findone-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-findone.md
parent_slug: nodes-findone
char_count: 750
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findone-introduction
compiler: noos-figma
---

This function returns `null` if no matching node is found. The traversal order is the same as in [`findAll`](/plugin-docs/api/properties/nodes-findall/).

Note that the node this method is called on is not included.

Example: find one node whose name is "Template":

```
const template = figma.currentPage.findOne(n => n.name === "Template")
```##### caution

⚠ Large documents in Figma can have tens of thousands of nodes. Be careful using this function as it could be very slow.
If you only need to search immediate children, it is much faster to call `node.children.find(callback)` or `node.findChild(callback)`.
Please refer to our [recommendations](/plugin-docs/accessing-document/#optimizing-traversals) for how to optimize document traversals.
