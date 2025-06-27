---
title: 'handleMirroring?: HandleMirroring [readonly]'
slug: VectorNetwork-handlemirroring-handlemirroring-readonly
source_file: plugin-api-VectorNetwork.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNetwork/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 636bec66bbb04d1b
token_count: 210
chunk_title: 'handleMirroring?: HandleMirroring [readonly]'
chunk_slug: VectorNetwork-handlemirroring-handlemirroring-readonly
chunk_index: 2
chunk_of_total: 4
parent_file: VectorNetwork.md
parent_slug: VectorNetwork
char_count: 732
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - VectorNetwork-introduction
  - VectorNetwork-regions-readonlyarray-readonly-x-number-
  - VectorNetwork-tangentstart-vector-readonly-tangentend-
compiler: noos-figma
---

How two curve handles behave relative to one another. Defaults to the node's property if left unspecified.

## VectorSegment

Each segment has a start and an end vertex, referenced by index.

Segments represent both line segments and cubic spline segments. A line segment is just a cubic spline segment where both handles have a tangent of `{x: 0, y: 0}`, which are also the default values of `tangentStart` and `tangentEnd`.

As long as the stroke weight is non-zero, a stroke will appear for every segment in the vector network. Note that it does not matter which is the start handle and which is the end handle. Segments are non-directional graph edges.

Each segment must refer to a valid vertex index in both `start` and `end`.
