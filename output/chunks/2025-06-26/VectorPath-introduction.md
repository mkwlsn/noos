---
title: Introduction
slug: VectorPath-introduction
source_file: plugin-api-VectorPath.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorPath/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c462f0d8040dc433
token_count: 138
chunk_title: Introduction
chunk_slug: VectorPath-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: VectorPath.md
parent_slug: VectorPath
char_count: 482
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - VectorPath-windingrule-windingrule-none-readonly
compiler: noos-figma
---

# VectorPath

The `VectorPath` API is the recommended way to change the geometry of a vector object. While [vector networks](/plugin-docs/api/VectorNetwork/) are more powerful, they are significantly more complicated and very easy to get wrong. Paths are usually sufficient and much easier to work with. Creating a vector path looks like this:

```
// Set the geometry to a trianglenode.vectorPaths = [{ windingRule: "EVENODD", data: "M 0 100 L 100 100 L 50 0 Z",}]
```## VectorPath
