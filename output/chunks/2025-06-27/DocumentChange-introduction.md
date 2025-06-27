---
title: Introduction
slug: DocumentChange-introduction
source_file: plugin-api-DocumentChange.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4a3b73197c738187
token_count: 76
chunk_title: Introduction
chunk_slug: DocumentChange-introduction
chunk_index: 0
chunk_of_total: 8
parent_file: DocumentChange.md
parent_slug: DocumentChange
char_count: 263
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - DocumentChange-id-string-origin-local-remote
  - DocumentChange-type-create-node-scenenode-removednode
  - DocumentChange-type-delete-node-scenenode-removednode
  - DocumentChange-node-scenenode-removednode
  - DocumentChange-type-stylecreate-style-basestyle-null
  - DocumentChange-type-styledelete-style-basestyle-null
  - DocumentChange-type-stylepropertychange-properties-styl
compiler: noos-figma
---

# DocumentChange

Figma has 6 types of document changes that we currently notify on.

```
type DocumentChange = | CreateChange | DeleteChange | PropertyChange | StyleCreateChange | StyleDeleteChange | StylePropertyChange
```

## DocumentChange (common properties)
