---
title: Complete Section
slug: PublishStatus-complete-section
source_file: plugin-api-PublishStatus.html
source_url: 'https://www.figma.com/plugin-docs/api/PublishStatus/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 42e0cecc25857c83
token_count: 126
chunk_title: Complete Section
chunk_slug: PublishStatus-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: PublishStatus.md
parent_slug: PublishStatus
char_count: 440
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# PublishStatus

```
type PublishStatus = "UNPUBLISHED" | "CURRENT" | "CHANGED"
```Describes the status of elements that could be published to the team library, namely styles and components.

The possible values are:

- `"UNPUBLISHED"`: the element is not published to the team library
- `"CURRENT"`: the element is published and the published version matches the local version
- `"CHANGED"`: the element is published, but has local changes
