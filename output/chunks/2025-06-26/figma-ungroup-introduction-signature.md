---
title: Introduction + Signature
slug: figma-ungroup-introduction-signature
source_file: plugin-api-figma-ungroup.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-ungroup/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bd0ca0d7c872c26a
token_count: 63
chunk_title: Introduction + Signature
chunk_slug: figma-ungroup-introduction-signature
chunk_index: 0
chunk_of_total: 2
parent_file: figma-ungroup.md
parent_slug: figma-ungroup
char_count: 220
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-ungroup-parameters-remarks
merged_titles:
  - Introduction
  - Signature
compiler: noos-figma
---

# ungroup

Ungroups the given `node`, moving all of `node`'s children into `node`'s parent and removing `node`. Returns an array of nodes that were children of `node`.

### ungroup(node: SceneNode & ChildrenMixin): Array
