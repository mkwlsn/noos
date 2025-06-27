---
title: Complete Section
slug: Guide-complete-section
source_file: plugin-api-Guide.html
source_url: 'https://www.figma.com/plugin-docs/api/Guide/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8cb17f17df33c4f4
token_count: 78
chunk_title: Complete Section
chunk_slug: Guide-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: Guide.md
parent_slug: Guide
char_count: 271
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Guide

```
interface Guide { readonly axis: "X" | "Y" readonly offset: number}
```Guides are either a horizontal (Y-axis) or vertical straight (X-axis) line. The offset determines its position relative to the node it is stored in (usually either the canvas or a frame).
