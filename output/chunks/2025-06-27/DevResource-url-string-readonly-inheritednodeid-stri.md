---
title: 'url: string [readonly] + inheritedNodeId?: string [readonly]'
slug: DevResource-url-string-readonly-inheritednodeid-stri
source_file: plugin-api-DevResource.html
source_url: 'https://www.figma.com/plugin-docs/api/DevResource/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: af07ce9d9fdb9939
token_count: 152
chunk_title: 'url: string [readonly] + inheritedNodeId?: string [readonly]'
chunk_slug: DevResource-url-string-readonly-inheritednodeid-stri
chunk_index: 0
chunk_of_total: 2
parent_file: DevResource.md
parent_slug: DevResource
char_count: 530
heading_level: h3
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - DevResource-nodeid-string
merged_titles:
  - 'url: string [readonly]'
  - 'inheritedNodeId?: string [readonly]'
compiler: noos-figma
---

The URL of the resource. This is considered the unique identifier of the resource.

`inheritedNodeId` is a field only relevant to links on `INSTANCE` nodes. If `inheritedNodeId` is defined, the link is inherited from a main component or a component set. If you want to edit or delete the inherited link, you will need to go to the main node to do so. For example:

```
const devResource = { ..., inheritedNodeId: '1:2' }const node = await figma.getNodeByIdAsync(devResource.inheritedNodeId)await node.editDevResourceAsync(...)
```
