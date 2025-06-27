---
title: 'relativeTransform: Transform + Scale'
slug: nodes-relativetransform-relativetransform-transform-scale
source_file: plugin-api-nodes-relativetransform.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-relativetransform/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b1b41ff7b8224e76
token_count: 256
chunk_title: 'relativeTransform: Transform + Scale'
chunk_slug: nodes-relativetransform-relativetransform-transform-scale
chunk_index: 1
chunk_of_total: 5
parent_file: nodes-relativetransform.md
parent_slug: nodes-relativetransform
char_count: 896
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-relativetransform-introduction
  - nodes-relativetransform-container-parent
  - nodes-relativetransform-skew
  - nodes-relativetransform-auto-layout-frames
merged_titles:
  - 'relativeTransform: Transform'
  - Scale
compiler: noos-figma
---

## Remarks

The `relativeTransform` is not used for scaling a node. The transform always has unit axes. That is, `sqrt(m00^2 + m10^2) == sqrt(m01^2 + m11^2) == 1`. In order to set the size of a node, use [`resize`](/plugin-docs/api/properties/nodes-resize/)
 or [`resizeWithoutConstraints`](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)
.

##### info

If you have a background in computer graphics, you may find it odd that we use the transform matrix in such a manner. This is because in 2D UI design, it's rare that you would want to scale the children when resizing a frame. And even if you did, it would be through more nuanced constraint settings that aren't captured by a transformation matrix.

Also, if nodes had both a `width` and a separate `m00` scale property, it would be confusing to the users which one they're changing, especially during interactions like dragging.
