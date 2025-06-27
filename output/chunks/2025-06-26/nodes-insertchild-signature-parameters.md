---
title: Signature + Parameters
slug: nodes-insertchild-signature-parameters
source_file: plugin-api-nodes-insertchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-insertchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 5a73c753aed9baa5
token_count: 158
chunk_title: Signature + Parameters
chunk_slug: nodes-insertchild-signature-parameters
chunk_index: 1
chunk_of_total: 4
parent_file: nodes-insertchild.md
parent_slug: nodes-insertchild
char_count: 551
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-insertchild-introduction
  - nodes-insertchild-remarks
  - nodes-insertchild-possible-error-cases
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### insertChild(index: number, child: SceneNode): void

### index

Determines where the new layer gets inserted. For example, suppose a group has layers A, B, C, where C is the top-most layer.

- `insertChild(0, D)` gives a group with layers D, A, B, C
- `insertChild(1, D)` gives a group with layers A, D, B, C
- `insertChild(2, D)` gives a group with layers A, B, D, C
- `insertChild(3, D)` gives a group with layers A, B, C, D
- `insertChild(4, D)` throws an error since the group originally only has 3 children

### child

The node to be inserted.
