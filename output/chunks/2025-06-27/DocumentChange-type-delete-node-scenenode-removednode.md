---
title: 'type: ''DELETE'' + node: SceneNode | RemovedNode'
slug: DocumentChange-type-delete-node-scenenode-removednode
source_file: plugin-api-DocumentChange.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d6854907a647692a
token_count: 102
chunk_title: 'type: ''DELETE'' + node: SceneNode | RemovedNode'
chunk_slug: DocumentChange-type-delete-node-scenenode-removednode
chunk_index: 3
chunk_of_total: 8
parent_file: DocumentChange.md
parent_slug: DocumentChange
char_count: 355
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - DocumentChange-introduction
  - DocumentChange-id-string-origin-local-remote
  - DocumentChange-type-create-node-scenenode-removednode
  - DocumentChange-node-scenenode-removednode
  - DocumentChange-type-stylecreate-style-basestyle-null
  - DocumentChange-type-styledelete-style-basestyle-null
  - DocumentChange-type-stylepropertychange-properties-styl
merged_titles:
  - 'type: ''DELETE'''
  - 'node: SceneNode | RemovedNode'
compiler: noos-figma
---

The string literal "DELETE" representing the type of document change this is. Always check the type before reading other properties.

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## PropertyChange

Emitted when a property of a node has changed.
