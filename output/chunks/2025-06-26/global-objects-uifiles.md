---
title: __uiFiles__
slug: global-objects-uifiles
source_file: plugin-api-global-objects.html
source_url: 'https://www.figma.com/plugin-docs/api/global-objects/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: eff555ad1a6da3ad
token_count: 84
chunk_title: __uiFiles__
chunk_slug: global-objects-uifiles
chunk_index: 2
chunk_of_total: 3
parent_file: global-objects.md
parent_slug: global-objects
char_count: 291
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - global-objects-introduction
  - global-objects-html
compiler: noos-figma
---

If you assigned a map to the [`"ui"`](/plugin-docs/manifest/#ui) field in your `manifest.json` file:

manifest.json```
"ui": { "main": "main.html", "secondary": "secondary.html"}
```you can use this variable to access each file's contents. You can then call `figma.showUI(__uiFiles__.main)`.
