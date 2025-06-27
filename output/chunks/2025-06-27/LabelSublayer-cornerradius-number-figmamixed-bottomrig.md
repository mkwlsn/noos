---
title: 'cornerRadius: number | figma.mixed + bottomRightRadius: number'
slug: LabelSublayer-cornerradius-number-figmamixed-bottomrig
source_file: plugin-api-LabelSublayer.html
source_url: 'https://www.figma.com/plugin-docs/api/LabelSublayer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f4c75df0ae66f9ba
token_count: 171
chunk_title: 'cornerRadius: number | figma.mixed + bottomRightRadius: number'
chunk_slug: LabelSublayer-cornerradius-number-figmamixed-bottomrig
chunk_index: 4
chunk_of_total: 5
parent_file: LabelSublayer.md
parent_slug: LabelSublayer
char_count: 598
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - LabelSublayer-introduction-tostring-string
  - LabelSublayer-parent-basenode-childrenmixin-null-reado
  - LabelSublayer-fills-readonlyarray-figmamixed
  - LabelSublayer-fillstyleid-string-figmamixed
merged_titles:
  - 'cornerRadius: number | figma.mixed'
  - 'bottomRightRadius: number'
compiler: noos-figma
---

The number of pixels to round the corners of the object by.

[View more →](/plugin-docs/api/properties/nodes-cornerradius/)

You can set individual corner radius of each of the four corners of a rectangle node or frame-like node. Similar to `cornerRadius`, these value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

Setting `cornerRadius` sets the property for all four corners. Setting these corners to different values makes `cornerRadius` return `mixed`.
