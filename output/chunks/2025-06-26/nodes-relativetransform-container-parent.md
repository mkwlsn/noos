---
title: Container parent
slug: nodes-relativetransform-container-parent
source_file: plugin-api-nodes-relativetransform.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-relativetransform/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 70eafa7fe7880314
token_count: 429
chunk_title: Container parent
chunk_slug: nodes-relativetransform-container-parent
chunk_index: 2
chunk_of_total: 5
parent_file: nodes-relativetransform.md
parent_slug: nodes-relativetransform
char_count: 1501
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-relativetransform-introduction
  - nodes-relativetransform-relativetransform-transform-scale
  - nodes-relativetransform-skew
  - nodes-relativetransform-auto-layout-frames
compiler: noos-figma
---

The relative transform of a node is shown relative to its container parent, which includes canvas nodes, frame nodes, component nodes, and instance nodes. Just like in the properties panel, it is not relative to its direct parent if the parent is a group or a boolean operation.

Example 1: In the following hierarchy, the relative transform of `rectangle` is relative to `page` (which is just its position on the canvas).

```
page group rectangle
```Example 2: In the following hierarchy, the relative transform of `rectangle` is relative to `frame`.

```
page frame boolean operation rectangle
```One implication is that to calculate the absolute position of a node, you have to either use the [`absoluteTransform`](/plugin-docs/api/node-properties/#absolutetransform) property or multiply relative transform matrices while traversing up the node hierarchy while ignoring groups and boolean operations.

##### info

Why this complication? We do it this way because groups and boolean operations automatically resize to fit their children. While you can set the relative transform of a group to move it, it's a property derived from the position and size of its children.
If the relative transform was always relative to it’s immediate parent, you could get into confusing situations where moving a layer inside a group by setting the relative transform changes the position of the parent, which then requires changing the relative transform of the child in order to preserve its on-screen position!
