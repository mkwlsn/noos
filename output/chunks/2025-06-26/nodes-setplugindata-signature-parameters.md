---
title: Signature + Parameters
slug: nodes-setplugindata-signature-parameters
source_file: plugin-api-nodes-setplugindata.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-setplugindata/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bfab6cf9c5e2f965
token_count: 119
chunk_title: Signature + Parameters
chunk_slug: nodes-setplugindata-signature-parameters
chunk_index: 1
chunk_of_total: 3
parent_file: nodes-setplugindata.md
parent_slug: nodes-setplugindata
char_count: 414
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-setplugindata-introduction
  - nodes-setplugindata-remarks
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### setPluginData(key: string, value: string): void

### key

The key under which to store the data. This is similar to writing to a plain object via `obj[key] = value`.

### value

The data you want to store. If you want to store a value type other than a string, encode it as a JSON string first via `JSON.stringify` and `JSON.parse`. If you set the value to the empty string (""), the key/value pair is removed.
