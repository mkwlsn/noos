---
title: 'nodeId: string'
slug: DevResource-nodeid-string
source_file: plugin-api-DevResource.html
source_url: 'https://www.figma.com/plugin-docs/api/DevResource/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 043b580a58bc1cbe
token_count: 167
chunk_title: 'nodeId: string'
chunk_slug: DevResource-nodeid-string
chunk_index: 1
chunk_of_total: 2
parent_file: DevResource.md
parent_slug: DevResource
char_count: 582
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - DevResource-url-string-readonly-inheritednodeid-stri
compiler: noos-figma
---

The ID of the node that this link is attached to.

## Example usage

```
const node = figma.currentPage.selection[0]// Get related linkconst links = await node.getDevResourcesAsync()// Get related link from node and all of its childrenconst links = await node.getDevResourcesAsync({ includeChildren: true })// Add a related linkawait node.addDevResourceAsync('https://google.com')// Edit related linkawait node.editDevResourceAsync( 'https://google.com', { name: 'Hotels', url: 'https://hotels.com' })// Delete related linkawait node.deleteDevResourceAsync('https://hotels.com')
```
