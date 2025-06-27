---
title: Remarks
slug: figma-flatten-remarks
source_file: plugin-api-figma-flatten.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-flatten/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 964b9e29f26ef7fa
token_count: 122
chunk_title: Remarks
chunk_slug: figma-flatten-remarks
chunk_index: 1
chunk_of_total: 3
parent_file: figma-flatten.md
parent_slug: figma-flatten
char_count: 427
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-flatten-parameters
  - figma-flatten-possible-error-cases
compiler: noos-figma
---

This API is roughly the equivalent of pressing Ctrl-E/⌘E in the editor, but flattens the specified list of nodes rather than the current selection. You may still, of course, flatten the current selection by passing it as an argument:

Flatten nodes```
figma.flatten(figma.currentPage.selection, parent)
```Since flattening involves moving nodes to a different parent, this operation is subject to many reparenting restrictions:
