---
title: Introduction
slug: figma-teamlibrary-getvariablesinlibrarycollectionasync-introduction
source_file: plugin-api-figma-teamlibrary-getvariablesinlibrarycollectionasync.html
source_url: >-
  https://www.figma.com/plugin-docs/api/figma-teamlibrary-getvariablesinlibrarycollectionasync/
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: dd2c94a3232fdd26
token_count: 107
chunk_title: Introduction
chunk_slug: figma-teamlibrary-getvariablesinlibrarycollectionasync-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-teamlibrary-getvariablesinlibrarycollectionasync.md
parent_slug: figma-teamlibrary-getvariablesinlibrarycollectionasync
char_count: 372
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-teamlibrary-getvariablesinlibrarycollectionasync-example-usage
compiler: noos-figma
---

# getVariablesInLibraryCollectionAsync

Returns a descriptor of all [`Variable`](/plugin-docs/api/Variable/)s that exist in a given [`LibraryVariableCollection`](/plugin-docs/api/LibraryVariableCollection/).
Rejects if the given variable collection does not exist, or if the current user
does not have access to that variable collection's library, or if the request fails.
