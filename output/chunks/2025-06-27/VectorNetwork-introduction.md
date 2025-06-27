---
title: Introduction
slug: VectorNetwork-introduction
source_file: plugin-api-VectorNetwork.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNetwork/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: cb1526617efc6c49
token_count: 499
chunk_title: Introduction
chunk_slug: VectorNetwork-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: VectorNetwork.md
parent_slug: VectorNetwork
char_count: 1744
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - VectorNetwork-regions-readonlyarray-readonly-x-number-
  - VectorNetwork-handlemirroring-handlemirroring-readonly
  - VectorNetwork-tangentstart-vector-readonly-tangentend-
compiler: noos-figma
---

# VectorNetwork

The `VectorNetwork` API is the advanced way to change the geometry of an object. For the simple (and recommended) way to specify geometry, please look at the [`VectorPath`](/plugin-docs/api/VectorPath/)
 definition instead.

Vector networks enable Figma to provide better ways of manipulating stroke geometry than other apps. They are essentially a superset of paths; a vector network can represent everything paths can represent while paths can’t represent everything a vector network represents.

While paths can only represent chains of segments, vector networks can represent whole graphs of segments. This means more than two segments can connect together at a point. This is more natural to edit (connect anything to anything else) and is useful for preserving caps and joins as the graph is edited.

Vector networks come in three parts: an array of vertices, an array of segments that index into the array of vertices, and an array of regions that index into the array of segments.

## Example

Here's the same geometry as the [triangle in the path example](/plugin-docs/api/VectorPath/)
 `M 0 100 L 100 100 L 50 0 Z`, in vector network representation:

```
node.vectorNetwork = { // The vertices of the triangle vertices: [ { x: 0, y: 100 }, { x: 100, y: 100 }, { x: 50, y: 0 }, ], // The edges of the triangle. 'start' and 'end' refer to indices in the vertices array. segments: [ { start: 0, tangentStart: { x: 0, y: 0 }, // optional end: 1, tangentEnd: { x: 0, y: 0 }, // optional }, { start: 1, end: 2, }, { start: 2, end: 0, }, ], // The loop that forms the triangle. Each loop is a // sequence of indices into the segments array. regions: [ { windingRule: "NONZERO", loops: [[0, 1, 2]] } ],}
```

## VectorNetwork
