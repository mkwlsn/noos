---
title: 'tangentStart?: Vector [readonly] + tangentEnd?: Vector [readonly]'
slug: VectorNetwork-tangentstart-vector-readonly-tangentend-
source_file: plugin-api-VectorNetwork.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNetwork/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 224efd9cc243b814
token_count: 500
chunk_title: 'tangentStart?: Vector [readonly] + tangentEnd?: Vector [readonly]'
chunk_slug: VectorNetwork-tangentstart-vector-readonly-tangentend-
chunk_index: 3
chunk_of_total: 4
parent_file: VectorNetwork.md
parent_slug: VectorNetwork
char_count: 1749
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - VectorNetwork-introduction
  - VectorNetwork-regions-readonlyarray-readonly-x-number-
  - VectorNetwork-handlemirroring-handlemirroring-readonly
merged_titles:
  - 'tangentStart?: Vector [readonly]'
  - 'tangentEnd?: Vector [readonly]'
compiler: noos-figma
---

The tangent on the start side of this segment. Defaults to { x: 0, y: 0 }

The tangent on the end side of this segment. Defaults to { x: 0, y: 0 }

## VectorRegion

Each region is essentially the same data as a [`VectorPath`](/plugin-docs/api/VectorPath/)
; it has a winding rule and one or more loops. A region such as the fill of the letter "o" needs two loops, one for the outside and one for the inside. Each loop is an array of segment indices that specify the segments involved in the loop consecutively as they are encountered around the edge of the loop. Which segment the loop starts on is not important.

A vector network does not need to have any regions. If it does not, all enclosed space, if any, is filled.

If the vector network does have regions, then each region must contain at least one loop, each loop must contain at least one segment, and every segment in every loop must refer to a valid segment index. Additionally, the segments in each loop must form a connected continuous chain. I.e. they should be connected such that you can draw all segments of the loop, in the order they are defined, without lifting the pen and without tracing a segment more times than it is defined in the loop. Forks and gaps are not allowed. However, the order of the `start` and `end` points in the segments do not matter, i.e. the `end` vertex of one segment does not need to match the `start` vertex of the next segment in the loop, but can instead match the `end` vertex of that segment.

A region also may contain an array of `fills`, or a `fillStyleId` which uses the same syntax as the corresponding fields on nodes: ([`fills`](/plugin-docs/api/properties/nodes-fills/)
, [`fillStyleId`](/plugin-docs/api/properties/nodes-fillstyleid/)
).
