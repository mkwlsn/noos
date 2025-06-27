---
title: cornerSmoothing
slug: nodes-cornersmoothing
source_file: plugin-api-nodes-cornersmoothing.html
source_url: https://www.figma.com/plugin-docs/api/nodes-cornersmoothing/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: a528842774c993f4
token_count: 161
---
# cornerSmoothing

A value that lets you control how "smooth" the corners are. Ranges from 0 to 1.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SlideNode
- StarNode
- VectorNode

## Signature

### cornerSmoothing: number

## Remarks

A value of 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves. See [this post](https://www.figma.com/blog/desperately-seeking-squircles/) for the gory details!