---
title: VectorPath
slug: VectorPath
source_file: plugin-api-VectorPath.html
source_url: https://www.figma.com/plugin-docs/api/VectorPath/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 1d251443e0375233
token_count: 250
---
# VectorPath

The `VectorPath` API is the recommended way to change the geometry of a vector object. While [vector networks](/plugin-docs/api/VectorNetwork/)
 are more powerful, they are significantly more complicated and very easy to get wrong. Paths are usually sufficient and much easier to work with. Creating a vector path looks like this:

```
// Set the geometry to a trianglenode.vectorPaths = [{ windingRule: "EVENODD", data: "M 0 100 L 100 100 L 50 0 Z",}]
```

## VectorPath

### windingRule: WindingRule | 'NONE' [readonly]

The winding rule for the path (same as in SVGs). This determines whether a given point in space is inside or outside the path.

[View more →](/plugin-docs/api/properties/VectorPath-windingrule/)

### data: string [readonly]

A series of path commands that encodes how to draw the path.

[View more →](/plugin-docs/api/properties/VectorPath-data/)

## VectorPaths

Vector nodes can be composed of multiple VectorPath(s).

```
type VectorPaths = ReadonlyArray
```