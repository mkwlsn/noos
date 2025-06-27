---
title: 'type: ''STYLE_CREATE'' + style: BaseStyle | null'
slug: DocumentChange-type-stylecreate-style-basestyle-null
source_file: plugin-api-DocumentChange.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: fdb15aeea68cefe8
token_count: 87
chunk_title: 'type: ''STYLE_CREATE'' + style: BaseStyle | null'
chunk_slug: DocumentChange-type-stylecreate-style-basestyle-null
chunk_index: 5
chunk_of_total: 8
parent_file: DocumentChange.md
parent_slug: DocumentChange
char_count: 304
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - DocumentChange-introduction
  - DocumentChange-id-string-origin-local-remote
  - DocumentChange-type-create-node-scenenode-removednode
  - DocumentChange-type-delete-node-scenenode-removednode
  - DocumentChange-node-scenenode-removednode
  - DocumentChange-type-styledelete-style-basestyle-null
  - DocumentChange-type-stylepropertychange-properties-styl
merged_titles:
  - 'type: ''STYLE_CREATE'''
  - 'style: BaseStyle | null'
compiler: noos-figma
---

The string literal "STYLE_CREATE" representing the type of document change this is. Always check the type before reading other properties.

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleDeleteChange

Emitted when a style has been removed from the document.
