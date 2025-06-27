---
title: key + value
slug: nodes-setsharedplugindata-key-value
source_file: plugin-api-nodes-setsharedplugindata.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-setsharedplugindata/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4adfb82b5d7f7d0f
token_count: 410
chunk_title: key + value
chunk_slug: nodes-setsharedplugindata-key-value
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-setsharedplugindata.md
parent_slug: nodes-setsharedplugindata
char_count: 1433
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-setsharedplugindata-introduction
merged_titles:
  - key
  - value
compiler: noos-figma
---

The key under which to store the data. This is similar to writing to a plain object via `obj[key] = value`.

The data you want to store. If you want to store a value type other than a string, encode it as a JSON string first via `JSON.stringify` and `JSON.parse`. If you set the value to the empty string (""), the key/value pair is removed.

## Remarks

This lets you store custom information on any node or style. You can retrieve it later by calling [`getSharedPluginData`](/plugin-docs/api/node-properties/#getsharedplugindata)
 with the same namespace and key. To find all data stored on a node or style in a particular namespace, use [`getSharedPluginDataKeys`](/plugin-docs/api/node-properties/#getsharedplugindatakeys)
.

Any data you write using this API will be readable by any plugin. The intent is to allow plugins to interoperate with each other. Use [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
 instead if you don't want other plugins to be able to read your data.

You must also provide a `namespace` argument to avoid key collisions with other plugins. This argument is mandatory to prevent multiple plugins from using generic key names like `data` and overwriting one another. We recommend passing a value that identifies your plugin. This namespace can be given to authors of other plugins so that they can read data from your plugin.

##### caution

⚠ Total entry size cannot exceed 100 kB.
