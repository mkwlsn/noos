---
title: Remarks
slug: nodes-numberoffixedchildren-remarks
source_file: plugin-api-nodes-numberoffixedchildren.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-numberoffixedchildren/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 33f4268c2ba7057c
token_count: 112
chunk_title: Remarks
chunk_slug: nodes-numberoffixedchildren-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: nodes-numberoffixedchildren.md
parent_slug: nodes-numberoffixedchildren
char_count: 390
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

In Figma, fixed children are always on top of scrolling (non-fixed) children. Despite the "Fix position when scrolling" checkbox in the UI, fixed layers are not represented as a boolean property on individual layers. Instead, what we really have are two sections of children inside each frame. These section headers are visible in the layers panel when a frame has at least one fixed child.
