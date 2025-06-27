---
title: Remarks
slug: nodes-insertchild-remarks
source_file: plugin-api-nodes-insertchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-insertchild/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0c5ec14c63023253
token_count: 97
chunk_title: Remarks
chunk_slug: nodes-insertchild-remarks
chunk_index: 2
chunk_of_total: 4
parent_file: nodes-insertchild.md
parent_slug: nodes-insertchild
char_count: 338
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-insertchild-introduction
  - nodes-insertchild-signature-parameters
  - nodes-insertchild-possible-error-cases
compiler: noos-figma
---

Reparenting nodes is subject to many restrictions. For example, some nodes cannot be moved, others would break the document if moved. Below are possible exceptions that can be thrown if the operation is invalid.

If this is called on an auto-layout frame, calling this function can cause this layer to be resized and children to be moved.
