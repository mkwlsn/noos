---
title: layoutAlign
slug: nodes-layoutalign
source_file: plugin-api-nodes-layoutalign.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutalign/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c0afd01be15f7dee
token_count: 463
---
# layoutAlign

Applicable only on direct children of auto-layout frames. Determines if the layer should stretch along the parent’s counter axis. Defaults to `“INHERIT”`.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

## Signature

### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

## Remarks

Changing this property will cause the `x`, `y`, `size`, and `relativeTransform` properties on this node to change, if applicable (inside an auto-layout frame).

- Setting `"STRETCH"` will make the node "stretch" to fill the width of the parent vertical auto-layout frame, or the height of the parent horizontal auto-layout frame excluding the frame's padding.
- If the current node is an auto layout frame (e.g. an auto layout frame inside a parent auto layout frame) if you set layoutAlign to `“STRETCH”` you should set the corresponding axis – either `primaryAxisSizingMode` or `counterAxisSizingMode` – to be`“FIXED”`. This is because an auto-layout frame cannot simultaneously stretch to fill its parent and shrink to hug its children.
- Setting `"INHERIT"` does not "stretch" the node.

##### caution

⚠️ Previously, layoutAlign also determined counter axis alignment of auto-layout frame children. Counter axis alignment is now set on the auto-layout frame itself through [`counterAxisAlignItems`](/plugin-docs/api/properties/nodes-counteraxisalignitems/). Note that this means all layers in an auto-layout frame must now have the same counter axis alignment. This means `"MIN"`, `"CENTER"`, and `"MAX"` are now deprecated values of `layoutAlign`.