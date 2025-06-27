---
title: Auto-layout frames
slug: nodes-relativetransform-auto-layout-frames
source_file: plugin-api-nodes-relativetransform.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-relativetransform/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 21b2bf73feb9bfb9
token_count: 71
chunk_title: Auto-layout frames
chunk_slug: nodes-relativetransform-auto-layout-frames
chunk_index: 4
chunk_of_total: 5
parent_file: nodes-relativetransform.md
parent_slug: nodes-relativetransform
char_count: 248
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-relativetransform-introduction
  - nodes-relativetransform-relativetransform-transform-scale
  - nodes-relativetransform-container-parent
  - nodes-relativetransform-skew
compiler: noos-figma
---

The translation components `m02` and `m12` of the transform matrix is automatically computed in children of auto-layout frames. Setting `relativeTransform` on those layers will ignore the translation components, but do keep the rotation components.
