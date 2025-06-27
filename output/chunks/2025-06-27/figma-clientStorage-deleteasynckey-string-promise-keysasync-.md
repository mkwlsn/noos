---
title: 'deleteAsync(key: string): Promise + keysAsync(): Promise'
slug: figma-clientStorage-deleteasynckey-string-promise-keysasync-
source_file: plugin-api-figma-clientStorage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-clientStorage/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 02738fbb8d3c7be7
token_count: 83
chunk_title: 'deleteAsync(key: string): Promise + keysAsync(): Promise'
chunk_slug: figma-clientStorage-deleteasynckey-string-promise-keysasync-
chunk_index: 2
chunk_of_total: 3
parent_file: figma-clientStorage.md
parent_slug: figma-clientStorage
char_count: 289
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - figma-clientStorage-introduction
  - figma-clientStorage-getasynckey-string-promise-setasynckey-s
merged_titles:
  - 'deleteAsync(key: string): Promise'
  - 'keysAsync(): Promise'
compiler: noos-figma
---

Removes the stored key/value pair from client storage with the given `key`. If no such key is stored, this function will return normally but will otherwise do nothing.

Retrieves a list of all keys stored to client storage. Use this to enumerate the full contents of the clientStorage API.
