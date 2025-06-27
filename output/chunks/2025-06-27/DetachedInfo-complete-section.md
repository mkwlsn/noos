---
title: Complete Section
slug: DetachedInfo-complete-section
source_file: plugin-api-DetachedInfo.html
source_url: 'https://www.figma.com/plugin-docs/api/DetachedInfo/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 80060d213725b808
token_count: 190
chunk_title: Complete Section
chunk_slug: DetachedInfo-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: DetachedInfo.md
parent_slug: DetachedInfo
char_count: 662
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# DetachedInfo

```
type DetachedInfo = { type: 'local' componentId: string} | { type: 'library' componentKey: string}
```Information about detached instances. If the node is detached from a local component (a component in the same file), `type` will show `local` and `componentId` will contain the ID of this component. If the node is detached from a library component, `type` will show `library` and `componentKey` will contain the key of this component. 

`detachedInfo` will be present even if the component from which the node was detached has been deleted. It will also be present even if the user doesn't have access to the file containing that component.
