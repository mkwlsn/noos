---
title: Find by node type
slug: nodes-findallwithcriteria-find-by-node-type
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e8e414a154e0ee8f
token_count: 81
chunk_title: Find by node type
chunk_slug: nodes-findallwithcriteria-find-by-node-type
chunk_index: 2
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 281
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
  - nodes-findallwithcriteria-find-by-plugin-data
  - nodes-findallwithcriteria-find-by-shared-plugin-data
  - nodes-findallwithcriteria-combining-criterias
compiler: noos-figma
---

```
// Find all component and component set nodes in the current// pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT', 'COMPONENT_SET']})// Find all text nodes in the current pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['TEXT']})
```
