---
title: Remarks
slug: nodes-setplugindata-remarks
source_file: plugin-api-nodes-setplugindata.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-setplugindata/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: ad37cecec6be087e
token_count: 194
chunk_title: Remarks
chunk_slug: nodes-setplugindata-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: nodes-setplugindata.md
parent_slug: nodes-setplugindata
char_count: 678
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-setplugindata-introduction
  - nodes-setplugindata-signature-parameters
compiler: noos-figma
---

The data is specific to your plugin ID. Plugins with other IDs won't be able to read this data. You can retrieve it later by calling `getPluginData` with the same key. To find all data stored on a node or style by your plugin use `getPluginDataKeys`.

##### caution

⚠ The data is stored privately for stability, not security. It prevents other plugins from accessing with your data. It does not, however, prevent users from seeing the data given sufficient effort. For example, they could export the document as a .fig file and try to decode it.

##### caution

⚠ Data will become inaccessible if your plugin ID changes.

##### caution

⚠ Total entry size cannot exceed 100 kB.
