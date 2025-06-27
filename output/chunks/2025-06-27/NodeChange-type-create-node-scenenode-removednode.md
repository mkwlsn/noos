---
title: 'type: ''CREATE'' + node: SceneNode | RemovedNode'
slug: NodeChange-type-create-node-scenenode-removednode
source_file: plugin-api-NodeChange.html
source_url: 'https://www.figma.com/plugin-docs/api/NodeChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: acf8b9d217835701
token_count: 148
chunk_title: 'type: ''CREATE'' + node: SceneNode | RemovedNode'
chunk_slug: NodeChange-type-create-node-scenenode-removednode
chunk_index: 1
chunk_of_total: 3
parent_file: NodeChange.md
parent_slug: NodeChange
char_count: 516
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - NodeChange-introduction-node-scenenode-removednode
  - NodeChange-type-delete-node-scenenode-removednode
merged_titles:
  - 'type: ''CREATE'''
  - 'node: SceneNode | RemovedNode'
compiler: noos-figma
---

The string literal "CREATE" representing the type of document change this is. Always check the type before reading other properties.

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## DeleteChange

Emitted when a node has been removed from the page. If a node with nested children is being removed from the page a `DeleteChange` will only be made for the highest level parent that was removed from the page.
