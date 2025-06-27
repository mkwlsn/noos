---
title: Find by plugin data
slug: nodes-findallwithcriteria-find-by-plugin-data
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 347bbc7c452dd8c6
token_count: 99
chunk_title: Find by plugin data
chunk_slug: nodes-findallwithcriteria-find-by-plugin-data
chunk_index: 3
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 346
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
  - nodes-findallwithcriteria-find-by-node-type
  - nodes-findallwithcriteria-find-by-shared-plugin-data
  - nodes-findallwithcriteria-combining-criterias
compiler: noos-figma
---

```
// Find all nodes in the current page with plugin data// for the current plugin.const nodes = figma.currentPage.findAllWithCriteria({ pluginData: {}})// Find all nodes in the current page with plugin data// for the current plugin with keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ pluginData: { keys: ["a", "b"] }})
```
