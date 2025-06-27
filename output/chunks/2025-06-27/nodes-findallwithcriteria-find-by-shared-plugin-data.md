---
title: Find by shared plugin data
slug: nodes-findallwithcriteria-find-by-shared-plugin-data
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6b482ae9e470eb97
token_count: 120
chunk_title: Find by shared plugin data
chunk_slug: nodes-findallwithcriteria-find-by-shared-plugin-data
chunk_index: 4
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 420
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
  - nodes-findallwithcriteria-find-by-node-type
  - nodes-findallwithcriteria-find-by-plugin-data
  - nodes-findallwithcriteria-combining-criterias
compiler: noos-figma
---

```
// Find all nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar" }})// Find all nodes in the current page with shared plugin data// stored on the "bar" namespace and keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar", keys: ["a", "b"] }})
```
