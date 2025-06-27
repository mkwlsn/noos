---
title: Complete Section
slug: ConnectorEndpoint-complete-section
source_file: plugin-api-ConnectorEndpoint.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorEndpoint/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6fc158b8ef6d8fd5
token_count: 439
chunk_title: Complete Section
chunk_slug: ConnectorEndpoint-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: ConnectorEndpoint.md
parent_slug: ConnectorEndpoint
char_count: 1534
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# ConnectorEndpoint

A connector endpoint represents one of two endpoints on a [ConnectorNode](/plugin-docs/api/ConnectorNode/).

```
// attached, magneted onto edge:{ // GUID of the node this attaches to endpointNodeId: string // Which side of the node it attaches to // Elbowed connectors may use all magnets besides CENTER // Straight connectors may use only CENTER or NONE magnets // The NONE magnet is automatically set when position is specified magnet: 'NONE' | 'AUTO' | 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT' | 'CENTER'} |// attached, fixed position on node:{ // GUID of the node this attaches to endpointNodeId: string // position relative to the attached node to adhere the endpoint position: { x: number, y: number }} |// unattached, fixed to canvas:{ // location on the canvas to position unattached endpoint position: { x: number, y: number }}
```There's an improved way to attach [straight connectors](/plugin-docs/api/ConnectorNode/#connectorlinetype) to nodes in FigJam with a new CENTER magnet. Starting in 2024, straight connectors will only be able to attach to CENTER and NONE magnets. The magnets for elbowed connectors will remain unchanged.

Attaching a straight connector endpoint to another node's CENTER magnet```
const shape = figma.createShapeWithText()const straightConnector = figma.createConnector()straightConnector.connectorLineType = 'STRAIGHT'// Setting a straight connector end endpoint magnet to shape's CENTER magnetstraightConnector.connectorEnd = { endpointNodeId: shape.id, magnet: 'CENTER',}
```
