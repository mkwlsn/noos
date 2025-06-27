---
title: Introduction
slug: figma-group-introduction
source_file: plugin-api-figma-group.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-group/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e1824ec86d19bb3d
token_count: 73
chunk_title: Introduction
chunk_slug: figma-group-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: figma-group.md
parent_slug: figma-group
char_count: 253
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-group-signature-parameters
  - figma-group-remarks
  - figma-group-possible-error-cases
compiler: noos-figma
---

# group

Creates new group containing all the nodes in `nodes`. There is no `createGroup` function -- use this instead. Group nodes have many quirks, like auto-resizing, that you can read about in the [`FrameNode`](/plugin-docs/api/FrameNode/)
 section.
