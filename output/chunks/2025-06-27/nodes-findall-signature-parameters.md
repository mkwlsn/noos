---
title: Signature + Parameters
slug: nodes-findall-signature-parameters
source_file: plugin-api-nodes-findall.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findall/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7d499c9902c71082
token_count: 63
chunk_title: Signature + Parameters
chunk_slug: nodes-findall-signature-parameters
chunk_index: 1
chunk_of_total: 3
parent_file: nodes-findall.md
parent_slug: nodes-findall
char_count: 218
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-findall-introduction
  - nodes-findall-remarks
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### findAll(callback?: (node: SceneNode) => boolean): SceneNode[]

### callback

A function that evaluates whether to return the provided `node`. If this argument is omitted, `findAll` returns all nodes in the subtree.
