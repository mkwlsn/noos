---
title: 'id: string + origin: ''LOCAL'' | ''REMOTE'''
slug: DocumentChange-id-string-origin-local-remote
source_file: plugin-api-DocumentChange.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a55d350350590dbb
token_count: 144
chunk_title: 'id: string + origin: ''LOCAL'' | ''REMOTE'''
chunk_slug: DocumentChange-id-string-origin-local-remote
chunk_index: 1
chunk_of_total: 8
parent_file: DocumentChange.md
parent_slug: DocumentChange
char_count: 502
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - DocumentChange-introduction
  - DocumentChange-type-create-node-scenenode-removednode
  - DocumentChange-type-delete-node-scenenode-removednode
  - DocumentChange-node-scenenode-removednode
  - DocumentChange-type-stylecreate-style-basestyle-null
  - DocumentChange-type-styledelete-style-basestyle-null
  - DocumentChange-type-stylepropertychange-properties-styl
merged_titles:
  - 'id: string'
  - 'origin: ''LOCAL'' | ''REMOTE'''
compiler: noos-figma
---

The id of the node / style that is subject to the document change. The same that is on `node.id` or `style.id`

Where the change originates from. If the change is 'LOCAL' it is from the user running the plugin and if it is 'REMOTE' it is from a different user in the file.

## CreateChange

Emitted when a node has been created in the document. If a node with nested children is being added to the document a `CreateChange` will only be made for the highest level parent that was added to the document.
