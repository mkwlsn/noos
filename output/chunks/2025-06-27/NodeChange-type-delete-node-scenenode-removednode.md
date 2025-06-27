---
title: 'type: ''DELETE'' + node: SceneNode | RemovedNode'
slug: NodeChange-type-delete-node-scenenode-removednode
source_file: plugin-api-NodeChange.html
source_url: 'https://www.figma.com/plugin-docs/api/NodeChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d6854907a647692a
token_count: 102
chunk_title: 'type: ''DELETE'' + node: SceneNode | RemovedNode'
chunk_slug: NodeChange-type-delete-node-scenenode-removednode
chunk_index: 2
chunk_of_total: 3
parent_file: NodeChange.md
parent_slug: NodeChange
char_count: 355
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - NodeChange-introduction-node-scenenode-removednode
  - NodeChange-type-create-node-scenenode-removednode
merged_titles:
  - 'type: ''DELETE'''
  - 'node: SceneNode | RemovedNode'
compiler: noos-figma
---

The string literal "DELETE" representing the type of document change this is. Always check the type before reading other properties.

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## PropertyChange

Emitted when a property of a node has changed.
