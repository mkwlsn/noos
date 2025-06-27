---
title: Combining criterias
slug: nodes-findallwithcriteria-combining-criterias
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e220e5334d3c54ab
token_count: 131
chunk_title: Combining criterias
chunk_slug: nodes-findallwithcriteria-combining-criterias
chunk_index: 5
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 456
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
  - nodes-findallwithcriteria-find-by-node-type
  - nodes-findallwithcriteria-find-by-plugin-data
  - nodes-findallwithcriteria-find-by-shared-plugin-data
compiler: noos-figma
---

You can combine multiple criterias for further narrow your search.

```
// Find all text nodes in the current page with plugin data// for the current pluginconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], pluginData: {}})// Find all text nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], sharedPluginData: { namespace: "bar" }})
```
