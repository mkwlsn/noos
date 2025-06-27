---
title: __html__
slug: global-objects-html
source_file: plugin-api-global-objects.html
source_url: 'https://www.figma.com/plugin-docs/api/global-objects/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 802f9f2720b33921
token_count: 103
chunk_title: __html__
chunk_slug: global-objects-html
chunk_index: 1
chunk_of_total: 3
parent_file: global-objects.md
parent_slug: global-objects
char_count: 358
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - global-objects-introduction
  - global-objects-uifiles
compiler: noos-figma
---

If you assigned a file name to the [`"ui"`](/plugin-docs/manifest/#ui)
 field in your `manifest.json` file, you can use this variable to access the file’s contents.

Instead of including HTML within a JavaScript string, you can call `figma.showUI(__html__)` . As the HTML is in a separate file, your text editor will render the HTML with syntax highlighting.
