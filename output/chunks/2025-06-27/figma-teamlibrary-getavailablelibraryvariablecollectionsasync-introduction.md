---
title: Introduction
slug: figma-teamlibrary-getavailablelibraryvariablecollectionsasync-introduction
source_file: plugin-api-figma-teamlibrary-getavailablelibraryvariablecollectionsasync.html
source_url: >-
  https://www.figma.com/plugin-docs/api/figma-teamlibrary-getavailablelibraryvariablecollectionsasync/
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c566c5bc97046858
token_count: 110
chunk_title: Introduction
chunk_slug: figma-teamlibrary-getavailablelibraryvariablecollectionsasync-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-teamlibrary-getavailablelibraryvariablecollectionsasync.md
parent_slug: figma-teamlibrary-getavailablelibraryvariablecollectionsasync
char_count: 383
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - >-
    figma-teamlibrary-getavailablelibraryvariablecollectionsasync-signature-remarks
compiler: noos-figma
---

# getAvailableLibraryVariableCollectionsAsync

Returns a descriptor of all [`VariableCollection`](/plugin-docs/api/VariableCollection/)
s that exist in the enabled libraries of the current file. Rejects if the request fails.

##### info

This requires that users enable libraries that contain variables via the UI. Currently it is not possible to enable libraries via the Plugin API.
