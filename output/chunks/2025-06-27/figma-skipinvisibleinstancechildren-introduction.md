---
title: Introduction
slug: figma-skipinvisibleinstancechildren-introduction
source_file: plugin-api-figma-skipinvisibleinstancechildren.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-skipinvisibleinstancechildren/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 64ac388fee99a8c1
token_count: 95
chunk_title: Introduction
chunk_slug: figma-skipinvisibleinstancechildren-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-skipinvisibleinstancechildren.md
parent_slug: figma-skipinvisibleinstancechildren
char_count: 330
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-skipinvisibleinstancechildren-signature-remarks
compiler: noos-figma
---

# skipInvisibleInstanceChildren

When enabled, causes all node properties and methods to skip over invisible nodes (and their descendants) inside [`instances`](/plugin-docs/api/InstanceNode/)
.
This makes operations like document traversal much faster.

##### info

Defaults to true in Figma Dev Mode and false in Figma and FigJam
