---
title: Introduction
slug: figma-closeplugin-introduction
source_file: plugin-api-figma-closeplugin.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-closeplugin/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d27ef0468976c817
token_count: 62
chunk_title: Introduction
chunk_slug: figma-closeplugin-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-closeplugin.md
parent_slug: figma-closeplugin
char_count: 215
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-closeplugin-remarks
compiler: noos-figma
---

# closePlugin

Closes the plugin. You should always call this function once your plugin is done running. When called, any UI that's open will be closed and any `setTimeout` or `setInterval` timers will be cancelled.
