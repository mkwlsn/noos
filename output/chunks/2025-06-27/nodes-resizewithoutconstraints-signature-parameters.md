---
title: Signature + Parameters
slug: nodes-resizewithoutconstraints-signature-parameters
source_file: plugin-api-nodes-resizewithoutconstraints.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resizewithoutconstraints/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 80967ec7685dbbec
token_count: 78
chunk_title: Signature + Parameters
chunk_slug: nodes-resizewithoutconstraints-signature-parameters
chunk_index: 1
chunk_of_total: 3
parent_file: nodes-resizewithoutconstraints.md
parent_slug: nodes-resizewithoutconstraints
char_count: 273
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-resizewithoutconstraints-introduction
  - nodes-resizewithoutconstraints-remarks
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### resizeWithoutConstraints(width: number, height: number): void

### width

New width of the node. Must be >= 0.01

### height

New height of the node. Must be >= 0.01, except for [`LineNode`](/plugin-docs/api/LineNode/)
 which must always be given a height of exactly 0.
