---
title: Remarks
slug: figma-combineasvariants-remarks
source_file: plugin-api-figma-combineasvariants.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-combineasvariants/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: a9aed8cbb7aab20b
token_count: 186
chunk_title: Remarks
chunk_slug: figma-combineasvariants-remarks
chunk_index: 2
chunk_of_total: 4
parent_file: figma-combineasvariants.md
parent_slug: figma-combineasvariants
char_count: 649
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-combineasvariants-introduction
  - figma-combineasvariants-signature-parameters
  - figma-combineasvariants-possible-error-cases
compiler: noos-figma
---

This API is roughly the equivalent of pressing the "Combine as Variants" button in the editor, but combines the specified list of nodes rather than the current selection. You may still, of course, combine the current selection as variants by passing it as an argument:

Combining variants```
figma.combineAsVariants(figma.currentPage.selection, parent)
```##### info

Why is there no `figma.createComponentSet()` function? It would create an empty component set, and empty component sets are not supported in Figma.

Since combining as variants involves moving nodes to a different parent, this operation is subject to many reparenting restrictions:
