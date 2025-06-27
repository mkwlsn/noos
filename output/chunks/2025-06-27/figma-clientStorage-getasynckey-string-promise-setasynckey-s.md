---
title: 'getAsync(key: string): Promise + setAsync(key: string, value: any): Promise'
slug: figma-clientStorage-getasynckey-string-promise-setasynckey-s
source_file: plugin-api-figma-clientStorage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-clientStorage/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2598fdf3459e7a85
token_count: 92
chunk_title: 'getAsync(key: string): Promise + setAsync(key: string, value: any): Promise'
chunk_slug: figma-clientStorage-getasynckey-string-promise-setasynckey-s
chunk_index: 1
chunk_of_total: 3
parent_file: figma-clientStorage.md
parent_slug: figma-clientStorage
char_count: 320
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-clientStorage-introduction
  - figma-clientStorage-deleteasynckey-string-promise-keysasync-
merged_titles:
  - 'getAsync(key: string): Promise'
  - 'setAsync(key: string, value: any): Promise'
compiler: noos-figma
---

Retrieves a value from client storage with the given `key`. If no value has been stored for that key, this function will asynchronously return `undefined`.

Sets a value to client storage with the given `key`. The returned promise will resolve if storage is successful, or reject with an error message if storage failed.
