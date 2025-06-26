---
title: RemovedNode
slug: RemovedNode
source_file: plugin-api-RemovedNode.html
source_url: https://www.figma.com/plugin-docs/api/RemovedNode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 84856c9d2aac3174
token_count: 108
---
# RemovedNode

An representation of a node that has been removed from the document. Can be part of a [DocumentChange](/plugin-docs/api/DocumentChange/).

## Properties

### removed: true [readonly]

`removed` is set to `true` to distinguish a deleted node from one that is on the document.

### type: NodeType [readonly]

The type of the node before it was removed from the document

### id: string [readonly]

The id of the node