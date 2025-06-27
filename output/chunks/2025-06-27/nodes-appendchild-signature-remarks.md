---
title: Signature + Remarks
slug: nodes-appendchild-signature-remarks
source_file: plugin-api-nodes-appendchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-appendchild/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 294a82d6160a0f42
token_count: 109
chunk_title: Signature + Remarks
chunk_slug: nodes-appendchild-signature-remarks
chunk_index: 1
chunk_of_total: 3
parent_file: nodes-appendchild.md
parent_slug: nodes-appendchild
char_count: 379
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-appendchild-introduction
  - nodes-appendchild-possible-error-cases
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### appendChild(child: SceneNode): void

Reparenting nodes is subject to many restrictions. For example, some nodes cannot be moved, others would break the document if moved. Below are possible exceptions that can be thrown if the operation is invalid.

If this is called on an auto-layout frame, calling this function can cause this layer to be resized and children to be moved.
