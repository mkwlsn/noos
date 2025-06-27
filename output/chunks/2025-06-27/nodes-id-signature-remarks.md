---
title: Signature + Remarks
slug: nodes-id-signature-remarks
source_file: plugin-api-nodes-id.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-id/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: afb842026f560048
token_count: 148
chunk_title: Signature + Remarks
chunk_slug: nodes-id-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-id.md
parent_slug: nodes-id
char_count: 518
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-id-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### id: string [readonly]

One possible use case for using the `id` is to have a serializable representation of a Figma node. To "deserialize" an id back into a node, pass it to [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
. This will return null if the node is no longer present in the document.

In the URLs for Figma files, node ids are hyphenated. However, for use with the API, node ids must use colons. For example, if a Figma file URL has the node id `1-3`, you must convert it to `1:3`.
