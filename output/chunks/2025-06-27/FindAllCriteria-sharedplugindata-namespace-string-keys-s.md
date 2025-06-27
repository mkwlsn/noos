---
title: 'sharedPluginData?: { namespace: string; keys: string[] }'
slug: FindAllCriteria-sharedplugindata-namespace-string-keys-s
source_file: plugin-api-FindAllCriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/FindAllCriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6543054c3b87e22f
token_count: 142
chunk_title: 'sharedPluginData?: { namespace: string; keys: string[] }'
chunk_slug: FindAllCriteria-sharedplugindata-namespace-string-keys-s
chunk_index: 2
chunk_of_total: 3
parent_file: FindAllCriteria.md
parent_slug: FindAllCriteria
char_count: 496
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - FindAllCriteria-introduction
  - FindAllCriteria-types-t-plugindata-keys-string-
compiler: noos-figma
---

If specified, the search will match nodes that have [`SharedPluginData`](/plugin-docs/api/node-properties/#getsharedplugindata)
 stored on the given `namespace` and `keys`.

```
// Find children that have shared plugin data// on the "foo" namespace.node.findAllWithCriteria({ sharedPluginData: { namespace: "foo" }})// Find children that have shared plugin data// on the "foo" namespace with keys "a" or "b"node.findAllWithCriteria({ sharedPluginData: { namespace: "foo", keys: ["a", "b"] }})
```
