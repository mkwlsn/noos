---
title: Remarks
slug: figma-createpage-remarks
source_file: plugin-api-figma-createpage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createpage/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 56f875df92492a79
token_count: 108
chunk_title: Remarks
chunk_slug: figma-createpage-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createpage.md
parent_slug: figma-createpage
char_count: 375
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

A page node can be the parent of all types of nodes except for the document node and other page nodes.

Files in a Starter team are limited to three pages. When a plugin tries to create more than three pages in a Starter team file, it triggers the following error:

Page limit error```
The Starter plan only comes with 3 pages. Upgrade toProfessional for unlimited pages.
```
