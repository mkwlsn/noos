---
title: Signature + Parameters
slug: nodes-findchildren-signature-parameters
source_file: plugin-api-nodes-findchildren.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findchildren/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bfcffe3b73129f9d
token_count: 63
chunk_title: Signature + Parameters
chunk_slug: nodes-findchildren-signature-parameters
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-findchildren.md
parent_slug: nodes-findchildren
char_count: 219
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-findchildren-introduction
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]

### callback

A function that evaluates whether to return the provided `node`. If this argument is omitted, `findChildren` returns `node.children`.
