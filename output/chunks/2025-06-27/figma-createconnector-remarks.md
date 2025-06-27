---
title: Remarks
slug: figma-createconnector-remarks
source_file: plugin-api-figma-createconnector.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createconnector/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dd526e43d63a608c
token_count: 140
chunk_title: Remarks
chunk_slug: figma-createconnector-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createconnector.md
parent_slug: figma-createconnector
char_count: 489
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-createconnector-introduction-signature
compiler: noos-figma
---

By default, the new node has a width of 200, and is parented under `figma.currentPage`.

Add a connector between two stickies```
// Create two stickiesconst stickyLeft = figma.createSticky()stickyLeft.x = -200const stickyRight = figma.createSticky()stickyRight.x = 200// Connect the two stickiesconst connector = figma.createConnector()connector.connectorStart = { endpointNodeId: stickyLeft.id, magnet: 'AUTO'}connector.connectorEnd = { endpointNodeId: stickyRight.id, magnet: 'AUTO'}
```
