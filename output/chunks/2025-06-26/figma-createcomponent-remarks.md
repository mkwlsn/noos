---
title: Remarks
slug: figma-createcomponent-remarks
source_file: plugin-api-figma-createcomponent.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createcomponent/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: be224065a2668df6
token_count: 103
chunk_title: Remarks
chunk_slug: figma-createcomponent-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createcomponent.md
parent_slug: figma-createcomponent
char_count: 360
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, the new node has width and height both at 100, and is parented under `figma.currentPage`.

This function creates a brand new component. To create a component from an existing node, use [`figma.createComponentFromNode`](/plugin-docs/api/properties/figma-createcomponentfromnode/).

Create a component```
const component = figma.createComponent()
```
