---
title: VectorNetwork
slug: VectorNetwork
source_file: plugin-api-VectorNetwork.html
source_url: https://www.figma.com/plugin-docs/api/VectorNetwork/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 481c00d4cc4132fb
token_count: 1448
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

### vertices: ReadonlyArray [readonly]

Vertices are points in the graph.

### segments: ReadonlyArray [readonly]

Segments connect vertices.

### regions?: ReadonlyArray [readonly]

Regions are defined by segments and specify that an area is to be filled. Defaults to [].

## VectorVertex

Each vertex is a point in the graph, defined by its position.

### x: number [readonly]

x position of the vertex relative to the position of the node.

### y: number [readonly]

y position of the vertex relative to the position of the node.

### strokeCap?: StrokeCap [readonly]

Appearance of the end of a stroke. Defaults to the node's property if left unspecified.

### strokeJoin?: StrokeJoin [readonly]

Appearance of the join between two segments. Defaults to the node's property if left unspecified.

### cornerRadius?: number [readonly]

Corner radius at this vertex. Defaults to the node's property if left unspecified.

### handleMirroring?: HandleMirroring [readonly]

How two curve handles behave relative to one another. Defaults to the node's property if left unspecified.

## VectorSegment

Each segment has a start and an end vertex, referenced by index.

Segments represent both line segments and cubic spline segments. A line segment is just a cubic spline segment where both handles have a tangent of `{x: 0, y: 0}`, which are also the default values of `tangentStart` and `tangentEnd`.

As long as the stroke weight is non-zero, a stroke will appear for every segment in the vector network. Note that it does not matter which is the start handle and which is the end handle. Segments are non-directional graph edges.

Each segment must refer to a valid vertex index in both `start` and `end`.

### start: number [readonly]

The index of the vertex that starts this segment.

### end: number [readonly]

The index of the vertex that ends this segment.

### tangentStart?: Vector [readonly]

The tangent on the start side of this segment. Defaults to { x: 0, y: 0 }

### tangentEnd?: Vector [readonly]

The tangent on the end side of this segment. Defaults to { x: 0, y: 0 }

## VectorRegion

Each region is essentially the same data as a [`VectorPath`](/plugin-docs/api/VectorPath/)
; it has a winding rule and one or more loops. A region such as the fill of the letter "o" needs two loops, one for the outside and one for the inside. Each loop is an array of segment indices that specify the segments involved in the loop consecutively as they are encountered around the edge of the loop. Which segment the loop starts on is not important.

A vector network does not need to have any regions. If it does not, all enclosed space, if any, is filled.

If the vector network does have regions, then each region must contain at least one loop, each loop must contain at least one segment, and every segment in every loop must refer to a valid segment index. Additionally, the segments in each loop must form a connected continuous chain. I.e. they should be connected such that you can draw all segments of the loop, in the order they are defined, without lifting the pen and without tracing a segment more times than it is defined in the loop. Forks and gaps are not allowed. However, the order of the `start` and `end` points in the segments do not matter, i.e. the `end` vertex of one segment does not need to match the `start` vertex of the next segment in the loop, but can instead match the `end` vertex of that segment.

A region also may contain an array of `fills`, or a `fillStyleId` which uses the same syntax as the corresponding fields on nodes: ([`fills`](/plugin-docs/api/properties/nodes-fills/)
, [`fillStyleId`](/plugin-docs/api/properties/nodes-fillstyleid/)
).

### windingRule: WindingRule [readonly]

Winding rule for this region.

### loops: ReadonlyArray> [readonly]

List of loops, each of which is a list of indices of `VectorSegment`(s)

### fills?: ReadonlyArray [readonly]

Array of fill paints used on this region.

### fillStyleId?: string [readonly]

Style key of fill style applied to this region, if any.