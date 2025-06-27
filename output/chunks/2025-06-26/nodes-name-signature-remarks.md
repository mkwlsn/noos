---
title: Signature + Remarks
slug: nodes-name-signature-remarks
source_file: plugin-api-nodes-name.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-name/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 2f6b2ad587b3084b
token_count: 156
chunk_title: Signature + Remarks
chunk_slug: nodes-name-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-name.md
parent_slug: nodes-name
char_count: 546
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-name-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### name: string

If the node is a [`TextNode`](/plugin-docs/api/TextNode/), the name will update automatically by default based on the `characters` property (`autoRename` is true). If you manually override the text node's name, it will set `autoRename` to false. This matches the behavior in the editor.

If the node is a [`PageNode`](/plugin-docs/api/PageNode/) with no children and the name is a page divider name, it will set `isPageDivider` to true. A page divider name consists of all asterisks, all en dashes, all em dashes, or all spaces.
