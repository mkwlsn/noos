---
title: createConnector
slug: figma-createconnector
source_file: plugin-api-figma-createconnector.html
source_url: https://www.figma.com/plugin-docs/api/figma-createconnector/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 73e998a913f7debb
token_count: 182
---
# createConnector

##### info

This API is only available in FigJam

Creates a new connector. The behavior is similar to using the `Shift-C` shortcut followed by a click.

## Signature

### createConnector(): ConnectorNode

## Remarks

By default, the new node has a width of 200, and is parented under `figma.currentPage`.

Add a connector between two stickies```
// Create two stickiesconst stickyLeft = figma.createSticky()stickyLeft.x = -200const stickyRight = figma.createSticky()stickyRight.x = 200// Connect the two stickiesconst connector = figma.createConnector()connector.connectorStart = { endpointNodeId: stickyLeft.id, magnet: 'AUTO'}connector.connectorEnd = { endpointNodeId: stickyRight.id, magnet: 'AUTO'}
```