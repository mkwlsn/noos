---
title: removed
slug: nodes-removed
source_file: plugin-api-nodes-removed.html
source_url: https://www.figma.com/plugin-docs/api/nodes-removed/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ede2b76f233376ee
token_count: 295
---
# removed

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

## Signature

### removed: boolean [readonly]

## Remarks

A node can be removed for any number of reasons. Some examples:

- Your plugin called node.remove() on it
- Someone else deleted the node using multiplayer
- The user triggered an undo action and the node was removed
- The user simply deleted the node
- You removed all children out of a group, and the group auto-deleted itself