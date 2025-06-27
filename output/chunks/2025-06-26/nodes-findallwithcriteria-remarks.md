---
title: Remarks
slug: nodes-findallwithcriteria-remarks
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 79bcf395c86585fd
token_count: 367
chunk_title: Remarks
chunk_slug: nodes-findallwithcriteria-remarks
chunk_index: 2
chunk_of_total: 4
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 1283
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-signature-parameters
  - nodes-findallwithcriteria-example-usages
compiler: noos-figma
---

This is a faster but more limited search compared to [`findAll`](/plugin-docs/api/properties/nodes-findall/), which lets you search nodes based on any logic you can include in a callback.

When paired with [`figma.skipInvisibleInstanceChildren = true`](/plugin-docs/api/properties/figma-skipinvisibleinstancechildren/), this method can be hundreds of times faster in large documents with tens of thousands of nodes.

The return value is narrowly typed to match the provided `types`, which makes it much easier to use node-type-specific properties. For example, `node.findAllWithCriteria({ types: ['TEXT'] })` will return `TextNode[]` instead of the more generic `SceneNode[]` from [`findAll`](/plugin-docs/api/properties/nodes-findall/).

Nodes are included in back-to-front order, which is the same order as in [`findAll`](/plugin-docs/api/properties/nodes-findall/). Parents always appear before their children, and children appear in same relative order before their children, and children appear in same relative order as in the [`children`](/plugin-docs/api/properties/nodes-children/) array.

This traversal method is known as ["pre-order traversal"](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR)).

##### info

The node this method is called on is not included.
