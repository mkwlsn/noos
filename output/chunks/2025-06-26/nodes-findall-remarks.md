---
title: Remarks
slug: nodes-findall-remarks
source_file: plugin-api-nodes-findall.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findall/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 99f0d1b7d41955e0
token_count: 283
chunk_title: Remarks
chunk_slug: nodes-findall-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: nodes-findall.md
parent_slug: nodes-findall
char_count: 988
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findall-introduction
  - nodes-findall-signature-parameters
compiler: noos-figma
---

Nodes are included in back-to-front order. Parents always appear before their children, and children appear in same relative order before their children, and children appear in same relative order as in the [`children`](/plugin-docs/api/properties/nodes-children/) array.

This traversal method is known as ["pre-order traversal"](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR)).

Note that the node this method is called on is not included.

Example: find all nodes whose name is "Color":

```
const colors = figma.currentPage.findAll(n => n.name === "Color")
```##### caution

⚠ Large documents in Figma can have tens of thousands of nodes. Be careful using this function as it could be very slow.
If you only need to search immediate children, it is much faster to call `node.children.filter(callback)` or `node.findChildren(callback)`.
Please refer to our [recommendations](/plugin-docs/accessing-document/#optimizing-traversals) for how to optimize document traversals.
