---
title: PublishStatus
slug: PublishStatus
source_file: plugin-api-PublishStatus.html
source_url: https://www.figma.com/plugin-docs/api/PublishStatus/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 42e0cecc25857c83
token_count: 110
---
# PublishStatus

```
type PublishStatus = "UNPUBLISHED" | "CURRENT" | "CHANGED"
```Describes the status of elements that could be published to the team library, namely styles and components.

The possible values are:

- `"UNPUBLISHED"`: the element is not published to the team library
- `"CURRENT"`: the element is published and the published version matches the local version
- `"CHANGED"`: the element is published, but has local changes