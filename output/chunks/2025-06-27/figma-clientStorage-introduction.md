---
title: Introduction
slug: figma-clientStorage-introduction
source_file: plugin-api-figma-clientStorage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-clientStorage/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8f0d1482a952a06b
token_count: 373
chunk_title: Introduction
chunk_slug: figma-clientStorage-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: figma-clientStorage.md
parent_slug: figma-clientStorage
char_count: 1303
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-clientStorage-getasynckey-string-promise-setasynckey-s
  - figma-clientStorage-deleteasynckey-string-promise-keysasync-
compiler: noos-figma
---

# figma.clientStorage

The `figma.clientStorage` API allows you to store data on the user's local machine. Unlike data stored with the document (such as [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
), this data is not synchronized across users. It's similar to the [Window.localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
, but is asynchronous, and allows storing objects, arrays, strings, numbers, booleans, null, undefined and `Uint8Array`. Like `localStorage`, you should expect that user actions such as clearing the browser cache might clear all stored data.

The data is specific to your plugin ID. Plugins with other IDs won't be able to read this data.

Each plugin gets a total of 5MB of storage. You can approximate the quota used by a key/value pair by adding the size of the key to the size of the value converted to JSON. The main exception is that Uint8Array values counts as the size of the Uint8Array, rather than the array converted to JSON.

⚠ The data is stored privately for stability, not security. It prevents other plugins from accessing with your data. It does not, however, prevent users from seeing data stored on their own client given sufficient effort.

⚠ Data will become inaccessible if your plugin ID changes.
