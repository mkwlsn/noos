---
title: Introduction
slug: DocumentChange-introduction
source_file: plugin-api-DocumentChange.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentChange/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 7381b5975a40d521
token_count: 75
chunk_title: Introduction
chunk_slug: DocumentChange-introduction
chunk_index: 0
chunk_of_total: 8
parent_file: DocumentChange.md
parent_slug: DocumentChange
char_count: 261
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
```## DocumentChange (common properties)
