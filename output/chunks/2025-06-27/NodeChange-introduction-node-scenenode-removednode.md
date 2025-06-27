---
title: 'Introduction + node: SceneNode | RemovedNode'
slug: NodeChange-introduction-node-scenenode-removednode
source_file: plugin-api-NodeChange.html
source_url: 'https://www.figma.com/plugin-docs/api/NodeChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f0b42617b4555e74
token_count: 163
chunk_title: 'Introduction + node: SceneNode | RemovedNode'
chunk_slug: NodeChange-introduction-node-scenenode-removednode
chunk_index: 0
chunk_of_total: 3
parent_file: NodeChange.md
parent_slug: NodeChange
char_count: 568
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - NodeChange-type-create-node-scenenode-removednode
  - NodeChange-type-delete-node-scenenode-removednode
merged_titles:
  - Introduction
  - 'node: SceneNode | RemovedNode'
compiler: noos-figma
---

# NodeChange

Figma has three types of page node changes that we currently notify on.

```
type NodeChange = | CreateChange | DeleteChange | PropertyChange
```

## NodeChange (common properties)

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## CreateChange

Emitted when a node has been created in the page. If a node with nested children is being added to the page a `CreateChange` will only be made for the highest level parent that was added to the page.
