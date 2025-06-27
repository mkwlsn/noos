---
title: 'types?: T + pluginData?: { keys: string[] }'
slug: FindAllCriteria-types-t-plugindata-keys-string-
source_file: plugin-api-FindAllCriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/FindAllCriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0abf03dbd0e1c992
token_count: 157
chunk_title: 'types?: T + pluginData?: { keys: string[] }'
chunk_slug: FindAllCriteria-types-t-plugindata-keys-string-
chunk_index: 1
chunk_of_total: 3
parent_file: FindAllCriteria.md
parent_slug: FindAllCriteria
char_count: 549
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - FindAllCriteria-introduction
  - FindAllCriteria-sharedplugindata-namespace-string-keys-s
merged_titles:
  - 'types?: T'
  - 'pluginData?: { keys: string[] }'
compiler: noos-figma
---

If specified, the search will match nodes that have one of the given types.

```
// Find children of type text or frame.node.findAllWithCriteria({ types: ["TEXT", "FRAME"] })
```

If specified, the search will match nodes that have [`PluginData`](/plugin-docs/api/node-properties/#getplugindata)
 stored for your plugin.

```
// Find children that have plugin data stored.node.findAllWithCriteria({ pluginData: {} })// Find children that have plugin data stored with keys// "a" or "b"node.findAllWithCriteria({ pluginData: { keys: ["a", "b"] }})
```
